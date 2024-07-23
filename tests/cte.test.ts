import { EnvironmentIdentifier, UFIssuer } from "../lib/@types/layouts/general";
import { CTeSEFAZ } from "../lib/sefaz";
import { version as __VERSION__ } from "../package.json";
import { expect, test } from "vitest";

test("Request transport authorization", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new CTeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act

    // assert
    expect(1).toEqual(1);
});

test("Request other services authorization", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new CTeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act

    // assert
    expect(1).toEqual(1);
});

test("Request GTVe authorization", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new CTeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act

    // assert
    expect(1).toEqual(1);
});

test("Fetch CTE", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new CTeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act

    // assert
    expect(1).toEqual(1);
});

test("Check service status", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new CTeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act

    // assert
    expect(1).toEqual(1);
});

test("Query registration", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new CTeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act

    // assert
    expect(1).toEqual(1);
});

test("Register event", async () => {
    // arrange
    const cert = {
        pfx: __dirname + "/cert/cert.pfx",
        pass: process.env.CERT_PASS ?? "",
    };
    const sefaz = new CTeSEFAZ(EnvironmentIdentifier.HOMOLOGATION, UFIssuer.SP, cert);

    // act

    // assert
    expect(1).toEqual(1);
});
