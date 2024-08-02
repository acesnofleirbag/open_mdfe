import { CodeCityIBGE, EnvironmentIdentifier, UFCodeIBGE, UFIssuer } from "../general";
import { VERSION } from "../version";

// schema: TCOrgaoIBGE
export enum IBGEOrganCode {
    RO = "11",
    AC = "12",
    AM = "13",
    RR = "14",
    PA = "15",
    AP = "16",
    TO = "17",
    MA = "21",
    PI = "22",
    CE = "23",
    RN = "24",
    PB = "25",
    PE = "26",
    AL = "27",
    SE = "28",
    BA = "29",
    MG = "31",
    ES = "32",
    RJ = "33",
    SP = "35",
    PR = "41",
    SC = "42",
    RS = "43",
    MS = "50",
    MT = "51",
    GO = "52",
    DF = "53",
    // NOTE: Cannot detect values keys on the official specs
    S90 = "90",
    S91 = "91",
    S92 = "92",
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

export enum NF_ProducerRefMode {
    SINGLE = "01",
    PRODUCER = "04",
}

export enum TaxCouponGroup {
    REGISTER_MACHINE_TAX_COUPON = "2B",
    PDV_TAX_COUPON = "2C",
    ECF_TAX_COUPON = "2D",
}

export enum TaxRegimeCode {
    SIMPLES_NACIONAL = 1,
    SIMPLES_NACIONAL_EXCESS_SUBLIMIT_RAW_INCOME = 2,
    REGIME_NORMAL = 3,
}

export enum RecipientStateSubscriptionIndicator {
    TAXPAYER_ICMS_CASH_PAYMENT = 1,
    TAXPAYER_EXEMPT_SUBSCRIPTION = 2,
    NON_CONTRIBUTOR = 9,
}

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

export enum ICMSInterstateTaxRate {
    FOUR_PERCENT = "4.00",
    SEVEN_PERCENT = "7.00",
    TWELVE_PERCENT = "12.00",
}

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

export enum PaymentIndicator {
    CASH = 0,
    IN_PARTS = 1,
}

export enum PaymentMode {
    MONEY = "01",
    CHECK = "02",
    CREDIT_CARD = "03",
    DEBIT_CARD = "04",
    STORE_CREDIT = "05",
    FOOD_VOUCHER = "10",
    MEAL_VOUCHER = "11",
    GIFT_VOUCHER = "12",
    FUEL_VOUCHER = "13",
    COMMERCIAL_DUPLICATE = "14",
    BANK_SLIP = "15",
    BANK_DEPOSIT = "16",
    INSTANT_PAYMENT_PIX = "17",
    BANK_TRANSFER_DIGITAL_WALLET = "18",
    LOYALTY_PROGRAM_CASHBACK_VIRTUAL_CREDIT = "19",
    NO_PAYMENT = "90",
    OTHERS = "99",
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

export enum MerchandiseOrigin {
    NATIONAL_EXCEPT_THOSE_INDICATED_IN_CODES_3_4_5_8 = 0,
    FOREIGN_DIRECT_IMPORT = 1,
    FOREIGN_ACQUIRED_ON_THE_DOMESTIC_MARKET = 2,
    NATIONAL_CONTENT_GREATER_THAN_40_PERCENT_AND_LESS_THAN_OR_EQUAL_TO_70_PERCENT = 3,
    NATIONAL_BASIC_PRODUCTION_PROCESSES = 4,
    NATIONAL_CONTENT_LOWER_THAN_40_PERCENT = 5,
    FOREIGN_DIRECT_IMPORT_WITH_NATIONAL_SIMILAR_CAMEX_LIST = 6,
    FOREIGN_DOMESTIC_MARKET_WITHOUT_SIMULATING_CAMEX_LIST = 7,
    NATIONAL_IMPORT_CONTENT_GREATER_THAN_70_PERCENT = 8,
}

export enum DeterminationMethod__Type1 {
    ADDED_VALUE_MARGIN_PERCENT = 0,
    TARIFF_VALUE = 1,
    MAXIMUM_LISTED_PRICE_VALUE = 2,
    TRANSACTION_VALUE = 3,
}

export enum DeterminationMethod__Type2 {
    LISTED_PRICE_OR_MAXIMUM_SUGGESTED_PRICE = 0,
    NEGATIVE_LIST_VALUE = 1,
    POSITIVE_LIST_VALUE = 2,
    NEUTRAL_LIST_VALUE = 3,
    ADDED_VALUE_MARGIN_PERCENT = 4,
    TARIFF_VALUE = 5,
    OPERATION_VALUE = 6,
}

export enum ExemptionReason__Type1 {
    USE_IN_AGRICULTURE = 3,
    OTHERS = 9,
    AGRICULTURAL_PROMOTION = 12,
}

export enum ExemptionReason__Type2 {
    MOTORCYCLE_UTILITIES_IN_FREE_AREA = 6,
    SUFRAMA = 7,
    OTHERS = 9,
}

export enum ExemptionReason__Type3 {
    TAXI = "1",
    AGRICULTURAL_PRODUCER = "3",
    FLEET_OWNER_LESSOR = "4",
    DIPLOMATIC_CONSULAR = "5",
    UTILITIES_AND_MOTORCYCLES_IN_THE_WESTERN_AMAZON_AND_FREE_TRADE_AREAS = "6",
    SUFRAMA = "7",
    SALE_TO_A_PUBLIC_BODY = "8",
    OTHERS = "9",
    DISABLED_DRIVER = "10",
    NON_DRIVER_DISABLED = "11",
    RIO_2016_OLYMPICS = "16",
    TAX_AUTHORITIES_REQUESTED = "90",
}

export enum ItemValueDeduction {
    NO = 0,
    YES = 1,
}

export enum ICMSCST {
    FULLY_TAXED = "00",
    OWN_SINGLE_PHASE_TAXATION_ON_FUELS = "02",
    TAXED_AND_CHARGED_WITH_ICMS_FOR_TAX_SUBSTITUTION = "10",
    OWN_SINGLE_PHASE_TAXATION_AND_RESPONSIBILITY_FOR_WITHHOLDING_ON_FUELS = "15",
    WITH_REDUCTION_IN_CALCULATION_BASE = "20",
    EXEMPT_OR_NOT_TAXED_AND_CHARGED_WITH_ICMS_FOR_TAX_SUBSTITUTION = "30",
    EXEMPT = "40",
    NOT_TAXED = "41",
    SUSPENSION = "50",
    DEFERRAL = "51",
    SINGLE_PHASE_TAXATION_ON_FUELS_WITH_DEFERRED_COLLECTION = "53",
    ICMS_PREVIOUSLY_CHARGED_BY_TAX_SUBSTITUTION = "60",
    SINGLE_PHASE_TAXATION_ON_FUELS_PREVIOUSLY_CHARGED = "61",
    WITH_REDUCTION_IN_THE_CALCULATION_BASE_AND_COLLECTION_OF_ICMS_FOR_TAX_SUBSTITUTION = "70",
    OTHERS = "90",
}

export enum CSOSN {
    TAXED_BY_SIMPLES_NACIONAL_WITH_CREDIT_PERMISSION = "101",
    TAXED_BY_SIMPLES_NACIONAL_WITHOUT_CREDIT_PERMISSION = "102",
    ICMS_EXEMPTION_IN_SIMPLES_NACIONAL_FOR_GROSS_REVENUE_RANGE = "103",
    TAXED_BY_SIMPLES_NACIONAL_WITH_CREDIT_PERMISSION_AND_ICMS_CHARGED_BY_TAX_REPLACEMENT = "201",
    TAXED_BY_SIMPLES_NACIONAL_WITHOUT_CREDIT_PERMISSION_AND_WITH_ICMS_CHARGED_FOR_TAX_REPLACEMENT = "202",
    EXEMPTION_FROM_ICMS_IN_SIMPLES_NACIONAL_FOR_GROSS_REVENUE_RANGE_AND_WITH_ICMS_COLLECTION_FOR_TAX_REPLACEMENT = "203",
    IMMUNE = "300",
    NOT_TAXED_BY_SIMPLES_NACIONAL = "400",
    ICMS_PREVIOUSLY_CHARGED_BY_TAX_SUBSTITUTION_REPLACED_OR_BY_ADVANCE_TAXATION_BY_ICMS = "500",
    OTHERS = "900",
}

export enum IPITaxStatusCode {
    ENTRY_WITH_CREDIT_RECOVERY = "00",
    INPUT_TAXED_AT_ZERO_RATE = "01",
    EXEMPT_ENTRY = "02",
    NON_TAXED_ENTRY = "03",
    IMMUNE_ENTRY = "04",
    ENTRY_WITH_SUSPENSION = "05",
    OTHER_ENTRIES = "49",
    TAXED_EXIT = "50",
    OUTPUT_TAXED_AT_ZERO_RATE = "51",
    EXEMPT_EXIT = "52",
    UNTAXED_EXIT = "53",
    IMMUNE_EXIT = "54",
    EXIT_WITH_SUSPENSION = "55",
    OTHER_OUTPUTS = "99",
}

export enum ExibilidadeISS {
    REQUIRABLE = 1,
    NO_INCIDENT = 2,
    EXEMPTION = 3,
    EXPORT = 4,
    IMMUNITY = 5,
    REQUIREMENT_SUSP_JUDICIAL = 6,
    REQUIREMENT_SUSP_ADM = 7,
}

export enum TaxIncentiveIndicator {
    YES = 1,
    NO = 2,
}

export enum AdremReductionReason {
    PUBLIC_PASSENGER_TRANSPORT = 1,
    OTHERS = 9,
}

export enum WebServiceMode {
    ASYNC = 0,
    SYNC = 1,
}

type NF_Ref__Type1 = {
    /** Chave de acesso das NF-e referenciadas. Chave de acesso compostas por Código da UF (tabela do IBGE) + AAMM da
     * emissão + CNPJ do Emitente + modelo, série e número da NF-e Referenciada + Código Numérico + DV */
    refNFe: string;
};

type NF_Ref__Type2 = {
    /** Referencia uma NF-e (modelo 55) emitida anteriormente pela sua Chave de Acesso com código numérico zerado,
     * permitindo manter o sigilo da NF-e referenciada */
    refNFeSig: string;
};

type NF_Ref__Type3 = {
    /** Dados da NF modelo 1/1A referenciada ou NF modelo 2 referenciada */
    refNF: {
        /** Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE */
        cUF: UFCodeIBGE;
        /** AAMM da emissão */
        AAMM: string;
        /** CNPJ do emitente do documento fiscal referenciado */
        CNPJ: string;
        /** Código do modelo do Documento Fiscal. Utilizar 01 para NF modelo 1/1A e 02 para NF modelo 02 */
        mod: NFEModel;
        /** Série do Documento Fiscal, informar zero se inexistente */
        serie: string;
        /** Número do Documento Fiscal */
        nNF: string;
    };
};

type NF_ProducerRef__Type1 = {
    /** Código da UF do emitente do Documento FiscalUtilizar a Tabela do IBGE (Anexo IV - Tabela de UF, Município e
     * País)
     */
    cUF: UFCodeIBGE;
    /** AAMM da emissão da NF de produtor */
    AAMM: string;
    /** CNPJ do emitente da NF de produtor */
    CNPJ: string;
    /** IE do emitente da NF de Produtor */
    IE: "ISENTO" | string;
    /** Código do modelo do Documento Fiscal - utilizar 04 para NF de produtor ou 01 para NF Avulsa */
    mod: NF_ProducerRefMode;
    /** Série do Documento Fiscal, informar zero se inexistentesérie */
    serie: string;
    /** Número do Documento Fiscal - 1 – 999999999 */
    nNF: string;
};

type NF_ProducerRef__Type2 = {
    /** Código da UF do emitente do Documento FiscalUtilizar a Tabela do IBGE (Anexo IV - Tabela de UF, Município e
     * País)
     */
    cUF: UFCodeIBGE;
    /** AAMM da emissão da NF de produtor */
    AAMM: string;
    /** CPF do emitente da NF de produtor */
    CPF: string;
    /** IE do emitente da NF de Produtor */
    IE: "ISENTO" | string;
    /** Código do modelo do Documento Fiscal - utilizar 04 para NF de produtor ou 01 para NF Avulsa */
    mod: NF_ProducerRefMode;
    /** Série do Documento Fiscal, informar zero se inexistentesérie */
    serie: string;
    /** Número do Documento Fiscal - 1 – 999999999 */
    nNF: string;
};

type NF_Ref__Type4 = {
    /** Grupo com as informações NF de produtor referenciada */
    refNFP: NF_ProducerRef__Type1 | NF_ProducerRef__Type2;
};

type NF_Ref__Type5 = {
    /** Utilizar esta TAG para referenciar um CT-e emitido anteriormente, vinculada a NF-e atual */
    refCTe: string;
};

type NF_Ref__Type6 = {
    /** Grupo do Cupom Fiscal vinculado à NF-e */
    refECF: {
        /** Código do modelo do Documento Fiscal Preencher com "2B", quando se tratar de Cupom Fiscal emitido por
         * máquina registradora (não ECF), com "2C", quando se tratar de Cupom Fiscal PDV, ou "2D", quando se tratar de
         * Cupom Fiscal (emitido por ECF)
         */
        mod: TaxCouponGroup;
        /** Informar o número de ordem seqüencial do ECF que emitiu o Cupom Fiscal vinculado à NF-e */
        nECF: string;
        /** Informar o Número do Contador de Ordem de Operação - COO vinculado à NF-e */
        nCOO: string;
    };
};

type NF_Ref = NF_Ref__Type1 | NF_Ref__Type2 | NF_Ref__Type3 | NF_Ref__Type4 | NF_Ref__Type5 | NF_Ref__Type6;

// schema: TEndereco
type Address = {
    /** Logradouro */
    xLgr: string;
    /** Número */
    nro: string;
    /** Complemento */
    xCpl?: string;
    /** Bairro */
    xBairro: string;
    /** Código do município */
    cMun: CodeCityIBGE;
    /** Nome do município */
    xMun: string;
    /** Sigla da UF */
    UF: UFIssuer;
    /** CEP - NT 2011/004 */
    CEP: string;
    /** Código do país */
    cPais?: "1058";
    /** Nome do país */
    xPais?: "Brasil" | "BRASIL";
    /** Preencher com Código DDD + número do telefone (v.2.0) */
    fone?: string;
};

type __Issuer = {
    /** Razão Social ou Nome do emitente */
    xNome: string;
    /** Nome fantasia */
    xFant?: string;
    /** Endereço do emitente */
    enderEmit: Address;
    /** Inscrição Estadual do Emitente */
    IE: "ISENTO" | string;
    /** Inscricao Estadual do Substituto Tributário */
    IEST?: string;
    /** Inscrição Municipal */
    IM?: string;
    /** CNAE Fiscal */
    CNAE?: string;
    /** Código de Regime Tributário.
     * Este campo será obrigatoriamente preenchido com:
     * 1 | Simples Nacional
     * 2 | Simples Nacional – excesso de sublimite de receita bruta
     * 3 | Regime Normal
     */
    CRT: TaxRegimeCode;
};

type Issuer__Type1 = {
    /** Número do CNPJ do emitente */
    CNPJ: string;
} & __Issuer;

type Issuer__Type2 = {
    /** Número do CPF do emitente */
    CPF: string;
} & __Issuer;

type Issuer = Issuer__Type1 | Issuer__Type2;

type __Recipient = {
    /** Razão Social ou nome do destinatário */
    xNome?: string;
    /** Dados do endereço */
    enderDest?: Address;
    /** Indicador da IE do destinatário:
     * 1 – Contribuinte ICMS, pagamento à vista
     * 2 – Contribuinte isento de inscrição
     * 9 – Não Contribuinte
     */
    indIEDest: RecipientStateSubscriptionIndicator;
    /** Inscrição Estadual (obrigatório nas operações com contribuintes do ICMS) */
    IE?: string;
    /** Inscrição na SUFRAMA (Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle
     * da SUFRAMA) PL_005d - 11/08/09 - alterado para aceitar 8 ou 9 dígitos
     */
    ISUF?: string;
    /** Inscrição Municipal do tomador do serviço */
    IM?: string;
    /** Informar o e-mail do destinatário. O campo pode ser utilizado para informar o e-mail de recepção da NF-e
     * indicada pelo destinatário
     */
    email?: string;
};

type Recipient__Type1 = {
    /** Número do CNPJ */
    CNPJ: string;
} & __Recipient;

type Recipient__Type2 = {
    /** Número do CPF */
    CPF: string;
} & __Recipient;

type Recipient__Type3 = {
    /** Identificador do destinatário, em caso de comprador estrangeiro */
    idEstrangeiro: string;
} & __Recipient;

type Recipient = Recipient__Type1 | Recipient__Type2 | Recipient__Type3;

type __Local = Address & {
    /** Informar o e-mail do expedidor/Recebedor. O campo pode ser utilizado para informar o e-mail de recepção da NF-e
     * indicada pelo expedidor
     */
    email?: string;
    /** Inscrição Estadual (v2.0) */
    IE?: string;
};

type Local__Type1 = {
    /** CNPJ */
    CNPJ: string;
    /** Razão Social ou Nome do Expedidor/Recebedor */
    xNome?: string;
} & __Local;

type Local__Type2 = {
    /** CPF */
    CPF: string;
    /** Razão Social ou Nome do Expedidor/Recebedor */
    xNome?: string;
} & __Local;

// schema: TLocal
type Local = Local__Type1 | Local__Type2;

type ImportDocument = {
    /** Número do Documento de Importação (DI, DSI, DIRE, DUImp) (NT2011/004) */
    nDI: string;
    /** Data de registro da DI/DSI/DA (AAAA-MM-DD) */
    dDI: string;
    /** Local do desembaraço aduaneiro */
    xLocDesemb: string;
    /** UF onde ocorreu o desembaraço aduaneiro */
    UFDesemb: UFIssuer;
    /** Data do desembaraço aduaneiro (AAAA-MM-DD) */
    dDesemb: string;
    /** Via de transporte internacional informada na DI ou na Declaração Única de Importação (DUImp):
     * 1 | Maritima
     * 2 | Fluvial
     * 3 | Lacustre
     * 4 | Aerea
     * 5 | Postal
     * 6 | Ferroviaria
     * 7 | Rodoviaria
     * 8 | Conduto
     * 9 | Meios Proprios
     * 10 | Entrada/Saida Ficta
     * 11 | Courier
     * 12 | Em maos
     * 13 | Por reboque
     */
    tpViaTransp: TransportRoute;
    /** Valor Adicional ao frete para renovação de marinha mercante */
    vAFRMM?: string;
    /** Forma de Importação quanto a intermediação:
     * 1 | por conta propria
     * 2 | por conta e ordem
     * 3 | encomenda
     */
    tpIntermedio: ImportMethod;
    /** Sigla da UF do adquirente ou do encomendante */
    UFTerceiro?: UFIssuer;
    /** Código do exportador (usado nos sistemas internos de informação do emitente da NF-e) */
    cExportador: string;
    /** Adições (NT 2011/004) */
    adi: {
        /** Número da Adição */
        nAdicao?: string;
        /** Número seqüencial do item */
        nSeqAdic: string;
        /** Código do fabricante estrangeiro (usado nos sistemas internos de informação do emitente da NF-e) */
        cFabricante: string;
        /** Valor do desconto do item */
        vDescDI?: string;
        /** Número do ato concessório de Drawback */
        nDraw?: string;
    }[];
};

type __Product = {
    /** Código do produto ou serviço. Preencher com CFOP caso se trate de itens não relacionados com mercadorias/produto
     * e que o contribuinte não possua codificação própria Formato ”CFOP9999”
     */
    cProd: string;
    /** GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras */
    cEAN: "SEM GTIN" | string;
    /** Codigo de barras diferente do padrão GTIN */
    cBarra?: string;
    /** Descrição do produto ou serviço */
    xProd: string;
    /** Código NCM (8 posições), será permitida a informação do gênero (posição do capítulo do NCM) quando a operação
     * não for de comércio exterior (importação/exportação) ou o produto não seja tributado pelo IPI. Em caso de item de
     * serviço ou item que não tenham produto (Ex. transferência de crédito, crédito do ativo imobilizado, etc.),
     * informar o código 00 (zeros) (v2.0)
     */
    NCM: string;
    /** Nomenclatura de Valor aduaneio e Estatístico */
    NVE?: string[];
    /** Codigo especificador da Substituicao Tributaria - CEST, que identifica a mercadoria sujeita aos regimes de
     * substituicao tributária e de antecipação do recolhimento do imposto
     */
    CEST?: string;
    indEscala?: "S" | "N";
    /** CNPJ do Fabricante da Mercadoria, obrigatório para produto em escala NÃO relevante. */
    CNPJFab?: string;
    cBenef?: "SEM CBENEF" | string;
    /** Código de Benefício Fiscal de Crédito Presumido na UF aplicado ao item */
    cCredPresumido?: string;
    /** Percentual do Crédito Presumido */
    pCredPresumido?: string;
    /** Valor do Crédito Presumido */
    vCredPresumido?: string;
    /** Código EX TIPI (3 posições) */
    EXTIPI?: string;
    /** Código Fiscal de Operações e Prestações */
    CFOP: string;
    /** Unidade comercial */
    uCom: string;
    /** Quantidade Comercial do produto, alterado para aceitar de 0 a 4 casas decimais e 11 inteiros. */
    qCom: string;
    /** Valor unitário de comercialização, alterado para aceitar 0 a 10 casas decimais e 11 inteiros */
    vUnCom: string;
    /** Valor bruto do produto ou serviço */
    vProd: string;
    /** GTIN (Global Trade Item Number) da unidade tributável, antigo código EAN ou código de barras */
    cEANTrib: "SEM GTIN" | string;
    /** Código de barras da unidade tributável diferente do padrão GTIN */
    cBarraTrib?: string;
    /** Unidade Tributável */
    uTrib: string;
    /** Quantidade Tributável, alterado para aceitar de 0 a 4 casas decimais e 11 inteiros */
    qTrib: string;
    /** Valor unitário de tributação, alterado para aceitar 0 a 10 casas decimais e 11 inteiros */
    vUnTrib: string;
    /** Valor Total do Frete */
    vFrete?: string;
    /** Valor Total do Seguro */
    vSeg?: string;
    /** Valor do Desconto */
    vDesc?: string;
    /** Outras despesas acessórias */
    vOutro?: string;
    /** Este campo deverá ser preenchido com:
     * 0 | o valor do item (vProd) não compõe o valor total da NF-e (vProd)
     * 1 | o valor do item (vProd) compõe o valor total da NF-e (vProd)
     */
    indTot: ProductComposeTotal;
    /** Declaração de Importação (NT 2011/004) */
    DI?: ((ImportDocument & { CPF?: string }) | (ImportDocument & { CNPJ?: string }))[];
    /** Detalhe da exportação */
    detExport?: {
        /** Número do ato concessório de Drawback */
        nDraw?: string;
        /** Exportação indireta */
        exportInd?: {
            /** Registro de exportação */
            nRE: string;
            /** Chave de acesso da NF-e recebida para exportação */
            chNFe: string;
            /** Quantidade do item efetivamente exportado */
            qExport: string;
        };
    }[];
    /** Pedido de compra: Informação de interesse do emissor para controle do B2B. */
    xPed?: string;
    /** Número do Item do Pedido de Compra - Identificação do número do item do pedido de Compra */
    nItemPed?: string;
    /** Número de controle da FCI - Ficha de Conteúdo de Importação. */
    nFCI?: string;
    rastro?: {
        /** Número do lote do produto */
        nLote: string;
        /** Quantidade de produto no lote */
        qLote: string;
        /** Data de fabricação/produção. Formato "AAAA-MM-DD" */
        dFab: string;
        /** Data de validade. Informar o último dia do mês caso a validade não especifique o dia. Formato "AAAA-MM-DD". */
        dVal: string;
        cAgreg?: string;
    }[];
    /** Informações mais detalhadas do produto (usada na NFF) */
    infProdNFF?: {
        /** Código Fiscal do Produto */
        cProdFisco: string;
        /** Código da operação selecionada na NFF e relacionada ao item */
        cOperNFF: string;
    };
    /** Informações mais detalhadas do produto (usada na NFF) */
    infProdEmb?: {
        /** Embalagem do produto */
        xEmb: string;
        /** Volume do produto na embalagem */
        qVolEmb: string;
        /** Unidade de Medida da Embalagem */
        uEmb: string;
    };
};

type Product__Type1 = __Product & {
    /** Veículos novos */
    veicProd?: {
        /** Tipo da Operação:
         * 1 | Venda concessionária
         * 2 | Faturamento direto
         * 3 | Venda direta
         * 0 | Outros
         */
        tpOp: OperationType;
        /** Chassi do veículo - VIN (Código Identificação Veículo) */
        chassi: string;
        /** Cor do veículo (código de cada montadora) */
        cCor: string;
        /** Descrição da cor */
        xCor: string;
        /** Potência máxima do motor do veículo em cavalo vapor (CV). (potência-veículo) */
        pot: string;
        /** Capacidade voluntária do motor expressa em centímetros cúbicos (CC). (cilindradas) */
        cilin: string;
        /** Peso líquido */
        pesoL: string;
        /** Peso bruto */
        pesoB: string;
        /** Serial (série) */
        nSerie: string;
        /** Tipo de combustível (Tabela RENAVAM):
         * 01 | Álcool;
         * 02 | Gasolina;
         * 03 | Diesel;
         * 16 | Álcool/Gas.;
         * 17 | Gas./Álcool/GNV;
         * 18 | Gasolina/Elétrico
         */
        tpComb: FuelType;
        /** Número do motor */
        nMotor: string;
        /** CMT (Capacidade Máxima de Tração) em Toneladas 4 casas decimais */
        CMT: string;
        /** Distância entre eixos */
        dist: string;
        /** Ano Modelo de Fabricação */
        anoMod: string;
        /** Ano de Fabricação */
        anoFab: string;
        /** Tipo de pintura */
        tpPint: string;
        /** Tipo de veículo (utilizar tabela RENAVAM) */
        tpVeic: string;
        /** Espécie de veículo (utilizar tabela RENAVAM) */
        espVeic: string;
        /** Informa-se o veículo tem VIN (chassi) remarcado:
         * R | Remarcado
         * N | NormalVIN */
        VIN: Vin;
        /** Condição do veículo:
         * 1 | acabado
         * 2 | inacabado
         * 3 | semi-acabado
         */
        condVeic: VehicleCondition;
        /** Código Marca Modelo (utilizar tabela RENAVAM) */
        cMod: string;
        /** Código da Cor Segundo as regras de pré-cadastro do DENATRAN:
         * 01 | AMARELO;
         * 02 | AZUL;
         * 03 | BEGE;
         * 04 | BRANCA;
         * 05 | CINZA;
         * 06 | DOURADA;
         * 07 | GRENA
         * 08 | LARANJA;
         * 09 | MARROM;
         * 10 | PRATA;
         * 11 | PRETA;
         * 12 | ROSA;
         * 13 | ROXA;
         * 14 | VERDE;
         * 15 | VERMELHA;
         * 16 | FANTASIA
         */
        cCorDENATRAN: DENATRANColorCode;
        /** Quantidade máxima de permitida de passageiros sentados, inclusive motorista */
        lota: string;
        /** Restrição:
         * 0 | Não há
         * 1 | Alienação Fiduciária
         * 2 | Arrendamento Mercantil
         * 3 | Reserva de Domínio
         * 4 | Penhor de Veículos
         * 9 | outras
         */
        tpRest: Restriction;
    };
};
type Product__Type2 = __Product & {
    /** grupo do detalhamento de Medicamentos e de matérias-primas farmacêuticas */
    med?: {
        /** Utilizar o número do registro ANVISA ou preencher com o literal “ISENTO”, no caso de medicamento isento de
         * registro na ANVISA
         */
        cProdANVISA: "ISENTO" | string;
        /** Obs: Para medicamento isento de registro na ANVISA, informar o número da decisão que o isenta, como por
         * exemplo o número da Resolução da Diretoria Colegiada da ANVISA (RDC)
         */
        xMotivoIsencao?: string;
        /** Preço Máximo ao Consumidor */
        vPMC: string;
    };
};
type Product__Type3 = __Product & {
    /** Armamentos */
    arma?: {
        /** Indicador do tipo de arma de fogo
         * 0 | Uso permitido
         * 1 | Uso restrito
         */
        tpArma: FireGunType;
        /** Número de série da arma */
        nSerie: string;
        /** Número de série do cano */
        nCano: string;
        /** Descrição completa da arma, compreendendo: calibre, marca, capacidade, tipo de funcionamento, comprimento e
         * demais elementos que permitam a sua perfeita identificação
         */
        descr: string;
    }[];
};
type Product__Type4 = __Product & {
    /** Informar apenas para operações com combustíveis líquidos */
    comb?: {
        /** Código de produto da ANP. codificação de produtos do SIMP <http://www.anp.gov.br> */
        cProdANP: string;
        /** Descrição do Produto conforme ANP. Utilizar a descrição de produtos do Sistema de Informações de
         * Movimentação de Produtos - SIMP <http://www.anp.gov.br/simp/>
         */
        descANP: string;
        /** Percentual do GLP derivado do petróleo no produto GLP (cProdANP=210203001). Informar em número decimal o
         * percentual do GLP derivado de petróleo no produto GLP. Valores 0 a 100
         */
        pGLP?: string;
        /** Percentual de gás natural nacional - GLGNn para o produto GLP (cProdANP=210203001). Informar em número
         * decimal o percentual do Gás Natural Nacional - GLGNn para o produto GLP. Valores de 0 a 100
         */
        pGNn?: string;
        /** Percentual de gás natural importado GLGNi para o produto GLP (cProdANP=210203001). Informar em número
         * decimal o percentual do Gás Natural Importado - GLGNi para o produto GLP. Valores de 0 a 100
         */
        pGNi?: string;
        /** Valor de partida (cProdANP=210203001). Deve ser informado neste campo o valor por quilograma sem ICMS. */
        vPart?: string;
        /** Código de autorização/registro do CODIF. Informar apenas quando a UF utilizar o CODIF (Sistema de Controle
         * do Diferimento do Imposto nas Operações com AEAC - Álcool Etílico Anidro Combustível)
         */
        CODIF?: string;
        /** Quantidade de combustível faturada à temperatura ambiente. Informar quando a quantidade faturada informada
         * no campo qCom (I10) tiver sido ajustada para uma temperatura diferente da ambiente
         */
        qTemp?: string;
        /** Sigla da UF de Consumo */
        UFCons: UFIssuer | "EX";
        /** CIDE Combustíveis */
        CIDE?: {
            /** BC do CIDE (Quantidade comercializada) */
            qBCProd: string;
            /** Alíquota do CIDE (em reais) */
            vAliqProd: string;
            /** Valor do CIDE */
            vCIDE: string;
        };
        /** Informações do grupo de "encerrante" */
        encerrante?: {
            /** Numero de identificação do Bico utilizado no abastecimento */
            nBico: string;
            /** Numero de identificação da bomba ao qual o bico está interligado */
            nBomba?: string;
            /** Numero de identificação do tanque ao qual o bico está interligado */
            nTanque: string;
            /** Valor do Encerrante no ínicio do abastecimento */
            vEncIni: string;
            /** Valor do Encerrante no final do abastecimento */
            vEncFin: string;
        };
        /** Percentual do índice de mistura do Biodiesel (B100) no Óleo Diesel B instituído pelo órgão regulamentador */
        pBio?: string;
        /** Grupo indicador da origem do combustível */
        origComb?: {
            /** Indicador de importação:
             * 0 | Nacional
             * 1 | Importado
             */
            indImport: ImportIndicator;
            /** UF de origem do produtor ou do importado */
            cUFOrig: UFCodeIBGE;
            /** Percentual originário para a UF */
            pOrig: string;
        }[];
    };
};
type Product__Type5 = __Product & {
    /** Número do RECOPI */
    nRECOPI?: string;
};

type Product = Product__Type1 | Product__Type2 | Product__Type3 | Product__Type4 | Product__Type5;

type TPISOutr = {
    /** Código de Situação Tributária do PIS:
     * 99 | Outras Operações
     */
    CST: CST__Type3;
    /** Valor do PIS */
    vPIS: string;
};

type PIS__Type1 = {
    /** Código de Situação Tributária do PIS:
     * 01 | Operação Tributável: Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo);
     * 02 | Operação Tributável: Base de Calculo = Valor da Operação (Alíquota Diferenciada)
     */
    PISAliq: {
        /** Código de Situação Tributária do PIS:
         * 01 | Operação Tributável: Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo)
         * 02 | Operação Tributável: Base de Calculo = Valor da Operação (Alíquota Diferenciada)
         */
        CST: CST__Type1;
        /** Valor da BC do PIS */
        vBC: string;
        /** Alíquota do PIS (em percentual) */
        pPIS: string;
        /** Valor do PIS */
        vPIS: string;
    };
};
type PIS__Type2 = {
    /** Código de Situação Tributária do PIS:
     * 03 | Operação Tributável: Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto
     */
    PISQtde: {
        /** Código de Situação Tributária do PIS:
         * 03 | Operação Tributável: Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto
         */
        CST: "03";
        /** Quantidade Vendida (NT2011/004) */
        qBCProd: string;
        /** Alíquota do PIS (em reais) (NT2011/004) */
        vAliqProd: string;
        /** Valor do PIS */
        vPIS: string;
    };
};
type PIS__Type3 = {
    /** Código de Situação Tributária do PIS:
     * 04 | Operação Tributável - Tributação Monofásica - (Alíquota Zero)
     * 06 | Operação Tributável - Alíquota Zero
     * 07 | Operação Isenta da contribuição
     * 08 | Operação Sem Incidência da contribuição
     * 09 | Operação com suspensão da contribuição
     */
    PISNT: {
        /** Código de Situação Tributária do PIS:
         * 04 | Operação Tributável - Tributação Monofásica - (Alíquota Zero)
         * 05 | Operação Tributável (ST)
         * 06 | Operação Tributável - Alíquota Zero
         * 07 | Operação Isenta da contribuição
         * 08 | Operação Sem Incidência da contribuição
         * 09 | Operação com suspensão da contribuição
         */
        CST: CST__Type2;
    };
};
type PIS__Type4 = {
    /** Código de Situação Tributária do PIS:
     * 99 | Outras Operações
     */
    PISOutr:
        | (TPISOutr & {
              /** Valor da BC do PIS */
              vBC: string;
              /** Alíquota do PIS (em percentual) */
              pPIS: string;
          })
        | (TPISOutr & {
              /** Quantidade Vendida (NT2011/004) */
              qBCProd: string;
              /** Alíquota do PIS (em reais) (NT2011/004) */
              vAliqProd: string;
          });
};

type PIS = PIS__Type1 | PIS__Type2 | PIS__Type3 | PIS__Type4;

type PISST = {
    /** Valor do PIS ST */
    vPIS: string;
    /** Indica se o valor do PISST compõe o valor total da NF-e */
    indSomaPISST?: ProductComposeTotal;
};

type COFINSOutr = {
    /** Código de Situação Tributária do COFINS:
     * 49 | Outras Operações de Saída
     * 50 | Operação com Direito a Crédito: Vinculada Exclusivamente a Receita Tributada no Mercado Interno
     * 51 | Operação com Direito a Crédito: Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno
     * 52 | Operação com Direito a Crédito: Vinculada Exclusivamente a Receita de Exportação
     * 53 | Operação com Direito a Crédito: Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
     * 54 | Operação com Direito a Crédito: Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
     * 55 | Operação com Direito a Crédito: Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
     * 56 | Operação com Direito a Crédito: Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de
     * Exportação
     * 60 | Crédito Presumido: Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno
     * 61 | Crédito Presumido: Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno
     * 62 | Crédito Presumido: Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação
     * 63 | Crédito Presumido: Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
     * 64 | Crédito Presumido: Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
     * 65 | Crédito Presumido: Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de
     * Exportação
     * 66 | Crédito Presumido: Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no
     * Mercado Interno, e de Exportação
     * 67 | Crédito Presumido: Outras Operações
     * 70 | Operação de Aquisição sem Direito a Crédito
     * 71 | Operação de Aquisição com Isenção
     * 72 | Operação de Aquisição com Suspensão
     * 73 | Operação de Aquisição a Alíquota Zero
     * 74 | Operação de Aquisição sem Incidência da Contribuição
     * 75 | Operação de Aquisição por Substituição Tributária
     * 98 | Outras Operações de Entrada
     * 99 | Outras Operações
     */
    CST: CST__Type3;
    /** Valor do COFINS */
    vCOFINS: string;
};

type COFINS__Type1 = {
    /** Código de Situação Tributária do COFINS:
     * 01 | Operação Tributável: Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo)
     * 02 | Operação Tributável: Base de Calculo = Valor da Operação (Alíquota Diferenciada)
     */
    COFINSAliq: {
        /** Código de Situação Tributária do COFINS:
         * 01 | Operação Tributável: Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não Cumulativo)
         * 02 | Operação Tributável: Base de Calculo = Valor da Operação (Alíquota Diferenciada)
         */
        CST: CST__Type1;
        /** Valor da BC do COFINS */
        vBC: string;
        /** Alíquota do COFINS (em percentual) */
        pCOFINS: string;
        /** Valor do COFINS */
        vCOFINS: string;
    };
};
type COFINS__Type2 = {
    /** Código de Situação Tributária do COFINS:
     * 03 | Operação Tributável: Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto
     */
    COFINSQtde: {
        /** Código de Situação Tributária do COFINS:
         * 03 | Operação Tributável: Base de Calculo = Quantidade Vendida x Alíquota por Unidade de Produto
         */
        CST: "03";
        /** Quantidade Vendida (NT2011/004) */
        qBCProd: string;
        /** Alíquota do COFINS (em reais) (NT2011/004) */
        vAliqProd: string;
        /** Valor do COFINS */
        vCOFINS: string;
    };
};
type COFINS__Type3 = {
    /** Código de Situação Tributária do COFINS:
     * 04 | Operação Tributável - Tributação Monofásica - (Alíquota Zero)
     * 06 | Operação Tributável - Alíquota Zero
     * 07 | Operação Isenta da contribuição
     * 08 | Operação Sem Incidência da contribuição
     * 09 | Operação com suspensão da contribuição
     */
    COFINSNT: {
        /** Código de Situação Tributária do COFINS:
         * 04 | Operação Tributável - Tributação Monofásica - (Alíquota Zero)
         * 05 | Operação Tributável (ST)
         * 06 | Operação Tributável - Alíquota Zero
         * 07 | Operação Isenta da contribuição
         * 08 | Operação Sem Incidência da contribuição
         * 09 | Operação com suspensão da contribuição
         */
        CST: CST__Type2;
    };
};
type COFINS__Type4 = {
    /** Código de Situação Tributária do COFINS:
     * 49 | Outras Operações de Saída
     * 50 | Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno
     * 51 | Operação com Direito a Crédito – Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno
     * 52 | Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação
     * 53 | Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno
     * 54 | Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
     * 55 | Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação
     * 56 | Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de
     * Exportação
     * 60 | Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno
     * 61 | Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado
     * Interno
     * 62 | Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação
     * 63 | Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado
     * Interno
     * 64 | Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação
     * 65 | Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de
     * Exportação
     * 66 | Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado
     * Interno, e de Exportação
     * 67 | Crédito Presumido - Outras Operações
     * 70 | Operação de Aquisição sem Direito a Crédito
     * 71 | Operação de Aquisição com Isenção
     * 72 | Operação de Aquisição com Suspensão
     * 73 | Operação de Aquisição a Alíquota Zero
     * 74 | Operação de Aquisição sem Incidência da Contribuição 75 - Operação de Aquisição por Substituição Tributária
     * 98 | Outras Operações de Entrada
     * 99 | Outras Operações
     */
    COFINSOutr:
        | (COFINSOutr & {
              /** Valor da BC do COFINS */
              vBC: string;
              /** Alíquota do COFINS (em percentual) */
              pCOFINS: string;
          })
        | (COFINSOutr & {
              /** Quantidade Vendida (NT2011/004) */
              qBCProd: string;
              /** Quantidade Vendida (NT2011/004) */
              vAliqProd: string;
          });
};

type COFINS = COFINS__Type1 | COFINS__Type2 | COFINS__Type3 | COFINS__Type4;

type COFINSST = {
    /** Valor do COFINS ST */
    vCOFINS: string;
    /** Indica se o valor da COFINS ST compõe o valor total da NFe */
    indSomaCOFINSST?: ProductComposeTotal;
};

type Transporter = {
    xNome?: string;
    IE?: string;
    xEnder?: string;
    xMun?: string;
    UF?: UFIssuer;
};

type __Tax = {
    /** Dados do PIS */
    PIS?: PIS;
    /** Dados do PIS Substituição Tributária */
    PISST?:
        | (PISST & {
              /** Valor da BC do PIS ST */
              vBC: string;
              /** Alíquota do PIS ST (em percentual) */
              pPIS: string;
          })
        | (PISST & {
              /** Quantidade Vendida */
              qBCProd: string;
              /** Alíquota do PIS ST (em reais) */
              vAliqProd: string;
          });
    /** Dados do COFINS */
    COFINS?: COFINS;
    /** Dados do COFINS da Substituição Tributaria **/
    COFINSST?:
        | (COFINSST & {
              /** Valor da BC do COFINS ST */
              vBC: string;
              /** Alíquota do COFINS ST (em percentual) */
              pCOFINS: string;
          })
        | (COFINSST & {
              /** Quantidade Vendida */
              qBCProd: string;
              /** Alíquota do COFINS ST (em reais) */
              vAliqProd: string;
          });
    /** Grupo a ser informado nas vendas interestarduais para consumidor final, não contribuinte de ICMS */
    ICMSUFDest?: {
        /** Valor da Base de Cálculo do ICMS na UF do destinatário */
        vBCUFDest: string;
        /** Valor da Base de Cálculo do FCP na UF do destinatário */
        vBCFCPUFDest?: string;
        /** Percentual adicional inserido na alíquota interna da UF de destino, relativo ao Fundo de Combate à Pobreza
         * (FCP) naquela UF */
        pFCPUFDest?: string;
        /** Alíquota adotada nas operações internas na UF do destinatário para o produto/mercadoria */
        pICMSUFDest: string;
        /** Alíquota interestadual das UF envolvidas:
         * 4% alíquota interestadual para produtos importados
         * 7% para os Estados de origem do Sul e Sudeste (exceto ES),
         * destinado para os Estados do Norte e Nordeste ou ES
         * 12% para os demais casos
         */
        pICMSInter: ICMSInterstateTaxRate;
        /** Percentual de partilha para a UF do destinatário:
         * 40% em 2016;
         * 60% em 2017;
         * 80% em 2018;
         * 100% a partir de 2019
         */
        pICMSInterPart: string;
        /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino */
        vFCPUFDest?: string;
        /** Valor do ICMS de partilha para a UF do destinatário */
        vICMSUFDest: string;
        /** Valor do ICMS de partilha para a UF do remetente. Nota: A partir de 2019, este valor será zero */
        vICMSUFRemet: string;
    };
};

type __IPI = {
    CNPJProd?: string;
    cSelo?: string;
    qSelo?: string;
    cEnq: string;
};

type IPI__Type1 = __IPI & {
    IPITrib:
        | ({
              CST:
                  | IPITaxStatusCode.ENTRY_WITH_CREDIT_RECOVERY
                  | IPITaxStatusCode.OTHER_ENTRIES
                  | IPITaxStatusCode.TAXED_EXIT
                  | IPITaxStatusCode.OTHER_OUTPUTS;
              vIPI: string;
          } & {
              vBC: string;
              pIPI: string;
          })
        | ({
              CST:
                  | IPITaxStatusCode.ENTRY_WITH_CREDIT_RECOVERY
                  | IPITaxStatusCode.OTHER_ENTRIES
                  | IPITaxStatusCode.TAXED_EXIT
                  | IPITaxStatusCode.OTHER_OUTPUTS;
              vIPI: string;
          } & {
              qUnid: string;
              vUnid: string;
          });
};

type IPI__Type2 = __IPI & {
    IPINT: {
        CST:
            | IPITaxStatusCode.INPUT_TAXED_AT_ZERO_RATE
            | IPITaxStatusCode.EXEMPT_ENTRY
            | IPITaxStatusCode.NON_TAXED_ENTRY
            | IPITaxStatusCode.IMMUNE_ENTRY
            | IPITaxStatusCode.ENTRY_WITH_SUSPENSION
            | IPITaxStatusCode.OUTPUT_TAXED_AT_ZERO_RATE
            | IPITaxStatusCode.EXEMPT_EXIT
            | IPITaxStatusCode.UNTAXED_EXIT
            | IPITaxStatusCode.IMMUNE_EXIT
            | IPITaxStatusCode.EXIT_WITH_SUSPENSION;
    };
};

type IPI = IPI__Type1 | IPI__Type2;

type Tax__Type1 = {
    /** Valor estimado total de impostos federais, estaduais e municipais */
    vTotTrib?: string;
    /** Dados do ICMS Normal e ST */
    ICMS:
        | {
              /** Tributação pelo ICMS:
               * 00 | Tributada integralmente
               */
              ICMS00: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 00 | Tributada integralmente
                   */
                  CST: ICMSCST.FULLY_TAXED;
                  /** Modalidade de determinação da BC do ICMS:
                   * 0 | Margem Valor Agregado (%)
                   * 1 | Pauta (valor)
                   * 2 | Preço Tabelado Máximo (valor)
                   * 3 | Valor da Operação
                   */
                  modBC: DeterminationMethod__Type1;
                  /** Valor da BC do ICMS */
                  vBC: string;
                  /** Alíquota do ICMS */
                  pICMS: string;
                  /** Valor do ICMS */
                  vICMS: string;
                  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  pFCP?: string;
                  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  vFCP?: string;
              };
          }
        | {
              /** Tributação monofásica própria sobre combustíveis */
              ICMS02: {
                  /** Origem da mercadoria */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS
                   * 02 | Tributação monofásica própria sobre combustíveis
                   */
                  CST: ICMSCST.OWN_SINGLE_PHASE_TAXATION_ON_FUELS;
                  /** Quantidade tributada */
                  qBCMono?: string;
                  /** Alíquota ad rem do imposto */
                  adRemICMS: string;
                  /** Valor do ICMS própria */
                  vICMSMono: string;
              };
          }
        | {
              /** Tributação pelo ICMS:
               * 10 | Tributada e com cobrança do ICMS por substituição tributária
               */
              ICMS10: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** 10 | Tributada e com cobrança do ICMS por substituição tributária */
                  CST: ICMSCST.TAXED_AND_CHARGED_WITH_ICMS_FOR_TAX_SUBSTITUTION;
                  /** Modalidade de determinação da BC do ICMS:
                   * 0 | Margem Valor Agregado (%)
                   * 1 | Pauta (valor)
                   * 2 | Preço Tabelado Máximo (valor)
                   * 3 | Valor da Operação
                   */
                  modBC: DeterminationMethod__Type1;
                  /** Valor da BC do ICMS */
                  vBC: string;
                  /** Alíquota do ICMS */
                  pICMS: string;
                  /** Valor do ICMS */
                  vICMS: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCP?: string;
                  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  pFCP?: string;
                  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  vFCP?: string;
                  /** Modalidade de determinação da BC do ICMS ST:
                   * 0 | Preço tabelado ou máximo sugerido
                   * 1 | Lista Negativa (valor)
                   * 2 | Lista Positiva (valor)
                   * 3 | Lista Neutra (valor)
                   * 4 | Margem Valor Agregado (%)
                   * 5 | Pauta (valor)
                   * 6 | Valor da Operação
                   */
                  modBCST: DeterminationMethod__Type2;
                  /** Percentual da Margem de Valor Adicionado ICMS ST */
                  pMVAST: string;
                  /** Percentual de redução da BC ICMS ST */
                  pRedBCST: string;
                  /** Valor da BC do ICMS ST */
                  vBCST: string;
                  /** Alíquota do ICMS ST */
                  pICMSST: string;
                  /** Valor do ICMS ST */
                  vICMSST: string;
                  /** Valor da Base de cálculo do FCP retido por substituicao tributaria */
                  vBCFCPST?: string;
                  /** Percentual de FCP retido por substituição tributária */
                  pFCPST?: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPST?: string;
                  /** Valor do ICMS-ST desonerado */
                  vICMSSTDeson?: string;
                  /** Motivo da desoneração do ICMS-ST:
                   * 3 | Uso na agropecuária
                   * 9 | Outros
                   * 12 | Fomento agropecuário
                   */
                  motDesICMSST?: ExemptionReason__Type1;
              };
          }
        | {
              /** Tributação monofásica própria e com responsabilidade pela retenção sobre combustíveis */
              ICMS15: {
                  /** Origem da mercadoria */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 15 | Tributação monofásica própria e com responsabilidade pela retenção sobre combustíveis */
                  CST: ICMSCST.OWN_SINGLE_PHASE_TAXATION_AND_RESPONSIBILITY_FOR_WITHHOLDING_ON_FUELS;
                  /** Quantidade tributada */
                  qBCMono?: string;
                  /** Alíquota ad rem do imposto */
                  adRemICMS: string;
                  /** Valor do ICMS próprio */
                  vICMSMono: string;
                  /** Quantidade tributada sujeita a retenção */
                  qBCMonoReten?: string;
                  /** Alíquota ad rem do imposto com retenção */
                  adRemICMSReten: string;
                  /** Valor do ICMS com retenção */
                  vICMSMonoReten: string;
                  /** Percentual de redução do valor da alíquota ad rem do ICMS */
                  pRedAdRem?: string;
                  /** Motivo da redução do adrem:
                   * 1 | Transporte coletivo de passageiros
                   * 9 | Outros
                   */
                  motRedAdRem?: AdremReductionReason;
              };
          }
        | {
              /** Tributação pelo ICMS:
               * 20 | Com redução de base de cálculo
               */
              ICMS20: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 20 | Com redução de base de cálculo
                   */
                  CST: ICMSCST.WITH_REDUCTION_IN_CALCULATION_BASE;
                  /** Modalidade de determinação da BC do ICMS:
                   * 0 | Margem Valor Agregado (%)
                   * 1 | Pauta (valor)
                   * 2 | Preço Tabelado Máximo (valor)
                   * 3 | Valor da Operação
                   */
                  modBC: DeterminationMethod__Type1;
                  /** Percentual de redução da BC */
                  pRedBC: string;
                  /** Valor da BC do ICMS */
                  vBC: string;
                  /** Alíquota do ICMS */
                  pICMS: string;
                  /** Valor do ICMS */
                  vICMS: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCP?: string;
                  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  pFCP?: string;
                  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  vFCP?: string;
                  /** Valor do ICMS de desoneração */
                  vICMSDeson?: string;
                  /** Motivo da desoneração do ICMS:
                   * 3 | Uso na agropecuária
                   * 9 | Outros
                   * 12 | Fomento agropecuário
                   */
                  motDesICMS?: ExemptionReason__Type1;
                  /** Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
                   * 0 | Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
                   * 1 | Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e
                   */
                  indDeduzDeson?: ItemValueDeduction;
              };
          }
        | {
              /** Tributação pelo ICMS:
               * 30 | Isenta ou não tributada e com cobrança do ICMS por substituição tributária
               */
              ICMS30: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 30 | Isenta ou não tributada e com cobrança do ICMS por substituição tributária
                   */
                  CST: ICMSCST.EXEMPT_OR_NOT_TAXED_AND_CHARGED_WITH_ICMS_FOR_TAX_SUBSTITUTION;
                  /** Modalidade de determinação da BC do ICMS ST:
                   * 0 | Preço tabelado ou máximo sugerido
                   * 1 | Lista Negativa (valor)
                   * 2 | Lista Positiva (valor)
                   * 3 | Lista Neutra (valor)
                   * 4 | Margem Valor Agregado (%)
                   * 5 | Pauta (valor)
                   * 6 | Valor da Operação
                   */
                  modBCST: DeterminationMethod__Type2;
                  /** Percentual da Margem de Valor Adicionado ICMS ST */
                  pMVAST: string;
                  /** Percentual de redução da BC ICMS ST */
                  pRedBCST?: string;
                  /** Valor da BC do ICMS ST */
                  vBCST: string;
                  /** Alíquota do ICMS ST */
                  pICMSST: string;
                  /** Valor do ICMS ST */
                  vICMSST: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCPST?: string;
                  /** Percentual de FCP retido por substituição tributária */
                  pFCPST?: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPST?: string;
                  /** Valor do ICMS de desoneração */
                  vICMSDeson?: string;
                  /** Motivo da desoneração do ICMS:
                   * 6 | Utilitários Motocicleta a Área Livre
                   * 7 | SUFRAMA
                   * 9 | Outros
                   */
                  motDesICMS?: ExemptionReason__Type2;
                  /** Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
                   * 0 | Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
                   * 1 | Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e
                   */
                  indDeduzDeson?: ItemValueDeduction;
              };
          }
        | {
              /** Tributação pelo ICMS:
               * 40 | Isenta
               * 41 | Não tributada
               * 50 | Suspensão
               */
              ICMS40: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 40 | Isenta
                   * 41 | Não tributada
                   * 50 | Suspensão
                   */
                  CST: ICMSCST.EXEMPT | ICMSCST.NOT_TAXED | ICMSCST.SUSPENSION;
                  /** O valor do ICMS será informado apenas nas operações com veículos beneficiados com a desoneração
                   * condicional do ICMS
                   */
                  vICMSDeson?: string;
                  /** Este campo será preenchido quando o campo anterior estiver preenchido.
                   * Informar o motivo da desoneração:
                   * 1 | Táxi
                   * 3 | Produtor Agropecuário
                   * 4 | Frotista/Locadora
                   * 5 | Diplomático/Consular
                   * 6 | Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e
                   * 790/94 – CONTRAN e suas alterações)
                   * 7 | SUFRAMA
                   * 8 | Venda a órgão Público
                   * 9 | Outros
                   * 10 | Deficiente Condutor
                   * 11 | Deficiente não condutor
                   * 16 | Olimpíadas Rio 2016
                   * 90 | Solicitado pelo Fisco
                   */
                  motDesICMS?: ExemptionReason__Type3;
                  /** Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
                   * 0 | Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
                   * 1 | Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e
                   */
                  indDeduzDeson?: ItemValueDeduction;
              };
          }
        | {
              /** Tributação pelo ICMS:
               * 51 | Diferimento
               * OBS: A exigência do preenchimento das informações do ICMS diferido fica à critério de cada UF
               */
              ICMS51: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 51 | Diferimento
                   */
                  CST: ICMSCST.DEFERRAL;
                  /** Modalidade de determinação da BC do ICMS:
                   * 0 | Margem Valor Agregado (%)
                   * 1 | Pauta (valor)
                   * 2 | Preço Tabelado Máximo (valor)
                   * 3 | Valor da Operação
                   */
                  modBC?: DeterminationMethod__Type1;
                  /** Percentual de redução da BC */
                  pRedBC?: string;
                  /** Código de Benefício Fiscal na UF aplicado ao item quando houver RBC */
                  cBenefRBC?: string;
                  /** Valor da BC do ICMS */
                  vBC?: string;
                  /** Alíquota do imposto */
                  pICMS?: string;
                  /** Valor do ICMS da Operação */
                  vICMSOp?: string;
                  /** Percentual do diferemento */
                  pDif?: string;
                  /** Valor do ICMS da diferido */
                  vICMSDif?: string;
                  /** Valor do ICMS */
                  vICMS?: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCP?: string;
                  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  pFCP?: string;
                  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  vFCP?: string;
                  /** Percentual do diferimento do ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  pFCPDif?: string;
                  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) diferido */
                  vFCPDif?: string;
                  /** Valor efetivo do ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  vFCPEfet?: string;
              };
          }
        | {
              /** Tributação monofásica sobre combustíveis com recolhimento diferido */
              ICMS53: {
                  /** Origem da mercadoria */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 53 | Tributação monofásica sobre combustíveis com recolhimento diferido
                   */
                  CST: ICMSCST.SINGLE_PHASE_TAXATION_ON_FUELS_WITH_DEFERRED_COLLECTION;
                  /** Quantidade tributada */
                  qBCMono?: string;
                  /** Alíquota ad rem do imposto */
                  adRemICMS?: string;
                  /** Valor do ICMS da operação */
                  vICMSMonoOp?: string;
                  /** Percentual do diferemento */
                  pDif?: string;
                  /** Valor do ICMS diferido */
                  vICMSMonoDif?: string;
                  /** Valor do ICMS próprio devido */
                  vICMSMono?: string;
                  /** Quantidade tributada diferida */
                  qBCMonoDif?: string;
                  /** Alíquota ad rem do imposto diferido */
                  adRemICMSDif?: string;
              };
          }
        | {
              /** Tributação pelo ICMS:
               * 60 | ICMS cobrado anteriormente por substituição tributária
               */
              ICMS60: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 60 | ICMS cobrado anteriormente por substituição tributária
                   */
                  CST: ICMSCST.ICMS_PREVIOUSLY_CHARGED_BY_TAX_SUBSTITUTION;
                  /** Valor da BC do ICMS ST retido anteriormente */
                  vBCSTRet?: string;
                  /** Aliquota suportada pelo consumidor final */
                  pST?: string;
                  /** Valor do ICMS Próprio do Substituto cobrado em operação anterior */
                  vICMSSubstituto?: string;
                  /** Valor do ICMS ST retido anteriormente */
                  vICMSSTRet?: string;
                  /** Valor da Base de cálculo do FCP retido anteriormente por ST */
                  vBCFCPSTRet?: string;
                  /** Percentual de FCP retido anteriormente por substituição tributária */
                  pFCPSTRet?: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPSTRet?: string;
                  /** Percentual de redução da base de cálculo efetiva */
                  pRedBCEfet?: string;
                  /** Valor da base de cálculo efetiva */
                  vBCEfet?: string;
                  /** Alíquota do ICMS efetiva */
                  pICMSEfet?: string;
                  /** Valor do ICMS efetivo */
                  vICMSEfet?: string;
              };
          }
        | {
              /** Tributação monofásica sobre combustíveis cobrada anteriormente */
              ICMS61: {
                  /** Origem da mercadoria */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 61 | Tributação monofásica sobre combustíveis cobrada anteriormente
                   */
                  CST: ICMSCST.SINGLE_PHASE_TAXATION_ON_FUELS_PREVIOUSLY_CHARGED;
                  /** Quantidade tributada retida anteriormente */
                  qBCMonoRet?: string;
                  /** Alíquota ad rem do imposto retido anteriormente */
                  adRemICMSRet: string;
                  /** Valor do ICMS retido anteriormente */
                  vICMSMonoRet: string;
              };
          }
        | {
              /** Tributação pelo ICMS:
               * 70 | Com redução de base de cálculo e cobrança do ICMS por substituição tributária
               */
              ICMS70: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 70 | Com redução de base de cálculo e cobrança do ICMS por substituição tributária
                   */
                  CST: ICMSCST.WITH_REDUCTION_IN_THE_CALCULATION_BASE_AND_COLLECTION_OF_ICMS_FOR_TAX_SUBSTITUTION;
                  /** Modalidade de determinação da BC do ICMS:
                   * 0 | Margem Valor Agregado (%)
                   * 1 | Pauta (valor)
                   * 2 | Preço Tabelado Máximo (valor)
                   * 3 | Valor da Operação
                   */
                  modBC: DeterminationMethod__Type1;
                  /** Percentual de redução da BC */
                  pRedBC: string;
                  /** Valor da BC do ICMS */
                  vBC: string;
                  /** Alíquota do ICMS */
                  pICMS: string;
                  /** Valor do ICMS */
                  vICMS: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCP?: string;
                  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  pFCP?: string;
                  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  vFCP?: string;
                  /** Modalidade de determinação da BC do ICMS ST:
                   * 0 | Preço tabelado ou máximo sugerido
                   * 1 | Lista Negativa (valor)
                   * 2 | Lista Positiva (valor)
                   * 3 | Lista Neutra (valor)
                   * 4 | Margem Valor Agregado (%)
                   * 5 | Pauta (valor)
                   * 6 | Valor da Operação
                   */
                  modBCST: DeterminationMethod__Type2;
                  /** Percentual da Margem de Valor Adicionado ICMS ST */
                  pMVAST?: string;
                  /** Percentual de redução da BC ICMS ST */
                  pRedBCST?: string;
                  /** Valor da BC do ICMS ST */
                  vBCST: string;
                  /** Alíquota do ICMS ST */
                  pICMSST: string;
                  /** Valor do ICMS ST */
                  vICMSST: string;
                  /** Valor da Base de cálculo do FCP retido por substituição tributária */
                  vBCFCPST?: string;
                  /** Percentual de FCP retido por substituição tributária */
                  pFCPST?: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPST?: string;
                  /** Valor do ICMS de desoneração */
                  vICMSDeson?: string;
                  /** Motivo da desoneração do ICMS:
                   * 3 | Uso na agropecuária
                   * 9 | Outros
                   * 12 | Fomento agropecuário
                   */
                  motDesICMS?: ExemptionReason__Type1;
                  /** Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
                   * 0 | Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
                   * 1 | Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-es
                   */
                  indDeduzDeson?: ItemValueDeduction;
                  /** Valor do ICMS-ST desonerado */
                  vICMSSTDeson?: string;
                  /** Motivo da desoneração do ICMS-ST:
                   * 3 | Uso na agropecuária
                   * 9 | Outros
                   * 12 | Fomento agropecuário
                   */
                  motDesICMSST?: ExemptionReason__Type1;
              };
          }
        | {
              /** Tributação pelo ICMS:
               * 90 | Outras
               */
              ICMS90: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 90 | Outras
                   */
                  CST: ICMSCST.OTHERS;
                  /** Modalidade de determinação da BC do ICMS:
                   * 0 | Margem Valor Agregado (%)
                   * 1 | Pauta (valor)
                   * 2 | Preço Tabelado Máximo (valor)
                   * 3 | Valor da Operação
                   */
                  modBC?: DeterminationMethod__Type1;
                  /** Valor da BC do ICMS */
                  vBC?: string;
                  /** Percentual de redução da BC */
                  pRedBC?: string;
                  /** Alíquota do ICMS */
                  pICMS?: string;
                  /** Valor do ICMS */
                  vICMS?: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCP?: string;
                  /** Percentual de ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  pFCP?: string;
                  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) */
                  vFCP?: string;
                  /** Modalidade de determinação da BC do ICMS ST:
                   * 0 | Preço tabelado ou máximo sugerido
                   * 1 | Lista Negativa (valor)
                   * 2 | Lista Positiva (valor)
                   * 3 | Lista Neutra (valor)
                   * 4 | Margem Valor Agregado (%)
                   * 5 | Pauta (valor)
                   * 6 | Valor da Operação
                   */
                  modBCST?: DeterminationMethod__Type2;
                  /** Percentual da Margem de Valor Adicionado ICMS ST */
                  pMVAST?: string;
                  /** Percentual de redução da BC ICMS ST */
                  pRedBCST?: string;
                  /** Valor da BC do ICMS ST */
                  vBCST?: string;
                  /** Alíquota do ICMS ST */
                  pICMSST?: string;
                  /** Valor do ICMS ST */
                  vICMSST?: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCPST?: string;
                  /** Percentual de FCP retido por substituição tributária */
                  pFCPST?: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPST?: string;
                  /** Valor do ICMS de desoneração */
                  vICMSDeson?: string;
                  /** Motivo da desoneração do ICMS:
                   * 3 | Uso na agropecuária
                   * 9 | Outros
                   * 12 | Fomento agropecuário
                   */
                  motDesICMS?: ExemptionReason__Type1;
                  /** Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd):
                   * 0 | Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e
                   * 1 | Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e
                   */
                  indDeduzDeson?: ItemValueDeduction;
                  /** Valor do ICMS-ST desonerado */
                  vICMSSTDeson?: string;
                  /** Motivo da desoneração do ICMS-ST:
                   * 3 | Uso na agropecuária
                   * 9 | Outros
                   * 12 | Fomento agropecuário
                   */
                  motDesICMSST?: ExemptionReason__Type1;
              };
          }
        | {
              /** Partilha do ICMS entre a UF de origem e UF de destino ou a UF definida na legislação Operação
               * interestadual para consumidor final com partilha do ICMS devido na operação entre a UF de origem e a UF
               * do destinatário ou ou a UF definida na legislação. (Ex. UF da concessionária de entrega do veículos)
               */
              ICMSPart: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 10 | Tributada e com cobrança do ICMS por substituição tributária
                   * 90 | Outros
                   */
                  CST: ICMSCST.TAXED_AND_CHARGED_WITH_ICMS_FOR_TAX_SUBSTITUTION | ICMSCST.OTHERS;
                  /** Modalidade de determinação da BC do ICMS:
                   * 0 | Margem Valor Agregado (%)
                   * 1 | Pauta (valor)
                   * 2 | Preço Tabelado Máximo (valor)
                   * 3 | Valor da Operação
                   */
                  modBC: DeterminationMethod__Type1;
                  /** Valor da BC do ICMS */
                  vBC: string;
                  /** Percentual de redução da BC */
                  pRedBC?: string;
                  /** Alíquota do ICMS */
                  pICMS: string;
                  /** Valor do ICMS */
                  vICMS: string;
                  /** Modalidade de determinação da BC do ICMS ST:
                   * 0 | Preço tabelado ou máximo sugerido
                   * 1 | Lista Negativa (valor)
                   * 2 | Lista Positiva (valor)
                   * 3 | Lista Neutra (valor)
                   * 4 | Margem Valor Agregado (%)
                   * 5 | Pauta (valor)
                   * 6 | Valor da Operação
                   */
                  modBCST: DeterminationMethod__Type2;
                  /** Percentual da Margem de Valor Adicionado ICMS ST */
                  pMVAST?: string;
                  /** Percentual de redução da BC ICMS ST */
                  pRedBCST?: string;
                  /** Valor da BC do ICMS ST */
                  vBCST: string;
                  /** Alíquota do ICMS ST */
                  pICMSST: string;
                  /** Valor do ICMS ST */
                  vICMSST: string;
                  /** Valor da Base de cálculo do FCP retido por substituicao tributaria */
                  vBCFCPST?: string;
                  /** Percentual de FCP retido por substituição tributária */
                  pFCPST: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPST: string;
                  /** Percentual para determinação do valor da Base de Cálculo da operação própria */
                  pBCOp: string;
                  /** Sigla da UF para qual é devido o ICMS ST da operação. */
                  UFST: UFIssuer;
              };
          }
        | {
              /** Grupo de informação do ICMSST devido para a UF de destino, nas operações interestaduais de produtos
               * que tiveram retenção antecipada de ICMS por ST na UF do remetente. Repasse via Substituto Tributário
               */
              ICMSST: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS:
                   * 41 | Não Tributado
                   * 60 | Cobrado anteriormente por substituição tributária
                   */
                  CST: ICMSCST.NOT_TAXED | ICMSCST.ICMS_PREVIOUSLY_CHARGED_BY_TAX_SUBSTITUTION;
                  /** Informar o valor da BC do ICMS ST retido na UF remetente */
                  vBCSTRet: string;
                  /** Aliquota suportada pelo consumidor final */
                  pST?: string;
                  /** Valor do ICMS Próprio do Substituto cobrado em operação anterior */
                  vICMSSubstituto?: string;
                  /**  Informar o valor do ICMS ST retido na UF remetente (v2.0) */
                  vICMSSTRet: string;
                  /** Informar o valor da Base de Cálculo do FCP retido anteriormente por ST */
                  vBCFCPSTRet?: string;
                  /** Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária */
                  pFCPSTRet?: string;
                  /** Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária */
                  vFCPSTRet?: string;
                  /** Informar o valor da BC do ICMS ST da UF destino */
                  vBCSTDest: string;
                  /** Informar o valor da BC do ICMS ST da UF destino (v2.0) */
                  vICMSSTDest: string;
                  /** Percentual de redução da base de cálculo efetiva */
                  pRedBCEfet?: string;
                  /** Valor da base de cálculo efetiva */
                  vBCEfet?: string;
                  /** Alíquota do ICMS efetivo */
                  pICMSEfet?: string;
                  /** Valor do ICMS efetivo */
                  vICMSEfet?: string;
              };
          }
        | {
              /** Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=101 (v.2.0) */
              ICMSSN101: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno (v2.0)
                   */
                  orig: MerchandiseOrigin;
                  /** 101 | Tributada pelo Simples Nacional com permissão de crédito. (v.2.0) */
                  CSOSN: CSOSN.TAXED_BY_SIMPLES_NACIONAL_WITH_CREDIT_PERMISSION;
                  /** Alíquota aplicável de cálculo do crédito (Simples Nacional). (v2.0) */
                  pCredSN: string;
                  /** Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional)
                   * (v2.0)
                   */
                  vCredICMSSN: string;
              };
          }
        | {
              /** Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=102, 103, 300 ou 400 (v.2.0) */
              ICMSSN102: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno (v2.0)
                   */
                  orig: MerchandiseOrigin;
                  /** 102 | Tributada pelo Simples Nacional sem permissão de crédito
                   * 103 | Isenção do ICMS no Simples Nacional para faixa de receita bruta
                   * 300 | Imune
                   * 400 | Não tributada pelo Simples Nacional (v.2.0)
                   */
                  CSOSN:
                      | CSOSN.TAXED_BY_SIMPLES_NACIONAL_WITHOUT_CREDIT_PERMISSION
                      | CSOSN.ICMS_EXEMPTION_IN_SIMPLES_NACIONAL_FOR_GROSS_REVENUE_RANGE
                      | CSOSN.IMMUNE
                      | CSOSN.NOT_TAXED_BY_SIMPLES_NACIONAL;
              };
          }
        | {
              /** Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=201 (v.2.0) */
              ICMSSN201: {
                  /** Origem da mercadoria:
                   * 0 | Nacional;
                   * 1 | Estrangeira – Importação direta;
                   * 2 | Estrangeira – Adquirida no mercado interno. (v2.0)
                   */
                  orig: MerchandiseOrigin;
                  /** 201 | Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por
                   * Substituição Tributária (v.2.0)
                   */
                  CSOSN: CSOSN.TAXED_BY_SIMPLES_NACIONAL_WITH_CREDIT_PERMISSION_AND_ICMS_CHARGED_BY_TAX_REPLACEMENT;
                  /** Modalidade de determinação da BC do ICMS ST:
                   * 0 | Preço tabelado ou máximo sugerido
                   * 1 | Lista Negativa (valor)
                   * 2 | Lista Positiva (valor)
                   * 3 | Lista Neutra (valor)
                   * 4 | Margem Valor Agregado (%)
                   * 5 | Pauta (valor) (v2.0)
                   * 6 | Valor da Operação
                   */
                  modBCST: DeterminationMethod__Type2;
                  /** Percentual da Margem de Valor Adicionado ICMS ST (v2.0) */
                  pMVAST?: string;
                  /** Percentual de redução da BC ICMS ST (v2.0) */
                  pRedBCST?: string;
                  /** Valor da BC do ICMS ST (v2.0) */
                  vBCST: string;
                  /** Alíquota do ICMS ST (v2.0) */
                  pICMSST: string;
                  /** Valor do ICMS ST (v2.0) */
                  vICMSST: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCPST?: string;
                  /** Percentual de FCP retido por substituição tributária. */
                  pFCPST?: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPST?: string;
                  /** Alíquota aplicável de cálculo do crédito (Simples Nacional). (v2.0) */
                  pCredSN: string;
                  /** Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional)
                   * (v2.0)
                   */
                  vCredICMSSN: string;
              };
          }
        | {
              /** Tributação do ICMS pelo SIMPLES NACIONAL e CSOSN=202 ou 203 (v.2.0) */
              ICMSSN202: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira – Importação direta
                   * 2 | Estrangeira – Adquirida no mercado interno. (v2.0)
                   */
                  orig: MerchandiseOrigin;
                  /** 202 | Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por
                   * Substituição Tributária
                   * 203 | Isenção do ICMS nos Simples Nacional para faixa de receita bruta e com cobrança do ICMS por
                   * Substituição Tributária (v.2.0)
                   */
                  CSOSN:
                      | CSOSN.TAXED_BY_SIMPLES_NACIONAL_WITHOUT_CREDIT_PERMISSION_AND_WITH_ICMS_CHARGED_FOR_TAX_REPLACEMENT
                      | CSOSN.EXEMPTION_FROM_ICMS_IN_SIMPLES_NACIONAL_FOR_GROSS_REVENUE_RANGE_AND_WITH_ICMS_COLLECTION_FOR_TAX_REPLACEMENT;
                  /** Modalidade de determinação da BC do ICMS ST:
                   * 0 | Preço tabelado ou máximo sugerido
                   * 1 | Lista Negativa (valor)
                   * 2 | Lista Positiva (valor)
                   * 3 | Lista Neutra (valor)
                   * 4 | Margem Valor Agregado (%)
                   * 5 | Pauta (valor) (v2.0)
                   * 6 | Valor da Operação
                   */
                  modBCST: DeterminationMethod__Type2;
                  /** Percentual da Margem de Valor Adicionado ICMS ST (v2.0) */
                  pMVAST?: string;
                  /** Percentual de redução da BC ICMS ST (v2.0) */
                  pRedBCST?: string;
                  /** Valor da BC do ICMS ST (v2.0) */
                  vBCST: string;
                  /** Alíquota do ICMS ST (v2.0) */
                  pICMSST: string;
                  /** Valor do ICMS ST (v2.0) */
                  vICMSST: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCPST?: string;
                  /** Percentual de FCP retido por substituição tributária */
                  pFCPST?: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPST?: string;
              };
          }
        | {
              /** Tributação do ICMS pelo SIMPLES NACIONAL, CRT=1 – Simples Nacional e CSOSN=500 (v.2.0) */
              ICMSSN500: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** 500 | ICMS cobrado anterirmente por substituição tributária (substituído) ou por antecipação
                   * (v.2.0)
                   */
                  CSOSN: CSOSN.ICMS_PREVIOUSLY_CHARGED_BY_TAX_SUBSTITUTION_REPLACED_OR_BY_ADVANCE_TAXATION_BY_ICMS;
                  /** Valor da BC do ICMS ST retido anteriormente (v2.0) */
                  vBCSTRet?: string;
                  /** Aliquota suportada pelo consumidor final */
                  pST?: string;
                  /** Valor do ICMS próprio do substituto */
                  vICMSSubstituto?: string;
                  /** Valor do ICMS ST retido anteriormente (v2.0) */
                  vICMSSTRet?: string;
                  /** Valor da Base de cálculo do FCP retido anteriormente */
                  vBCFCPSTRet?: string;
                  /** Percentual de FCP retido anteriormente por substituição tributária */
                  pFCPSTRet?: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPSTRet?: string;
                  /** Percentual de redução da base de cálculo efetiva */
                  pRedBCEfet?: string;
                  /** Valor da base de cálculo efetiva */
                  vBCEfet?: string;
                  /** Alíquota do ICMS efetiva */
                  pICMSEfet?: string;
                  /** Valor do ICMS efetivo */
                  vICMSEfet?: string;
              };
          }
        | {
              /** Tributação do ICMS pelo SIMPLES NACIONAL, CRT=1 – Simples Nacional e CSOSN=900 (v2.0) */
              ICMSSN900: {
                  /** Origem da mercadoria:
                   * 0 | Nacional
                   * 1 | Estrangeira - Importação direta
                   * 2 | Estrangeira - Adquirida no mercado interno
                   */
                  orig: MerchandiseOrigin;
                  /** Tributação pelo ICMS 900 - Outros(v2.0) */
                  CSOSN: CSOSN.OTHERS;
                  /** Modalidade de determinação da BC do ICMS:
                   * 0 | Margem Valor Agregado (%)
                   * 1 | Pauta (valor)
                   * 2 | Preço Tabelado Máximo (valor)
                   * 3 | Valor da Operação
                   */
                  modBC: DeterminationMethod__Type1;
                  /** Valor da BC do ICMS */
                  vBC?: string;
                  /** Percentual de redução da BC */
                  pRedBC?: string;
                  /** Alíquota do ICMS */
                  pICMS?: string;
                  /** Valor do ICMS */
                  vICMS?: string;
                  /** Modalidade de determinação da BC do ICMS ST:
                   * 0 | Preço tabelado ou máximo sugerido;
                   * 1 | Lista Negativa (valor)
                   * 2 | Lista Positiva (valor)
                   * 3 | Lista Neutra (valor)
                   * 4 | Margem Valor Agregado (%)
                   * 5 | Pauta (valor)
                   * 6 | Valor da Operação
                   */
                  modBCST: DeterminationMethod__Type2;
                  /** Percentual da Margem de Valor Adicionado ICMS ST */
                  pMVAST?: string;
                  /** Percentual de redução da BC ICMS ST */
                  pRedBCST?: string;
                  /** Valor da BC do ICMS ST */
                  vBCST: string;
                  /** Alíquota do ICMS ST */
                  pICMSST: string;
                  /** Valor do ICMS ST */
                  vICMSST: string;
                  /** Valor da Base de cálculo do FCP */
                  vBCFCPST?: string;
                  /** Percentual de FCP retido por substituição tributária */
                  pFCPST?: string;
                  /** Valor do FCP retido por substituição tributária */
                  vFCPST?: string;
                  /** Alíquota aplicável de cálculo do crédito (Simples Nacional). (v2.0) */
                  pCredSN?: string;
                  /** Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional)
                   * (v2.0)
                   */
                  vCredICMSSN?: string;
              };
          };
    IPI?: IPI;
    /** Dados do Imposto de Importação */
    II?: {
        /** Base da BC do Imposto de Importação */
        vBC: string;
        /** Valor das despesas aduaneiras */
        vDespAdu: string;
        /** Valor do Imposto de Importação */
        vII: string;
        /** Valor do Imposto sobre Operações Financeiras */
        vIOF: string;
    };
} & __Tax;

type Tax__Type2 = {
    /** Valor estimado total de impostos federais, estaduais e municipais */
    vTotTrib?: string;
    IPI?: IPI;
    ISSQN: {
        /** Valor da BC do ISSQN */
        vBC: string;
        /** Alíquota do ISSQN */
        vAliq: string;
        /** Valor da do ISSQN */
        vISSQN: string;
        /** Informar o município de ocorrência do fato gerador do ISSQN. Utilizar a Tabela do IBGE (Anexo VII - Tabela
         * de UF, Município e País). “Atenção, não vincular com os campos B12, C10 ou E10” v2.0
         */
        cMunFG: CodeCityIBGE;
        /** Informar o Item da lista de serviços da LC 116/03 em que se classifica o serviço */
        cListServ: string;
        /** Valor dedução para redução da base de cálculo */
        vDeducao?: string;
        /** Valor outras retenções */
        vOutro?: string;
        /** Valor desconto incondicionado */
        vDescIncond?: string;
        /** Valor desconto condicionado */
        vDescCond?: string;
        /** Valor Retenção ISS */
        vISSRet?: string;
        /** Exibilidade do ISS:
         * 1 | Exigível
         * 2 | Não incidente
         * 3 | Isenção
         * 4 | Exportação
         * 5 | Imunidade
         * 6 | Exig.Susp. Judicial
         * 7 | Exig.Susp. ADM
         */
        indISS: ExibilidadeISS;
        /** Código do serviço prestado dentro do município */
        cServico?: string;
        /** Código do Município de Incidência do Imposto */
        cMun?: CodeCityIBGE;
        /** Código de Pais */
        cPais?: string;
        /** Número do Processo administrativo ou judicial de suspenção do processo */
        nProcesso?: string;
        /** Indicador de Incentivo Fiscal:
         * 1 | Sim
         * 2 | Não
         */
        indIncentivo: TaxIncentiveIndicator;
    };
} & __Tax;

type Tax = Tax__Type1 | Tax__Type2;

type __Transport = {
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
};

type TransportVolumes = {
    /** Dados dos volumes */
    vol?: {
        /** Quantidade de volumes transportados */
        qVol?: string;
        /** Espécie dos volumes transportados */
        esp?: string;
        /** Marca dos volumes transportados */
        marca?: string;
        /** Numeração dos volumes transportados */
        nVol?: string;
        /** Peso líquido (em kg) */
        pesoL?: string;
        /** Peso bruto (em kg) */
        pesoB?: string;
        lacres?: {
            /** Número dos Lacres */
            nLacre: string;
        }[];
    }[];
};

// schema: TVeiculo
type Vehicle = {
    placa: string;
    UF?: UFIssuer | "EX";
    RNTC?: string;
};

type Transport__Type1 = __Transport & {
    /** Dados do veículo */
    veicTransp?: Vehicle;
    /** Dados do reboque/Dolly (v2.0) */
    reboque?: Vehicle[];
} & TransportVolumes;

type Transport__Type2 = __Transport & {
    /** Identificação do vagão (v2.0) */
    vagao?: string;
} & TransportVolumes;

type Transport__Type3 = __Transport & {
    /** Identificação da balsa (v2.0) */
    balsa?: string;
} & TransportVolumes;

type Transport = Transport__Type1 | Transport__Type2 | Transport__Type3;

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
export type SefazNFe = {
    $: {
        /** Versão do leiaute (v4.00) */
        versao: VERSION;
        /** PL_005d - 11/08/09 - validação do Id */
        Id: string;
    };
    /** Identificação da nota fiscal */
    ide: {
        /** Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE */
        cUF: UFCodeIBGE;
        /** Código numérico que compõe a Chave de Acesso. Número aleatório gerado pelo emitente para cada NF-e. */
        cNF: string;
        /** Descrição da Natureza da Operação */
        natOp: string;
        /** Código do modelo do Documento Fiscal:
         * 55 | NF-e
         * 65 | NFC-e
         */
        mod: TaxDocumentModel;
        /** Série do Documento Fiscal:
         * 0-889 | Série Normal
         * 890-899 | Avulsa Fisco
         * 900-999 | SCAN
         */
        serie: string;
        /** Número do Documento Fiscal */
        nNF: string;
        /** Data e Hora de emissão do Documento Fiscal (AAAA-MM-DDThh:mm:ssTZD) ex.: 2012-09-01T13:00:00-03:00 */
        dhEmi: string;
        /** Data e Hora da saída ou de entrada da mercadoria / produto (AAAA-MM-DDTHH:mm:ssTZD) */
        dhSaiEnt?: string;
        /** Tipo do Documento Fiscal:
         * 0 | entrada
         * 1 | saída
         */
        tpNF: TaxDocumentType;
        /** Identificador de Local de destino da operação:
         * 1 | Interna
         * 2 | Interestadual
         * 3 | Exterior
         */
        idDest: OperationDestinationLocationIdentifier;
        /** Código do Município de Ocorrência do Fato Gerador (utilizar a tabela do IBGE) */
        cMunFG: CodeCityIBGE;
        /** Formato de impressão do DANFE:
         * 0 | sem DANFE
         * 1 | DANFe Retrato
         * 2 | DANFe Paisagem
         * 3 | DANFe Simplificado
         * 4 | DANFe NFC-e
         * 5 | DANFe NFC-e em mensagem eletrônica
         */
        tpImp: DanfePrintFormat;
        /** Forma de emissão da NF-e
         * 1 | Normal
         * 2 | Contingência FS
         * 3 | Regime Especial NFF (NT 2021.002)
         * 4 | Contingência DPEC
         * 5 | Contingência FSDA
         * 6 | Contingência SVC - AN
         * 7 | Contingência SVC - RS
         * 9 | Contingência off-line NFC-e
         */
        tpEmis: IssuanceMode;
        /** Digito Verificador da Chave de Acesso da NF-e */
        cDV: string;
        /** Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Finalidade da emissão da NF-e:
         * 1 | NFe normal
         * 2 | NFe complementar
         * 3 | NFe de ajuste
         * 4 | Devolução/Retorno
         */
        finNFe: NFEGoal;
        /** Indica operação com consumidor final:
         * 0 | Não
         * 1 | Consumidor Final
         */
        indFinal: OperationWithEndConsumer;
        /** Indicador de presença do comprador no estabelecimento comercial no momento da operação:
         * 0 | Não se aplica (ex.: Nota Fiscal complementar ou de ajuste)
         * 1 | Operação presencial
         * 2 | Não presencial, internet
         * 3 | Não presencial, teleatendimento
         * 4 | NFC-e entrega em domicílio
         * 5 | Operação presencial, fora do estabelecimento
         * 9 | Não presencial, outros
         */
        indPres: BuyerPresenceOnEstablishmentAtTransactionIndicator;
        /** Indicador de intermediador/marketplace:
         * 0 | Operação sem intermediador (em site ou plataforma própria)
         * 1 | Operação em site ou plataforma de terceiros (intermediadores/marketplace)
         */
        indIntermed?: IntermediaryIndicator;
        /** Processo de emissão utilizado com a seguinte codificação:
         * 0 | emissão de NF-e com aplicativo do contribuinte
         * 1 | emissão de NF-e avulsa pelo Fisco
         * 2 | emissão de NF-e avulsa, pelo contribuinte com seu certificado digital, através do site do Fisco
         * 3 | emissão de NF-e pelo contribuinte com aplicativo fornecido pelo Fisco
         */
        procEmi: IssuingProcess;
        /** Versão do aplicativo utilizado no processo de emissão */
        verProc: string;
        /** Informar a data e hora de entrada em contingência. Contingência no formato (AAAA-MM-DDThh:mm:ssTZD)
         * ex.: 2012-09-01T13:00:00-03:00.
         */
        dhCont?: string;
        /** Informar a justificativa da entrada */
        xJust?: string;
        /** Grupo de informações da NF referenciada */
        NFref?: NF_Ref[];
    };
    /** Identificação do emitente */
    emit: Issuer;
    /** Emissão de avulsa, informar os dados do Fisco emitente */
    avulsa?: {
        /** CNPJ do Órgão emissor */
        CNPJ: string;
        /** Órgão emitente */
        xOrgao: string;
        /** Matrícula do agente */
        matr: string;
        /** Nome do agente */
        xAgente: string;
        /** Telefone */
        fone?: string;
        /** Sigla da Unidade da Federação */
        UF: UFIssuer;
        /** Número do Documento de Arrecadação de Receita */
        nDAR?: string;
        /** Data de emissão do DAR (AAAA-MM-DD) */
        dEmi?: string;
        /** Valor Total constante no DAR */
        vDAR?: string;
        /** Repartição Fiscal emitente */
        repEmi: string;
        /** Data de pagamento do DAR (AAAA-MM-DD) */
        dPag?: string;
    };
    /** Identificação do Destinatário */
    dest?: Recipient;
    /** Identificação do Local de Retirada (informar apenas quando for diferente do endereço do remetente) */
    retirada?: Local;
    /** Identificação do Local de Entrega (informar apenas quando for diferente do endereço do destinatário) */
    entrega?: Local;
    /** Pessoas autorizadas para o download do XML da NF-e */
    autXML?: ({ CPF: string } | { CNPJ: string })[];
    /** Dados dos detalhes da NF-e */
    det: {
        $: {
            /** Número do item do NF */
            nItem: string;
        };
        /** Dados dos produtos e serviços da NF-e */
        prod: Product;
        /** Tributos incidentes nos produtos ou serviços da NF-e */
        imposto: Tax;
        impostoDevol?: {
            /** Percentual de mercadoria devolvida */
            pDevol: string;
            /** Informação de IPI devolvido */
            IPI: {
                /** Valor do IPI devolvido */
                vIPIDevol: string;
            };
        };
        /** Informações adicionais do produto (norma referenciada, informações complementares, etc) */
        infAdProd?: string;
        /** Grupo de observações de uso livre (para o item da NF-e) */
        obsItem?: {
            /** Grupo de observações de uso livre (para o item da NF-e) */
            obsCont?: {
                $: { xCampo: string };
                xTexto: string;
            };
            /** Grupo de observações de uso livre (para o item da NF-e) */
            obsFisco: {
                $: { xCampo: string };
                xTexto: string;
            };
        };
    }[];
    /** Dados dos totais da NF-e */
    total: {
        /** Totais referentes ao ICMS */
        ICMSTot: {
            /** BC do ICMS */
            vBC: string;
            /** Valor Total do ICMS */
            vICMS: string;
            /** Valor Total do ICMS desonerado */
            vICMSDeson: string;
            /** Valor total do ICMS relativo ao Fundo de Combate à Pobreza (FCP) para a UF de destino */
            vFCPUFDest?: string;
            /** Valor total do ICMS de partilha para a UF do destinatário */
            vICMSUFDest?: string;
            /** Valor total do ICMS de partilha para a UF do remetente */
            vICMSUFRemet?: string;
            /** Valor Total do FCP (Fundo de Combate à Pobreza) */
            vFCP: string;
            /** BC do ICMS ST */
            vBCST: string;
            /** Valor Total do ICMS ST */
            vST: string;
            /** Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária */
            vFCPST: string;
            /** Valor Total do FCP (Fundo de Combate à Pobreza) retido anteriormente por substituição tributária */
            vFCPSTRet: string;
            /** Valor total da quantidade tributada do ICMS monofásico próprio */
            qBCMono?: string;
            /** Valor total do ICMS monofásico próprio */
            vICMSMono?: string;
            /** Valor total da quantidade tributada do ICMS monofásico sujeito a retenção */
            qBCMonoReten?: string;
            /** Valor total do ICMS monofásico sujeito a retenção */
            vICMSMonoReten?: string;
            /** Valor total da quantidade tributada do ICMS monofásico retido anteriormente */
            qBCMonoRet?: string;
            /** Valor do ICMS monofásico retido anteriormente */
            vICMSMonoRet?: string;
            /** Valor Total dos produtos e serviços */
            vProd: string;
            /** Valor Total do Frete */
            vFrete: string;
            /** Valor Total do Seguro */
            vSeg: string;
            /** Valor Total do Desconto */
            vDesc: string;
            /** Valor Total do II */
            vII: string;
            /** Valor Total do IPI */
            vIPI: string;
            /** Valor Total do IPI devolvido. Deve ser informado quando preenchido o Grupo Tributos Devolvidos na
             * emissão de nota finNFe=4 (devolução) nas operações com não contribuintes do IPI. Corresponde ao total
             * da soma dos campos id: UA04
             */
            vIPIDevol: string;
            /** Valor do PIS */
            vPIS: string;
            /** Valor do COFINS */
            vCOFINS: string;
            /** Outras Despesas acessórias */
            vOutro: string;
            /** Valor Total da NF-e */
            vNF: string;
            /** Valor estimado total de impostos federais, estaduais e municipais */
            vTotTrib?: string;
        };
        /** Totais referentes ao ISSQN */
        ISSQNtot?: {
            /** Valor Total dos Serviços sob não-incidência ou não tributados pelo ICMS */
            vServ?: string;
            /** Base de Cálculo do ISS */
            vBC?: string;
            /** Valor Total do ISS */
            vISS?: string;
            /** Valor do PIS sobre serviços */
            vPIS?: string;
            /** Valor do COFINS sobre serviços */
            vCOFINS?: string;
            /** Data da prestação do serviço (AAAA-MM-DD) */
            dCompet: string;
            /** Valor dedução para redução da base de cálculo */
            vDeducao?: string;
            /** Valor outras retenções */
            vOutro?: string;
            /** Valor desconto incondicionado */
            vDescIncond?: string;
            /** Valor desconto condicionado */
            vDescCond?: string;
            /** Valor Total Retenção ISS */
            vISSRet?: string;
            /** Código do regime especial de tributação */
            cRegTrib?: SpecialTaxRegimeCode;
        };
        /** Retenção de Tributos Federais */
        retTrib?: {
            /** Valor Retido de PIS */
            vRetPIS?: string;
            /** Valor Retido de COFINS */
            vRetCOFINS?: string;
            /** Valor Retido de CSLL */
            vRetCSLL?: string;
            /** Base de Cálculo do IRRF */
            vBCIRRF?: string;
            /** Valor Retido de IRRF */
            vIRRF?: string;
            /** Base de Cálculo da Retenção da Previdêncica Social */
            vBCRetPrev?: string;
            /** Valor da Retenção da Previdêncica Social */
            vRetPrev?: string;
        };
    };
    /** Dados dos transportes da NF-e */
    transp: Transport;
    /** Dados da cobrança da NF-e */
    cobr?: {
        /** Dados da fatura */
        fat?: {
            /** Número da fatura */
            nFat?: string;
            /** Valor original da fatura */
            vOrig?: string;
            /** Valor do desconto da fatura */
            vDesc?: string;
            /** Valor líquido da fatura */
            vLiq?: string;
        };
        /** Dados das duplicatas NT 2011/004 */
        dup?: {
            /** Número da duplicata */
            nDup?: string;
            /** Data de vencimento da duplicata (AAAA-MM-DD) */
            dVenc?: string;
            /** Valor da duplicata */
            vDup: string;
        }[];
    };
    /** Dados de Pagamento. Obrigatório apenas para (NFC-e) NT 2012/004 */
    pag: {
        /** Grupo de detalhamento da forma de pagamento */
        detPag: {
            /** Indicador da Forma de Pagamento:
             * 0 | Pagamento à Vista
             * 1 | Pagamento à Prazo
             */
            indPag?: PaymentIndicator;
            /** Forma de Pagamento */
            tPag: PaymentMode;
            /** Descrição do Meio de Pagamento */
            xPag?: string;
            /** Valor do Pagamento. Esta tag poderá ser omitida quando a tag tPag=90 (Sem Pagamento), caso contrário
             * deverá ser preenchida
             */
            vPag: string;
            /** Data do Pagamento */
            dPag?: string;
            /** CNPJ transacional do pagamento - Preencher informando o CNPJ do estabelecimento onde o pagamento foi
             * processado/transacionado/recebido quando a emissão do documento fiscal ocorrer em estabelecimento
             * distinto
             */
            CNPJPag?: string;
            /** UF do CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido */
            UFPag?: UFIssuer;
            /** Grupo de Cartões, PIX, Boletos e outros Pagamentos Eletrônicos */
            card?: {
                /** Tipo de Integração do processo de pagamento com o sistema de automação da empresa:
                 * 1 - Pagamento integrado com o sistema de automação da empresa (Ex.: equipamento TEF, Comércio
                 * Eletrônico, POS Integrado)
                 * 2 - Pagamento não integrado com o sistema de automação da empresa (Ex.: equipamento POS Simples)
                 */
                tpIntegra: IntegrationTypeInPaymentProcess;
                /** CNPJ da instituição de pagamento */
                CNPJ?: string;
                /** Bandeira da operadora de cartão */
                tBand?: string;
                /** Número de autorização da operação com cartões, PIX, boletos e outros pagamentos eletrônicos */
                cAut?: string;
                /** CNPJ do beneficiário do pagamento */
                CNPJReceb?: string;
                /** Identificador do terminal de pagamento */
                idTermPag?: string;
            };
        }[];
        /** Valor do Troco */
        vTroco?: string;
    };
    /** Grupo de Informações do Intermediador da Transação */
    infIntermed?: {
        /** CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de
         * serviços e de negócios
         */
        CNPJ: string;
        /** Identificador cadastrado no intermediador */
        idCadIntTran: string;
    };
    /** Informações adicionais da NF-e */
    infAdic?: {
        /** Informações adicionais de interesse do Fisco (v2.0) */
        infAdFisco?: string;
        /** Informações complementares de interesse do Contribuinte */
        infCpl?: string;
        /** Campo de uso livre do contribuinte informar o nome do campo no atributo xCampo e o conteúdo do campo no
         * xTexto
         */
        obsCont?: {
            $: { xCampo: string };
            xTexto: string;
        }[];
        /** Campo de uso exclusivo do Fisco informar o nome do campo no atributo xCampo e o conteúdo do campo no
         * xTexto
         */
        obsFisco?: {
            $: { xCampo: string };
            xTexto: string;
        }[];
        /** Grupo de informações do processo referenciado */
        procRef?: {
            /** Indentificador do processo ou ato concessório */
            nProc: string;
            /** Origem do processo, informar com:
             * 0 | SEFAZ
             * 1 | Justiça Federal
             * 2 | Justiça Estadual
             * 3 | Secex/RFB
             * 4 | CONFAZ
             * 9 | Outros
             */
            indProc: ProcessOrigin;
            /** Tipo do ato concessório Para origem do Processo na SEFAZ (indProc=0), informar o tipo de ato
             * concessório:
             * 08 | Termo de Acordo
             * 10 | Regime Especial
             * 12 | Autorização específica
             * 14 | Ajuste SINIEF
             * 15 | Convênio ICMS
             */
            tpAto?: ConcessionAct;
        }[];
    };
    /** Informações de exportação */
    exporta?: {
        /** Sigla da UF de Embarque ou de transposição de fronteira */
        UFSaidaPais: UFIssuer;
        /** Local de Embarque ou de transposição de fronteira */
        xLocExporta: string;
        /** Descrição do local de despacho */
        xLocDespacho?: string;
    };
    /** Informações de compras (Nota de Empenho, Pedido e Contrato) */
    compra?: {
        /** Informação da Nota de Empenho de compras públicas (NT2011/004) */
        xNEmp?: string;
        /** Informação do pedido */
        xPed?: string;
        /** Informação do contrato */
        xCont?: string;
    };
    /** Informações de registro aquisições de cana */
    cana?: {
        /** Identificação da safra */
        safra: string;
        /** Mês e Ano de Referência, formato: MM/AAAA */
        ref: string;
        /** Fornecimentos diários */
        forDia: {
            $: {
                /** Número do dia */
                dia: string;
            };
            /** Quantidade em quilogramas - peso líquido */
            qtde: string;
        }[];
        /** Total do mês */
        qTotMes: string;
        /** Total Anterior */
        qTotAnt: string;
        /** Total Geral */
        qTotGer: string;
        /** Deduções - Taxas e Contribuições */
        deduc?: {
            /** Descrição da Dedução */
            xDed: string;
            /** valor da dedução */
            vDed: string;
        }[];
        /** Valor dos fornecimentos */
        vFor: string;
        /** Valor Total das Deduções */
        vTotDed: string;
        /** Valor Líquido dos fornecimentos */
        vLiqFor: string;
    };
    /** Informações do Responsável Técnico pela emissão do DF-e */
    infRespTec?: TechnicalResponsible;
    /** Grupo para informações da solicitação da NFF */
    infSolicNFF?: {
        /** Solicitação do pedido de emissão da NFF */
        xSolic: string;
    };
};
