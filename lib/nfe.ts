import { SefazNFe } from "./@types/layouts/nfe/nfe";
import { AccessKey } from "./accessKey";
import { XMLClient } from "./adapters/xml";
import { NFeValidator } from "./core/validator/nfe";

export class NFe {
    private payload: SefazNFe;
    private XML: XMLClient;

    constructor(payload: SefazNFe) {
        this.assignAccessKey(payload);
        this.payload = NFeValidator.parse(payload);
        this.XML = new XMLClient();
    }

    static genNumericCode() {
        const size = 8;
        const chars = "0123456789";

        let res = "";

        for (let i = 0; i < size; i++) {
            res += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return res;
    }

    private assignAccessKey(payload: SefazNFe) {
        const accessKey = AccessKey.fromNFe(payload);

        payload["$"].Id = "NFe" + accessKey.getValue();
        payload.ide.cDV = accessKey.calculateVerifyingDigit().toString();
    }

    toXML(): string {
        return this.XML.obj2xml(this.payload);
    }

    toObject() {
        return this.payload;
    }

    async XMLToObject(xml: string): Promise<SefazNFe> {
        return this.XML.xml2obj<SefazNFe>(xml);
    }
}
