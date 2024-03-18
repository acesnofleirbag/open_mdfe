import { AccessKey } from "./accessKey";
import { createHash } from "crypto";
import { TechnicalResponsible } from "./@types/structure";
import { XMLClient } from "./adapters/xml";

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

    genTechnicalResponsibleInfo(infos: TechnicalResponsible) {
        return this.XML.obj2xml({
            infRespTec: {
                CNPJ: infos.CNPJ,
                contato: infos.contact,
                email: infos.email,
                fone: infos.phone,
                idCSRT: infos.idCSRT,
                hashCSRT: this.genHash(),
            },
        });
    }
}
