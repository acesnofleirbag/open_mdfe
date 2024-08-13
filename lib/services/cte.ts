import { AxiosRequestConfig } from "axios";
import { HTTPClient } from "../core/ports/httpClient";
import { AxiosHttpClient } from "../adapters/httpClient";
import { UFIssuer } from "../@types/layouts/general";
import { FetchRegisterRequest, FetchRegisterResponse } from "../@types/layouts/nfe/registerFetching";
import { XMLClient } from "../adapters/xml";
import { CTeWebServices } from "../core/static/webServices";
import { AuthorizerNotFoundError } from "../errors/authorizerNotFoundError";
import { Signer } from "../signer";
import { Cert } from "../@types/cert";
import {
    TransportAuthorizationRequest,
    TransportAuthorizationResponse,
} from "../@types/layouts/cte/transportAuthorization";
import {
    OtherServicesAuthorizationRequest,
    OtherServicesAuthorizationResponse,
} from "../@types/layouts/cte/otherServicesAuthorization";
import { GTVeAuthorizationRequest, GTVeAuthorizationResponse } from "../@types/layouts/cte/gtveAuthorization";
import { CTeProtocolFetchingRequest, CTeProtocolFetchingResponse } from "../@types/layouts/cte/protocolFetching";
import { CTeServiceStatusRequest, CTeServiceStatusResponse } from "../@types/layouts/cte/serviceStatus";
import { CTeEventReceptionRequest, CTeEventReceptionResponse } from "../@types/layouts/cte/eventReception";
import { EnvironmentIdentifier } from "../@types/layouts/general";

export class CTeService {
    private httpClient: HTTPClient<AxiosRequestConfig>;
    private XML: XMLClient;
    private signer: Signer;

    constructor(
        private readonly environment: EnvironmentIdentifier,
        private readonly UF: UFIssuer,
        readonly cert: Cert,
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
                        $: { xmlns: `http://www.portalfiscal.inf.br/cte/wsdl/${webServiceName}` },
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

    async requestTransportAuthorization(
        payload: TransportAuthorizationRequest,
    ): Promise<TransportAuthorizationResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeRecepcaoSincV4");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "infCte");

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
        const signedEnvelope = await this.signer.signXML_X509(envelope, "");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).OSReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async requestGTVeAuthorization(payload: GTVeAuthorizationRequest): Promise<GTVeAuthorizationResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeRecepcaoGTVeV4");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "infCte");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).GTVeReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async fetchCTE(payload: CTeProtocolFetchingRequest): Promise<CTeProtocolFetchingResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeConsultaV4");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "consSitCTe");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).protocolFetching[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    async checkServiceStatus(payload: CTeServiceStatusRequest): Promise<CTeServiceStatusResponse> {
        const environment = this.getEnvironment();

        const envelope = this.makeSoapEnvelope(payload, "CTeStatusServicoV4");
        const signedEnvelope = await this.signer.signXML_X509(envelope, "consStatServCTe");

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
        const signedEnvelope = await this.signer.signXML_X509(envelope, "infEvento");

        const { data } = await this.httpClient.post(
            this.getAuthorizerByUF(this.UF).eventReception[environment],
            signedEnvelope,
        );

        return this.XML.xml2obj(data);
    }

    // TODO: specific events (page: 58)
}
