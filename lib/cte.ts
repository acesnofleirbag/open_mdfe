import { SefazCTE } from "./@types/layouts/cte/cte";
import { XMLClient } from "./adapters/xml";
import { CTeValidator } from "./core/validator/cte";

export class CTE {
    private payload: SefazCTE;
    private XML: XMLClient;

    constructor(payload: SefazCTE) {
        this.payload = CTeValidator.parse(payload);
        this.XML = new XMLClient();
    }

    toXML(): string {
        return this.XML.obj2xml(this.payload);
    }

    toObject() {
        return this.payload;
    }

    async XMLToObject(xml: string): Promise<SefazCTE> {
        return this.XML.xml2obj<SefazCTE>(xml);
    }
}
