import { Axios, AxiosRequestConfig } from "axios";
import { HTTPClient } from "../core/ports/httpClient";
import { Agent } from "https";
import { NotImplementedError } from "../errors/notImplementedError";
import { Cert } from "../@types/cert";
import { readFileSync } from "fs";
import { CA } from "../core/static/ca";

export enum HttpClientMode {
    SOAP,
    REST,
}

export class AxiosHttpClient implements HTTPClient<AxiosRequestConfig> {
    private client: Axios;
    private mode: HttpClientMode;

    constructor(cert: Cert, mode: HttpClientMode = HttpClientMode.SOAP) {
        this.mode = mode;
        this.client = new Axios({
            timeout: 10000,
            headers: {
                "Content-Type":
                    mode === HttpClientMode.SOAP ? "application/soap+xml; chartset=utf-8" : "application/json",
            },
            httpsAgent: new Agent({
                rejectUnauthorized: false,
                pfx: readFileSync(cert.pfx),
                passphrase: cert.pass,
                ca: CA,
            }),
        });
    }

    async get(URL: string, params: AxiosRequestConfig): Promise<any> {
        return this.client.get(URL, params);
    }

    async post(URL: string, payload: any, params?: AxiosRequestConfig): Promise<any> {
        const body = this.mode === HttpClientMode.SOAP ? payload : JSON.stringify(payload);

        return this.client.post(URL, body, params);
    }

    async put(_URL: string, _payload: any, _params?: AxiosRequestConfig): Promise<any> {
        throw new NotImplementedError();
    }

    async delete(_URL: string, _params?: AxiosRequestConfig): Promise<any> {
        throw new NotImplementedError();
    }
}
