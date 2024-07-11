import { readFileSync, writeFileSync } from "node:fs";
import * as Handlebars from "handlebars";
import { SefazNFE } from "./@types/layouts/nfe";

export class Print {
    generateDANFE(NFe: SefazNFE) {
        const payload = NFe.infNFE;

        const layout = readFileSync(__dirname + "/core/static/danfe.hbs");
        const template = Handlebars.compile(layout.toString());
        writeFileSync(
            "/tmp/DANFE.html",
            template({
                nfe: {
                    serie: payload.ide.serie,
                    numero: payload.ide.nNF,
                    naturezaOperacao: payload.ide.natOp,
                    key: "",
                    type: payload.ide.tpNF,
                },
                emitente: {
                    nome: payload.emit.xNome,
                    ie: payload.emit.IE,
                    fone: payload.emit.enderEmit.fone,
                    email: "",
                    cnpj: "",
                    endereco: {
                        logradouro: payload.emit.enderEmit.xLgr,
                        bairro: payload.emit.enderEmit.xBairro,
                        cep: payload.emit.enderEmit.CEP,
                        municipio: payload.emit.enderEmit.xMun,
                        uf: payload.emit.enderEmit.UF,
                    },
                },
                destinatario: {
                    nome: payload.dest?.xNome,
                    documento: "",
                    ie: payload.dest?.IE,
                    fone: payload.dest?.enderDest?.fone,
                    endereco: {
                        logradouro: payload.dest?.enderDest?.xLgr,
                        bairro: payload.dest?.enderDest?.xBairro,
                        cep: payload.dest?.enderDest?.CEP,
                        municipio: payload.dest?.enderDest?.xMun,
                        uf: payload.dest?.enderDest?.UF,
                    },
                },
                transportador: {},
                produtos: [],
                extra: payload.infAdic?.obsCont?.map((i) => i.xTexto).join(" "),
                naturezaOperacao: payload.ide.natOp,
            }),
        );
    }
}
