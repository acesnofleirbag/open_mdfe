import { version as __VERSION__ } from "../package.json";
import { expect, test } from "vitest";
import { ABRASF_Service } from "../lib/services/abrasf";
import { IBGE_DistrictTable } from "../lib/@types/layouts/general";

test.todo("Send batch RPS", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.sendBatchRPS({});

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
    const res = await sut.generate({});

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
    const res = await sut.cancel({});

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
    const res = await sut.replace({});

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
    const res = await sut.fetchBatchRPS({});

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
    const res = await sut.fetchNFSeRPS({});

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
        ConsultarNfseServicoTomadoEnvio: {
            // $: { xmlns: "http://www.abrasf.org.br/nfse.xsd" },
            Tomador: {
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

test.todo("Fetch NFSe range", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sut = new ABRASF_Service(cert, IBGE_DistrictTable["VITORIA_DA_CONQUISTA-BA"]);

    // act
    const res = await sut.fetchNFSeRange({});

    // assert
    expect(res).toEqual(1);
});
