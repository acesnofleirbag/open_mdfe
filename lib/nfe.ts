import { SefazNFE } from "./@types/layouts/nfe";
import { XMLClient } from "./adapters/xml";
import { NFEValidator } from "./core/validator";

export class NFE {
    private payload: SefazNFE;
    private XML: XMLClient;

    constructor(payload: SefazNFE) {
        this.payload = NFEValidator.safeParse(payload);
        this.XML = new XMLClient();
    }

    toXML(): string {
        return this.XML.obj2xml(this.payload);
    }

    async toObject(xml: string): Promise<SefazNFE> {
        return this.XML.xml2obj<SefazNFE>(xml);
    }
}
