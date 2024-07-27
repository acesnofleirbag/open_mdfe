import {
    BACEN_CoinCode,
    BrazilianNomenclatureServices,
    EnvironmentIdentifier,
    IBGE_DistrictTable,
    ISO_Country,
    UFIssuer,
} from "../general";

export enum GenerateEnvironmentType {
    CITY_HALL = "1",
    NATIONAL_NFSE_SYSTEM = "2",
}

export enum IssueType {
    NORMAL_ISSUANCE_IN_THE_NATIONAL_NFSE_MODEL = "1",
    ORIGINAL_ISSUANCE_IN_THE_MUNICIPALITYS_OWN_LAYOUT_WITH_TRANSCRIPTION_TO_THE_NATIONAL_NFSE_MODEL = "2",
}

export enum IssuanceProcess {
    ISSUANCE_USING_THE_TAXPAYERS_APPLICATION_VIA_WEB_SERVICE = "1",
    ISSUANCE_USING_THE_APPLICATION_PROVIDED_BY_THE_TAX_AUTHORITIES_WEB = "2",
    ISSUANCE_USING_THE_APPLICATION_PROVIDED_BY_THE_TAX_AUTHORITIES_APP = "3",
}

export enum MessageStatusCode {
    GENERATED_NFSE = "100",
    GENERATED_REPLACEMENT_NFSE = "101",
    COURT_DECISION_NFSE = "102",
    INDIVIDUAL_NFSE = "103",
}

export enum IssuerType {
    PROVIDER = "1",
    RECIPIENT = "2",
    INTERMEDIARY = "3",
}

export enum JustificationCode {
    NONQUALIFICATION_OF_NFSE_FROM_SIMPLES_NACIONAL = "01",
    QUALIFICATION_OF_NFSE_FROM_SIMPLES_NACIONAL = "02",
    RETROACTIVE_INCLUSION_OF_IMMUNITY_EXEMPTION_FOR_NFSE = "03",
    RETROACTIVE_EXCLUSION_OF_IMMUNITY_EXEMPTION_FOR_NFSE = "04",
    REJECTION_OF_NFSE_BY_THE_RECIPIENT_OR_BY_THE_INTERMEDIARY_RESPONSIBLE_FOR_COLLECTING_THE_TAX = "05",
    OTHERS = "99",
}

export enum NonNIF_Reason {
    NOT_PROVIDED_IN_THE_ORIGINAL_INVOICE = "0",
    EXEMPTED_FROM_NIF = "1",
    NIF_NOT_REQUIRED = "2",
}

export enum SimpleNationalSituation {
    NON_OPTANT = "1",
    OPTANT_INDIVIDUAL_MICROENTREPRENEUR_MEI = "2",
    OPTANT_MICROENTERPRISE_OR_SMALL_BUSINESS_ME_EPP = "3",
}

export enum TaxAssessmentRegimeSN {
    FEDERAL_AND_MUNICIPAL_TAXES_BY_THE_SN = "1",
    FEDERAL_TAXES_BY_THE_SN_AND_ISSQN_OUTSIDE_THE_SN_ACCORDING_TO_THE_RESPECTIVE_LEGISLATION_MUNICIPAL_TAX = "2",
    FEDERAL_AND_MUNICIPAL_TAXES_OUTSIDE_THE_SN_ACCORDING_TO_THE_RESPECTIVE_LEGISLATION_FEDERAL_AND_MUNICIPAL_TAX = "3",
}

export enum TaxAssessmentRegimeSpecialTypes {
    NONE = "0",
    COOPERATIVE_ACT_COOPERATIVE_ = "1",
    ESTIMATE = "2",
    MUNICIPAL_MICROENTERPRISE = "3",
    NOTARY_OR_REGISTRAR = "4",
    SELF_EMPLOYED_PROFESSIONAL = "5",
    SOCIETY_OF_PROFESSIONALS = "6",
}

export enum ServiceUsageLocal {
    CONSUMPTION_OF_THE_SERVICE_PROVIDED_OCCURRED_IN_THE_MUNICIPALITY_WHERE_THE_SERVICE_WAS_PROVIDED = "0",
    CONSUMPTION_OF_THE_SERVICE_PROVIDED_OCCURRED_ABROAD = "1",
}

export enum ProvisionMode {
    UNKNOWN_TYPE_NOT_INFORMED_IN_THE_SOURCE_NOTE = "0",
    CROSS_BORDER = "1",
    CONSUMPTION_IN_BRAZIL = "2",
    COMMERCIAL_PRESENCE_ABROAD = "3",
    TEMPORARY_MOVEMENT_OF_INDIVIDUALS = "4",
}

export enum Bond {
    NO_LINK_WITH_THE_BORROWER_PROVIDER = "0",
    SUBSIDIARY = "1",
    PARENT_COMPANY = "2",
    ASSOCIATED_COMPANY = "3",
    HEAD_OFFICE = "4",
    SUBSIDIARY_OR_BRANCH = "5",
    OTHER_LINK = "6",
}

export enum ProviderForeignTradeSupportMechanism {
    UNKNOWN_TYPE_NOT_INFORMED_IN_THE_ORIGINAL_INVOICE = "00",
    NONE = "01",
    ACC_ADVANCE_ON_EXCHANGE_CONTRACT_ZERO_REDUCTION_OF_IR_AND_IOF = "02",
    ACE_ADVANCE_ON_EXCHANGE_DELIVERED_ZERO_REDUCTION_OF_IR_AND_IOF = "03",
    BNDES_EXIM_POST_SHIPMENT_SERVICES = "04",
    BNDES_EXIM_PRE_SHIPMENT_SERVICES = "05",
    FGE_EXPORT_GUARANTEE_FUND = "06",
    PROEX_EQUALIZATION = "07",
    PROEX_FINANCING = "08",
}

export enum TakerForeignTradeSupportMechanism {
    UNKNOWN_TYPE_NOT_INFORMED_IN_THE_ORIGINAL_NOTE = "00",
    NONE = "01",
    PUBLIC_ADMINISTRATION_AND_INTERNATIONAL_REPR = "02",
    RENTAL_AND_LEASING_OF_MACHINERY_EQUIPMENT_VESSELS_AND_AIRCRAFT = "03",
    LEASING_OF_AIRCRAFT_FOR_PUBLIC_AIR_TRANSPORT_COMPANY = "04",
    COMMISSION_TO_EXTERNAL_AGENTS_IN_EXPORTS = "05",
    EXPENSES_FOR_STORAGE_MOVEMENT_AND_TRANSPORTATION_OF_CARGO_ABROAD = "06",
    FIFA_EVENTS_SUBSIDIARY = "07",
    FIFA_EVENTS = "08",
    FREIGHT_LEASING_OF_VESSELS_OR_AIRCRAFT_AND_OTHERS = "09",
    AERONAUTICAL_MATERIAL = "10",
    PROMOTION_OF_GOODS_ABROAD = "11",
    PROMOTION_OF_BRAZILIAN_TOURIST_DESTINATIONS = "12",
    PROMOTION_OF_BRAZIL_ABROAD = "13",
    PROMOTION_OF_SERVICES_ABROAD = "14",
    RECINE = "15",
    RECOPA = "16",
    REGISTRATION_AND_MAINTENANCE_OF_TRADEMARKS_PATENTS_AND_PLANT_VARIETIES = "17",
    REICOMP = "18",
    REIDI = "19",
    REPENEC = "20",
    REPES = "21",
    RETAERO = "22",
    RETID = "23",
    ROYALTIES_TECHNICAL_AND_SCIENTIFIC_ASSISTANCE_AND_SIMILAR = "24",
    CONFORMITY_ASSESSMENT_SERVICES_LINKED_TO_WTO_AGREEMENTS = "25",
    ZPE = "26",
}

export enum OperationLinkedWithGoodsTemporaryMovement {
    UNKNOWN_TYPE_NOT_INFORMED_IN_THE_SOURCE_NOTE = "0",
    NO = "1",
    LINKED_IMPORT_DECLARATION = "2",
    LINKED_EXPORT_DECLARATION = "3",
}

export enum ShareNFSeInfosWithForeignTradeSecretary {
    NOT_SEND = "0",
    SEND = "1",
}

export enum ServiceCategory {
    LEASE = "1",
    SUBLEASE = "2",
    RENT = "3",
    RIGHT_OF_WAY = "4",
    PERMISSION_TO_USE = "5",
}

export enum ObjectType {
    RAILWAY = "1",
    HIGHWAY = "2",
    POLES = "3",
    CABLES = "4",
    PIPES = "5",
    CONDUITS_OF_ANY_NATURE = "6",
}

export enum VehicleCategory {
    VEHICLE_CATEGORY_TYPE_NOT_SPECIFIED_IN_THE_ORIGINAL_INVOICE = "00",
    CAR_PICKUP_TRUCK_AND_VAN = "01",
    LIGHT_TRUCK_BUS_TRACTOR_TRUCK_AND_VAN = "02",
    CAR_AND_PICKUP_TRUCK_WITH_SEMI_TRAILER = "03",
    TRUCK_TRACTOR_TRUCK_TRACTOR_TRUCK_WITH_SEMI_TRAILER_AND_BUS = "04",
    CAR_AND_PICKUP_TRUCK_WITH_TRAILER = "05",
    TRUCK_WITH_TRAILER_AND_TRACTOR_TRUCK_WITH_SEMI_TRAILER1 = "06",
    TRUCK_WITH_TRAILER_AND_TRACTOR_TRUCK_WITH_SEMI_TRAILER2 = "07",
    TRUCK_WITH_TRAILER_AND_TRACTOR_TRUCK_WITH_SEMI_TRAILER3 = "08",
    MOTORCYCLES_SCOOTERS_AND_MOTORIZED_BICYCLES = "09",
    SPECIAL_VEHICLE = "10",
    EXEMPT_VEHICLE = "11",
}

export enum RaceType {
    SIMPLE = "1",
    PAIR = "2",
}

export enum DeductionReductionIdentification {
    FOOD_AND_BEVERAGES_MINIBAR = "1",
    MATERIALS = "2",
    EXTERNAL_PRODUCTION = "3",
    EXPENSE_REIMBURSEMENT = "4",
    CONSORTIUM_TRANSFER = "5",
    HEALTH_PLAN_TRANSFER = "6",
    SERVICES = "7",
    LABOR_SUBCONTRACTING = "8",
    OTHER_DEDUCTIONS = "99",
}

export enum ISSQN_TaxOverService {
    TAXABLE_TRANSACTION = "1",
    EXPORT_OF_SERVICE = "2",
    NON_INCIDENCE = "3",
    IMMUNITY = "4",
}

export enum BunicipalBenefitType {
    DIFFERENTIATED_TAX_RATE = "1",
    BC_REDUCTION = "2",
    EXEMPTION = "3",
}

export enum SuspendedEnforceability {
    ENFORCEABILITY_SUSPENDED_BY_COURT_DECISION = "1",
    ENFORCEABILITY_SUSPENDED_BY_ADMINISTRATIVE_PROCEEDINGS = "2",
}

export enum ISSQN_Immunity {
    IMMUNITY_TYPE_NOT_INFORMED_IN_THE_SOURCE_NOTE = "0",
    ASSETS_INCOME_OR_SERVICES_OF_EACH_OTHER = "1",
    TEMPLES_OF_ANY_RELIGION = "2",
    ASSETS_INCOME_OR_SERVICES_OF_POLITICAL_PARTIES_INCLUDING_THEIR_FOUNDATIONS_OF_WORKERS_UNIONS_OF_NON_PROFIT_EDUCATIONAL_AND_SOCIAL_ASSISTANCE_INSTITUTIONS = "3",
    BOOKS_NEWSPAPERS_PERIODICALS_AND_THE_PAPER_INTENDED_FOR_THEIR_PRINTING = "4",
}

export enum RetentionType {
    NOT_RETAINED = "1",
    RETAINED_BY_RECIPIENT = "2",
    RETAINED_BY_INTERMEDIARY = "3",
}

export enum CST_Type {
    NONE = "00",
    TAXABLE_TRANSACTION_WITH_BASIC_RATE = "01",
    TAXABLE_TRANSACTION_WITH_DIFFERENTIATED_RATE = "02",
    TAXABLE_TRANSACTION_WITH_RATE_PER_PRODUCT_MEASUREMENT_UNIT = "03",
    SINGLE_PHASE_TAXABLE_TRANSACTION_RESALE_AT_ZERO_RATE = "04",
    TAXABLE_TRANSACTION_BY_TAX_SUBSTITUTION = "05",
    TAXABLE_TRANSACTION_AT_ZERO_RATE = "06",
    TAXABLE_TRANSACTION_OF_CONTRIBUTION = "07",
    TRANSACTION_WITHOUT_INCIDENCE_OF_CONTRIBUTION = "08",
    TRANSACTION_WITH_SUSPENSION_OF_CONTRIBUTION = "09",
}

export enum PIS_COFINS_RetentionType {
    RETAINED = "1",
    NOT_RETAINED = "2",
}

// @@@

type Address = {
    xLgr: string;
    nro: string;
    xCpl: string;
    xBairro: string;
    cMun: IBGE_DistrictTable;
    UF: UFIssuer;
    CEP: string;
};

// schema: TCEmitente
type __Issuer = {
    IM?: string;
    xNome: string;
    xFant?: string;
    enderNac: Address;
    fone?: string;
    email?: string;
};

type Issuer__Type1 = {
    CNPJ: string;
} & __Issuer;

type Issuer__Type2 = {
    CPF: string;
} & __Issuer;

type Issuer = Issuer__Type1 | Issuer__Type2;

// schema: TCValoresNFSe
type Values = {
    vCalcDR?: string;
    tpBM?: string;
    vCalcBM?: string;
    vBC?: string;
    pAliqAplic?: string;
    vISSQN?: string;
    vTotalRet?: string;
    vLiq: string;
    xOutInf?: string;
};

type __ServiceProvider = {
    /** Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF) do prestador do serviço */
    CAEPF?: string;
    /** Número da inscrição municipal */
    IM?: string;
    /** Nome/Nome Empresarial do prestador */
    xNome?: string;
    /** Dados de endereço do prestador */
    end?: Address;
    /** Número do telefone do prestador: Preencher com o Código DDD + número do telefone. Nas operações com exterior é
     * permitido informar o código do país + código da localidade + número do telefone)
     */
    fone?: string;
    /** E-mail */
    email?: string;
    /** Grupo de informações relativas aos regimes de tributação do prestador de serviços */
    regTrib: {
        /**  Situação perante o Simples Nacional:
         * 1 | Não Optante;
         * 2 | Optante - Microempreendedor Individual (MEI);
         * 3 | Optante - Microempresa ou Empresa de Pequeno Porte (ME/EPP) */
        opSimpNac: SimpleNationalSituation;
        /** Opção para que o contribuinte optante pelo Simples Nacional ME/EPP (opSimpNac = 3) possa indicar, ao emitir
         * o documento fiscal, em qual regime de apuração os tributos federais e municipal estão inseridos, caso tenha
         * ultrapassado algum sublimite ou limite definido para o Simples Nacional:
         * 1 – Regime de apuração dos tributos federais e municipal pelo SN
         * 2 – Regime de apuração dos tributos federais pelo SN e ISSQN por fora do SN conforme respectiva legislação
         * municipal do tributo
         * 3 – Regime de apuração dos tributos federais e municipal por fora do SN conforme respectivas legilações
         * federal e municipal de cada tributo
         */
        regApTribSN?: TaxAssessmentRegimeSN;
        /**  Tipos de Regimes Especiais de Tributação:
         * 0 | Nenhum
         * 1 | Ato Cooperado (Cooperativa)
         * 2 | Estimativa
         * 3 | Microempresa Municipal
         * 4 | Notário ou Registrador
         * 5 | Profissional Autônomo
         * 6 | Sociedade de Profissionais
         */
        regEspTrib: TaxAssessmentRegimeSpecialTypes;
    };
};

type ServiceProvider__Type1 = {
    /** Número do CNPJ */
    CNPJ: string;
} & __ServiceProvider;

type ServiceProvider__Type2 = {
    /** Número do CPF */
    CPF: string;
} & __ServiceProvider;

type ServiceProvider__Type3 = {
    /** Número de Identificação Fiscal fornecido por órgão de administração tributária no exterior */
    NIF: string;
} & __ServiceProvider;

type ServiceProvider__Type4 = {
    /** Motivo para não informação do NIF:
     * 0 | Não informado na nota de origem
     * 1 | Dispensado do NIF
     * 2 | Não exigência do NIF
     */
    cNaoNIF: NonNIF_Reason;
} & __ServiceProvider;

type ServiceProvider =
    | ServiceProvider__Type1
    | ServiceProvider__Type2
    | ServiceProvider__Type3
    | ServiceProvider__Type4;

type __PeopleInfos = {
    /** Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF) */
    CAEPF?: string;
    /** Número da inscrição municipal */
    IM?: string;
    /** Nome/Nome Empresarial */
    xNome: string;
    /** Dados de endereço */
    end?: Address;
    /** Número do telefone do prestador: Preencher com o Código DDD + número do telefone. Nas operações com exterior é
     * permitido informar o código do país + código da localidade + número do telefone)
     */
    fone?: string;
    /** E-mail */
    email?: string;
};

type PeopleInfos__Type1 = {
    /** Número do CNPJ */
    CNPJ: string;
} & __PeopleInfos;

type PeopleInfos__Type2 = {
    /** Número do CPF */
    CPF: string;
} & __PeopleInfos;

type PeopleInfos__Type3 = {
    /** Número de Identificação Fiscal fornecido por órgão de administração tributária no exterior */
    NIF: string;
} & __PeopleInfos;

type PeopleInfos__Type4 = {
    /** Motivo para não informação do NIF:
     * 1 | Dispensado do NIF
     * 2 | Não exigência do NIF
     */
    cNaoNIF: string;
} & __PeopleInfos;

type PeopleInfos = PeopleInfos__Type1 | PeopleInfos__Type2 | PeopleInfos__Type3 | PeopleInfos__Type4;

type Construction__Type1 = {
    /** Número de identificação da obra. Cadastro Nacional de Obras (CNO) ou Cadastro Específico do INSS (CEI) */
    cObra: string;
};

type Construction__Type2 = {
    /** Inscrição imobiliária fiscal (código fornecido pela Prefeitura Municipal para a identificação da obra ou para
     * fins de recolhimento do IPTU)
     */
    inscImobFisc: string;
};

type __SimpleAddress = {
    /** Tipo e nome do logradouro da localização do imóvel */
    xLgr: string;
    /** Número do imóvel */
    nro: string;
    /** Complemento do endereço */
    xCpl: string;
    /** Bairro */
    xBairro: string;
};

type SimpleAddress__Type1 = {
    /** Número do CEP */
    CEP: string;
} & __SimpleAddress;

type SimpleAddress__Type2 = {
    /** Grupo de informações específicas de endereço no exterior */
    endExt: {
        /** Código alfanumérico do Endereçamento Postal no exterior do prestador do serviço */
        cEndPost: string;
        /** Nome da cidade no exterior do prestador do serviço */
        xCidade: string;
        /** Estado, província ou região da cidade no exterior do prestador do serviço */
        xEstProvReg: string;
    };
} & __SimpleAddress;

type SimpleAddress = SimpleAddress__Type1 | SimpleAddress__Type2;

type Construction__Type3 = {
    /** Grupo de informações do endereço da obra do serviço prestado */
    end: SimpleAddress;
};

type Construction = Construction__Type1 | Construction__Type2 | Construction__Type3;

type __EventActivity = {
    /** Descrição do evento Artístico, Cultural, Esportivo, etc */
    desc: string;
    /** Data de início da atividade de evento. Ano, Mês e Dia (AAAA-MM-DD) */
    dtIni: string;
    /** Data de fim da atividade de evento. Ano, Mês e Dia (AAAA-MM-DD) */
    dtFim: string;
};

type EventActivity__Type1 = __EventActivity & {
    /** Identificação da Atividade de Evento (código identificador de evento determinado pela Administração Tributária
     * Municipal)
     */
    id: string;
};

type EventActivity__Type2 = __EventActivity & {
    /** Grupo de informações relativas ao endereço da atividade, evento ou local do serviço prestado */
    end: SimpleAddress;
};

type EventActivity = EventActivity__Type1 | EventActivity__Type2;

type __DeductionReductionDocument = {
    /** Identificação da Dedução/Redução:
     * 1 | Alimentação e bebidas/frigobar
     * 2 | Materiais
     * 3 | Produção externa
     * 4 | Reembolso de despesas
     * 5 | Repasse consorciado
     * 6 | Repasse plano de saúde
     * 7 | Serviços
     * 8 | Subempreitada de mão de obra
     * 99 | Outras deduções
     */
    tpDedRed: DeductionReductionIdentification;
    /** Descrição da Dedução/Redução quando a opção é "99 – Outras Deduções" */
    xDescOutDed: string;
    /** Data da emissão do documento dedutível. Ano, mês e dia (AAAA-MM-DD) */
    dtEmiDoc: string;
    /** Valor monetário total dedutível/redutível no documento informado (R$). Este é o valor total no documento
     * informado que é passível de dedução/redução
     */
    vDedutivelRedutivel: string;
    /** Valor monetário utilizado para dedução/redução do valor do serviço da NFS-e que está sendo emitida (R$). Deve
     * ser menor ou igual ao valor deduzível/redutível (vDedutivelRedutivel)
     */
    vDeducaoReducao: string;
    /** Grupo de informações do Fornecedor em Deduções de Serviços */
    fornec?: PeopleInfos;
};

type DeductionReductionDocument__Type1 = {
    /** Chave de Acesso da NFS-e (Padrão Nacional) */
    chNFSe: string;
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type2 = {
    /** Chave de Acesso da NF-e */
    chNFe: string;
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type3 = {
    /** Grupo de informações de Outras NFS-e (Padrão anterior de NFS-e) */
    NFSeMun: {
        /** Código Município emissor da nota eletrônica municipal (Tabela do IBGE) */
        cMunNFSeMun: IBGE_DistrictTable;
        /** Número da nota eletrônica municipal */
        nNFSeMun: string;
        /** Código de Verificação da nota eletrônica municipal */
        cVerifNFSeMun: string;
    };
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type4 = {
    /** Grupo de informações de NF ou NFS (Modelo não eletrônico) */
    NFNFS: {
        /** Número da Nota Fiscal NF ou NFS */
        nNFS: string;
        /** Modelo da Nota Fiscal NF ou NFS */
        modNFS: string;
        /** Série Nota Fiscal NF ou NFS */
        serieNFS: string;
    };
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type5 = {
    /** Número de documento fiscal */
    nDocFisc: string;
} & __DeductionReductionDocument;

type DeductionReductionDocument__Type6 = {
    /** Número de documento não fiscal */
    nDoc: string;
} & __DeductionReductionDocument;

type DeductionReductionDocument =
    | DeductionReductionDocument__Type1
    | DeductionReductionDocument__Type2
    | DeductionReductionDocument__Type3
    | DeductionReductionDocument__Type4
    | DeductionReductionDocument__Type5
    | DeductionReductionDocument__Type6;

type __MunicipalBenefit = {
    /** Tipo do Benefício Municipal:
     * 1 | Alíquota Diferenciada
     * 2 | Redução da BC
     * 3 | Isenção
     */
    tpBM: BunicipalBenefitType;
    /** Identificador do benefício municipal parametrizado pelo município */
    nBM: string;
};

type MunicipalBenefit__Type1 = __MunicipalBenefit & {
    /** Valor monetário informado pelo emitente para redução da base de cálculo (BC) do ISSQN devido a um Benefício
     * Municipal (BM)
     */
    vRedBCBM?: string;
};

type MunicipalBenefit__Type2 = __MunicipalBenefit & {
    /** Valor percentual informado pelo emitente para redução da base de cálculo (BC) do ISSQN devido a um Benefício
     * Municipal (BM)
     */
    pRedBCBM?: string;
};

type MunicipalBenefit = MunicipalBenefit__Type1 | MunicipalBenefit__Type2;

type TaxTotal__Type1 = {
    /** Valor monetário total aproximado dos tributos, em conformidade com o artigo 1o da Lei no
     * 12.741/2012
     */
    vTotTrib: {
        /** Valor monetário total aproximado dos tributos federais (R$) */
        vTotTribFed: string;
        /** Valor monetário total aproximado dos tributos estaduais (R$) */
        vTotTribEst: string;
        /** Valor monetário total aproximado dos tributos municipais (R$) */
        vTotTribMun: string;
    };
};

type TaxTotal__Type2 = {
    /** Valor percentual total aproximado dos tributos, em conformidade com o artigo 1o da Lei no
     * 12.741/2012
     */
    pTotTrib: {
        /** Valor percentual total aproximado dos tributos federais (%) */
        pTotTribFed: string;
        /** Valor percentual total aproximado dos tributos estaduais (%) */
        pTotTribEst: string;
        /** Valor percentual total aproximado dos tributos municipais (%) */
        pTotTribMun: string;
    };
};

type TaxTotal__Type3 = {
    /** Indicador de informação de valor total de tributos. Possui valor fixo igual a zero
     * (indTotTrib=0). Não informar nenhum valor estimado para os Tributos (Decreto 8.264/2014):
     * 0 | Não
     */
    indTotTrib: "0";
};

type TaxTotal__Type4 = {
    /** Valor percentual aproximado do total dos tributos da alíquota do Simples Nacional (%) */
    pTotTribSN: string;
};

type TaxTotal = TaxTotal__Type1 | TaxTotal__Type2 | TaxTotal__Type3 | TaxTotal__Type4;

export type SefazNFSe = {
    $: { Id: string };
    /** Descrição do código do IBGE do município emissor da NFS-e */
    xLocEmi: string;
    /** Descrição do local da prestação do serviço */
    xLocPrestacao: string;
    /**  Número sequencial por tipo de emitente da NFS-e. A Sefin Nacional NFS-e irá gerar o número da NFS-e de forma
     * sequencial por emitente. Por se tratar de um ambiente altamente transacional, a Sefin Nacional NFS-e não irá
     * reutilizar números inutilizados durante a geração da NFS-e
     */
    nNFSe: string;
    /** O código de município utilizado pelo Sistema Nacional NFS-e é o código definido para cada município pertencente
     * ao ""Anexo V – Tabela de Código de Municípios do IBGE"", que consta ao final do Manual de Orientação ao
     * Contribuinte do ISSQN para a Sefin Nacional NFS-e. O município de incidência do ISSQN é determinado
     * automaticamente pelo sistema, conforme regras do aspecto espacial da lei complementar federal (LC 116/03) que são
     * válidas para todos os municípios. <http://www.planalto.gov.br/ccivil_03/Leis/LCP/Lcp116.htm>
     */
    cLocIncid?: IBGE_DistrictTable;
    /** A descrição do código de município utilizado pelo Sistema Nacional NFS-e é o nome de cada município pertencente
     * ao "Anexo V – Tabela de Código de Municípios do IBGE", que consta ao final do Manual de Orientação ao Contribuinte
     * do ISSQN para a Sefin Nacional NFS-e */
    xLocIncid?: string;
    /** Descrição do código de tributação nacional do ISSQN */
    xTribNac: string;
    /** Descrição do código de tributação municipal do ISSQN */
    xTribMun?: string;
    /** Descrição do código da NBS */
    xNBS?: string;
    /** Versão do aplicativo que gerou a NFS-e */
    verAplic: string;
    /** Ambiente gerador da NFS-e:
     * 1 | Prefeitura
     * 2 | Sistema Nacional da NFS-e
     */
    ambGer: GenerateEnvironmentType;
    /** Processo de Emissão da DPS:
     * 1 | Emissão normal no modelo da NFS-e Nacional
     * 2 | Emissão original em leiaute próprio do município com transcrição para o modelo da NFS-e Nacional
     */
    tpEmis: IssueType;
    /** Processo de Emissão da DPS:
     * 1 | Emissão com aplicativo do contribuinte (via Web Service)
     * 2 | Emissão com aplicativo disponibilizado pelo fisco (Web)
     * 3 | Emissão com aplicativo disponibilizado pelo fisco (App)
     */
    procEmi: IssuanceProcess;
    /** Código do Status da mensagem:
     * 100 | NFS-e Gerada
     * 101 | NFS-e de Substituição Gerada
     * 102 | NFS-e de Decisão Judicial
     * 103 | NFS-e Avulsa
     */
    cStat: MessageStatusCode;
    /** Data/Hora da validação da DPS e geração da NFS-e. Data e hora no formato UTC (Universal Coordinated
     * Time): AAAA-MM-DDThh:mm:ssTZD
     */
    dhProc: string;
    /** Número sequencial do documento gerado por ambiente gerador de DFSe do múnicípio */
    nDFSe: string;
    /** Grupo de informações da DPS relativas ao emitente da NFS-e */
    emit: Issuer;
    /** Grupo de valores referentes ao Serviço Prestado */
    valores: Values;
    /** Grupo de informações da DPS relativas ao serviço prestado */
    DPS: {
        infDPS: {
            $: {
                /**  Informar o identificador precedido do literal ‘DPS’. A regra de formação do identificador de 45
                 * posições da DPS é: "DPS" + Cód.Mun (7) + Tipo de Inscrição Federal (1) + Inscrição Federal (14 - CPF
                 * completar com 000 à esquerda) + Série DPS (5)+ Núm. DPS (15)
                 */
                Id: string;
            };
            /** Identificação do Ambiente:
             * 1 | Produção
             * 2 | Homologação
             */
            tpAmb: EnvironmentIdentifier;
            /** Data e hora da emissão do DPS. Data e hora no formato UTC (Universal Coordinated Time):
             * AAAA-MM-DDThh:mm:ssTZD
             */
            dhEmi: string;
            /** Versão do aplicativo que gerou o DPS */
            verAplic: string;
            /** Número do equipamento emissor do DPS ou série do DPS */
            serie: string;
            /** Número do DPS */
            nDPS: string;
            /** Data em que se iniciou a prestação do serviço: Dia, mês e ano (AAAAMMDD) */
            dCompet: string;
            /** Emitente da DPS:
             * 1 | Prestador;
             * 2 | Tomador;
             * 3 | Intermediário
             */
            tpEmit: IssuerType;
            /**  O código de município utilizado pelo Sistema Nacional NFS-e é o código definido para cada município
             * pertencente ao ""Anexo V – Tabela de Código de Municípios do IBGE"", que consta ao final do Manual de
             * Orientação ao Contribuinte do ISSQN para a Sefin Nacional NFS-e. O município emissor da NFS-e é aquele
             * município em que o emitente da DPS está cadastrado e autorizado a "emitir uma NFS-e", ou seja, emitir uma
             * DPS para que o sistema nacional valide as informações nela prestadas e gere a NFS-e correspondente para o
             * emitente. Para que o sistema nacional emita a NFS-e o município emissor deve ser conveniado e estar ativo
             * no sistema nacional. Além disso o convênio do município deve permitir que os contribuintes do município
             * utilize os emissores públicos do Sistema Nacional NFS-e
             */
            cLocEmi: IBGE_DistrictTable;
            /** Dados da NFS-e a ser substituída */
            subst?: {
                /** Chave de acesso da NFS-e a ser substituída */
                chSubstda: string;
                /**  Código de justificativa para substituição de NFS-e:
                 * 01 | Desenquadramento de NFS-e do Simples Nacional
                 * 02 | Enquadramento de NFS-e no Simples Nacional
                 * 03 | Inclusão Retroativa de Imunidade/Isenção para NFS-e
                 * 04 | Exclusão Retroativa de Imunidade/Isenção para NFS-e
                 * 05 | Rejeição de NFS-e pelo tomador ou pelo intermediário se responsável pelo recolhimento do tributo
                 * 99 | Outros
                 */
                cMotivo: JustificationCode;
                /** Descrição do motivo da substituição da NFS-e */
                xMotivo?: string;
            };
            /** Grupo de informações do DPS relativas ao Prestador de Serviços */
            prest: ServiceProvider;
            /** Grupo de informações do DPS relativas ao Tomador de Serviços */
            toma: PeopleInfos;
            /** Grupo de informações do DPS relativas ao Intermediário de Serviços */
            interm: PeopleInfos;
            /** Grupo de informações do DPS relativas ao Serviço Prestado */
            serv: {
                /**  Grupo de informações relativas ao local da prestação do serviço */
                locPrest: {
                    /** Código do município onde o serviço foi prestado (tabela do IBGE) */
                    cLocPrestacao: IBGE_DistrictTable;
                    /** Código do país onde o serviço foi prestado (Tabela de Países ISO) */
                    cPaisPrestacao: ISO_Country;
                    /**  Opção para que o emitente informe onde ocorreu o consumo do serviço prestado:
                     * 0 | Consumo do serviço prestado ocorrido no município do local da prestação
                     * 1 | Consumo do serviço prestado ocorrido ocorrido no exterior
                     */
                    opConsumServ: ServiceUsageLocal;
                };
                /** Grupo de informações relativas ao código do serviço prestado */
                cServ: {
                    /** Código de tributação nacional do ISSQN: Regra de formação - 6 dígitos numéricos sendo: 2 para
                     * Item (LC 116/2003), 2 para Subitem (LC 116/2003) e 2 para Desdobro Nacional
                     */
                    cTribNac: string;
                    /** Código de tributação municipal do ISSQN */
                    cTribMun?: string;
                    /** Descrição completa do serviço prestado */
                    xDescServ: string;
                    /** Código NBS (Nomenclatura Brasileira de Serviços, Intangíveis e outras Operações que produzam
                     * Variações no Patrimônio) correspondente ao serviço prestado
                     */
                    cNBS?: BrazilianNomenclatureServices;
                    /** Código interno do contribuinte */
                    cIntContrib?: string;
                };
                /** Grupo de informações relativas à exportação/importação de serviço prestado */
                comExt?: {
                    /** Modo de Prestação:
                     * 0 | Desconhecido (tipo não informado na nota de origem)
                     * 1 | Transfronteiriço
                     * 2 | Consumo no Brasil
                     * 3 | Presença Comercial no Exterior
                     * 4 | Movimento Temporário de Pessoas Físicas
                     */
                    mdPrestacao: ProvisionMode;
                    /** Vínculo entre as partes no negócio:
                     * 0 | Sem vínculo com o tomador/ Prestador
                     * 1 | Controlada
                     * 2 | Controladora
                     * 3 | Coligada
                     * 4 | Matriz
                     * 5 | Filial ou sucursal
                     * 6 | Outro vínculo
                     */
                    vincPrest: Bond;
                    /** Identifica a moeda da transação comercial */
                    tpMoeda: BACEN_CoinCode;
                    /** Valor do serviço prestado expresso em moeda estrangeira especificada em tpmoeda */
                    vServMoeda: string;
                    /**  Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo prestador do serviço:
                     * 00 | Desconhecido (tipo não informado na nota de origem)
                     * 01 | Nenhum
                     * 02 | ACC - Adiantamento sobre Contrato de Câmbio – Redução a Zero do IR e do IOF
                     * 03 | ACE – Adiantamento sobre Cambiais Entregues - Redução a Zero do IR e do IOF
                     * 04 | BNDES-Exim Pós-Embarque – Serviços
                     * 05 | BNDES-Exim Pré-Embarque - Serviços
                     * 06 | FGE - Fundo de Garantia à Exportação
                     * 07 | PROEX - EQUALIZAÇÃO
                     * 08 | PROEX - Financiamento
                     */
                    mecAFComexP: ProviderForeignTradeSupportMechanism;
                    /**  Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo tomador do serviço:
                     * 00 | Desconhecido (tipo não informado na nota de origem)
                     * 01 | Nenhum
                     * 02 | Adm. Pública e Repr. Internacional
                     * 03 | Alugueis e Arrend. Mercantil de maquinas, equip., embarc. e aeronaves
                     * 04 | Arrendamento Mercantil de aeronave para empresa de transporte aéreo público
                     * 05 | Comissão a agentes externos na exportação
                     * 06 | Despesas de armazenagem, mov. e transporte de carga no exterior
                     * 07 | Eventos FIFA (subsidiária)
                     * 08 | Eventos FIFA
                     * 09 | Fretes, arrendamentos de embarcações ou aeronaves e outros
                     * 10 | Material Aeronáutico
                     * 11 | Promoção de Bens no Exterior
                     * 12 | Promoção de Dest. Turísticos Brasileiros
                     * 13 | Promoção do Brasil no Exterior
                     * 14 | Promoção Serviços no Exterior
                     * 15 | RECINE
                     * 16 | RECOPA
                     * 17 | Registro e Manutenção de marcas, patentes e cultivares
                     * 18 | REICOMP
                     * 19 | REIDI
                     * 20 | REPENEC
                     * 21 | REPES
                     * 22 | RETAERO
                     * 23 | RETID
                     * 24 | Royalties, Assistência Técnica, Científica e Assemelhados
                     * 25 | Serviços de avaliação da conformidade vinculados aos Acordos da OMC
                     * 26 | ZPE
                     */
                    mecAFComexT: TakerForeignTradeSupportMechanism;
                    /**  Operação está vinculada à Movimentação Temporária de Bens:
                     * 0 | Desconhecido (tipo não informado na nota de origem)
                     * 1 | Não
                     * 2 | Vinculada - Declaração de Importação
                     * 3 | Vinculada - Declaração de Exportação
                     */
                    movTempBens: OperationLinkedWithGoodsTemporaryMovement;
                    /** Número da Declaração de Importação (DI/DSI/DA/DRI-E) averbado */
                    nDI?: string;
                    /** Número do Registro de Exportação (RE) averbado */
                    nRE?: string;
                    /** Compartilhar as informações da NFS-e gerada a partir desta DPS com a Secretaria de Comércio
                     * Exterior:
                     * 0 | Não enviar para o MDIC
                     * 1 | Enviar para o MDIC
                     */
                    mdic: ShareNFSeInfosWithForeignTradeSecretary;
                };
                /** Grupo de informações relativas a atividades de Locação, sublocação, arrendamento, direito de
                 * passagem ou permissão de uso, compartilhado ou não, de ferrovia, rodovia, postes, cabos, dutos e
                 * condutos de qualquer natureza
                 */
                lsadppu?: {
                    /** Categorias do serviço:
                     * 1 | Locação
                     * 2 | Sublocação
                     * 3 | Arrendamento
                     * 4 | Direito de passagem
                     * 5 | Permissão de uso
                     */
                    categ: ServiceCategory;
                    /** Tipo de objetos da locação, sublocação, arrendamento, direito de passagem ou permissão de uso:
                     * 1 | Ferrovia;
                     * 2 | Rodovia;
                     * 3 | Postes;
                     * 4 | Cabos;
                     * 5 | Dutos;
                     * 6 | Condutos de qualquer natureza;
                     */
                    objeto: ObjectType;
                    /** Extensão total da ferrovia, rodovia, cabos, dutos ou condutos */
                    extensao: string;
                    /** Número total de postes */
                    nPostes: string;
                };
                /** Grupo de informações do DPS relativas à serviço de obra */
                obra?: Construction;
                /** Grupo de informações do DPS relativas à Evento */
                atvEvento?: EventActivity;
                /** Grupo de informações relativas a pedágio */
                explRod?: {
                    /** Categorias de veículos para cobrança:
                     * 00 | Categoria de Veículos (tipo não informado na nota de origem)
                     * 01 | Automóvel, caminhonete e furgão
                     * 02 | Caminhão leve, ônibus, caminhão trator e furgão
                     * 03 | Automóvel e caminhonete com semireboque
                     * 04 | Caminhão, caminhão-trator, caminhão-trator com semi-reboque e ônibus
                     * 05 | Automóvel e caminhonete com reboque
                     * 06 | Caminhão com reboque e caminhãotrator com semi-reboque
                     * 07 | Caminhão com reboque e caminhãotrator com semi-reboque
                     * 08 | Caminhão com reboque e caminhãotrator com semi-reboque
                     * 09 | Motocicletas, motonetas e bicicletas motorizadas
                     * 10 | Veículo especial
                     * 11 | Veículo Isento
                     */
                    categVeic: VehicleCategory;
                    /** Número de eixos para fins de cobrança */
                    nEixos: string;
                    /** Tipo de rodagem */
                    rodagem: RaceType;
                    /** Orientação de passagem do veículo: ângulo em graus a partir do norte geográfico em sentido
                     * horário, número inteiro de 0 a 359, onde 0º seria o norte, 90º o leste, 180º o sul, 270º o oeste.
                     * Precisão mínima de 10
                     */
                    sentido: string;
                    /** Placa do veículo */
                    placa: string;
                    /** Código de acesso gerado automaticamente pelo sistema emissor da concessionária */
                    codAcessoPed: string;
                    /** Código de contrato gerado automaticamente pelo sistema nacional no cadastro da concessionária */
                    codContrato: string;
                };
                /** Grupo de informações complementares disponível para todos os serviços prestados */
                infoCompl?: {
                    /** Identificador de Documento de Responsabilidade Técnica: ART, RRT, DRT, Outros */
                    idDocTec?: string;
                    /** Chave da nota, número identificador da nota, número do contrato ou outro identificador de
                     * documento emitido pelo prestador de serviços, que subsidia a emissão dessa nota pelo tomador do
                     * serviço ou intermediário (preenchimento obrigatório caso a nota esteja sendo emitida pelo Tomador
                     * ou intermediário do serviço)
                     */
                    docRef?: string;
                    /** Informações complementares */
                    xInfComp?: string;
                };
            };
            /** Grupo de informações relativas à valores do serviço prestado */
            valores: {
                /** Grupo de informações relativas aos valores do serviço prestado */
                vServPrest: {
                    /** Valor monetário recebido pelo intermediário do serviço (R$) */
                    vReceb?: string;
                    /** Valor dos serviços em R$ */
                    vServ: string;
                };
                /** Grupo de informações relativas aos descontos condicionados e incondicionados */
                vDescCondIncond?: {
                    /** Valor monetário do desconto incondicionado (R$) */
                    vDescIncond?: string;
                    /** Valor monetário do desconto condicionado (R$) */
                    vDescCond?: string;
                };
                /** Grupo de informações relativas ao valores para dedução/redução do valor da base de cálculo (valor do
                 * serviço)
                 */
                vDedRed?: {
                    /** Valor percentual padrão para dedução/redução do valor do serviço */
                    pDR: string;
                    /** Valor monetário padrão para dedução/redução do valor do serviço */
                    vDR: string;
                    /** Grupo de informações de documento utilizado para Dedução/Redução do valor do serviço */
                    documentos: {
                        /**  Grupo de informações de documento utilizado para Dedução/Redução do valor do serviço */
                        docDedRed: DeductionReductionDocument[];
                    };
                };
                /** Grupo de informações relacionados aos tributos relacionados ao serviço prestado */
                trib: {
                    /** Grupo de informações relacionados ao Imposto Sobre Serviços de Qualquer Natureza - ISSQN */
                    tribMun: {
                        /**  Tributação do ISSQN sobre o serviço prestado:
                         * 1 | Operação tributável
                         * 2 | Exportação de serviço
                         * 3 | Não Incidência
                         * 4 | Imunidade
                         */
                        tribISSQN: ISSQN_TaxOverService;
                        /** Código do país onde se verficou o resultado da prestação do serviço para o caso de
                         * Exportação de Serviço. (Tabela de Países ISO)
                         */
                        cPaisResult?: ISO_Country;
                        /**  Tributação do ISSQN sobre o serviço prestado:
                         * 1 | Operação tributável
                         * 2 | Exportação de serviço
                         * 3 | Não Incidência
                         * 4 | Imunidade
                         */
                        BM?: MunicipalBenefit;
                        /** Informações para a suspensão da Exigibilidade do ISSQN */
                        exigSusp?: {
                            /**  Opção para Exigibilidade Suspensa:
                             * 1 | Exigibilidade Suspensa por Decisão Judicial
                             * 2 | Exigibilidade Suspensa por Processo Administrativo
                             */
                            tpSusp: SuspendedEnforceability;
                            nProcesso: string;
                        };
                        /** Identificação da Imunidade do ISSQN – somente para o caso de Imunidade:
                         * 0 | Imunidade (tipo não informado na nota de origem)
                         * 1 | Patrimônio, renda ou serviços, uns dos outros (CF88, Art 150, VI, a)
                         * 2 | Templos de qualquer culto (CF88, Art 150, VI, b)
                         * 3 | Patrimônio, renda ou serviços dos partidos políticos, inclusive suas fundações, das
                         * entidades sindicais dos trabalhadores, das instituições de educação e de assistência social,
                         * sem fins lucrativos, atendidos os requisitos da lei (CF88, Art 150, VI, c)
                         * 4 | Livros, jornais, periódicos e o papel destinado a sua impressão (CF88, Art 150, VI, d)
                         */
                        tpImunidade?: ISSQN_Immunity;
                        /** Valor da alíquota (%) do serviço prestado relativo ao município sujeito ativo (município de
                         * incidência) do ISSQN. Se o município de incidência pertence ao Sistema Nacional NFS-e a
                         * alíquota estará parametrizada e, portanto, será fornecida pelo sistema. Se o município de
                         * incidência não pertence ao Sistema Nacional NFS-e a alíquota não estará parametrizada e, por
                         * isso, deverá ser fornecida pelo emitente
                         */
                        pAliq?: string;
                        /** Tipo de retencao do ISSQN:
                         * 1 | Não Retido
                         * 2 | Retido pelo Tomador
                         * 3 | Retido pelo Intermediario
                         */
                        tpRetISSQN: RetentionType;
                    };
                    /** Grupo de informações de outros tributos relacionados ao serviço prestado */
                    tribNac?: {
                        /** Grupo de informações dos tributos PIS/COFINS */
                        piscofins?: {
                            /**  Código de Situação Tributária do PIS/COFINS (CST):
                             * 00 | Nenhum
                             * 01 | Operação Tributável com Alíquota Básica
                             * 02 | Operação Tributável com Alíquota Diferenciada
                             * 03 | Operação Tributável com Alíquota por Unidade de Medida de Produto
                             * 04 | Operação Tributável monofásica - Revenda a Alíquota Zero
                             * 05 | Operação Tributável por Substituição Tributária
                             * 06 | Operação Tributável a Alíquota Zero
                             * 07 | Operação Tributável da Contribuição
                             * 08 | Operação sem Incidência da Contribuição
                             * 09 | Operação com Suspensão da Contribuição
                             */
                            CST: CST_Type;
                            /** Valor da Base de Cálculo do PIS/COFINS (R$) */
                            vBCPisCofins?: string;
                            /** Valor da Alíquota do PIS (%) */
                            pAliqPis?: string;
                            /** Valor da Alíquota da COFINS (%) */
                            pAliqCofins?: string;
                            /** Valor monetário do PIS (R$) */
                            vPis?: string;
                            /** Valor monetário do COFINS (R$) */
                            vCofins?: string;
                            /** Tipo de retencao do Pis/Cofins:
                             * 1 | Retido
                             * 2 | Não Retido
                             */
                            tpRetPisCofins?: PIS_COFINS_RetentionType;
                        };
                        /** Valor monetário do CP(R$) */
                        vRetCP?: string;
                        /** Valor monetário do IRRF (R$) */
                        vRetIRRF?: string;
                        /** Valor monetário do CSLL (R$) */
                        vRetCSLL?: string;
                    };
                    /** Grupo de informações para totais aproximados dos tributos relacionados ao serviço prestado */
                    totTrib: TaxTotal;
                };
            };
        };
    };
};
