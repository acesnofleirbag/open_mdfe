import { Builder, parseStringPromise } from "xml2js";
import { XML } from "../core/ports/xml";

export class XMLClient implements XML {
    private client: Builder;

    constructor() {
        this.client = new Builder({
            headless: true,
            renderOpts: { pretty: false },
            xmldec: { version: "1.0", encoding: "UTF-8" },
        });
    }

    async xml2obj<T>(payload: string): Promise<T> {
        return parseStringPromise(payload, {
            trim: true,
            normalize: false,
            explicitArray: false,
        });
    }

    obj2xml(payload: Record<any, any>): string {
        return this.client.buildObject({
            ...payload,
        });
    }
}
