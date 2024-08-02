import { SefazNFe } from "./@types/layouts/nfe/nfe";
import { AccessKey } from "./accessKey";
import { NFeValidator } from "./core/validator/nfe";
import { Document } from "./document";

export class NFe extends Document<SefazNFe> {
    constructor(payload: SefazNFe) {
        NFe.assignAccessKey(payload);

        super(payload, NFeValidator);
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

    static assignAccessKey(payload: SefazNFe) {
        const accessKey = AccessKey.fromNFe(payload);

        payload["$"].Id = "NFe" + accessKey.getValue();
        payload.ide.cDV = accessKey.calculateVerifyingDigit().toString();
    }
}
