import { AxiosRequestConfig } from "axios";
import { HTTPClient } from "../core/ports/httpClient";
import { XMLClient } from "../adapters/xml";
import { Signer } from "../signer";
import { EnvironmentIdentifier, UFCodeIBGE, UFIssuer } from "../@types/layouts/general";
import { Cert } from "../@types/cert";
import { AxiosHttpClient } from "../adapters/httpClient";
import { NFeWebServices } from "../core/static/webServices";
import { AuthorizerNotFoundError } from "../errors/authorizerNotFoundError";
import { ContingencyAuthorizerNotFoundError } from "../errors/contingencyAuthorizerNotFoundError";
import { AuthorizationRequest, AuthorizationResponse } from "../@types/layouts/nfe/authorization";
import { WebServiceActions } from "../core/static/actions";
import { AuthorizationResultRequest, AuthorizationResultResponse } from "../@types/layouts/nfe/authorizationResult";
import { NFeProtocolFetchingRequest, NFeProtocolFetchingResponse } from "../@types/layouts/nfe/protocolFetching";
import { UselessRequest, UselessResponse } from "../@types/layouts/nfe/useless";
import { NFeServiceStatusRequest, NFeServiceStatusResponse } from "../@types/layouts/nfe/serviceStatus";
import { FetchRegisterRequest, FetchRegisterResponse } from "../@types/layouts/nfe/registerFetching";
import { DFeDistributionRequest, DFeDistributionResponse } from "../@types/layouts/nfe/dfeDistribution";
import { EventReceptionRequest, EventReceptionResponse } from "../@types/layouts/nfe/eventReception";
import { CancelRequest, CancelResponse } from "../@types/layouts/nfe/cancelEvent";
import { FixLetterRequest, FixLetterResponse } from "../@types/layouts/nfe/fixLetterEvent";

export class NFeService {
    private httpClient: HTTPClient<AxiosRequestConfig>;
    private XML: XMLClient;
    private signer: Signer;

    constructor(
        private readonly environment: EnvironmentIdentifier,
        private readonly UF: UFIssuer,
        cert: Cert,
    ) {
        this.httpClient = new AxiosHttpClient(cert);
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
                        cUF: UFCodeIBGE[this.UF],
                    },
                },
                "soap12:Body": {
                    nfeDadosMsg: {
                        $: { xmlns: `http://www.portalfiscal.inf.br/nfe/wsdl/${webServiceName}` },
                        ...payload,
                    },
                },
            },
        };

        return this.XML.obj2xml(document);
    }

    async checkCertificateExpirationTime() {
        return this.signer.checkExpirationTime();
    }

    async requestAuthorization(payload: AuthorizationRequest): Promise<AuthorizationResponse> {
        const wsName = "NFeAutorizacao4";
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, wsName);
        const signedEnvelope = await this.signer.signXML_X509(envelope, "infNFe");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
            {
                headers: {
                    SOAPAction: `http://www.portalfiscal.inf.br/nfe/wsdl/${wsName}/${WebServiceActions.authorization}`,
                },
            },
        );

        const res = await this.XML.xml2obj<any>(data);

        return res["soap:Envelope"]["soap:Body"].nfeResultMsg;
    }

    async checkAuthorization(payload: AuthorizationResultRequest): Promise<AuthorizationResultResponse> {
        const environment = this.getEnvironment();

        const wsName = "NFeRetAutorizacao4";
        const envelope = this.makeSoapEnvelope(payload, wsName);
        const signedEnvelope = await this.signer.signXML_X509(envelope, "consReciNFe");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorizationResult[environment],
            signedEnvelope,
            {
                headers: {
                    SOAPAction: `http://www.portalfiscal.inf.br/nfe/wsdl/${wsName}/${WebServiceActions.authorizationResult}`,
                },
            },
        );

        const res = await this.XML.xml2obj<any>(data);

        return res["soap:Envelope"]["soap:Body"].nfeResultMsg;
    }

    async fetchNFe(payload: NFeProtocolFetchingRequest): Promise<NFeProtocolFetchingResponse> {
        const environment = this.getEnvironment();

        const wsName = "NFeConsultaProtocolo4";
        const envelope = this.makeSoapEnvelope(payload, wsName);

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).protocolFetching[environment],
            envelope,
            {
                headers: {
                    SOAPAction: `http://www.portalfiscal.inf.br/nfe/wsdl/${wsName}/${WebServiceActions.protocolFetching}`,
                },
            },
        );

        const res = await this.XML.xml2obj<any>(data);

        return res["soap:Envelope"]["soap:Body"].nfeResultMsg;
    }

    async makeUseless(payload: UselessRequest): Promise<UselessResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NfeInutilizacao4");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async checkServiceStatus(payload: NFeServiceStatusRequest): Promise<NFeServiceStatusResponse> {
        const environment = this.getEnvironment();

        const wsName = "NFeStatusServico4";
        const envelope = this.makeSoapEnvelope(payload, wsName);

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).serviceStatus[environment],
            envelope,
            {
                headers: {
                    SOAPAction: `http://www.portalfiscal.inf.br/nfe/wsdl/${wsName}/${WebServiceActions.serviceStatus}`,
                },
            },
        );

        const res = await this.XML.xml2obj<any>(data);

        return res["soap:Envelope"]["soap:Body"].nfeResultMsg;
    }

    async fetchRegister(payload: FetchRegisterRequest): Promise<FetchRegisterResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NfeConsultaCadastro");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async distributeDFE(payload: DFeDistributionRequest): Promise<DFeDistributionResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NFeDistribuicaoDFe");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "distDFeInt");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async registerEvent(payload: EventReceptionRequest): Promise<EventReceptionResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NFeRecepcaoEvento");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "infEvento");

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
        const signedEnvelope = await this.signer.signXML_X509(envelope, "chNFeRef");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).eventReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async sendFixLetter(payload: FixLetterRequest): Promise<FixLetterResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NFeRecepcaoEvento");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "xCondUso");

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

        const envelope = this.makeSoapEnvelope(payload, "");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "");

        const { data } = await this.httpClient.post(
            this.getContingencyAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    requestExtension(): void {}

    assignTransporter(): void {}
}
