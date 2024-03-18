export enum AccessKeyVersion {
    V400 = "4.00",
    V110 = "1.10",
    V200 = "2.00",
}

export type AccessKeyLayout = {
    UF: string;
    emissionDate: string;
    issuerCNPJ: string;
    model: string;
    serie: string;
    number: string;
    issuanceMode?: string;
    numericCode: string;
    verifyingDigit: string;
};
