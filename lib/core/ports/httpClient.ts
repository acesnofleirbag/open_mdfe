export interface HTTPClient<T> {
    get(URL: string, params?: T): Promise<any>;

    post(URL: string, payload: any, params?: T): Promise<any>;

    put(URL: string, payload: any, params?: T): Promise<any>;

    delete(URL: string, params?: T): Promise<any>;
}
