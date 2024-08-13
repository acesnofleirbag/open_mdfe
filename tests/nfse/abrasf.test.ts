import { version as __VERSION__ } from "../../package.json";
import { expect, test } from "vitest";
import { ABRASF_Service } from "../../lib/services/nfse/abrasf";
import { IBGE_DistrictTable } from "../../lib/@types/layouts/general";
import { CancellationCode, Choice, RPS_Type } from "../../lib/@types/layouts/nfse/abrasf/general";

test.todo("Send batch RPS", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.sendBatchRPS({
        LoteRps: {
            $: {
                Id: "",
                versao: "",
            },
            NumeroLote: "",
            Prestador: {
                CpfCnpj: {
                    Cnpj: process.env.CNPJ ?? "99999999000191",
                },
            },
            QuantidadeRps: "1",
            ListaRps: [
                {
                    InfDeclaracaoPrestacaoServico: {
                        $: {
                            Id: "",
                        },
                        Prestador: {
                            CpfCnpj: {
                                Cnpj: process.env.CNPJ ?? "99999999000191",
                            },
                        },
                        Servico: null,
                        Competencia: "01-15-2024",
                        IncentivoFiscal: Choice.NO,
                        OptanteSimplesNacional: Choice.YES,
                    },
                },
            ],
        },
    });

    // assert
    expect(res).toEqual(1);
});

test.todo("Generate", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.generate({
        Rps: {
            InfDeclaracaoPrestacaoServico: {
                $: {
                    Id: "",
                },
                Prestador: {
                    CpfCnpj: {
                        Cnpj: process.env.CNPJ ?? "99999999000191",
                    },
                },
                Servico: null,
                Competencia: "01-15-2024",
                IncentivoFiscal: Choice.NO,
                OptanteSimplesNacional: Choice.YES,
            },
        },
    });

    // assert
    expect(res).toEqual(1);
});

test.todo("Cancel", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.cancel({
        Pedido: {
            InfPedidoCancelamento: {
                IdentificacaoNfse: {
                    CpfCnpj: {
                        Cnpj: process.env.CNPJ ?? "99999999000191",
                    },
                    Numero: "",
                    CodigoMunicipio: IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"],
                },
                CodigoCancelamento: CancellationCode.SERVICE_NOT_PROVIDED,
            },
        },
    });

    // assert
    expect(res).toEqual(1);
});

test.todo("Replace", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.replace({
        SubstituicaoNfse: {
            $: {
                Id: "",
            },
            Rps: {
                InfDeclaracaoPrestacaoServico: {
                    $: {
                        Id: "",
                    },
                    Prestador: {
                        CpfCnpj: {
                            Cnpj: process.env.CNPJ ?? "99999999000191",
                        },
                    },
                    Servico: null,
                    Competencia: "01-15-2024",
                    IncentivoFiscal: Choice.NO,
                    OptanteSimplesNacional: Choice.YES,
                },
            },
            Pedido: {
                InfPedidoCancelamento: {
                    IdentificacaoNfse: {
                        CpfCnpj: {
                            Cnpj: process.env.CNPJ ?? "99999999000191",
                        },
                        Numero: "",
                        CodigoMunicipio: IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"],
                    },
                    CodigoCancelamento: CancellationCode.SERVICE_NOT_PROVIDED,
                },
            },
        },
    });

    // assert
    expect(res).toEqual(1);
});

test.todo("Fetch batch RPS", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.fetchBatchRPS({
        Prestador: {
            CpfCnpj: {
                Cnpj: process.env.CNPJ ?? "99999999000191",
            },
        },
        Protocolo: "",
    });

    // assert
    expect(res).toEqual(1);
});

test.todo("Fetch NFSe RPS", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.fetchNFSeRPS({
        Prestador: {
            CpfCnpj: {
                Cnpj: process.env.CNPJ ?? "99999999000191",
            },
        },
        IdentificacaoRps: {
            Tipo: RPS_Type.RPS,
            Serie: "",
            Numero: "",
        },
    });

    // assert
    expect(res).toEqual(1);
});

test.only("Fetch provided services", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.fetchProvidedServices({
        ConsultarNfseServicoPrestadoEnvio: {
            // $: { xmlns: "http://www.abrasf.org.br/nfse.xsd" },
            Prestador: {
                CpfCnpj: {
                    Cnpj: process.env.CNPJ ?? "",
                },
                InscricaoMunicipal: process.env.IM ?? "",
            },
            PeriodoEmissao: {
                DataFinal: "2022-01-01",
                DataInicial: "2022-01-31",
            },
            Pagina: "1",
        },
    });

    // assert
    expect(res).toEqual(1);
});

test.todo("Fetch taken services", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.fetchTakenServices({
        NumeroNfse: "",
        PeriodoEmissao: {
            DataInicial: "01-15-2024",
            DataFinal: "01-15-2024",
        },
        PeriodoCompetencia: {
            DataInicial: "01-15-2024",
            DataFinal: "01-15-2024",
        },
        Prestador: {
            CpfCnpj: {
                Cnpj: process.env.CNPJ ?? "99999999000191",
            },
        },
        Tomador: {
            CpfCnpj: {
                Cnpj: process.env.CNPJ ?? "99999999000191",
            },
        },
        Intermediario: {
            CpfCnpj: {
                Cnpj: process.env.CNPJ ?? "99999999000191",
            },
        },
        Consulente: {
            CpfCnpj: {
                Cnpj: process.env.CNPJ ?? "99999999000191",
            },
        },
        Pagina: "1",
    });

    // assert
    expect(res).toEqual(1);
});

test.todo("Fetch NFSe range", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.fetchNFSeRange({
        Faixa: {
            NumeroNfseInicial: "",
            NumeroNfseFinal: "",
        },
        Prestador: {
            CpfCnpj: {
                Cnpj: process.env.CNPJ ?? "99999999000191",
            },
        },
        Pagina: "1",
    });

    // assert
    expect(res).toEqual(1);
});
