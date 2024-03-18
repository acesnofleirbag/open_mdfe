export enum TCodUfIBGE {
    RO = 11,
    AC = 12,
    AM = 13,
    RR = 14,
    PA = 15,
    AP = 16,
    TO = 17,
    MA = 21,
    PI = 22,
    CE = 23,
    RN = 24,
    PB = 25,
    PE = 26,
    AL = 27,
    SE = 28,
    BA = 29,
    MG = 31,
    ES = 32,
    RJ = 33,
    SP = 35,
    PR = 41,
    SC = 42,
    RS = 43,
    MS = 50,
    MT = 51,
    GO = 52,
    DF = 53,
}

export enum TMod {
    NFE = 55,
    NFCE = 65,
}

export enum TtpNF {
    INPUT = 0,
    OUTPUT = 1,
}

export enum TidDest {
    INTERNAL = 1,
    INTERSTATE = 2,
    EXTERIOR = 3,
}

export enum TCodMunIBGE {
    ARACAJU = "2800308",
    BELEM = "1501402",
    BELO_HORIZONTE = "3106200",
    BOA_VISTA = "1400100",
    BRASILIA = "5300108",
    CAMPO_GRANDE = "5002704",
    CUIABA = "5103403",
    CURITIBA = "4106902",
    FLORIANOPOLIS = "4205407",
    FORTALEZA = "2304400",
    GOIANIA = "5208707",
    JOAO_PESSOA = "2507507",
    MACAPA = "1600303",
    MACEIO = "2704302",
    MANAUS = "1302603",
    NATAL = "2408102",
    PALMAS = "1721000",
    PORTO_ALEGRE = "4314902",
    PORTO_VELHO = "1100205",
    RECIFE = "2611606",
    RIO_BRANCO = "1200401",
    RIO_DE_JANEIRO = "3304557",
    SALVADOR = "2927408",
    SAO_LUIS = "2111300",
    SAO_PAULO = "3550308",
    TERESINA = "2211001",
    VITORIA = "3205309",
};

export enum TtpImp {
    NO_DANFE = 0,
    PORTRAIT = 1,
    LANDSCAPE = 2,
    SIMPLIFIED = 3,
    NFCE = 4,
    NFCE_ELETRONIC_MESSAGE = 5,
};

export enum TtpEmis {
    NORMAL = 1,
    CONTINGENCY_FS = 2,
    REGIME_SPECIAL_NFF = 3,
    CONTINGENCY_DPEC = 4,
    CONTINGENCY_FSDA = 5,
    CONTINGENCY_SVCAN = 6,
    CONTINGENCY_SVCRS = 7,
    CONTINGENCY_OFFLINE_NFCE = 9,
};

export enum TtpAmb {
    PRODUCTION = 1,
    HOMOLOGATION = 2,
};

export enum TFinNFe {
    NFE_NORMAL = 1,
    NFE_COMPLEMENTARY = 2,
    NFE_ADJUST = 3,
    DEVOLUTION = 4,
};

export enum TindFinal {
    NO = 0,
    YES = 1,
}

export enum TindPres {
    NOT_APPLY = 0,
    IN_PERSON_OPERATION = 1,
    INTERNET = 2,
    TELESERVICE = 3,
    NFCE_HOME_DELIVERY = 4,
    IN_PERSON_OUTSIDE_ESTABLISHMENT = 5,
    OTHERS = 9,
};

export enum TindIntermed {
    WITHOUT_INTERMEDIARY = 0,
    THIRD_PARTY_PLATFORMS = 1,
};

export enum TProcEmi {
    OWNED_APP = 0,
    SINGLE_BY_TAX_AUTHORITY = 1,
    SINGLE_WITH_DIGITAL_CERTIFICATE_ON_TAX_AUTHORITY_WEBSITE = 2,
    APP_PROVIDED_BY_TAX_AUTHORITY = 3,
};

export enum TrefNFMod {
     MODEL_1_1A = "01",
     MODEL_2 = "02",
};

type TNFref = {
    refNFe: string;
    refNFeSig: string;
    refNF: {
        cUF: TCodUfIBGE;
        AAMM: string;
        CNPJ: string;
        mod: TrefNFMod;
        serie: string;
        nNF: string;
    };
};

export enum TTrefNFPMod {
    SINGLE = "01",
    PRODUCER = "04",
};

type TrefNFP = {
    cUF: TCodUfIBGE;
    AAMM: string;
    IE: "ISENTO" | string;
    mod: TTrefNFPMod;
    serie: string;
    nNF: string;
};

enum TrefECFMod {
    REGISTER_MACHINE_TAX_COUPON = "2B",
    PDV_TAX_COUPON = "2C",
    ECF_TAX_COUPON = "2D",
};

export type TNFe = {
    infNFE: {
        $: { versao: string; Id: string };
        ide: {
            cUF: TCodUfIBGE;
            cNF: string;
            natOp: string;
            mod: TMod;
            serie: string;
            nNF: string;
            dhEmi: Date;
            dhSaiEnt: Date;
            tpNF: TtpNF;
            idDest: TidDest;
            cMunFG: TCodMunIBGE;
            tpImp: TtpImp;
            tpEmis: TtpEmis;
            cDV: string;
            tpAmb: TtpAmb;
            finNFe: TFinNFe;
            indFinal: TindFinal;
            indPres: TindPres;
            indIntermed?: TindIntermed;
            procEmi: TProcEmi;
            verProc: string;
            dhCont?: Date;
            xJust?: string;
            // FIXME: choice type
            NFref?: TNFref[];
            refNFP: TrefNFP & { CNPJ: string; } | TrefNFP & { CPF: string; };
            refCTe: string;
            refECF: {
                mod: TrefECFMod;
                nECF: string;
                nCOO: string;
            };
        };
        emit: null;
        avulsa: null;
        dest: null;
        retirada: null;
        entrega: null;
        autXML: null;
        det: null;
        total: null;
        transp: null;
        cobr: null;
        pag: null;
        infIntermed: null;
        infAdic: null;
        exporta: null;
        compra: null;
        cana: null;
        infRespTec: null;
        infSolicNFF: null;
    };
};

export enum WebServiceMode {
    ASYNC = 0,
    SYNC = 1,
}

export type TEnviNFe = {
    $: { versao: "4.00" };
    idLote: string;
    indSinc: WebServiceMode;
    NFe: TNFe[];
};
