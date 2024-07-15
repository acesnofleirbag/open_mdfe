import { AccessKeyLayout, AccessKeyVersion } from "./@types/accessKey";
import { SefazNFE } from "./@types/layouts/nfe/nfe";
import { Env } from "./core/environments";
import { InvalidAccessKeyError } from "./errors/invalidAccessKeyError";

export class AccessKey {
    private version: AccessKeyVersion;
    private value: string;

    constructor(version: AccessKeyVersion, value: string) {
        if (value.length !== Env.get("ACCESS_KEY_LENGTH")) {
            throw new InvalidAccessKeyError();
        }

        this.value = value;
        this.version = version;
    }

    static fromNFe(NFe: SefazNFE) {
        const payload = NFe.infNFE;

        return (
            payload.ide.cUF +
            new Date(payload.ide.dhEmi)
                .toLocaleString("pt-BR", {
                    month: "2-digit",
                    year: "2-digit",
                })
                .split("/")
                .reverse()
                .join("") +
            // @ts-ignore
            payload.emit.CNPJ +
            payload.ide.mod +
            payload.ide.serie +
            payload.ide.nNF +
            payload.ide.tpEmis +
            payload.ide.cNF +
            payload.ide.cDV
        );
    }

    calculateVerifyingDigit(): number {
        let weight = 2;

        const sum = this.value
            .slice(0, 43)
            .split("")
            .reverse()
            .reduce((a, b) => {
                if (weight > 9) {
                    weight = 2;
                }

                return a + Number(b) * weight++;
            }, 0);

        const rest = sum % 11;

        return 11 - rest;
    }

    getValue(): string {
        return this.value;
    }

    getVersion(): string {
        return this.version;
    }

    getLayout(): AccessKeyLayout {
        switch (this.version) {
            case AccessKeyVersion.V400:
            case AccessKeyVersion.V200:
                return {
                    UF: this.value.slice(0, 2),
                    emissionDate: this.value.slice(2, 6),
                    issuerCNPJ: this.value.slice(6, 20),
                    model: this.value.slice(20, 22),
                    serie: this.value.slice(22, 25),
                    number: this.value.slice(25, 34),
                    issuanceMode: this.value.slice(34, 35),
                    numericCode: this.value.slice(35, 43),
                    verifyingDigit: this.value.slice(43, 44),
                };
            case AccessKeyVersion.V110:
                return {
                    UF: this.value.slice(0, 2),
                    emissionDate: this.value.slice(2, 6),
                    issuerCNPJ: this.value.slice(6, 20),
                    model: this.value.slice(20, 22),
                    serie: this.value.slice(22, 25),
                    number: this.value.slice(25, 34),
                    numericCode: this.value.slice(34, 43),
                    verifyingDigit: this.value.slice(43, 44),
                };
        }
    }
}
