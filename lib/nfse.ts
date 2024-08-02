import { SefazNFSe } from "./@types/layouts/nfse/nfse";
import { NFSeABRASF_Validator } from "./core/validator/abrasf";
import { NFSeValidator } from "./core/validator/nfse";
import { Document } from "./document";

export class NFSe extends Document<SefazNFSe> {
    constructor(payload: SefazNFSe) {
        super(payload, NFSeValidator);
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
}

export class NFSeABRASF extends Document<any> {
    constructor(payload: any) {
        super(payload, NFSeABRASF_Validator);
    }
}
