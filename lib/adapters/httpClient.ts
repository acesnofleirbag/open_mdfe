import { Axios, AxiosRequestConfig } from "axios";
import { HTTPClient } from "../core/ports/httpClient";
import { Agent } from "https";
import { NotImplementedError } from "../errors/notImplementedError";
import { Cert } from "../@types/cert";
import { readFileSync } from "fs";
import { CA } from "../core/static/ca";

export class AxiosHttpClient implements HTTPClient<AxiosRequestConfig> {
    private client: Axios;

    constructor(cert: Cert) {
        this.client = new Axios({
            timeout: 10000,
            headers: {
                "Content-Type": "text/xml;chartset=utf-8",
            },
            httpsAgent: new Agent({
                rejectUnauthorized: false,
                pfx: readFileSync(cert.pfx),
                passphrase: cert.pass,
                ca: CA,
            }),
        });
    }

    async get(_URL: string, _params: AxiosRequestConfig): Promise<any> {
        throw new NotImplementedError();
    }

    async post(URL: string, payload: any, params?: AxiosRequestConfig): Promise<any> {
        return this.client.post(URL, payload, params);
    }

    async put(_URL: string, _payload: any, _params?: AxiosRequestConfig): Promise<any> {
        throw new NotImplementedError();
    }

    async delete(_URL: string, _params?: AxiosRequestConfig): Promise<any> {
        throw new NotImplementedError();
    }
}
