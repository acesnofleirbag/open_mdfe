// schema: TUfEmi
export enum UFIssuer {
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

// schema: TCodUfIBGE
export enum UFCodeIBGE {
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

// schema: TMod
export enum TaxDocumentModel {
    NFE = 55,
    NFCE = 65,
}

export enum TaxDocumentType {
    INPUT = 0,
    OUTPUT = 1,
}

export enum OperationDestinationLocationIdentifier {
    INTERNAL = 1,
    INTERSTATE = 2,
    EXTERIOR = 3,
}

// schema: TCodMunIBGE
export enum CodeCityIBGE {
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
}

export enum DanfePrintFormat {
    NO_DANFE = 0,
    PORTRAIT = 1,
    LANDSCAPE = 2,
    SIMPLIFIED = 3,
    NFCE = 4,
    NFCE_ELETRONIC_MESSAGE = 5,
}

export enum IssuanceMode {
    NORMAL = 1,
    CONTINGENCY_FS = 2,
    REGIME_SPECIAL_NFF = 3,
    CONTINGENCY_DPEC = 4,
    CONTINGENCY_FSDA = 5,
    CONTINGENCY_SVCAN = 6,
    CONTINGENCY_SVCRS = 7,
    CONTINGENCY_OFFLINE_NFCE = 9,
}

export enum EnvironmentIdentifier {
    PRODUCTION = 1,
    HOMOLOGATION = 2,
}

export enum NFEGoal {
    NFE_NORMAL = 1,
    NFE_COMPLEMENTARY = 2,
    NFE_ADJUST = 3,
    DEVOLUTION = 4,
}

export enum OperationWithEndConsumer {
    NO = 0,
    YES = 1,
}

export enum BuyerPresenceOnEstablishmentAtTransactionIndicator {
    NOT_APPLY = 0,
    IN_PERSON_OPERATION = 1,
    INTERNET = 2,
    TELESERVICE = 3,
    NFCE_HOME_DELIVERY = 4,
    IN_PERSON_OUTSIDE_ESTABLISHMENT = 5,
    OTHERS = 9,
}

export enum IntermediaryIndicator {
    WITHOUT_INTERMEDIARY = 0,
    THIRD_PARTY_PLATFORMS = 1,
}

export enum IssuingProcess {
    OWNED_APP = 0,
    SINGLE_BY_TAX_AUTHORITY = 1,
    SINGLE_WITH_DIGITAL_CERTIFICATE_ON_TAX_AUTHORITY_WEBSITE = 2,
    APP_PROVIDED_BY_TAX_AUTHORITY = 3,
}

export enum NFEModel {
    MODEL_1_1A = "01",
    MODEL_2 = "02",
}

export enum ProducerReferencedNFMode {
    SINGLE = "01",
    PRODUCER = "04",
}

export enum TaxCouponGroup {
    REGISTER_MACHINE_TAX_COUPON = "2B",
    PDV_TAX_COUPON = "2C",
    ECF_TAX_COUPON = "2D",
}

type ProducerReferencedNF = {
    cUF: UFCodeIBGE;
    AAMM: string;
    IE: "ISENTO" | string;
    mod: ProducerReferencedNFMode;
    serie: string;
    nNF: string;
};

type ReferencedNFE__Type1 = { refNFe: string };
type ReferencedNFE__Type2 = { refNFeSig: string };
type ReferencedNFE__Type3 = {
    refNF: {
        cUF: UFCodeIBGE;
        AAMM: string;
        CNPJ: string;
        mod: NFEModel;
        serie: string;
        nNF: string;
    };
};
type ReferencedNFE__Type4 = {
    refNFP: (ProducerReferencedNF & { CNPJ: string }) | (ProducerReferencedNF & { CPF: string });
};
type ReferencedNFE__Type5 = { refCTe: string };
type ReferencedNFE__Type6 = {
    refECF: {
        mod: TaxCouponGroup;
        nECF: string;
        nCOO: string;
    };
};

type ReferencedNFE =
    | ReferencedNFE__Type1
    | ReferencedNFE__Type2
    | ReferencedNFE__Type3
    | ReferencedNFE__Type4
    | ReferencedNFE__Type5
    | ReferencedNFE__Type6;

// schema: TEndereco
type Address = {
    xLgr: string;
    nro: string;
    xCpl?: string;
    xBairro: string;
    cMun: CodeCityIBGE;
    xMun: string;
    UF: UFIssuer;
    CEP: string;
    cPais?: "1058";
    xPais?: "Brasil" | "BRASIL";
    fone?: string;
};

export enum TaxRegimeCode {
    SIMPLES_NACIONAL = 1,
    SIMPLES_NACIONAL_EXCESS_SUBLIMIT_RAW_INCOME = 2,
    REGIME_NORMAL = 3,
}

type Issuer = {
    xNome: string;
    xFant?: string;
    enderEmit: Address;
    IE: "ISENTO" | string;
    IEST?: string;
    IM?: string;
    CNAE?: string;
    CRT: TaxRegimeCode;
};

export enum RecipientStateSubscriptionIndicator {
    TAXPAYER_ICMS_CASH_PAYMENT = 1,
    TAXPAYER_EXEMPT_SUBSCRIPTION = 2,
    NON_CONTRIBUTOR = 9,
}

type Recipient = {
    xNome?: string;
    enderDest?: Address;
    indIEDest: RecipientStateSubscriptionIndicator;
    IE?: string;
    ISUF?: string;
    IM?: string;
    email?: string;
};

export enum ProductComposeTotal {
    PRODUCT_NOT_EQUAL_TOTAL_VALUE = 0,
    PRODUCT_EQUAL_TOTAL_VALUE = 1,
}

export enum TransportRoute {
    MARITIME = 1,
    RIVER = 2,
    LACUSTRINE = 3,
    AIR = 4,
    POSTCARD = 5,
    RAILWAY = 6,
    ROAD_STATION = 7,
    CONDUIT = 8,
    OWN_MEANS = 9,
    ENTRY_EXIT_FICTA = 10,
    COURIER = 11,
    IN_HANDS = 12,
    BY_TRAILER = 13,
}

export enum ImportMethod {
    ON_OWN_ACCOUNT = 1,
    ON_ACCOUNT_AND_ORDER = 2,
    ORDER = 3,
}

type __Local = Address & { email?: string; IE?: string };
type Local__Type1 = __Local & { CNPJ: string };
type Local__Type2 = __Local & { CPF: string };

// schema: TLocal
type Local = Local__Type1 | Local__Type2;

type ImportDocument = {
    nDI: string;
    dDI: string;
    xLocDesemb: string;
    UFDesemb: UFIssuer;
    dDesemb: string;
    tpViaTransp: TransportRoute;
    vAFRMM?: string;
    tpIntermedio: ImportMethod;
    UFTerceiro?: UFIssuer;
    cExportador: string;
    adi: {
        nAdicao?: string;
        nSeqAdic: string;
        cFabricante: string;
        vDescDI?: string;
        nDraw?: string;
    }[];
};

type __Product = {
    cProd: string;
    cEAN: "SEM GTIN" | string;
    cBarra?: string;
    xProd: string;
    NCM: string;
    NVE?: string;
    CEST?: string;
    indEscala?: "S" | "N";
    CNPJFab?: string;
    cBenef?: "SEM CBENEF" | string;
    cCredPresumido?: string;
    pCredPresumido?: string;
    vCredPresumido?: string;
    EXTIPI?: string;
    CFOP: string;
    uCom: string;
    qCom: string;
    vUnCom: string;
    vProd: string;
    cEANTrib: "SEM GTIN" | string;
    cBarraTrib?: string;
    uTrib: string;
    qTrib: string;
    vUnTrib: string;
    vFrete?: string;
    vSeg?: string;
    vDesc?: string;
    vOutro?: string;
    indTot: ProductComposeTotal;
    DI?: (ImportDocument & { CPF?: string }) | (ImportDocument & { CNPJ?: string });
    detExport?: {
        nDraw?: string;
        exportInd?: {
            nRE: string;
            chNFe: string;
            qExport: string;
        };
    }[];
    xPed?: string;
    nItemPed?: string;
    nFCI?: string;
    rastro?: {
        nLote: string;
        qLote: string;
        dFab: string;
        dVal: string;
        cAgreg?: string;
    }[];
    infProdNFF?: {
        cProdFisco: string;
        cOperNFF: string;
    };
    infProdEmb?: {
        xEmb: string;
        qVolEmb: string;
        uEmb: string;
    };
};

type Product__Type1 = __Product & {
    veicProd?: {
        tpOp: OperationType;
        chassi: string;
        cCor: string;
        xCor: string;
        pot: string;
        cilin: string;
        pesoL: string;
        pesoB: string;
        nSerie: string;
        tpComb: FuelType;
        nMotor: string;
        CMT: string;
        dist: string;
        anoMod: string;
        anoFab: string;
        tpPint: string;
        tpVeic: string;
        espVeic: string;
        VIN: Vin;
        condVeic: VehicleCondition;
        cMod: string;
        cCorDENATRAN: DENATRANColorCode;
        lota: string;
        tpRest: Restriction;
    };
};
type Product__Type2 = __Product & {
    med?: {
        cProdANVISA: "ISENTO" | string;
        xMotivoIsencao?: string;
        vPMC: string;
    };
};
type Product__Type3 = __Product & {
    arma?: {
        tpArma: FireGunType;
        nSerie: string;
        nCano: string;
        descr: string;
    }[];
};
type Product__Type4 = __Product & {
    comb?: {
        cProdANP: string;
        descANP: string;
        pGLP?: string;
        pGNn?: string;
        pGNi?: string;
        vPart?: string;
        CODIF?: string;
        qTemp?: string;
        UFCons: UFIssuer & "EX";
        CIDE?: {
            qBCProd: string;
            vAliqProd: string;
            vCIDE: string;
        };
        encerrante?: {
            nBico: string;
            nBomba?: string;
            nTanque: string;
            vEncIni: string;
            vEncFin: string;
        };
        pBio?: string;
        origComb?: {
            indImport: ImportIndicator;
            cUFOrig: UFCodeIBGE;
            pOrig: string;
        }[];
    };
};
type Product__Type5 = __Product & {
    nRECOPI: string;
};

type Product = Product__Type1 | Product__Type2 | Product__Type3 | Product__Type4 | Product__Type5;

export enum OperationType {
    OTHERS = 0,
    DEALERSHIP_SALE = 1,
    DIRECT_BILLING = 2,
    DIRECT_SALE = 3,
}

export enum FuelType {
    ALCOHOL = "01",
    GASOLINE = "02",
    DIESEL = "03",
    ALCOHOL_GAS = "16",
    GAS_ALCOHOL_GNV = "17",
    GASOLINE_ELECTRIC = "18",
}

export enum Vin {
    REMARKED = "R",
    NORMAL = "N",
}

export enum VehicleCondition {
    FINISHED = 1,
    UNFINISHED = 2,
    SEMI_FINISHED = 3,
}

export enum DENATRANColorCode {
    YELLOW = "01",
    BLUE = "02",
    BEIGE = "03",
    WHITE = "04",
    GRAY = "05",
    GOLDEN = "06",
    GRENA = "07",
    ORANGE = "08",
    BROWN = "09",
    SILVER = "10",
    BLACK = "11",
    PINK = "12",
    PURPLE = "13",
    GREEN = "14",
    RED = "15",
    FANTASY = "16",
}

export enum Restriction {
    NONE = 0,
    FIDUCIARY_ALIENATION = 1,
    COMMERCIAL_LEASING = 2,
    DOMAIN_RESERVATION = 3,
    VEHICLE_PLEDGE = 4,
    OTHERS = 9,
}

export enum FireGunType {
    PERMITTED = 0,
    RESTRICTED = 1,
}

export enum ImportIndicator {
    NATIONAL = 0,
    IMPORTED = 1,
}

// CST (Código de Situação Tributária)
export enum CST__Type1 {
    CUMULATIVE_NON_CUMULATIVE = "01",
    DIFFERENTIATED_RATE = "02",
}

// CST (Código de Situação Tributária)
export enum CST__Type2 {
    TAXABLE_OPERATION_SINGLE_PHASE_TAXATION_ZERO_RATE = "04",
    TAXABLE_OPERATION_ST = "05",
    TAXABLE_OPERATION_ZERO_RATE = "06",
    OPERATION_EXEMPT_CONTRIBUTION = "07",
    OPERATION_WITHOUT_INCIDENCE_OF_CONTRIBUTION = "08",
    OPERATION_WITH_SUSPENSION_OF_CONTRIBUTION = "09",
}

// CST (Código de Situação Tributária)
export enum CST__Type3 {
    OTHER_OUTBOUND_OPERATIONS = "49",
    OPERATION_WITH_RIGHT_TO_CREDIT_LINKED_EXCLUSIVELY_TO_REVENUE_TAXED_IN_THE_DOMESTIC_MARKET = "50",
    OPERATION_WITH_RIGHT_TO_CREDIT_LINKED_EXCLUSIVELY_TO_NON_TAXED_REVENUE_IN_THE_DOMESTIC_MARKET = "51",
    OPERATION_WITH_RIGHT_TO_CREDIT_LINKED_EXCLUSIVELY_TO_EXPORT_REVENUE = "52",
    OPERATION_WITH_RIGHT_TO_CREDIT_LINKED_TO_TAXED_AND_NON_TAXED_REVENUE_IN_THE_DOMESTIC_MARKET = "53",
    OPERATION_WITH_RIGHT_TO_CREDIT_LINKED_TO_REVENUE_TAXED_IN_THE_DOMESTIC_AND_EXPORT_MARKET = "54",
    OPERATION_WITH_RIGHT_TO_CREDIT_LINKED_TO_NON_TAXED_REVENUE_IN_THE_DOMESTIC_AND_EXPORT_MARKET = "55",
    OPERATION_WITH_RIGHT_TO_CREDIT_LINKED_TO_TAXED_AND_NON_TAXED_REVENUES_IN_THE_DOMESTIC_MARKET_AND_EXPORTS = "56",
    PRESUMED_CREDIT_ACQUISITION_TRANSACTION_LINKED_EXCLUSIVELY_TO_REVENUE_TAXED_IN_THE_DOMESTIC_MARKET = "60",
    PRESUMED_CREDIT_ACQUISITION_TRANSACTION_LINKED_EXCLUSIVELY_TO_NON_TAXED_REVENUE_IN_THE_DOMESTIC_MARKET = "61",
    PRESUMED_CREDIT_ACQUISITION_OPERATION_LINKED_EXCLUSIVELY_TO_EXPORT_REVENUE = "62",
    PRESUMED_CREDIT_ACQUISITION_TRANSACTION_LINKED_TO_TAXED_AND_NON_TAXED_REVENUE_IN_THE_DOMESTIC_MARKET = "63",
    PRESUMED_CREDIT_ACQUISITION_OPERATION_LINKED_TO_TAXED_REVENUES_IN_THE_DOMESTIC_AND_EXPORT_MARKET = "64",
    PRESUMED_CREDIT_ACQUISITION_OPERATION_LINKED_TO_NON_TAXED_REVENUE_IN_THE_DOMESTIC_AND_EXPORT_MARKET = "65",
    PRESUMED_CREDIT_ACQUISITION_OPERATION_LINKED_TO_TAXED_AND_NON_TAXED_REVENUE_IN_THE_DOMESTIC_MARKET_AND_EXPORT = "66",
    PRESUMED_CREDIT_OTHER_OPERATIONS = "67",
    ACQUISITION_OPERATION_WITHOUT_THE_RIGHT_TO_CREDIT = "70",
    ACQUISITION_OPERATION_WITH_EXEMPTION = "71",
    ACQUISITION_OPERATION_WITH_SUSPENSION = "72",
    ZERO_RATE_ACQUISITION_OPERATION = "73",
    ACQUISITION_OPERATION_WITHOUT_INCIDENCE_OF_CONTRIBUTION = "74",
    ACQUISITION_OPERATION_BY_TAX_REPLACEMENT = "75",
    OTHER_ENTRY_OPERATIONS = "98",
    OTHER_OPERATIONS = "99",
}

type TPISOutr = {
    CST: CST__Type3;
    vPIS: string;
};

export enum ICMSInterstateTaxRate {
    FOUR_PERCENT = "4.00",
    SEVEN_PERCENT = "7.00",
    TWELVE_PERCENT = "12.00",
}

type PIS__Type1 = {
    PISAliq: {
        CST: CST__Type1;
        vBC: string;
        pPIS: string;
        vPIS: string;
    };
};
type PIS__Type2 = {
    PISQtde: {
        CST: "03";
        qBCProd: string;
        vAliqProd: string;
        vPIS: string;
    };
};
type PIS__Type3 = {
    PISNT: {
        CST: CST__Type2;
    };
};
type PIS__Type4 = {
    PISOutr: (TPISOutr & { vBC: string; pPIS: string }) | (TPISOutr & { qBCProd: string; vAliqProd: string });
};

type PIS = PIS__Type1 | PIS__Type2 | PIS__Type3 | PIS__Type4;

type PISST = { vPIS: string; indSomaPISST?: ProductComposeTotal };

type COFINSOutr = {
    CST: CST__Type3;
    vCOFINS: string;
};

type CONFINS__Type1 = {
    COFINSAliq: {
        CST: CST__Type1;
        vBC: string;
        pCOFINS: string;
        vCOFINS: string;
    };
};
type CONFINS__Type2 = {
    COFINSQtde: {
        CST: "03";
        qBCProd: string;
        vAliqProd: string;
        vCOFINS: string;
    };
};
type CONFINS__Type3 = {
    COFINSNT: {
        CST: CST__Type2;
    };
};
type CONFINS__Type4 = {
    COFINSOutr: (COFINSOutr & { vBC: string; pCOFINS: string }) | (COFINSOutr & { qBCProd: string; vAliqProd: string });
};

type CONFINS = CONFINS__Type1 | CONFINS__Type2 | CONFINS__Type3 | CONFINS__Type4;

type COFINSST = { vCOFINS: string; indSomaCOFINSST?: ProductComposeTotal };

export enum SpecialTaxRegimeCode {
    I1 = 1,
    I2 = 2,
    I3 = 3,
    I4 = 4,
    I5 = 5,
    I6 = 6,
}

export enum ShippingMethod {
    FREIGHT_CONTRACTING_ON_BEHALF_OF_THE_SENDER_CIF = 0,
    FREIGHT_CONTRACTING_ON_BEHALF_OF_THE_RECIPIENT_SENDER_FOB = 1,
    HIRING_FREIGHT_ON_BEHALF_OF_THIRD_PARTIES = 2,
    OWN_TRANSPORT_EXPENSE_OF_THE_SENDER = 3,
    OWN_TRANSPORT_EXPENSE_OF_THE_RECIPIENT = 4,
    NO_TRANSPORT_OCCURRENCE = 9,
}

type Transporter = {
    xNome?: string;
    IE?: string;
    xEnder?: string;
    xMun?: string;
    UF?: UFIssuer;
};

export enum PaymentMode {
    CASH = 0,
    IN_PARTS = 1,
}

export enum IntegrationTypeInPaymentProcess {
    INTEGRATED = 1,
    NOT_INTEGRATED = 2,
}

export enum ProcessOrigin {
    SEFAZ = 0,
    FEDERAL_JUSTICE = 1,
    STATE_JUSTICE = 2,
    SECEX_RFB = 3,
    CONFAZ = 4,
    OTHERS = 9,
}

export enum ConcessionAct {
    AGREEMENT_TERM = "08",
    SPECIAL_REGIME = "10",
    SPECIFIC_AUTHORIZATION = "12",
    SINIEF_ADJUSTMENT = "14",
    ICMS_AGREEMENT = "15",
}

// schema: TInfRespTec
export type TechnicalResponsible = {
    CNPJ: string;
    xContato: string;
    email: string;
    fone: string;
    idCSRT?: string;
    hashCSRT?: string;
};

// schema: TNFe
export type SefazNFE = {
    infNFE: {
        $: { versao: string; Id: string };
        ide: {
            cUF: UFCodeIBGE;
            cNF: string;
            natOp: string;
            mod: TaxDocumentModel;
            serie: string;
            nNF: string;
            dhEmi: string;
            dhSaiEnt: string;
            tpNF: TaxDocumentType;
            idDest: OperationDestinationLocationIdentifier;
            cMunFG: CodeCityIBGE;
            tpImp: DanfePrintFormat;
            tpEmis: IssuanceMode;
            cDV: string;
            tpAmb: EnvironmentIdentifier;
            finNFe: NFEGoal;
            indFinal: OperationWithEndConsumer;
            indPres: BuyerPresenceOnEstablishmentAtTransactionIndicator;
            indIntermed?: IntermediaryIndicator;
            procEmi: IssuingProcess;
            verProc: string;
            dhCont?: string;
            xJust?: string;
            NFref?: ReferencedNFE[];
        };
        emit: (Issuer & { CNPJ: string }) | (Issuer & { CPF: string });
        avulsa?: {
            CNPJ: string;
            xOrgao: string;
            matr: string;
            xAgente: string;
            fone?: string;
            UF: UFIssuer;
            nDAR?: string;
            dEmi?: string;
            vDAR?: string;
            repEmi: string;
            dPag?: string;
        };
        dest?: (Recipient & { CNPJ: string }) | (Recipient & { CPF: string }) | (Recipient & { idEstrangeiro: string });
        retirada?: Local;
        entrega?: Local;
        autXML?: { CPF: string } | { CNPJ: string };
        det: {
            $: { nItem: string };
            prod: Product;
            imposto: {
                vTotTrib?: string;
                PIS?: PIS;
                PISST?: (PISST & { vBC: string; pPIS: string }) | (PISST & { qBCProd: string; vAliqProd: string });
                COFINS?: CONFINS;
                COFINSST?:
                    | (COFINSST & { vBC: string; pCOFINS: string })
                    | (COFINSST & { qBCProd: string; vAliqProd: string });
                ICMSUFDest?: {
                    vBCUFDest: string;
                    vBCFCPUFDest?: string;
                    pFCPUFDest?: string;
                    pICMSUFDest: string;
                    pICMSInter: ICMSInterstateTaxRate;
                    pICMSInterPart: string;
                    vFCPUFDest?: string;
                    vICMSUFDest: string;
                    vICMSUFRemet: string;
                };
            };
            impostoDevol?: {
                pDevol: string;
                IPI: { vIPIDevol: string };
            };
            infAdProd?: string;
            obsItem?: {
                obsCont?: {
                    xTexto: string;
                    xCampo: string;
                };
                obsFisco: {
                    xTexto: string;
                    xCampo: string;
                };
            };
        }[];
        total: {
            ICMSTot: {
                vBC: string;
                vICMS: string;
                vICMSDeson: string;
                vFCPUFDest?: string;
                vICMSUFDest?: string;
                vICMSUFRemet?: string;
                vFCP: string;
                vBCST: string;
                vST: string;
                vFCPST: string;
                vFCPSTRet: string;
                qBCMono?: string;
                vICMSMono?: string;
                qBCMonoReten?: string;
                vICMSMonoReten?: string;
                qBCMonoRet?: string;
                vICMSMonoRet?: string;
                vProd: string;
                vFrete: string;
                vSeg: string;
                vDesc: string;
                vII: string;
                vIPI: string;
                vIPIDevol: string;
                vPIS: string;
                vCOFINS: string;
                vOutro: string;
                vNF: string;
                vTotTrib?: string;
            };
            ISSQNtot?: {
                vServ?: string;
                vBC?: string;
                vISS?: string;
                vPIS?: string;
                vCOFINS?: string;
                dCompet: string;
                vDeducao?: string;
                vOutro?: string;
                vDescIncond?: string;
                vDescCond?: string;
                vISSRet?: string;
                cRegTrib?: SpecialTaxRegimeCode;
            };
            retTrib?: {
                vRetPIS?: string;
                vRetCOFINS?: string;
                vRetCSLL?: string;
                vBCIRRF?: string;
                vIRRF?: string;
                vBCRetPrev?: string;
                vRetPrev?: string;
            };
        };
        transp: {
            modFrete: ShippingMethod;
            transporta?: (Transporter & { CNPJ?: string }) | (Transporter & { CPF?: string });
            retTransp?: {
                vServ: string;
                vBCRet: string;
                pICMSRet: string;
                vICMSRet: string;
                CFOP: string;
                cMunFG: CodeCityIBGE;
            };
            vol?: {
                qVol?: string;
                esp?: string;
                marca?: string;
                nVol?: string;
                pesoL?: string;
                pesoB?: string;
                lacres: { nLacre: string }[];
            }[];
        };
        cobr?: {
            fat?: {
                nFat?: string;
                vOrig?: string;
                vDesc?: string;
                vLiq?: string;
            };
            dup?: {
                nDup?: string;
                dVenc?: string;
                vDup: string;
            }[];
        };
        pag: {
            detPag: {
                indPag?: PaymentMode;
                tPag: string;
                xPag?: string;
                vPag: string;
                dPag?: string;
                CNPJPag?: string;
                UFPag?: UFIssuer;
                card?: {
                    tpIntegra: IntegrationTypeInPaymentProcess;
                    CNPJ?: string;
                    tBand?: string;
                    cAut?: string;
                    CNPJReceb?: string;
                    idTermPag?: string;
                };
            }[];
            vTroco?: string;
        };
        infIntermed?: {
            CNPJ: string;
            idCadIntTran: string;
        };
        infAdic?: {
            infAdFisco?: string;
            infCpl?: string;
            obsCont?: {
                $: { xCampo: string };
                xTexto: string;
            }[];
            obsFisco?: {
                $: { xCampo: string };
                xTexto: string;
            }[];
            procRef?: {
                nProc: string;
                indProc: ProcessOrigin;
                tpAto?: ConcessionAct;
            }[];
        };
        exporta?: {
            UFSaidaPais: UFIssuer;
            xLocExporta: string;
            xLocDespacho?: string;
        };
        compra?: {
            xNEmp?: string;
            xPed?: string;
            xCont?: string;
        };
        cana?: {
            safra: string;
            ref: string;
            forDia: {
                $: { dia: string };
                qtde: string;
            }[];
            qTotMes: string;
            qTotAnt: string;
            qTotGer: string;
            deduc?: {
                xDed: string;
                vDed: string;
            }[];
            vFor: string;
            vTotDed: string;
            vLiqFor: string;
        };
        infRespTec?: TechnicalResponsible;
        infSolicNFF?: {
            xSolic: string;
        };
    };
};

export enum WebServiceMode {
    ASYNC = 0,
    SYNC = 1,
}

// schema: TEnviNFe
export type RequestGrantAuthorizationToNFE = {
    $: { versao: "4.00" };
    idLote: string;
    indSinc: WebServiceMode;
    NFe: SefazNFE[];
};
