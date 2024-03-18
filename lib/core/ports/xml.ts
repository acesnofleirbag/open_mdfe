export interface XML {
    xml2obj<T>(payload: string): Promise<T>;

    obj2xml(payload: Record<any, any>): string;
}
