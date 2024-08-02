import { expect, test } from "vitest";
import { NFSeService } from "../lib/services/nfse";
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
    BrazilianNomenclatureServices,
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
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getDANFSe("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Distribuite DF-e", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.distribuiteDFe("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get access key by DPS", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getAccessKeyByDPS("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Register event", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);
    const payload = {};

    // act
    const res = await sut.registerEvent(payload, "");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get event by access key", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getEventByAccessKey("");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get event by event type", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getEventByEventType("", "");

    // assert
    expect(res).toEqual(1);
});

test.todo("Get event by event sequential number", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getEventByEventSequentialNumber("", "", "");

    // assert
    expect(res).toEqual(1);
});

// WARN: A maioria dos municípios não disponibilizam ambientes de homologação ainda, para saber qual município
// disponibiliza o ambiente de homologação veja: '[0]
// [0]: <https://www.gov.br/nfse/pt-br/municipios/municipios-aderentes/municipios-aderentes>
test.skip("Request authorization", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);
    const nfse = new NFSe({
        $: { Id: "ID31062001100005392612628000000000000019010153978386" },
        DPS: {
            $: { xmlns: "http://www.sped.fazenda.gov.br/nfse" },
            infDPS: {
                $: { versao: "1.00", Id: "DPS310620011000053926126280000000000000190101" },
                cLocEmi: IBGE_DistrictTable["GOIANIA-GO"],
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
                        cLocPrestacao: IBGE_DistrictTable["GOIANIA-GO"],
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
                cMun: IBGE_DistrictTable["GOIANIA-GO"],
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
        xLocEmi: "GOIANIA-GO",
        xLocPrestacao: "Unidade comercial sede",
        xTribNac: "Análise e desenvolvimento de sistemas",
        valores: {
            vLiq: "10.00",
        },
    });

    // act
    const res = await sut.requestAuthorization({ $: { Id: "NFS" }, infNFSe: nfse.toObject() });

    // assert
    expect(res).toEqual({});
});

test.only("Get by access key", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getByAccessKey("");

    // assert
    expect(res).toEqual(1);
});

test("Get parameterized ISSQN aliquot", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getParameterizedISSQN_Aliquot(
        IBGE_DistrictTable["PORTO_ALEGRE-RS"],
        BrazilianNomenclatureServices["Licenciamento de direitos de uso de programas de computador (software)"],
        "01-15-2024",
    );

    // assert
    expect(res).toEqual({
        dataHoraProcessamento: expect.any(String), // "30-07-2024 23:17:14"
        // WARN: HOMOLOGATION environments is not available
        tipoAmbiente: EnvironmentIdentifier.PRODUCTION,
        mensagem: "Alíquotas não encontradas.",
    });
});

test("Get aliquot history", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getAliquotHistory(
        IBGE_DistrictTable["PORTO_ALEGRE-RS"],
        BrazilianNomenclatureServices["Licenciamento de direitos de uso de programas de computador (software)"],
    );

    // assert
    expect(res).toEqual({
        dataHoraProcessamento: expect.any(String), // "30-07-2024 22:59:40"
        // WARN: HOMOLOGATION environments is not available
        tipoAmbiente: EnvironmentIdentifier.PRODUCTION,
        mensagem: "Histórico de alíquotas não encontrado",
    });
});

test("Get agreement params", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getAgreementParams(IBGE_DistrictTable["PORTO_ALEGRE-RS"]);

    // assert
    expect(res).toEqual({
        dataHoraProcessamento: expect.any(String), // "30-07-2024 22:48:15"
        // WARN: HOMOLOGATION environments is not available
        tipoAmbiente: EnvironmentIdentifier.PRODUCTION,
        parametrosConvenio: {
            aderenteAmbienteNacional: 1,
            aderenteEmissorNacional: 1,
            origCad: 2,
            aderenteMAN: 0,
            permiteAproveitametoDeCreditos: true,
        },
        mensagem: "Parâmetros do convênio recuperados com sucesso.",
    });
});

test("Get special regime params", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getSpecialRegimeParams(
        IBGE_DistrictTable["PORTO_ALEGRE-RS"],
        BrazilianNomenclatureServices["Licenciamento de direitos de uso de programas de computador (software)"],
        "01-15-2020",
    );

    // assert
    expect(res).toEqual(null);
});

test("Get ISSQN retention params", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getISSQN_RetentionParams(IBGE_DistrictTable["PORTO_ALEGRE-RS"], "01-15-2024");

    // assert
    expect(res).toEqual({
        dataHoraProcessamento: expect.any(String), // "30-07-2024 22:42:56",
        // WARN: HOMOLOGATION environments is not available
        tipoAmbiente: EnvironmentIdentifier.PRODUCTION,
        retencoes: {
            art6: {
                habilitado: true,
                hist: [
                    {
                        dtIni: expect.any(String), // "2023-04-17T00:00:00"
                    },
                ],
            },
            retMun: [],
        },
        mensagem: "Parâmetros de retenções para a competência recuperados com sucesso.",
    });
});

test.todo("get benefit number params", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new NFSeService(cert);

    // act
    const res = await sut.getBenefitNumberParams(IBGE_DistrictTable["PORTO_ALEGRE-RS"], "", "01-15-2024");

    // assert
    expect(res).toEqual({});
});
