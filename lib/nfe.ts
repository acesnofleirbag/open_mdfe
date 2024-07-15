import { SefazNFE } from "./@types/layouts/nfe/nfe";
import { XMLClient } from "./adapters/xml";
import { NFeValidator } from "./core/validator/nfe";

export class NFE {
    private payload: SefazNFE;
    private XML: XMLClient;

    constructor(payload: SefazNFE) {
        this.payload = NFeValidator.parse(payload);
        this.XML = new XMLClient();
    }

    toXML(): string {
        return this.XML.obj2xml(this.payload);
    }

    toObject() {
        return this.payload;
    }

    async XMLToObject(xml: string): Promise<SefazNFE> {
        return this.XML.xml2obj<SefazNFE>(xml);
    }
}
