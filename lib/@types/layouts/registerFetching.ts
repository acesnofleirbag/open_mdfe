import { UFCodeIBGE, UFIssuer } from "./nfe";
import { VERSION } from "./version";

type __QueryInformation = {
    verAplic: string;
    cStat: string;
    xMotivo: string;
    UF: UFIssuer & "SU";
    dhCons: string;
    cUF: UFCodeIBGE;
    infCad: {
        IE: string;
        CNPJ: string;
        CPF: string;
        UF: UFIssuer & "EX";
        cSit: "0" | "1";
        indCredNFe: null;
        indCredCTe: null;
        xNome: string;
        xFant?: string;
        xRegApur?: string;
        CNAE?: string;
        dIniAtiv?: string;
        dUltSit?: string;
        dBaixa?: string;
        IEUnica?: string;
        IEAtual?: string;
    }[];
    Ender?: {
        xLgr?: string;
        nro?: string;
        xCpl?: string;
        xBairro?: string;
        cMun?: string;
        xMun?: string;
        CEP?: string;
    };
};

type QueryInformation__Type1 = __QueryInformation & {
    IE: string;
};

type QueryInformation__Type2 = __QueryInformation & {
    CNPJ: string;
};

type QueryInformation__Type3 = __QueryInformation & {
    CPF: string;
};

type QueryInformation = QueryInformation__Type1 | QueryInformation__Type2 | QueryInformation__Type3;

// web service: NfeConsultaCadastro

// schema: TConsCad
export type FetchRegisterRequest = {
    ConsCad: {
        $: { versao: VERSION };
        infCons: {
            xServ: "CONS-CAD";
            UF: UFIssuer & "SU";
            IE: string;
            CNPJ: string;
            CPF: string;
        };
    };
};

// schema: TRetConsCad
export type FetchRegisterResponse = {
    retConsCad: {
        $: { versao: VERSION };
        infCons: QueryInformation;
    };
};
