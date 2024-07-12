import { readFileSync } from "node:fs";
import * as Handlebars from "handlebars";
import { SefazNFE } from "./@types/layouts/nfe";
import { AccessKey } from "./accessKey";

export class Print {
    DANFE(mode: "portrait" | "landscape", payload: SefazNFE) {
        const nfe = payload.infNFE;

        const layout =
            mode === "portrait"
                ? readFileSync(__dirname + "/core/static/danfe.portrait.hbs")
                : readFileSync(__dirname + "/core/static/danfe.landscape.hbs");
        const template = Handlebars.compile(layout.toString());
        return template({
            ANTT: "",
            page: {
                current: 1,
                total: 1,
            },
            nfe: {
                serie: nfe.ide.serie,
                numero: nfe.ide.nNF,
                naturezaOperacao: nfe.ide.natOp,
                key: AccessKey.fromNFe(payload),
                type: nfe.ide.tpNF,
                total: nfe.total.ICMSTot.vNF,
                protocolo: "",
                dataHoraEmissao: new Date(nfe.ide.dhEmi).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                }),
                horaEntradaSaida:
                    nfe.ide.dhSaiEnt &&
                    new Date(nfe.ide.dhSaiEnt).toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                dataEntradaSaida:
                    nfe.ide.dhSaiEnt &&
                    new Date(nfe.ide.dhSaiEnt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    }),
            },
            emitente: {
                nome: nfe.emit.xNome,
                ie: nfe.emit.IE,
                fone: nfe.emit.enderEmit.fone,
                email: "",
                ieSubstituicao: nfe.emit.IEST,
                // FIXME(@@@)
                // @ts-ignore
                cnpj: nfe.emit?.CNPJ,
                endereco: {
                    logradouro: nfe.emit.enderEmit.xLgr,
                    bairro: nfe.emit.enderEmit.xBairro,
                    cep: nfe.emit.enderEmit.CEP,
                    municipio: nfe.emit.enderEmit.xMun,
                    uf: nfe.emit.enderEmit.UF,
                },
            },
            destinatario: {
                nome: nfe.dest?.xNome,
                // FIXME(@@@)
                // @ts-ignore
                documento: nfe.dest?.CNPJ ?? nfe.dest?.CPF,
                ie: nfe.dest?.IE,
                fone: nfe.dest?.enderDest?.fone,
                endereco: {
                    logradouro: nfe.dest?.enderDest?.xLgr,
                    bairro: nfe.dest?.enderDest?.xBairro,
                    cep: nfe.dest?.enderDest?.CEP,
                    municipio: nfe.dest?.enderDest?.xMun,
                    uf: nfe.dest?.enderDest?.UF,
                },
            },
            duplicatas: nfe.cobr?.dup?.map((i) => ({
                number: i.nDup,
                date:
                    i.dVenc &&
                    new Date(i.dVenc).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    }),
                value: i.vDup,
            })),
            imposto: {
                baseCalculo: nfe.total.ICMSTot.vBC,
                valor: nfe.total.ICMSTot.vICMS,
                baseCalculoSubstituicao: nfe.total.ICMSTot.vBCST,
                valorSubstituicao: nfe.total.ICMSTot.vST,
                total: nfe.total.ICMSTot.vProd,
                frete: nfe.total.ICMSTot.vFrete,
                seguro: nfe.total.ICMSTot.vSeg,
                desconto: nfe.total.ICMSTot.vDesc,
                outro: nfe.total.ICMSTot.vOutro,
                ipi: nfe.total.ICMSTot.vIPI,
            },
            transportador: {
                // FIXME(@@@)
                // @ts-ignore
                placa: nfe.transp.veicTransp?.placa,
                // FIXME(@@@)
                // @ts-ignore
                uf: nfe.transp.veicTransp?.UF,
                // FIXME(@@@)
                // @ts-ignore
                documento: nfe.transp.transporta?.CNPJ ?? nfe.transp.transporta?.CPF,
                produtos: {
                    quantidade: nfe.transp.vol?.map((i) => i.qVol).reduce((a, b) => a + (Number(b) || 0), 0),
                    especie: nfe.transp.vol?.at(0)?.esp,
                    marca: nfe.transp.vol?.at(0)?.marca,
                    numeracao: nfe.transp.vol?.at(0)?.nVol,
                    peso: {
                        bruto: nfe.transp.vol?.at(0)?.pesoB,
                        liquido: nfe.transp.vol?.at(0)?.pesoL,
                    },
                },
            },
            produtos: "",
            issqn: {
                ie: "",
                valor: nfe.total.ISSQNtot?.vISS,
                baseCalculo: nfe.total.ISSQNtot?.vBC,
            },
            extra: nfe.infAdic?.obsCont?.map((i) => i.xTexto).join(" "),
            naturezaOperacao: nfe.ide.natOp,
        });
    }
}
