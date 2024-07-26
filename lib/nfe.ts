import { SefazNFE } from "./@types/layouts/nfe/nfe";
import { AccessKey } from "./accessKey";
import { XMLClient } from "./adapters/xml";
import { NFeValidator } from "./core/validator/nfe";

export class NFE {
    private payload: SefazNFE;
    private XML: XMLClient;

    constructor(payload: SefazNFE) {
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

    private assignAccessKey(payload: SefazNFE) {
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

    async XMLToObject(xml: string): Promise<SefazNFE> {
        return this.XML.xml2obj<SefazNFE>(xml);
    }
}
