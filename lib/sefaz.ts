import { AxiosRequestConfig } from "axios";
import { SefazOperations } from "./@types/operations";
import { HTTPClient } from "./core/ports/httpClient";
import { AxiosHttpClient } from "./adapters/httpClient";
import { EnvironmentIdentifier, UFIssuer } from "./@types/layouts/nfe";
import { AuthorizationResultRequest, AuthorizationResultResponse } from "./@types/layouts/authorizationResult";
import { AuthorizationRequest, AuthorizationResponse } from "./@types/layouts/authorization";
import { UselessRequest, UselessResponse } from "./@types/layouts/useless";
import { ProtocolFetchingRequest, ProtocolFetchingResponse } from "./@types/layouts/protocolFetching";
import { ServiceStatusRequest, ServiceStatusResponse } from "./@types/layouts/serviceStatus";
import { FetchRegisterRequest, FetchRegisterResponse } from "./@types/layouts/registerFetching";
import { DFeDistributionRequest, DFeDistributionResponse } from "./@types/layouts/dfeDistribution";
import { EventReceptionRequest, EventReceptionResponse } from "./@types/layouts/eventReception";
import { CancelRequest, CancelResponse } from "./@types/layouts/cancelEvent";
import { FixLetterRequest, FixLetterResponse } from "./@types/layouts/fixLetterEvent";
import { XMLClient } from "./adapters/xml";
import { WebServices } from "./core/static/webServices";
import { ContingencyAuthorizerNotFoundError } from "./errors/contingencyAuthorizerNotFoundError";
import { AuthorizerNotFoundError } from "./errors/authorizerNotFoundError";
import { Signer } from "./signer";
import { Cert } from "./@types/cert";
import { EnvironmentConflictError } from "./errors/environmentConflict";

export class SEFAZ implements SefazOperations {
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
                return WebServices.AM;
            case UFIssuer.GO:
                return WebServices.GO;
            case UFIssuer.MT:
                return WebServices.MT;
            case UFIssuer.MS:
                return WebServices.MS;
            case UFIssuer.MG:
                return WebServices.MG;
            case UFIssuer.PR:
                return WebServices.PR;
            case UFIssuer.RS:
                return WebServices.RS;
            case UFIssuer.SP:
                return WebServices.SP;
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
            case UFIssuer.SE:
            case UFIssuer.TO:
                return WebServices.SVRS;
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
                return WebServices["SVC-AN"];
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
                return WebServices["SVC-RS"];
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

    async fetchNFE(payload: ProtocolFetchingRequest): Promise<ProtocolFetchingResponse> {
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

    async checkServiceStatus(payload: ServiceStatusRequest): Promise<ServiceStatusResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "NfeStatusServico4");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async fetchRegister(payload: FetchRegisterRequest): Promise<FetchRegisterResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "@@@");
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
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async registerEvent(payload: EventReceptionRequest): Promise<EventReceptionResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "@@@");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    // TODO: maybe the schema is wrong
    async cancel(payload: CancelRequest): Promise<CancelResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "@@@");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async sendFixLetter(payload: FixLetterRequest): Promise<FixLetterResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "@@@");
        const signedEnvelope = this.signer.signXML_X509(envelope, "@@@");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).authorization[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    // TODO: more actions on page 112
    manifestRecipient(): void {}

    generateEPEC(): void {}

    requestExtension(): void {}

    assignTransporter(): void {}
}
