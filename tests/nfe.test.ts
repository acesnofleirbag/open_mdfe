import { version as __VERSION__ } from "../package.json";
import { expect, test } from "vitest";
import { NFE } from "../lib/nfe";
import {
    BuyerPresenceOnEstablishmentAtTransactionIndicator,
    DanfePrintFormat,
    DeterminationMethod__Type1,
    IssuanceMode,
    IssuingProcess,
    MerchandiseOrigin,
    NFEGoal,
    OperationDestinationLocationIdentifier,
    OperationWithEndConsumer,
    PaymentMode,
    ProductComposeTotal,
    ShippingMethod,
    TaxDocumentModel,
    TaxDocumentType,
    TaxRegimeCode,
    WebServiceMode,
} from "../lib/@types/layouts/nfe/nfe";
import { NFeSEFAZ } from "../lib/sefaz";
import { CodeCityIBGE, EnvironmentIdentifier, UFCodeIBGE, UFIssuer } from "../lib/@types/layouts/general";

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
            Id: "NFe31060243816719000108550000000010011234567900",
        },
        ide: {
            cUF: UFCodeIBGE.SP,
            cNF: "12345678",
            natOp: "Venda de produto",
            mod: TaxDocumentModel.NFE,
            serie: "999",
            nNF: "123456789",
            dhEmi: "2024-01-01T12:00:00-03:00",
            tpNF: TaxDocumentType.INPUT,
            idDest: OperationDestinationLocationIdentifier.INTERNAL,
            cMunFG: CodeCityIBGE.SAO_PAULO,
            tpImp: DanfePrintFormat.NO_DANFE,
            tpEmis: IssuanceMode.NORMAL,
            cDV: "0",
            tpAmb: EnvironmentIdentifier.HOMOLOGATION,
            finNFe: NFEGoal.NFE_NORMAL,
            indFinal: OperationWithEndConsumer.YES,
            indPres: BuyerPresenceOnEstablishmentAtTransactionIndicator.INTERNET,
            procEmi: IssuingProcess.OWNED_APP,
            verProc: __VERSION__,
        },
        emit: {
            CNPJ: "46022825000108",
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
            CRT: TaxRegimeCode.SIMPLES_NACIONAL,
        },
        det: [
            {
                $: { nItem: "1" },
                prod: {
                    cProd: "012345678",
                    cEAN: "0123456789101",
                    xProd: "Test Product",
                    NCM: "00",
                    CFOP: "1234",
                    uCom: "UN",
                    qCom: "1.00",
                    vUnCom: "100.00",
                    vProd: "100.00",
                    cEANTrib: "0123456789101",
                    uTrib: "UN",
                    qTrib: "1.00",
                    vUnTrib: "100.00",
                    indTot: ProductComposeTotal.PRODUCT_EQUAL_TOTAL_VALUE,
                },
                imposto: {
                    ICMS: {
                        ICMS00: {
                            orig: MerchandiseOrigin.NATIONAL_BASIC_PRODUCTION_PROCESSES,
                            CST: "00",
                            modBC: DeterminationMethod__Type1.TRANSACTION_VALUE,
                            vBC: "10.00",
                            pICMS: "10",
                            vICMS: "10.00",
                        },
                    },
                },
            },
        ],
        total: {
            ICMSTot: {
                vBC: "1.00",
                vICMS: "11.00",
                vICMSDeson: "19.00",
                vFCP: "5.00",
                vBCST: "9.00",
                vST: "4.00",
                vFCPST: "13.00",
                vFCPSTRet: "17.00",
                vProd: "12.00",
                vFrete: "14.00",
                vSeg: "8.00",
                vDesc: "10.00",
                vII: "2.00",
                vIPI: "6.00",
                vIPIDevol: "18.00",
                vPIS: "7.00",
                vCOFINS: "16.00",
                vOutro: "15.00",
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
            xMotivo: "Lote recebido com sucesso",
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
