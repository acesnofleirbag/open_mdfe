import { Builder, parseStringPromise } from "xml2js";
import { XML } from "../core/ports/xml";

export class XMLClient implements XML {
    private client: Builder;

    constructor() {
        this.client = new Builder();
    }

    async xml2obj<T>(payload: string): Promise<T> {
        return parseStringPromise(payload, { normalize: false, includeWhiteChars: true });
    }

    obj2xml(payload: Record<any, any>): string {
        return this.client.buildObject({
            ...payload,
        });
    }
}
