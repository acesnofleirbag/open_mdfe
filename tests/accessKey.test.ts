import { expect, test } from "vitest";
import { AccessKey } from "../lib/accessKey";
import { AccessKeyVersion } from "../lib/@types/accessKey";

test("calculate verifying digit from access key", () => {
    // arrange
    const accessKey = new AccessKey(AccessKeyVersion.V400, "52060433009911002506550120000007800267301615");

    // act
    const verifyingDigit = accessKey.calculateVerifyingDigit();

    // assert
    expect(verifyingDigit).toEqual(5);
});

test("get access key layout version 4.00", () => {
    // arrange
    const accessKey = new AccessKey(AccessKeyVersion.V400, "52060433009911002506550120000007800267301615");

    // act
    const layout = accessKey.getLayout();

    // assert
    expect(layout).toEqual({
        UF: "52",
        emissionDate: "0604",
        issuerCNPJ: "33009911002506",
        model: "55",
        serie: "012",
        number: "000000780",
        issuanceMode: "0",
        numericCode: "26730161",
        verifyingDigit: "5",
    });
});

test("get access key layout version 2.00", () => {
    // arrange
    const accessKey = new AccessKey(AccessKeyVersion.V200, "52060433009911002506550120000007800267301615");

    // act
    const layout = accessKey.getLayout();

    // assert
    expect(layout).toEqual({
        UF: "52",
        emissionDate: "0604",
        issuerCNPJ: "33009911002506",
        model: "55",
        serie: "012",
        number: "000000780",
        issuanceMode: "0",
        numericCode: "26730161",
        verifyingDigit: "5",
    });
});

test("get access key layout version 1.10", () => {
    // arrange
    const accessKey = new AccessKey(AccessKeyVersion.V110, "52060433009911002506550120000007800267301615");

    // act
    const layout = accessKey.getLayout();

    // assert
    expect(layout).toEqual({
        UF: "52",
        emissionDate: "0604",
        issuerCNPJ: "33009911002506",
        model: "55",
        serie: "012",
        number: "000000780",
        numericCode: "026730161",
        verifyingDigit: "5",
    });
});
