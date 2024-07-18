import { version as __VERSION__ } from "../package.json";
import { expect, test } from "vitest";
import { NFE } from "../lib/nfe";
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
    ShippingMethod,
    TaxDocumentModel,
    TaxDocumentType,
    TaxIncentiveIndicator,
    TaxRegimeCode,
    WebServiceMode,
} from "../lib/@types/layouts/nfe/nfe";
import { AuthorizationRequest } from "../lib/@types/layouts/nfe/authorization";
import { NFeProtocolFetchingRequest } from "../lib/@types/layouts/nfe/protocolFetching";
import { NFeSEFAZ } from "../lib/sefaz";
import { CodeCityIBGE, EnvironmentIdentifier, UFCodeIBGE, UFIssuer } from "../lib/@types/layouts/general";

// NOTE: To generate a self signed certificate for envelope structure checking, execute:
// $ openssl req -nodes -new -x509 -keyout key.pem -out cert.pem

// WARN: all tests make real requests for the SEFAZ homologation environments

test("Request authorization", async () => {
    // arrange
    const cert = {
        key: __dirname + "/cert/key.pem",
        cert: __dirname + "/cert/cert.pem",
    };
    const sefaz = new NFeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);
    const nfe = new NFE({
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
        },
        transp: {
            modFrete: ShippingMethod.NO_TRANSPORT_OCCURRENCE,
        },
    });

    const payload = nfe.toObject();
    const envelope: AuthorizationRequest = {
        enviNFe: {
            $: { versao: "4.00", xmlns: "https://www.portalfiscal.inf.br/nfe" },
            idLote: "01234567",
            indSinc: WebServiceMode.ASYNC,
            NFe: [{ infNFE: payload }],
        },
    };

    // act
    const res = await sefaz.requestAuthorization(envelope);

    // assert
    expect(res).toEqual(1);
});

test.todo("Fetch NF-e", async () => {
    // arrange
    const cert = {
        key: __dirname + "/cert/key.pem",
        cert: __dirname + "/cert/cert.pem",
    };
    const sefaz = new NFeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    const envelope: NFeProtocolFetchingRequest = {
        consSitNFe: {
            $: { versao: "4.00" },
            tpAmb: EnvironmentIdentifier.HOMOLOGATION,
            chNFe: "",
            xServ: "CONSULTAR",
        },
    };

    // act
    const res = await sefaz.fetchNFE(envelope);

    // assert
    expect(res).toEqual(1);
});

test.todo("Check batch authorization", async () => {});

test.todo("Make useless", async () => {
    // arrange
    const cert = {
        key: __dirname + "/cert/key.pem",
        cert: __dirname + "/cert/cert.pem",
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

test.only("Check service status", async () => {
    // arrange
    const cert = {
        key: __dirname + "/cert/key.pem",
        cert: __dirname + "/cert/cert.pem",
    };
    const sefaz = new NFeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act
    const res = await sefaz.checkServiceStatus({
        consStatServ: {
            $: { versao: "4.00" },
            cUF: UFCodeIBGE.SP,
            tpAmb: EnvironmentIdentifier.HOMOLOGATION,
            xServ: "STATUS",
        },
    });

    // assert
    console.log(require("util").inspect(res, false, null, true));
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
