import { version as __VERSION__ } from "../package.json";
import { expect, test } from "vitest";
import { NFE } from "../lib/nfe";
import {
    BuyerPresenceOnEstablishmentAtTransactionIndicator,
    CST__Type1,
    CST__Type2,
    CST__Type3,
    DanfePrintFormat,
    DeterminationMethod__Type1,
    ICMSCST,
    IntermediaryIndicator,
    IssuanceMode,
    IssuingProcess,
    MerchandiseOrigin,
    NFEGoal,
    OperationDestinationLocationIdentifier,
    OperationWithEndConsumer,
    PaymentMode,
    ProductComposeTotal,
    RecipientStateSubscriptionIndicator,
    ShippingMethod,
    TaxDocumentModel,
    TaxDocumentType,
    TaxRegimeCode,
    WebServiceMode,
} from "../lib/@types/layouts/nfe/nfe";
import { NFeSEFAZ } from "../lib/sefaz";
import { CodeCityIBGE, EnvironmentIdentifier, UFCodeIBGE, UFIssuer } from "../lib/@types/layouts/general";
import { DateUtility } from "../lib/utils/date";

// NOTE: To generate a self signed certificate for envelope structure checking, execute:
// $ openssl req -nodes -new -x509 -keyout key.pem -out cert.pem
// $ openssl pkcs12 -export -in cert.pem -inkey key.pem -out cert.pfx

// WARN: all tests make real requests for the SEFAZ homologation environments

test("Check service status", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act
    const res = await sefaz.checkServiceStatus({
        consStatServ: {
            $: { versao: "4.00", xmlns: "http://www.portalfiscal.inf.br/nfe" },
            tpAmb: EnvironmentIdentifier.HOMOLOGATION,
            cUF: UFCodeIBGE.SP,
            xServ: "STATUS",
        },
    });

    // assert
    expect(res).toEqual({
        $: { xmlns: expect.any(String) },
        retConsStatServ: {
            $: { versao: "4.00", xmlns: "http://www.portalfiscal.inf.br/nfe" },
            tpAmb: "2",
            verAplic: expect.any(String),
            cStat: "107",
            xMotivo: "Serviço em Operação",
            cUF: "35",
            dhRecbto: expect.any(String),
            tMed: expect.any(String),
        },
    });
});

test.only("Request authorization", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);
    const nfe = new NFE({
        $: {
            versao: "4.00",
            Id: "", // ID is auto-generate
        },
        ide: {
            cUF: UFCodeIBGE.SP,
            cNF: NFE.genNumericCode(),
            natOp: "Venda de produto",
            mod: TaxDocumentModel.NFE,
            serie: "3",
            nNF: "123456789",
            dhEmi: DateUtility.now(),
            tpNF: TaxDocumentType.OUTPUT,
            idDest: OperationDestinationLocationIdentifier.INTERNAL,
            cMunFG: CodeCityIBGE.SAO_PAULO,
            tpImp: DanfePrintFormat.NO_DANFE,
            tpEmis: IssuanceMode.NORMAL,
            cDV: "", // Verifying digit is auto-generate
            tpAmb: EnvironmentIdentifier.HOMOLOGATION,
            finNFe: NFEGoal.NFE_NORMAL,
            indFinal: OperationWithEndConsumer.YES,
            indPres: BuyerPresenceOnEstablishmentAtTransactionIndicator.INTERNET,
            procEmi: IssuingProcess.OWNED_APP,
            verProc: __VERSION__,
            indIntermed: IntermediaryIndicator.WITHOUT_INTERMEDIARY,
        },
        emit: {
            CNPJ: process.env.CNPJ ?? "99999999000191",
            xNome: "Open MDF-e by @acesnofleirbag",
            enderEmit: {
                UF: UFIssuer.SP,
                CEP: "09421500",
                nro: "123",
                cMun: CodeCityIBGE.SAO_PAULO,
                xLgr: "Rua das Flores",
                xMun: "Ribeirão Pires",
                xBairro: "Suíssa",
            },
            IE: "539125379482",
            CRT: TaxRegimeCode.REGIME_NORMAL,
        },
        dest: {
            xNome: "NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
            CPF: "80624052060",
            indIEDest: RecipientStateSubscriptionIndicator.NON_CONTRIBUTOR,
            enderDest: {
                UF: UFIssuer.SP,
                CEP: "02929180",
                nro: "838",
                cMun: CodeCityIBGE.SAO_PAULO,
                xLgr: "Rua Maria Suzana",
                xMun: "São Paulo",
                xBairro: "Moinho Velho",
            },
        },
        det: [
            {
                $: { nItem: "1" },
                prod: {
                    cProd: "012345678",
                    cEAN: "7898221456293",
                    xProd: "Test Product",
                    NCM: "85164000",
                    CFOP: "5102",
                    uCom: "UN",
                    qCom: "1.00",
                    vUnCom: "100.00",
                    vProd: "100.00",
                    cEANTrib: "7898221456293",
                    uTrib: "UN",
                    qTrib: "1.00",
                    vUnTrib: "100.00",
                    indTot: ProductComposeTotal.PRODUCT_EQUAL_TOTAL_VALUE,
                },
                imposto: {
                    ICMS: {
                        ICMS00: {
                            orig: MerchandiseOrigin.NATIONAL_BASIC_PRODUCTION_PROCESSES,
                            CST: ICMSCST.FULLY_TAXED,
                            modBC: DeterminationMethod__Type1.TRANSACTION_VALUE,
                            vBC: "0.00",
                            pICMS: "0",
                            vICMS: "0.00",
                        },
                    },
                    PIS: {
                        PISNT: {
                            CST: CST__Type2.TAXABLE_OPERATION_ST,
                        },
                        PISAliq: {
                            CST: CST__Type1.CUMULATIVE_NON_CUMULATIVE,
                            vBC: "0.00",
                            pPIS: "0",
                            vPIS: "0.00",
                        },
                        PISOutr: {
                            vPIS: "0.00",
                            pPIS: "0.00",
                            vBC: "0.00",
                            CST: CST__Type3.ZERO_RATE_ACQUISITION_OPERATION,
                            qBCProd: "0.00",
                            vAliqProd: "0.00",
                        },
                        PISQtde: {
                            vAliqProd: "0",
                            qBCProd: "1",
                            CST: "03",
                            vPIS: "0.00",
                        },
                    },
                    COFINS: {
                        COFINSNT: {
                            CST: CST__Type2.TAXABLE_OPERATION_ST,
                        },
                        COFINSAliq: {
                            CST: CST__Type1.CUMULATIVE_NON_CUMULATIVE,
                            vBC: "0.00",
                            pCOFINS: "0.00",
                            vCOFINS: "0.00",
                        },
                        COFINSOutr: {
                            vCOFINS: "0.00",
                            pCOFINS: "0.00",
                            vBC: "00",
                            CST: CST__Type3.ZERO_RATE_ACQUISITION_OPERATION,
                            qBCProd: "1",
                            vAliqProd: "0.00",
                        },
                        COFINSQtde: {
                            vAliqProd: "0.00",
                            qBCProd: "0",
                            CST: "03",
                            vCOFINS: "0.00",
                        },
                    },
                },
            },
        ],
        total: {
            ICMSTot: {
                vBC: "0.00",
                vICMS: "0.00",
                vICMSDeson: "0.00",
                vFCP: "0.00",
                vBCST: "0.00",
                vST: "0.00",
                vFCPST: "0.00",
                vFCPSTRet: "0.00",
                vProd: "100.00",
                vFrete: "0.00",
                vSeg: "0.00",
                vDesc: "0.00",
                vII: "0.00",
                vIPI: "0.00",
                vIPIDevol: "0.00",
                vPIS: "0.00",
                vCOFINS: "0.00",
                vOutro: "0.00",
                vNF: "100.00",
            },
        },
        transp: {
            modFrete: ShippingMethod.NO_TRANSPORT_OCCURRENCE,
        },
        pag: {
            detPag: [
                {
                    tPag: PaymentMode.MONEY,
                    vPag: "100.00",
                },
            ],
        },
    });

    // act
    const res = await sefaz.requestAuthorization({
        enviNFe: {
            $: { versao: "4.00", xmlns: "http://www.portalfiscal.inf.br/nfe" },
            idLote: "01234567",
            indSinc: WebServiceMode.SYNC,
            NFe: [{ infNFe: nfe.toObject() }],
        },
    });

    // assert
    expect(res).toEqual({
        $: {
            xmlns: expect.any(String),
        },
        retEnviNFe: {
            $: {
                versao: "4.00",
                xmlns: "http://www.portalfiscal.inf.br/nfe",
            },
            cStat: "103",
            cUF: "35",
            dhRecbto: expect.any(String),
            infRec: {
                nRec: expect.any(String),
                tMed: expect.any(String),
            },
            tpAmb: "2",
            verAplic: expect.any(String),
            xMotivo: "Lote processado",
            protNFe: {
                $: { versao: "4.00" },
                infProt: {
                    $: { Id: expect.any(String) },
                    tpAmb: "2",
                    verAplic: expect.any(String),
                    chNFe: expect.any(String),
                    dhRecbto: expect.any(String),
                    // nProt?: string;
                    // digVal?: string;
                    cStat: "",
                    xMotivo: "",
                    // cMsg?: string;
                    // xMsg?: string;
                },
            },
        },
    });

    console.log("NF-e KEY: ", res.retEnviNFe.protNFe?.infProt.chNFe);
});

test.skip("Check authorization", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act
    const res = await sefaz.checkAuthorization({
        consReciNFe: {
            $: { versao: "4.00", xmlns: "http://www.portalfiscal.inf.br/nfe" },
            tpAmb: EnvironmentIdentifier.HOMOLOGATION,
            // NOTE: Get the receipt number on the previous test case: "Request authorization"
            nRec: "351000188499166",
        },
    });

    // assert
    expect(res).toEqual({});
});

test.todo("Fetch NF-e", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act
    const res = await sefaz.fetchNFE({
        consSitNFe: {
            $: { versao: "4.00", xmlns: "http://www.portalfiscal.inf.br/nfe" },
            tpAmb: EnvironmentIdentifier.HOMOLOGATION,
            xServ: "CONSULTAR",
            chNFe: "",
        },
    });

    // assert
    expect(res).toEqual(1);
});

test.todo("Make useless", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act
    const res = await sefaz.makeUseless({
        inutNFe: {
            $: { versao: "4.00" },
            infInut: {
                $: { Id: "" },
                xServ: "INUTILIZAR",
                tpAmb: EnvironmentIdentifier.HOMOLOGATION,
                cUF: UFCodeIBGE.SP,
                ano: "2024",
                mod: "",
                CNPJ: "",
                serie: "",
                xJust: "Open MDF-e Test",
                nNFFin: "",
                nNFIni: "",
            },
        },
    });

    // assert
    expect(res).toEqual(1);
});

test.todo("Fetch register", async () => {});

test.todo("Distribute DFE", async () => {});

test.todo("Register event", async () => {});

test.todo("Cancel NF-e", async () => {});

test.todo("Send fix letter", async () => {});

test.todo("Manifest recipient", () => {});

test.todo("Generate EPEC", () => {});

test.todo("Request extension", () => {});

test.todo("Assign transporter", async () => {});
