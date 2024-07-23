import { test } from "vitest";
import { Print } from "../lib/print";
import { version as __VERSION__ } from "../package.json";
import {
    BuyerPresenceOnEstablishmentAtTransactionIndicator,
    DanfePrintFormat,
    DeterminationMethod__Type1,
    ExibilidadeISS,
    IssuanceMode,
    IssuingProcess,
    MerchandiseOrigin,
    NFEGoal,
    OperationDestinationLocationIdentifier,
    OperationWithEndConsumer,
    ProductComposeTotal,
    RecipientStateSubscriptionIndicator,
    ShippingMethod,
    TaxDocumentModel,
    TaxDocumentType,
    TaxIncentiveIndicator,
    TaxRegimeCode,
} from "../lib/@types/layouts/nfe/nfe";
import { writeFileSync } from "node:fs";
import { CodeCityIBGE, EnvironmentIdentifier, UFCodeIBGE, UFIssuer } from "../lib/@types/layouts/general";

test("DANFE: portrait", () => {
    // arrange
    const print = new Print();

    // act
    const res = print.DANFE("portrait", {
        $: {
            Id: "NFe31060243816719000108550000000010011234567900",
            versao: "4.00",
        },
        det: [
            {
                $: { nItem: "1" },
                prod: {
                    vProd: "100.00",
                    NCM: "00",
                    cEAN: "0123456789101",
                    CFOP: "1234",
                    qCom: "1.00",
                    uCom: "UN",
                    cProd: "012345678",
                    qTrib: "1.00",
                    uTrib: "UN",
                    xProd: "Test Product",
                    indTot: ProductComposeTotal.PRODUCT_EQUAL_TOTAL_VALUE,
                    vUnCom: "100.00",
                    nRECOPI: "20240101120000000000",
                    vUnTrib: "100.00",
                    cEANTrib: "0123456789101",
                },
                imposto: {
                    ICMS: {
                        ICMS00: {
                            vBC: "10.00",
                            vICMS: "10.00",
                            CST: "00",
                            orig: MerchandiseOrigin.NATIONAL_BASIC_PRODUCTION_PROCESSES,
                            modBC: DeterminationMethod__Type1.TRANSACTION_VALUE,
                            pICMS: "10",
                        },
                    },
                    ISSQN: {
                        vBC: "10.00",
                        cMunFG: CodeCityIBGE.SAO_PAULO,
                        vAliq: "10",
                        indISS: ExibilidadeISS.REQUIRABLE,
                        vISSQN: "10.00",
                        cListServ: "01.02",
                        indIncentivo: TaxIncentiveIndicator.YES,
                    },
                },
            },
        ],
        ide: {
            cDV: "0",
            cNF: "12345678",
            cUF: UFCodeIBGE.SP,
            mod: TaxDocumentModel.NFE,
            nNF: "123456789",
            tpNF: TaxDocumentType.INPUT,
            dhEmi: "2024-01-01T12:00:00-03:00",
            dhSaiEnt: "2024-01-01T12:00:00-03:00",
            natOp: "Venda de produto",
            serie: "999",
            tpAmb: EnvironmentIdentifier.HOMOLOGATION,
            tpImp: DanfePrintFormat.NO_DANFE,
            cMunFG: CodeCityIBGE.SAO_PAULO,
            finNFe: NFEGoal.NFE_NORMAL,
            idDest: OperationDestinationLocationIdentifier.INTERNAL,
            tpEmis: IssuanceMode.NORMAL,
            indPres: BuyerPresenceOnEstablishmentAtTransactionIndicator.INTERNET,
            procEmi: IssuingProcess.OWNED_APP,
            verProc: __VERSION__,
            indFinal: OperationWithEndConsumer.YES,
        },
        pag: {
            detPag: [
                {
                    tPag: "100.00",
                    vPag: "100.00",
                },
            ],
        },
        emit: {
            IE: "539125379482",
            IEST: "539125379482",
            CNPJ: "46022825000108",
            CRT: TaxRegimeCode.SIMPLES_NACIONAL,
            xNome: "Open MDF-e by @acesnofleirbag",
            enderEmit: {
                UF: UFIssuer.SP,
                CEP: "09421500",
                nro: "123",
                cMun: CodeCityIBGE.SAO_PAULO,
                xLgr: "Rua das Flores",
                xMun: "Ribeirão Pires",
                xBairro: "Suíssa",
                fone: "(11)4002-8922",
            },
        },
        cobr: {
            dup: [
                {
                    vDup: "10.00",
                    dVenc: "2024-02-02",
                    nDup: "001",
                },
            ],
        },
        dest: {
            indIEDest: RecipientStateSubscriptionIndicator.NON_CONTRIBUTOR,
            xNome: "Lorem Ipsum Dolor",
            CNPJ: "08684202000101",
            IE: "872089246588",
            enderDest: {
                UF: UFIssuer.SP,
                CEP: "05072010",
                nro: "999",
                cMun: CodeCityIBGE.SAO_PAULO,
                xLgr: "Rua Conrado Moreschi",
                xMun: "São Paulo",
                xBairro: "Lapa",
                fone: "(11)4002-8922",
            },
        },
        total: {
            ICMSTot: {
                vBC: "01.00",
                vII: "02.00",
                vNF: "03.00",
                vST: "04.00",
                vFCP: "05.00",
                vIPI: "06.00",
                vPIS: "07.00",
                vSeg: "08.00",
                vBCST: "09.00",
                vDesc: "10.00",
                vICMS: "11.00",
                vProd: "12.00",
                vFCPST: "13.00",
                vFrete: "14.00",
                vOutro: "15.00",
                vCOFINS: "16.00",
                vFCPSTRet: "17.00",
                vIPIDevol: "18.00",
                vICMSDeson: "19.00",
            },
            ISSQNtot: {
                vISS: "50.00",
                vBC: "2.00",
                dCompet: "2024-01-01",
            },
        },
        transp: {
            modFrete: ShippingMethod.NO_TRANSPORT_OCCURRENCE,
            transporta: {
                CNPJ: "02049640000111",
            },
            veicTransp: {
                UF: UFIssuer.CE,
                placa: "ABC1234",
            },
            vol: [
                {
                    qVol: "2",
                    esp: "UNIDADE",
                    nVol: "010101",
                    marca: "UNKNOWN",
                    pesoB: "20",
                    pesoL: "10",
                },
            ],
        },
        infAdic: {
            obsCont: [
                {
                    $: { xCampo: "TEST" },
                    xTexto: "Hello world",
                },
            ],
        },
    });

    // expect: Check the file on the output directory
    // WARN: Output configured in Linux environment
    writeFileSync("/tmp/DANFE.portrait.html", res);
});

test("DANFE: landscape", () => {
    // arrange
    const print = new Print();

    // act
    const res = print.DANFE("landscape", {
        $: {
            Id: "NFe31060243816719000108550000000010011234567900",
            versao: "4.00",
        },
        det: [
            {
                $: { nItem: "1" },
                prod: {
                    vProd: "100.00",
                    NCM: "00",
                    cEAN: "0123456789101",
                    CFOP: "1234",
                    qCom: "1.00",
                    uCom: "UN",
                    cProd: "012345678",
                    qTrib: "1.00",
                    uTrib: "UN",
                    xProd: "Test Product",
                    indTot: ProductComposeTotal.PRODUCT_EQUAL_TOTAL_VALUE,
                    vUnCom: "100.00",
                    nRECOPI: "20240101120000000000",
                    vUnTrib: "100.00",
                    cEANTrib: "0123456789101",
                },
                imposto: {
                    ICMS: {
                        ICMS00: {
                            vBC: "10.00",
                            vICMS: "10.00",
                            CST: "00",
                            orig: MerchandiseOrigin.NATIONAL_BASIC_PRODUCTION_PROCESSES,
                            modBC: DeterminationMethod__Type1.TRANSACTION_VALUE,
                            pICMS: "10",
                        },
                    },
                    ISSQN: {
                        vBC: "10.00",
                        cMunFG: CodeCityIBGE.SAO_PAULO,
                        vAliq: "10",
                        indISS: ExibilidadeISS.REQUIRABLE,
                        vISSQN: "10.00",
                        cListServ: "01.02",
                        indIncentivo: TaxIncentiveIndicator.YES,
                    },
                },
            },
        ],
        ide: {
            cDV: "0",
            cNF: "12345678",
            cUF: UFCodeIBGE.SP,
            mod: TaxDocumentModel.NFE,
            nNF: "123456789",
            tpNF: TaxDocumentType.INPUT,
            dhEmi: "2024-01-01T12:00:00-03:00",
            dhSaiEnt: "2024-01-01T12:00:00-03:00",
            natOp: "Venda de produto",
            serie: "999",
            tpAmb: EnvironmentIdentifier.HOMOLOGATION,
            tpImp: DanfePrintFormat.NO_DANFE,
            cMunFG: CodeCityIBGE.SAO_PAULO,
            finNFe: NFEGoal.NFE_NORMAL,
            idDest: OperationDestinationLocationIdentifier.INTERNAL,
            tpEmis: IssuanceMode.NORMAL,
            indPres: BuyerPresenceOnEstablishmentAtTransactionIndicator.INTERNET,
            procEmi: IssuingProcess.OWNED_APP,
            verProc: __VERSION__,
            indFinal: OperationWithEndConsumer.YES,
        },
        pag: {
            detPag: [
                {
                    tPag: "100.00",
                    vPag: "100.00",
                },
            ],
        },
        emit: {
            IE: "539125379482",
            IEST: "539125379482",
            CNPJ: "46022825000108",
            CRT: TaxRegimeCode.SIMPLES_NACIONAL,
            xNome: "Open MDF-e by @acesnofleirbag",
            enderEmit: {
                UF: UFIssuer.SP,
                CEP: "09421500",
                nro: "123",
                cMun: CodeCityIBGE.SAO_PAULO,
                xLgr: "Rua das Flores",
                xMun: "Ribeirão Pires",
                xBairro: "Suíssa",
                fone: "(11)4002-8922",
            },
        },
        cobr: {
            dup: [
                {
                    vDup: "10.00",
                    dVenc: "2024-02-02",
                    nDup: "001",
                },
            ],
        },
        dest: {
            indIEDest: RecipientStateSubscriptionIndicator.NON_CONTRIBUTOR,
            xNome: "Lorem Ipsum Dolor",
            CNPJ: "08684202000101",
            IE: "872089246588",
            enderDest: {
                UF: UFIssuer.SP,
                CEP: "05072010",
                nro: "999",
                cMun: CodeCityIBGE.SAO_PAULO,
                xLgr: "Rua Conrado Moreschi",
                xMun: "São Paulo",
                xBairro: "Lapa",
                fone: "(11)4002-8922",
            },
        },
        total: {
            ICMSTot: {
                vBC: "01.00",
                vII: "02.00",
                vNF: "03.00",
                vST: "04.00",
                vFCP: "05.00",
                vIPI: "06.00",
                vPIS: "07.00",
                vSeg: "08.00",
                vBCST: "09.00",
                vDesc: "10.00",
                vICMS: "11.00",
                vProd: "12.00",
                vFCPST: "13.00",
                vFrete: "14.00",
                vOutro: "15.00",
                vCOFINS: "16.00",
                vFCPSTRet: "17.00",
                vIPIDevol: "18.00",
                vICMSDeson: "19.00",
            },
            ISSQNtot: {
                vISS: "50.00",
                vBC: "2.00",
                dCompet: "2024-01-01",
            },
        },
        transp: {
            modFrete: ShippingMethod.NO_TRANSPORT_OCCURRENCE,
            transporta: {
                CNPJ: "02049640000111",
            },
            veicTransp: {
                UF: UFIssuer.CE,
                placa: "ABC1234",
            },
            vol: [
                {
                    qVol: "2",
                    esp: "UNIDADE",
                    nVol: "010101",
                    marca: "UNKNOWN",
                    pesoB: "20",
                    pesoL: "10",
                },
            ],
        },
        infAdic: {
            obsCont: [
                {
                    $: { xCampo: "TEST" },
                    xTexto: "Hello world",
                },
            ],
        },
    });

    // expect: Check the file on the output directory
    // WARN: Output configured in Linux environment
    writeFileSync("/tmp/DANFE.landscape.html", res);
});
