import { AxiosRequestConfig } from "axios";
import { HTTPClient } from "../../core/ports/httpClient";
import { AxiosHttpClient, HttpClientMode } from "../../adapters/httpClient";
import { XMLClient } from "../../adapters/xml";
import { Signer } from "../../signer";
import { Cert } from "../../@types/cert";
import { gzip } from "zlib";
import { NFSe_AuthorizationRequest, NFSe_AuthorizationResponse } from "../../@types/layouts/nfse/authorization";
import { NFSe } from "../../nfse";

export class NFSeService {
    // NOTE: <https://www.nfse.gov.br/swagger/contribuintesissqn/>
    private httpClient: HTTPClient<AxiosRequestConfig>;
    private XML: XMLClient;
    private signer: Signer;

    constructor(cert: Cert) {
        this.httpClient = new AxiosHttpClient(cert, HttpClientMode.REST);
        this.XML = new XMLClient();
        this.signer = new Signer(cert);
    }

    private makeSoapEnvelope(payload: any) {
        const document = {
            "soap12:Envelope": {
                $: {
                    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                    "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                    "xmlns:soap12": "http://www.w3.org/2003/05/soap-envelope",
                },
                "soap12:Body": {
                    NFSe: {
                        $: { versao: "1.00", xmlns: "http://www.sped.fazenda.gov.br/nfse" },
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

    async getDANFSe(accessKey: string): Promise<unknown | null> {
        const { data } = await this.httpClient.get("https://sefin.nfse.gov.br/sefinnacional/" + accessKey);

        return NFSe.JSON_SafeParse(data);
    }

    async distribuiteDFe(NSU: string): Promise<unknown | null> {
        const { data } = await this.httpClient.get("https://adn.nfse.gov.br/contribuinte/DFe/" + NSU);

        return NFSe.JSON_SafeParse(data);
    }

    async getAccessKeyByDPS(DPS: string): Promise<unknown | null> {
        const { data } = await this.httpClient.get("https://sefin.nfse.gov.br/sefinnacional/" + DPS);

        return NFSe.JSON_SafeParse(data);
    }

    async registerEvent(payload: any, accessKey: string): Promise<unknown | null> {
        const envelope = this.makeSoapEnvelope(payload);
        const signedEnvelope = await this.signer.signXML_X509(envelope, "");

        const gzipEnvelope = await new Promise<Buffer>((resolve, reject) => {
            gzip(signedEnvelope, function (err, buffer) {
                if (err) {
                    reject(err);
                }

                resolve(buffer);
            });
        });

        const { data } = await this.httpClient.post(
            "https://sefin.nfse.gov.br/sefinnacional/nfse/" + accessKey + "/eventos",
            {
                pedidoRegistroEventoXmlGZipB64: gzipEnvelope.toString("base64"),
            },
        );

        return NFSe.JSON_SafeParse(data);
    }

    async getEventByAccessKey(accessKey: string): Promise<unknown | null> {
        const { data } = await this.httpClient.get(
            "https://sefin.nfse.gov.br/sefinnacional/nfse/" + accessKey + "/eventos",
        );

        return NFSe.JSON_SafeParse(data);
    }

    async getEventByEventType(accessKey: string, eventType: string): Promise<unknown | null> {
        const { data } = await this.httpClient.get(
            "https://sefin.nfse.gov.br/sefinnacional/nfse/" + accessKey + "/eventos/" + eventType,
        );

        return NFSe.JSON_SafeParse(data);
    }

    async getEventByEventSequentialNumber(
        accessKey: string,
        eventType: string,
        sequentialNumber: string,
    ): Promise<unknown | null> {
        const { data } = await this.httpClient.get(
            "https://sefin.nfse.gov.br/sefinnacional/nfse/" +
                accessKey +
                "/eventos/" +
                eventType +
                "/" +
                sequentialNumber,
        );

        return NFSe.JSON_SafeParse(data);
    }

    async requestAuthorization(payload: NFSe_AuthorizationRequest): Promise<NFSe_AuthorizationResponse | null> {
        const envelope = this.makeSoapEnvelope(payload);
        let signedEnvelope = await this.signer.signXML_X509(envelope, "infDPS");
        signedEnvelope = await this.signer.signXML_X509(signedEnvelope, "infNFSe");

        const gzipEnvelope = await new Promise<Buffer>((resolve, reject) => {
            gzip(signedEnvelope, function (err, buffer) {
                if (err) {
                    reject(err);
                }

                resolve(buffer);
            });
        });

        const { data } = await this.httpClient.post("https://sefin.nfse.gov.br/sefinnacional/nfse", {
            dpsXmlGZipB64: gzipEnvelope.toString("base64"),
        });

        return NFSe.JSON_SafeParse<NFSe_AuthorizationResponse>(data);
    }

    async getByAccessKey(accessKey: string): Promise<unknown> {
        const { data } = await this.httpClient.get("https://sefin.nfse.gov.br/sefinnacional/nfse/" + accessKey);

        return NFSe.JSON_SafeParse(data);
    }

    async getParameterizedISSQN_Aliquot(
        districtCode: string,
        serviceCode: string,
        competence: string,
    ): Promise<unknown | null> {
        const { data } = await this.httpClient.get(
            "https://sefin.nfse.gov.br/sefinnacional/parametros_municipais/" +
                districtCode +
                "/" +
                NFSe.fmtServiceCode(serviceCode) +
                "/" +
                competence +
                "/aliquota",
        );

        return NFSe.JSON_SafeParse(data);
    }

    async getAliquotHistory(districtCode: string, serviceCode: string): Promise<unknown | null> {
        const { data } = await this.httpClient.get(
            "https://sefin.nfse.gov.br/sefinnacional/parametros_municipais/" +
                districtCode +
                "/" +
                NFSe.fmtServiceCode(serviceCode) +
                "/historicoaliquotas",
        );

        return NFSe.JSON_SafeParse(data);
    }

    async getAgreementParams(districtCode: string): Promise<unknown | null> {
        const { data } = await this.httpClient.get(
            "https://sefin.nfse.gov.br/sefinnacional/parametros_municipais/" + districtCode + "/convenio",
        );

        return NFSe.JSON_SafeParse(data);
    }

    async getSpecialRegimeParams(
        districtCode: string,
        serviceCode: string,
        competence: string,
    ): Promise<unknown | null> {
        const { data } = await this.httpClient.get(
            "https://sefin.nfse.gov.br/sefinnacional/parametros_municipais/" +
                districtCode +
                "/" +
                NFSe.fmtServiceCode(serviceCode) +
                "/" +
                competence +
                "/regimes_especiais",
        );

        return NFSe.JSON_SafeParse(data);
    }

    async getISSQN_RetentionParams(districtCode: string, competence: string): Promise<unknown | null> {
        const { data } = await this.httpClient.get(
            "https://sefin.nfse.gov.br/sefinnacional/parametros_municipais/" +
                districtCode +
                "/" +
                competence +
                "/retencoes",
        );

        return NFSe.JSON_SafeParse(data);
    }

    async getBenefitNumberParams(
        districtCode: string,
        benefitNumber: string,
        competence: string,
    ): Promise<unknown | null> {
        const { data } = await this.httpClient.get(
            "https://sefin.nfse.gov.br/sefinnacional/parametros_municipais/" +
                districtCode +
                "/" +
                benefitNumber +
                "/" +
                competence +
                "/beneficio",
        );

        return NFSe.JSON_SafeParse(data);
    }
}
