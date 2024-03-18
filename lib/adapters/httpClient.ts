import { Axios, AxiosRequestConfig } from "axios";

export class AxiosHttpClient implements AxiosHttpClient {
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

    post() {}

    put() {}

    delete() {}
}
