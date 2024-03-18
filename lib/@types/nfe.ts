import { TtpAmb } from "./layouts/nfe";

export enum UF {
    AC = "AC",
    AL = "AL",
    AP = "AP",
    AM = "AM",
    BA = "BA",
    CE = "CE",
    DF = "DF",
    ES = "ES",
    GO = "GO",
    MA = "MA",
    MT = "MT",
    MS = "MS",
    MG = "MG",
    PA = "PA",
    PB = "PB",
    PR = "PR",
    PE = "PE",
    PI = "PI",
    RJ = "RJ",
    RN = "RN",
    RS = "RS",
    RO = "RO",
    RR = "RR",
    SC = "SC",
    SP = "SP",
    SE = "SE",
    TO = "TO",
}

export type NFEConfig = {
    environment: TtpAmb;
    UF: UF;
};

export interface SefazNFE {
    send(): Promise<void>;

    make_useless(): void;

    fix_letter(): void;

    cancel(): void;
}
