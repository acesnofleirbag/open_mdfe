import { expect, test } from "vitest";
import { NFSeSEFAZ } from "../lib/sefaz";
import { NFSe } from "../lib/nfse";
import {
    GenerateEnvironmentType,
    ISSQN_TaxOverService,
    IssuanceProcess,
    IssueType,
    IssuerType,
    MessageStatusCode,
    NonNIF_Reason,
    RetentionType,
    ServiceUsageLocal,
    SimpleNationalSituation,
    TaxAssessmentRegimeSpecialTypes,
} from "../lib/@types/layouts/nfse/nfse";
import { DateUtility } from "../lib/utils/date";
import { version as __VERSION__ } from "../package.json";
import {
    EnvironmentIdentifier,
    IBGE_DistrictTable,
    ISO_Country,
    NationalTaxCodes,
    UFIssuer,
} from "../lib/@types/layouts/general";

test.todo("Get DANFS-e", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getDANFSe("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Distribuite DF-e", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.distribuiteDFe("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get access key by DPS", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getAccessKeyByDPS("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Register event", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);
    const payload = {};

    // act
    const res = await sefaz.registerEvent(payload, "");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get event by access key", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getEventByAccessKey("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get event by event type", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getEventByEventType("", "");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get event by event sequential number", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getEventByEventSequentialNumber("", "", "");

    // assert
    expect(res).toEqual(1);
});

// WARN: A maioria dos municípios não disponibilizam ambientes de homologação ainda, para saber qual município
// disponibiliza o ambiente de homologação veja: '[0]
// [0]: <https://www.gov.br/nfse/pt-br/municipios/municipios-aderentes/municipios-aderentes>
test.only("Request authorization", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);
    const nfse = new NFSe({
        $: { Id: "ID31062001100005392612628000000000000019010153978386" },
        DPS: {
            $: { xmlns: "http://www.sped.fazenda.gov.br/nfse" },
            infDPS: {
                $: { versao: "1.00", Id: "DPS310620011000053926126280000000000000190101" },
                cLocEmi: IBGE_DistrictTable["SAO_LEOPOLDO-RS"],
                dCompet: "2024-01-01",
                dhEmi: DateUtility.now(),
                nDPS: "12345678901234",
                serie: "12345",
                tpAmb: EnvironmentIdentifier.HOMOLOGATION,
                tpEmit: IssuerType.PROVIDER,
                verAplic: "OPEN_MDFE_" + __VERSION__,
                serv: {
                    cServ: {
                        cTribNac: NationalTaxCodes["Análise e desenvolvimento de sistemas"],
                        xDescServ: "Desenvolvimento de biblioteca NodeJS",
                    },
                    locPrest: {
                        opConsumServ:
                            ServiceUsageLocal.CONSUMPTION_OF_THE_SERVICE_PROVIDED_OCCURRED_IN_THE_MUNICIPALITY_WHERE_THE_SERVICE_WAS_PROVIDED,
                        cLocPrestacao: IBGE_DistrictTable["SAO_LEOPOLDO-RS"],
                        cPaisPrestacao: ISO_Country.BRASIL,
                    },
                },
                toma: {
                    xNome: "Open MDF-e taker",
                    CNPJ: "32238322000160",
                    NIF: "",
                    cNaoNIF: NonNIF_Reason.NIF_NOT_REQUIRED,
                },
                prest: {
                    CNPJ: "42660677000104",
                    NIF: "",
                    regTrib: {
                        opSimpNac: SimpleNationalSituation.OPTANT_MICROENTERPRISE_OR_SMALL_BUSINESS_ME_EPP,
                        regEspTrib: TaxAssessmentRegimeSpecialTypes.NONE,
                    },
                    cNaoNIF: NonNIF_Reason.NIF_NOT_REQUIRED,
                },
                interm: {
                    CNPJ: "61550170000134",
                    xNome: "Open MDF-e Intermediary",
                    NIF: "",
                    cNaoNIF: NonNIF_Reason.NIF_NOT_REQUIRED,
                },
                valores: {
                    vServPrest: {
                        vServ: "10.00",
                    },
                    trib: {
                        totTrib: {
                            indTotTrib: "0",
                        },
                        tribMun: {
                            tribISSQN: ISSQN_TaxOverService.TAXABLE_TRANSACTION,
                            tpRetISSQN: RetentionType.NOT_RETAINED,
                        },
                    },
                },
            },
        },
        emit: {
            CNPJ: process.env.CNPJ ?? "99999999000191",
            xFant: "Open MDF-e library test",
            xNome: "Open MDF-e by @acesnofleirbag",
            enderNac: {
                UF: UFIssuer.RS,
                CEP: "09421500",
                nro: "123",
                cMun: IBGE_DistrictTable["SAO_LEOPOLDO-RS"],
                xCpl: "Rua das Flores",
                xLgr: "Ribeirão Pires",
                xBairro: "Suíssa",
            },
        },
        ambGer: GenerateEnvironmentType.CITY_HALL,
        cStat: MessageStatusCode.INDIVIDUAL_NFSE,
        dhProc: DateUtility.now(),
        nDFSe: "1234567890123",
        nNFSe: "1234567890123",
        procEmi: IssuanceProcess.ISSUANCE_USING_THE_TAXPAYERS_APPLICATION_VIA_WEB_SERVICE,
        tpEmis: IssueType.NORMAL_ISSUANCE_IN_THE_NATIONAL_NFSE_MODEL,
        verAplic: "OPEN_MDFE_" + __VERSION__,
        xLocEmi: "SAO_LEOPOLDO-RS",
        xLocPrestacao: "Unidade comercial sede",
        xTribNac: "Análise e desenvolvimento de sistemas",
        valores: {
            vLiq: "10.00",
        },
    });

    // act
    const res = await sefaz.requestAuthorization({ infNFSe: nfse.toObject() });

    // assert
    expect(res).toEqual({});
});

test.todo("Get by access key", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getByAccessKey("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get parameterized ISSQN aliquot", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getParameterizedISSQN_Aliquot("", "", "");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get aliquot history", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getAliquotHistory("", "");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get agreement params", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getAgreementParams("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get special regime params", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getSpecialRegimeParams("", "", "");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get ISSQN retention params", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getISSQN_RetentionParams("", "");

    // assert
    expect(res).toEqual(1);
});

test.todo("get benefit number params", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new NFSeSEFAZ(cert);

    // act
    const res = await sefaz.getBenefitNumberParams("", "", "");

    // assert
    expect(res).toEqual(1);
});
