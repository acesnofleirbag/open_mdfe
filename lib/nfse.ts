import { SefazNFSe } from "./@types/layouts/nfse/nfse";
import { XMLClient } from "./adapters/xml";
import { NFSeValidator } from "./core/validator/nfse";

export class NFSe {
    private payload: SefazNFSe;
    private XML: XMLClient;

    constructor(payload: SefazNFSe) {
        // FIXME(@@@)
        // @ts-ignore
        this.payload = NFSeValidator.parse(payload);
        this.XML = new XMLClient();
    }

    toXML(): string {
        return this.XML.obj2xml(this.payload);
    }

    toObject() {
        return this.payload;
    }

    async XMLToObject(xml: string): Promise<SefazNFSe> {
        return this.XML.xml2obj<SefazNFSe>(xml);
    }
}
