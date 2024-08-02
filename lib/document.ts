import { XMLClient } from "./adapters/xml";

export class Document<T extends Record<any, any> = any> {
    protected payload: T;
    protected XML: XMLClient;

    constructor(payload: T, validator: any) {
        // FIXME: make a interface to uncople
        this.payload = validator.parse(payload);
        this.XML = new XMLClient();
    }

    toXML(): string {
        return this.XML.obj2xml(this.payload);
    }

    toObject() {
        return this.payload;
    }

    async XMLToObject(xml: string): Promise<T> {
        return this.XML.xml2obj<T>(xml);
    }
}
