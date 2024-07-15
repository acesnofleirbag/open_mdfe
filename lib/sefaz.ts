import { AxiosRequestConfig } from "axios";
import { CTeSefazOperations, NFeSefazOperations } from "./@types/operations";
import { HTTPClient } from "./core/ports/httpClient";
import { AxiosHttpClient } from "./adapters/httpClient";
import { UFIssuer } from "./@types/layouts/general";
import { AuthorizationResultRequest, AuthorizationResultResponse } from "./@types/layouts/nfe/authorizationResult";
import { AuthorizationRequest, AuthorizationResponse } from "./@types/layouts/nfe/authorization";
import { UselessRequest, UselessResponse } from "./@types/layouts/nfe/useless";
import { NFeProtocolFetchingRequest, NFeProtocolFetchingResponse } from "./@types/layouts/nfe/protocolFetching";
import { NFeServiceStatusRequest, NFeServiceStatusResponse } from "./@types/layouts/nfe/serviceStatus";
import { FetchRegisterRequest, FetchRegisterResponse } from "./@types/layouts/nfe/registerFetching";
import { DFeDistributionRequest, DFeDistributionResponse } from "./@types/layouts/nfe/dfeDistribution";
import { EventReceptionRequest, EventReceptionResponse } from "./@types/layouts/nfe/eventReception";
import { CancelRequest, CancelResponse } from "./@types/layouts/nfe/cancelEvent";
import { FixLetterRequest, FixLetterResponse } from "./@types/layouts/nfe/fixLetterEvent";
import { XMLClient } from "./adapters/xml";
import { NFeWebServices, CTeWebServices } from "./core/static/webServices";
import { ContingencyAuthorizerNotFoundError } from "./errors/contingencyAuthorizerNotFoundError";
import { AuthorizerNotFoundError } from "./errors/authorizerNotFoundError";
import { Signer } from "./signer";
import { Cert } from "./@types/cert";
import { EnvironmentConflictError } from "./errors/environmentConflict";
import {
    TransportAuthorizationRequest,
    TransportAuthorizationResponse,
} from "./@types/layouts/cte/transportAuthorization";
import {
    OtherServicesAuthorizationRequest,
    OtherServicesAuthorizationResponse,
} from "./@types/layouts/cte/otherServicesAuthorization";
import { GTVeAuthorizationRequest, GTVeAuthorizationResponse } from "./@types/layouts/cte/gtveAuthorization";
import { CTeProtocolFetchingRequest, CTeProtocolFetchingResponse } from "./@types/layouts/cte/protocolFetching";
import { CTeServiceStatusRequest, CTeServiceStatusResponse } from "./@types/layouts/cte/serviceStatus";
import { CTeEventReceptionRequest, CTeEventReceptionResponse } from "./@types/layouts/cte/eventReception";
import { EnvironmentIdentifier } from "./@types/layouts/general";

export class NFeSEFAZ implements NFeSefazOperations {
    private httpClient: HTTPClient<AxiosRequestConfig>;
    private XML: XMLClient;
    private signer: Signer;

    constructor(
        private readonly environment: EnvironmentIdentifier,
        private readonly UF: UFIssuer,
        readonly cert: Cert,
    ) {
        this.httpClient = new AxiosHttpClient();
        this.XML = new XMLClient();
        this.signer = new Signer(cert);
    }

    private getEnvironment() {
        switch (this.environment) {
            case EnvironmentIdentifier.PRODUCTION:
                return "production";
            case EnvironmentIdentifier.HOMOLOGATION:
                return "homologation";
        }
    }

    private getAuthorizerByUF(UF: UFIssuer) {
        switch (UF) {
            case UFIssuer.AM:
                return NFeWebServices.AM;
            case UFIssuer.GO:
                return NFeWebServices.GO;
            case UFIssuer.MT:
                return NFeWebServices.MT;
            case UFIssuer.MS:
                return NFeWebServices.MS;
            case UFIssuer.MG:
                return NFeWebServices.MG;
            case UFIssuer.PR:
                return NFeWebServices.PR;
            case UFIssuer.RS:
                return NFeWebServices.RS;
            case UFIssuer.SP:
                return NFeWebServices.SP;
            case UFIssuer.AC:
            case UFIssuer.AL:
            case UFIssuer.AP:
            case UFIssuer.BA:
            case UFIssuer.CE:
            case UFIssuer.DF:
            case UFIssuer.ES:
            case UFIssuer.MA:
            case UFIssuer.PA:
            case UFIssuer.PB:
            case UFIssuer.PE:
            case UFIssuer.PI:
            case UFIssuer.RJ:
            case UFIssuer.RN:
            case UFIssuer.RO:
            case UFIssuer.RR:
            case UFIssuer.SC:
            case UFIssuer.SE:
            case UFIssuer.TO:
                return NFeWebServices.SVRS;
            default:
                throw new AuthorizerNotFoundError();
        }
    }

    private getContingencyAuthorizerByUF(UF: UFIssuer) {
        switch (UF) {
            case UFIssuer.AC:
            case UFIssuer.AL:
            case UFIssuer.AP:
            case UFIssuer.DF:
            case UFIssuer.ES:
            case UFIssuer.MG:
            case UFIssuer.PB:
            case UFIssuer.RJ:
            case UFIssuer.RN:
            case UFIssuer.RO:
            case UFIssuer.RR:
            case UFIssuer.RS:
            case UFIssuer.SC:
            case UFIssuer.SE:
            case UFIssuer.SP:
            case UFIssuer.TO:
                return NFeWebServices["SVC-AN"];
            case UFIssuer.AM:
            case UFIssuer.BA:
            case UFIssuer.CE:
            case UFIssuer.GO:
            case UFIssuer.MA:
            case UFIssuer.MS:
            case UFIssuer.MT:
            case UFIssuer.PA:
            case UFIssuer.PE:
            case UFIssuer.PI:
            case UFIssuer.PR:
                return NFeWebServices["SVC-RS"];
            default:
                throw new ContingencyAuthorizerNotFoundError();
        }
    }

    private makeSoapEnvelope(payload: any, webServiceName: string) {
        const document = {
            "soap12:Envelope": {
                $: {
                    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                    "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                    "xmlns:soap12": "http://www.w3.org/2003/05/soap-envelope",
                },
                "soap12:Header": {
                    nfeCabecMsg: {
                        $: {
                            xmlns: `http://www.portalfiscal.inf.br/nfe/wsdl/${webServiceName}`,
                        },
                        versaoDados: "4.00",
                        cUF: this.UF,
                    },
                },
                "soap12:Body": {
                    nfeDadosMsg: {
                        $: { xmlns: `http://portalfiscal.inf.br/nfe/wsdl/${webServiceName}` },
                        ...payload,
                    },
                },
            },
        };

        return this.XML.obj2xml(document);
    }

    async requestAuthorization(payload: AuthorizationRequest): Promise<AuthorizationResponse> {
        if (payload.enviNFe.NFe.some((nfe) => nfe.infNFE.ide.tpAmb !== this.environment)) {
            throw new EnvironmentConflictError();
        }

        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NFeAutorizacao4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "infNFE");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async checkBatchAuthorization(payload: AuthorizationResultRequest): Promise<AuthorizationResultResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "@@@");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async fetchNFE(payload: NFeProtocolFetchingRequest): Promise<NFeProtocolFetchingResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "@@@");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async makeUseless(payload: UselessRequest): Promise<UselessResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NfeInutilizacao4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async checkServiceStatus(payload: NFeServiceStatusRequest): Promise<NFeServiceStatusResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NfeStatusServico4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "consStatServ");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).serviceStatus[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async fetchRegister(payload: FetchRegisterRequest): Promise<FetchRegisterResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NfeConsultaCadastro");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async distributeDFE(payload: DFeDistributionRequest): Promise<DFeDistributionResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NFeDistribuicaoDFe");
        const signedEnvelope = this.signer.signXML_X509(envelope, "distDFeInt");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async registerEvent(payload: EventReceptionRequest): Promise<EventReceptionResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NFeRecepcaoEvento");
        const signedEnvelope = this.signer.signXML_X509(envelope, "infEvento");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).eventReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    // TODO: maybe the schema is wrong
    async cancel(payload: CancelRequest): Promise<CancelResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NFeRecepcaoEvento");
        const signedEnvelope = this.signer.signXML_X509(envelope, "chNFeRef");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).eventReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async sendFixLetter(payload: FixLetterRequest): Promise<FixLetterResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NFeRecepcaoEvento");
        const signedEnvelope = this.signer.signXML_X509(envelope, "xCondUso");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).eventReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    // TODO: more actions on page 112
    manifestRecipient(): void {}

    async generateEPEC(payload: any): Promise<any> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "@@@");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getContingencyAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    requestExtension(): void {}

    assignTransporter(): void {}
}

export class CTeSEFAZ implements CTeSefazOperations {
    private httpClient: HTTPClient<AxiosRequestConfig>;
    private XML: XMLClient;
    private signer: Signer;

    constructor(
        private readonly environment: EnvironmentIdentifier,
        private readonly UF: UFIssuer,
        readonly cert: Cert,
    ) {
        this.httpClient = new AxiosHttpClient();
        this.XML = new XMLClient();
        this.signer = new Signer(cert);
    }

    private getEnvironment() {
        switch (this.environment) {
            case EnvironmentIdentifier.PRODUCTION:
                return "production";
            case EnvironmentIdentifier.HOMOLOGATION:
                return "homologation";
        }
    }

    private getAuthorizerByUF(UF: UFIssuer) {
        switch (UF) {
            case UFIssuer.MT:
                return CTeWebServices.MT;
            case UFIssuer.MS:
                return CTeWebServices.MS;
            case UFIssuer.MG:
                return CTeWebServices.MG;
            case UFIssuer.PR:
                return CTeWebServices.PR;
            case UFIssuer.RS:
                return CTeWebServices.RS;
            case UFIssuer.SP:
                return CTeWebServices.SP;
            case UFIssuer.AP:
            case UFIssuer.PE:
            case UFIssuer.RR:
                return CTeWebServices.SVSP;
            case UFIssuer.AC:
            case UFIssuer.AL:
            case UFIssuer.AM:
            case UFIssuer.BA:
            case UFIssuer.CE:
            case UFIssuer.DF:
            case UFIssuer.ES:
            case UFIssuer.GO:
            case UFIssuer.MA:
            case UFIssuer.PA:
            case UFIssuer.PB:
            case UFIssuer.PI:
            case UFIssuer.RJ:
            case UFIssuer.RN:
            case UFIssuer.RO:
            case UFIssuer.SC:
            case UFIssuer.SE:
            case UFIssuer.TO:
                return CTeWebServices.SVRS;
            default:
                throw new AuthorizerNotFoundError();
        }
    }

    private makeSoapEnvelope(payload: any, webServiceName: string) {
        const document = {
            "soap12:Envelope": {
                $: {
                    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                    "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                    "xmlns:soap12": "http://www.w3.org/2003/05/soap-envelope",
                },
                "soap12:Header": {
                    nfeCabecMsg: {
                        $: {
                            xmlns: `http://www.portalfiscal.inf.br/cte/wsdl/${webServiceName}`,
                        },
                        versaoDados: "4.00",
                        cUF: this.UF,
                    },
                },
                "soap12:Body": {
                    cteDadosMsg: {
                        $: { xmlns: `http://portalfiscal.inf.br/cte/wsdl/${webServiceName}` },
                        ...payload,
                    },
                },
            },
        };

        return this.XML.obj2xml(document);
    }

    async requestTransportAuthorization(
        payload: TransportAuthorizationRequest,
    ): Promise<TransportAuthorizationResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeRecepcaoSincV4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "infCte");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).SincReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async requestOtherServicesAuthorization(
        payload: OtherServicesAuthorizationRequest,
    ): Promise<OtherServicesAuthorizationResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeRecepcaoOSV4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).OSReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async requestGTVeAuthorization(payload: GTVeAuthorizationRequest): Promise<GTVeAuthorizationResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeRecepcaoGTVeV4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).GTVeReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async fetchCTE(payload: CTeProtocolFetchingRequest): Promise<CTeProtocolFetchingResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeConsultaV4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).protocolFetching[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async checkServiceStatus(payload: CTeServiceStatusRequest): Promise<CTeServiceStatusResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeStatusServicoV4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).serviceStatus[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async fetchRegister(_payload: FetchRegisterRequest): Promise<FetchRegisterResponse> {
        // TODO: this service is a NFe implementation
        return 1 as any;
    }

    async registerEvent(payload: CTeEventReceptionRequest): Promise<CTeEventReceptionResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeRecepcaoEventoV4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).eventReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    // TODO: specific events (page: 58)
}
