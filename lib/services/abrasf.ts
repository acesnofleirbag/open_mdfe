import { AxiosRequestConfig } from "axios";
import { HTTPClient } from "../core/ports/httpClient";
import { XMLClient } from "../adapters/xml";
import { Signer } from "../signer";
import { AxiosHttpClient } from "../adapters/httpClient";
import { Cert } from "../@types/cert";
import {
    NFSeABRASF_SendBatchRPS_Request,
    NFSeABRASF_SendBatchRPS_Response,
} from "../@types/layouts/nfse/abrasf/sendBatchRPS";
import { NFSeABRASF_GenerateRequest, NFSeABRASF_GenerateResponse } from "../@types/layouts/nfse/abrasf/generate";
import { NFSeABRASF_CancelRequest, NFSeABRASF_CancelResponse } from "../@types/layouts/nfse/abrasf/cancel";
import { NFSeABRASF_ReplaceRequest, NFSeABRASF_ReplaceResponse } from "../@types/layouts/nfse/abrasf/replace";
import {
    NFSeABRASF_FetchBatchRPS_Request,
    NFSeABRASF_FetchBatchRPS_Response,
} from "../@types/layouts/nfse/abrasf/fetchBatchRPS";
import {
    NFSeABRASF_FetchNFSeRPS_Request,
    NFSeABRASF_FetchNFSeRPS_Response,
} from "../@types/layouts/nfse/abrasf/fetchNFSeRPS";
import {
    NFSeABRASF_FetchProvidedServicesRequest,
    NFSeABRASF_FetchProvidedServicesResponse,
} from "../@types/layouts/nfse/abrasf/fetchProvidedServices";
import {
    NFSeABRASF_FetchTakenServicesRequest,
    NFSeABRASF_FetchTakenServicesResponse,
} from "../@types/layouts/nfse/abrasf/fetchTakenServices";
import {
    NFSeABRASF_FetchNFSeRangeRequest,
    NFSeABRASF_FetchNFSeRangeResponse,
} from "../@types/layouts/nfse/abrasf/fetchNFSeRange";
import { ABRASF_WebServices } from "../core/static/webServices";
import { DebugUtility } from "../utils/debug";

export class ABRASF_Service {
    private httpClient: HTTPClient<AxiosRequestConfig>;
    private XML: XMLClient;
    private signer: Signer;
    private districtCode: string;

    constructor(
        readonly cert: Cert,
        districtCode: string,
    ) {
        this.httpClient = new AxiosHttpClient(cert);
        this.XML = new XMLClient();
        this.signer = new Signer(cert);

        this.districtCode = districtCode;
    }

    private makeSoapEnvelope(wrapper: string, request: string, payload: any) {
        const document = {
            "soap12:Envelope": {
                $: {
                    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                    "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                    "xmlns:soap12": "http://www.w3.org/2003/05/soap-envelope",
                },
                "soap12:Body": {
                    [wrapper]: {
                        [request]: {
                            nfseCabecMsg: {
                                cabecalho: {
                                    $: { xmlns: "http://www.abrasf.org.br/nfse.xsd" },
                                    versaoDados: "2.04",
                                },
                            },
                            nfseDadosMsg: {
                                $: { xmlns: "http://www.abrasf.org.br/nfse.xsd" },
                                ...payload,
                            },
                        },
                    },
                },
            },
        };

        return this.XML.obj2xml(document);
    }

    async checkCertificateExpirationTime() {
        return this.signer.checkExpirationTime();
    }

    async sendBatchRPS(payload: NFSeABRASF_SendBatchRPS_Request): Promise<NFSeABRASF_SendBatchRPS_Response> {
        const envelope = this.makeSoapEnvelope(
            "EnviarLoteRps",
            "EnviarLoteRpsRequest",
            payload,
        );
        const signedEnvelope = this.signer.signXML_X509(envelope, "LoteRps");

        const { data } = await this.httpClient.post(ABRASF_WebServices[this.districtCode], signedEnvelope, {
            headers: {
                SOAPAction: "http://nfse.abrasf.org.br/EnviarLoteRps",
            },
        });

        const res = await this.XML.xml2obj<any>(data);

        return res;
    }

    async generate(payload: NFSeABRASF_GenerateRequest): Promise<NFSeABRASF_GenerateResponse> {
        const envelope = this.makeSoapEnvelope(
            "GerarNfse",
            "GerarNfseRequest",
            payload,
        );
        const signedEnvelope = this.signer.signXML_X509(envelope, "InfDeclaracaoPrestacaoServico");

        const { data } = await this.httpClient.post(ABRASF_WebServices[this.districtCode], signedEnvelope, {
            headers: {
                SOAPAction: "http://nfse.abrasf.org.br/GerarNfse",
            },
        });

        const res = await this.XML.xml2obj<any>(data);

        return res;
    }

    async cancel(payload: NFSeABRASF_CancelRequest): Promise<NFSeABRASF_CancelResponse> {
        const envelope = this.makeSoapEnvelope(
            "CancelarNfse",
            "CancelarNfseRequest",
            payload,
        );
        const signedEnvelope = this.signer.signXML_X509(envelope, "InfPedidoCancelamento");

        const { data } = await this.httpClient.post(ABRASF_WebServices[this.districtCode], signedEnvelope, {
            headers: {
                SOAPAction: "http://nfse.abrasf.org.br/CancelarNfse",
            },
        });

        const res = await this.XML.xml2obj<any>(data);

        return res;
    }

    async replace(payload: NFSeABRASF_ReplaceRequest): Promise<NFSeABRASF_ReplaceResponse> {
        const envelope = this.makeSoapEnvelope(
            "SubstituirNfse",
            "SubstituirNfse",
            payload,
        );
        const signedEnvelope = this.signer.signXML_X509(envelope, "SubstituicaoNfse");

        const { data } = await this.httpClient.post(ABRASF_WebServices[this.districtCode], signedEnvelope, {
            headers: {
                SOAPAction: "http://nfse.abrasf.org.br/SubstituirNfse",
            },
        });

        const res = await this.XML.xml2obj<any>(data);

        return res;
    }

    async fetchBatchRPS(payload: NFSeABRASF_FetchBatchRPS_Request): Promise<NFSeABRASF_FetchBatchRPS_Response> {
        const envelope = this.makeSoapEnvelope(
            "ConsultarLoteRps",
            "ConsultarLoteRpsRequest",
            payload,
        );

        const { data } = await this.httpClient.post(ABRASF_WebServices[this.districtCode], envelope, {
            headers: {
                SOAPAction: "http://nfse.abrasf.org.br/ConsultarLoteRps",
            },
        });

        const res = await this.XML.xml2obj<any>(data);

        return res;
    }

    async fetchNFSeRPS(payload: NFSeABRASF_FetchNFSeRPS_Request): Promise<NFSeABRASF_FetchNFSeRPS_Response> {
        const envelope = this.makeSoapEnvelope(
            "ConsultarNfseRps",
            "ConsultarNfseRpsRequest",
            payload,
        );

        const { data } = await this.httpClient.post(ABRASF_WebServices[this.districtCode], envelope, {
            headers: {
                SOAPAction: "http://nfse.abrasf.org.br/ConsultarNfseRps",
            },
        });

        const res = await this.XML.xml2obj<any>(data);

        return res;
    }

    async fetchProvidedServices(
        payload: NFSeABRASF_FetchProvidedServicesRequest,
    ): Promise<NFSeABRASF_FetchProvidedServicesResponse> {
        const envelope = this.makeSoapEnvelope(
            "ConsultarNfseServicoPrestado",
            "ConsultarNfseServicoPrestadoRequest",
            payload,
        );

        // @@@: HERE
        DebugUtility.write("/tmp/XML", envelope);

        const { data } = await this.httpClient.post(ABRASF_WebServices[this.districtCode], envelope, {
            headers: {
                SOAPAction: "http://nfse.abrasf.org.br/ConsultarNfseServicoPrestado",
            },
        });

        const res = await this.XML.xml2obj<any>(data);

        return res;
    }

    async fetchTakenServices(
        payload: NFSeABRASF_FetchTakenServicesRequest,
    ): Promise<NFSeABRASF_FetchTakenServicesResponse> {
        const envelope = this.makeSoapEnvelope(
            "ConsultarNfseServicoTomado",
            "ConsultarNfseServicoTomadoRequest",
            payload,
        );

        const { data } = await this.httpClient.post(ABRASF_WebServices[this.districtCode], envelope, {
            headers: {
                SOAPAction: "http://nfse.abrasf.org.br/ConsultarNfseServicoTomado",
            },
        });

        const res = await this.XML.xml2obj<any>(data);

        return res;
    }

    async fetchNFSeRange(payload: NFSeABRASF_FetchNFSeRangeRequest): Promise<NFSeABRASF_FetchNFSeRangeResponse> {
        const envelope = this.makeSoapEnvelope(
            "ConsultarNfseFaixa",
            "ConsultarNfseFaixaRequest",
            payload,
        );

        const { data } = await this.httpClient.post(ABRASF_WebServices[this.districtCode], envelope, {
            headers: {
                SOAPAction: "http://nfse.abrasf.org.br/ConsultarNfseFaixa",
            },
        });

        const res = await this.XML.xml2obj<any>(data);

        return res;
    }
}
