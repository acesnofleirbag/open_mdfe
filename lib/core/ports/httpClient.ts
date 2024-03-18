import { AxiosRequestConfig } from "axios";

export interface HTTPClient {
    get(URL: string, params?: AxiosRequestConfig): Promise<any>;

    post(): any;

    put(): any;

    delete(): any;
}
