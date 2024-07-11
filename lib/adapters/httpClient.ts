import { Axios, AxiosRequestConfig } from "axios";
import { HTTPClient } from "../core/ports/httpClient";
import { Agent } from "https";
import { Env } from "../core/environments";
import { NotImplementedError } from "../errors/notImplementedError";

export class AxiosHttpClient implements HTTPClient<AxiosRequestConfig> {
    private client: Axios;

    constructor() {
        this.client = new Axios({
            headers: {
                "Content-Type": "text/xml",
            },
        });

        if (Env.get("__DEV__")) {
            this.client.defaults.httpsAgent = new Agent({
                rejectUnauthorized: false,
            });
        }
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
