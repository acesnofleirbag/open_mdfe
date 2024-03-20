import { AccessKey } from "./accessKey";
import { createHash } from "crypto";
import { XMLClient } from "./adapters/xml";
import { TechnicalResponsible } from "./@types/layouts/nfe";

// CSRT (Código de Segurança do Responsável Técnico)
export class CSRT {
    private XML: XMLClient;

    private accessKey: AccessKey;
    private CSRT: string;

    constructor(accessKey: AccessKey, CSRT: string) {
        this.accessKey = accessKey;
        this.CSRT = CSRT;

        this.XML = new XMLClient();
    }

    genHash(): string {
        const concat = this.CSRT + this.accessKey.getValue();
        const sha1 = createHash("sha1").update(concat).digest("hex");

        return Buffer.from(sha1, "hex").toString("base64");
    }

    genTechnicalResponsibleInfo(payload: TechnicalResponsible) {
        return this.XML.obj2xml({
            infRespTec: {
                CNPJ: payload.CNPJ,
                contato: payload.xContato,
                email: payload.email,
                fone: payload.fone,
                idCSRT: payload.idCSRT,
                hashCSRT: this.genHash(),
            },
        });
    }
}
