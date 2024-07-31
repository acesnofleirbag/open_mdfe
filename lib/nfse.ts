import { SefazNFSe } from "./@types/layouts/nfse/nfse";
import { XMLClient } from "./adapters/xml";
import { NFSeValidator } from "./core/validator/nfse";

export class NFSe {
    private payload: SefazNFSe;
    private XML: XMLClient;

    constructor(payload: SefazNFSe) {
        this.payload = NFSeValidator.parse(payload);
        this.XML = new XMLClient();
    }

    static fmtServiceCode(serviceCode: string) {
        return serviceCode.replace(/(\d)(\d{3})$/, "$1.$2").replace(/(?=(\d{2})+(\D))\B/g, ".");
    }

    static JSON_SafeParse<T = any>(payload: any) {
        try {
            return JSON.parse(payload) as T;
        } catch {
            return null;
        }
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
