import { Axios, AxiosRequestConfig } from "axios";
import { HTTPClient } from "../core/ports/httpClient";

export class AxiosHttpClient implements HTTPClient<AxiosRequestConfig> {
    private client: Axios;

    constructor() {
        this.client = new Axios({
            headers: {
                "Content-Type": "text/xml",
            },
        });
    }

    async get(URL: string, params: AxiosRequestConfig): Promise<any> {
        return this.client.get(URL, params);
    }

    async post(_URL: string, _payload: any, _params?: AxiosRequestConfig): Promise<any> {}

    async put(_URL: string, _payload: any, _params?: AxiosRequestConfig): Promise<any> {}

    async delete(_URL: string, _params?: AxiosRequestConfig): Promise<any> {}
}
