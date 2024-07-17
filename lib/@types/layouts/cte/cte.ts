import { CodeCityIBGE, EnvironmentIdentifier, UFCodeIBGE, UFIssuer } from "../general";
import { VERSION } from "../version";

export enum DactePrintFormat {
    PORTRAIT = "1",
    LANDSCAPE = "2",
}

export enum IssuanceMode {
    NORMAL = "1",
    NFF_SPECIAL_REGIME = "3",
    EPEC_BY_SVC = "4",
    FSDA_CONTINGENCY = "5",
    AUTHORIZATION_BY_SVCRS = "7",
    AUTHORIZATION_BY_SVCSP = "8",
}

export enum CTeType {
    NORMAL = "0",
    VALUE_COMPLEMENT = "1",
    REPLACEMENT = "3",
}

export enum IssuanceProcess {
    TAXPAYER_APPLICATION = "0",
    TAXPAYER_WITH_AN_APP_PROVIDED_BY_SEBRAE = "3",
}

export enum Modal {
    BUS = "01",
    AIR = "02",
    WATERWAY = "03",
    RAILWAY = "04",
    PIPELINE = "05",
    MULTIMODAL = "06",
}

export enum ServiceType {
    NORMAL = "0",
    SUBCONTRACTING = "1",
    REDESPACHO = "2",
    INTERMEDIATE_REDESPATCH = "3",
    SERVICE_LINKED_TO_MULTIMODAL = "4",
}

export enum TakeOnDestination {
    YES = "0",
    NO = "1",
}

export enum ServiceProviderRole__Type1 {
    ICMS_TAXPAYER = "1",
    TAXPAYER_EXEMPT_FROM_REGISTRATION = "2",
    NON_CONTRIBUTOR = "9",
}

export enum ServiceProviderRole__Type2 {
    SENDER = "0",
    DISPATCHER = "1",
    RECEIVER = "2",
    RECIPIENT = "3",
}

type Address = {
    xLgr: string;
    nro: string;
    xCpl?: string;
    xBairro: string;
    cMun: CodeCityIBGE;
    xMun: string;
    UF: UFIssuer;
    CEP?: string;
    cPais?: "1058";
    xPais?: "Brasil" | "BRASIL";
    fone?: string;
};

type __CTeIdentication = {
    /** Código da UF do emitente do CT-e. Utilizar tabela do IBGE */
    cUF: UFCodeIBGE;
    /** Código numérico que compõe a Chave de Acesso. Número aleatório gerado pelo emitente para cada CT-e, com
     * o objetivo de evitar acessos indevidos ao documento
     */
    cCT: string;
    /** Código Fiscal de Operações e Prestações */
    CFOP: string;
    /** Natureza da Operação */
    natOp: string;
    /** Modelo do documento fiscal. Utilizar o código 57 para identificação do CT-e, emitido em substituição aos
     * modelos de conhecimentos em papel
     */
    mod: string;
    /** Série do CT-e. Preencher com "0" no caso de série única */
    serie: string;
    /** Número do CT-e */
    nCT: string;
    /** Data e hora de emissão do CT-e. Formato AAAA-MM-DDTHH:MM:DD TZD */
    dhEmi: string;
    /** Formato de impressão do DACTE:
     * 1 | Retrato
     * 2 | Paisagem
     */
    tpImp: DactePrintFormat;
    /** Forma de emissão do CT-e:
     * 1 | Normal
     * 3 | Regime Especial NFF
     * 4 | EPEC pela SVC
     * 5 | Contingência FSDA
     * 7 | Autorização pela SVC-RS
     * 8 | Autorização pela SVC-SP
     */
    tpEmis: IssuanceMode;
    /** Digito Verificador da chave de acesso do CT-e. Informar o dígito de controle da chave de acesso do CT-e, que
     * deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso
     */
    cDV: string;
    /** Tipo do Ambiente:
     * 1 | Produção
     * 2 | Homologação
     */
    tpAmb: EnvironmentIdentifier;
    /** Tipo do CT-e:
     * 0 | CT-e Normal
     * 1 | CT-e de Complemento de Valores
     * 3 | CT-e de Substituição
     */
    tpCTe: CTeType;
    /** Identificador do processo de emissão do CT-e:
     * 0 | emissão de CT-e com aplicativo do contribuinte
     * 3 | emissão CT-e pelo contribuinte com aplicativo fornecido pelo SEBRAE
     */
    procEmi: IssuanceProcess;
    /** Versão do processo de emissão. Informar a versão do aplicativo emissor de CT-e */
    verProc: string;
    /** Indicador de CT-e Globalizado. Informar valor 1 quando for Globalizado e não informar a tag quando não
     * tratar de CT-e Globalizado
     */
    indGlobalizado?: "1";
    /** Código do Município de envio do CT-e (de onde o documento foi transmitido). Utilizar a tabela do IBGE.
     * Informar 9999999 para as operações com o exterior
     */
    cMunEnv: CodeCityIBGE;
    /** Nome do Município de envio do CT-e (de onde o documento foi transmitido). Informar PAIS/Municipio para as
     * operações com o exterior
     */
    xMunEnv: string;
    /** Sigla da UF de envio do CT-e (de onde o documento foi transmitido). Informar 'EX' para operações com o exterior */
    UFEnv: UFIssuer & "EX";
    /** Modal:
     * 01 | Rodoviário
     * 02 | Aéreo
     * 03 | Aquaviário
     * 04 | Ferroviário
     * 05 | Dutoviário
     * 06 | Multimodal
     */
    modal: Modal;
    /** Tipo do Serviço:
     * 0 | Normal
     * 1 | Subcontratação
     * 2 | Redespacho
     * 3 | Redespacho Intermediário
     * 4 | Serviço Vinculado a Multimodal
     */
    tpServ: ServiceType;
    /** Código do Município de início da prestação. Utilizar a tabela do IBGE. Informar 9999999 para operações com o
     * exterior
     */
    cMunIni: CodeCityIBGE;
    /** Nome do Município do início da prestação. Informar 'EXTERIOR' para operações com o exterior */
    xMunIni: "EXTERIOR" | string;
    /** UF do início da prestação. Informar 'EX' para operações com o exterior */
    UFIni: UFIssuer & "EX";
    /** Código do Município de término da prestação. Utilizar a tabela do IBGE. Informar 9999999 para operações com
     * o exterior
     */
    cMunFim: CodeCityIBGE;
    /** Nome do Município do término da prestação. Informar 'EXTERIOR' para operações com o exterior */
    xMunFim: "EXTERIOR" | string;
    /** UF do término da prestação. Informar 'EX' para operações com o exterior */
    UFFim: UFIssuer & "EX";
    /** Indicador se o Recebedor retira no Aeroporto, Filial, Porto ou Estação de Destino */
    retira: TakeOnDestination;
    /** Detalhes do retira */
    xDetRetira?: string;
    /** Indicador do papel do tomador na prestação do serviço:
     * 1 | Contribuinte ICMS
     * 2 | Contribuinte isento de inscrição
     * 9 | Não Contribuinte
     * Aplica-se ao tomador que for indicado no toma3 ou toma4
     */
    indIEToma: ServiceProviderRole__Type1;
    /** Data e Hora da entrada em contingência. Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS */
    dhCont?: string;
    /** Justificativa da entrada em contingência */
    xJust?: string;
};

type CTeIdentification__Type1 = __CTeIdentication & {
    /** Indicador do "papel" do tomador do serviço no CT-e */
    toma3: {
        /** Tomador do Serviço:
         * 0 | Remetente
         * 1 | Expedidor
         * 2 | Recebedor
         * 3 | Destinatário
         * Serão utilizadas as informações contidas no respectivo grupo, conforme indicado pelo conteúdo deste campo
         */
        toma: ServiceProviderRole__Type2;
    };
};

type Toma4 = {
    /** Tomador do Serviço:
     * 4 | Outros
     * Obs: Informar os dados cadastrais do tomador do serviço
     */
    toma: "4";
    /** Inscrição Estadual. Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição
     * no cadastro de contribuintes do ICMS. Caso o tomador não seja contribuinte do ICMS não informar o conteúdo
     */
    IE?: string;
    xNome: string;
    enderToma: Address;
    xFant?: string;
    fone?: string;
    email?: string;
};

type CTeIdentification__Type2 = __CTeIdentication & {
    /** Indicador do "papel" do tomador do serviço no CT-e */
    toma4:
        | (Toma4 & {
              /** Número do CNPJ. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
               * Informar os zeros não significativos
               */
              CNPJ: "00000000000000" | string;
          })
        | (Toma4 & {
              /** Número do CPF. Informar os zeros não significativos */
              CPF: string;
          });
};

type CTeIdentification = CTeIdentification__Type1 | CTeIdentification__Type2;

export enum DeliverySchedulingDateType {
    ON_DATE = "1",
    UNTIL_THE_DATE = "2",
    FROM_THE_DATE = "3",
}

export enum TaxRegimeCode {
    SIMPLES_NACIONAL = "1",
    SIMPLES_NACIONAL_EXCESS_GROSS_REVENUE_SUBLIMIT = "2",
    NORMAL_REGIME = "3",
    MEI_SIMPLES_NACIONAL = "4",
}

type Emit = {
    /** Inscrição Estadual do Emitente. A IE do emitente somente ficará sem informação para o caso do Regime Especial da
     * NFF (tpEmis=3)
     */
    IE?: string;
    /** Inscrição Estadual do Substituto Tributário */
    IEST?: string;
    /** Razão social ou Nome do emitente */
    xNome: string;
    /** Nome fantasia */
    xFant?: string;
    /** Endereço do emitente */
    enderEmit: Address;
    /** Código do Regime Tributário:
     * 1 | Simples Nacional
     * 2 | Simples Nacional, excesso sublimite de receita bruta
     * 3 | Regime Normal
     * 4 | Simples Nacional - Microempreendedor Individual (MEI)
     */
    CRT: TaxRegimeCode;
};

type Sender = {
    /** Inscrição Estadual. Informar a IE do remetente ou ISENTO se remetente é contribuinte do ICMS isento de
     * inscrição no cadastro de contribuintes do ICMS. Caso o remetente não seja contribuinte do ICMS não informar a
     * tag
     */
    IE?: string;
    /** Razão social ou nome do remetente */
    xNome: string;
    /** Nome fantasia */
    xFant?: string;
    /** Telefone */
    fone?: string;
    /** Dados do endereço */
    enderReme: Address;
    /** Endereço de email */
    email?: string;
};

type Consignor = {
    /** Inscrição Estadual. Informar a IE do expedidor ou ISENTO se expedidor é contribuinte do ICMS isento de
     * inscrição no cadastro de contribuintes do ICMS. Caso o expedidor não seja contribuinte do ICMS não informar a
     * tag
     */
    IE?: string;
    /** Razão Social ou Nome */
    xNome: string;
    /** Telefone */
    fone?: string;
    /** Dados do endereço */
    enderExped: Address;
    /** Endereço de email */
    email?: string;
};

type Receiver = {
    /** Inscrição Estadual. Informar a IE do recebedor ou ISENTO se recebedor é contribuinte do ICMS isento de inscrição
     * no cadastro de contribuintes do ICMS. Caso o recebedor não seja contribuinte do ICMS não informar o conteúdo
     */
    IE?: string;
    /** Razão Social ou Nome */
    xNome: string;
    /** Telefone */
    fone?: string;
    /** Dados do endereço */
    enderReceb: Address;
    /** Endereço de email */
    email?: string;
};

type Recipient = {
    /** Inscrição Estadual. Informar a IE do destinatário ou ISENTO se destinatário é contribuinte do ICMS isento de
     * inscrição no cadastro de contribuintes do ICMS. Caso o destinatário não seja contribuinte do ICMS não informar o
     * conteúdo
     */
    IE?: string;
    /** Razão Social ou Nome do destinatário */
    xNome: string;
    /** Telefone */
    fone?: string;
    /** Inscrição na SUFRAMA. Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle
     * da SUFRAMA
     */
    ISUF?: string;
    /** Dados do endereço */
    enderDest: Address;
    /** Endereço de email */
    email?: string;
};

export enum MeasurementUnitCode {
    M3 = "00",
    KG = "01",
    TON = "02",
    UNIT = "03",
    LITERS = "04",
    MMBTU = "05",
}

export enum NFModel {
    MODEL_01_1A_SINGLE = "01",
    PRODUCER_NF = "04",
}

type NFInformations = {
    /** Número do Romaneio da NF */
    nRoma?: string;
    /** Número do Pedido da NF */
    nPed?: string;
    /** Modelo da Nota Fiscal:
     * 01 | NF Modelo 01/1A e Avulsa
     * 04 | NF de Produtor
     */
    mod: NFModel;
    /** Série */
    serie: string;
    /** Número */
    nDoc: string;
    /** Data de Emissão. Formato AAAA-MM-DD */
    dEmi: string;
    /** Valor da Base de Cálculo do ICMS */
    vBC: string;
    /** Valor Total do ICMS */
    vICMS: string;
    /** Valor da Base de Cálculo do ICMS ST */
    vBCST: string;
    /** Valor Total do ICMS ST */
    vST: string;
    /** Valor Total dos Produtos */
    vProd: string;
    /** Valor Total da NF */
    vNF: string;
    /** CFOP Predominante. CFOP da NF ou, na existência de mais de um, predominância pelo critério de valor
     * econômico
     */
    nCFOP: string;
    /** Peso total em Kg */
    nPeso?: string;
    /** PIN SUFRAMA. PIN atribuído pela SUFRAMA para a operação */
    PIN?: string;
    /** Data prevista de entrega. Formato AAAA-MM-DD */
    dPrev?: string;
};

export enum LoadUnitType {
    CONTAINER = "1",
    ULD = "2",
    PALLET = "3",
    OTHERS = "4",
}

export enum TransportUnitType {
    TRACTION_BUS = "1",
    ROAD_TOWING = "12",
    SHIP = "13",
    FERRY = "14",
    AIRCRAFT = "15",
    WAGON = "16",
    OTHERS = "17",
}

type LoadUnitInformation = {
    /** Tipo da Unidade de Carga:
     * 1 | Container
     * 2 | ULD
     * 3 | Pallet
     * 4 | Outros
     */
    tpUnidCarga: LoadUnitType;
    /** Identificação da Unidade de Carga. Informar a identificação da unidade de carga, por exemplo:
     * número do container
     */
    idUnidCarga: string;
    /** Lacres das Unidades de Carga */
    lacUnidCarga: {
        /** Número do lacre */
        nLacre: string;
    }[];
    /** Quantidade rateada (Peso,Volume) */
    qtdRat: string;
};

type TransportUnitInformation = {
    /** Tipo da Unidade de Transporte:
     * 1 | Rodoviário Tração
     * 2 | Rodoviário Reboque
     * 3 | Navio
     * 4 | Balsa
     * 5 | Aeronave
     * 6 | Vagão
     * 7 | Outros
     */
    tpUnidTransp: TransportUnitType;
    /** Identificação da Unidade de Transporte. Informar a identificação conforme o tipo de unidade de
     * transporte. Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo
     */
    idUnidTransp: string;
    /** Lacres das Unidades de Transporte */
    lacUnidTransp: {
        /** Número do lacre */
        nLacre: string;
    }[];
    /** Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit
     * Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de
     * aeronave com rede ou palete de aeronave com rede sobre um iglu
     */
    infUnidCarga: {
        /** Tipo da Unidade de Carga:
         * 1 | Container
         * 2 | ULD
         * 3 | Pallet
         * 4 | Outros
         */
        tpUnidCarga: LoadUnitType;
        /** Identificação da Unidade de Carga. Informar a identificação da unidade de carga, por exemplo:
         * número do container
         */
        idUnidCarga: string;
        /** Lacres das Unidades de Carga */
        lacUnidCarga: {
            /** Número do lacre */
            nLacre: string;
        }[];
        /** Quantidade rateada (Peso,Volume) */
        qtdRat: string;
    }[];
    /** Quantidade rateada (Peso,Volume) */
    qtdRat?: string;
};

type NFeInformations = {
    /** Chave de acesso da NF-e */
    chave: string;
    /** PIN SUFRAMA. PIN atribuído pela SUFRAMA para a operação */
    PIN?: string;
    /** Data prevista de entrega. Formato AAAA-MM-DD */
    dPrev?: string;
};

export enum OriginDocumentType {
    DECLARATION = "00",
    DUTOVIARIO = "10",
    CFE_SAT = "59",
    NFCE = "65",
    Others = "99",
}

type OtherInformations = {
    /** Tipo de documento originário:
     * 00 | Declaração
     * 10 | Dutoviário
     * 59 | CF-e SAT
     * 65 | NFC-e
     * 99 | Outros
     */
    tpDoc: OriginDocumentType;
    /** Descrição do documento */
    descOutros?: string;
    /** Número */
    nDoc: string;
    /** Data de Emissão. Formato AAAA-MM-DD */
    dEmi: string;
    /** Valor do documento */
    vDocFisc: string;
    /** Data prevista de entrega. Formato AAAA-MM-DD */
    dPrev: string;
};

export enum PreviousTransportDocumentType {
    ATRE = "07",
    CUSTOMS_TRANSIT_CLEARANCE = "08",
    INTERNATIONAL_AIR_KNOWLEDGE = "09",
    KNOWLEDGE_INTERNATIONAL_WAYBILL = "10",
    SPARE_KNOWLEDGE = "11",
    INTERNATIONAL_RAIL_TRANSPORT = "12",
    BILL_LADING = "13",
}

type PreviousDocumentIssuer = {
    /** Inscrição Estadual */
    IE?: string;
    /** Sigla da UF. Informar EX para operações com o exterior */
    UF?: UFIssuer & "EX";
    /** Razão Social ou Nome do expedidor */
    xNome: string;
    /** Informações de identificação dos documentos de Transporte Anterior */
    idDocAnt: (
        | {
              /** Documentos de transporte anterior em papel */
              idDocAntPap: {
                  /** Tipo do Documento de Transporte Anterior:
                   * 07 | ATRE
                   * 08 | DTA (Despacho de Transito Aduaneiro)
                   * 09 | Conhecimento Aéreo Internacional
                   * 10 | Conhecimento - Carta de Porte Internacional
                   * 11 | Conhecimento Avulso
                   * 12 | TIF (Transporte Internacional Ferroviário)
                   * 13 | BL (Bill of Lading)
                   */
                  tpDoc: PreviousTransportDocumentType;
                  /** Série do Documento Fiscal */
                  serie: string;
                  /** Série do Documento Fiscal */
                  subser?: string;
                  /** Número do Documento Fiscal */
                  nDoc: string;
                  /** Data de emissão (AAAA-MM-DD) */
                  dEmi: string;
              }[];
          }
        | {
              /** Documentos de transporte anterior eletrônicos */
              idDocAntEle: {
                  /** Chave de acesso do CT-e */
                  chCTe: string;
              }[];
          }
    )[];
};

export enum HandlingInformation {
    CONSIGNOR_CERTIFICATE_FOR_SHIPMENT_OF_LIVE_ANIMAL = "01",
    DANGEROUS_ARTICLE_PER_ACHED_SIGNOR_LARATION = "02",
    ONLY_ON_CARGO_CRAFT = "03",
    DANGEROUS_ARTICLE_CONSIGNOR_DECLARATION_NOT_REQUIRED = "04",
    DANGEROUS_ARTICLE_IN_AN_EXEMPT_QUANTITY = "05",
    DRY_ICE_FOR_REFRIGERATION_SPECIFY_QUANTITY_IN_THE_COMMENTS_FIELD = "06",
    NOT_RESTRICTED_SPECIFY_THE_SPECIAL_PROVISION_IN_THE_COMMENTS_FIELD = "07",
    DANGEROUS_ARTICLE_IN_CONSOLIDATED_CARGO_SPECIFY_THE_QUANTITY_IN_THE_COMMENTS_FIELD = "08",
    AUTHORIZATION_FROM_THE_ATTACHED_GOVERNMENT_AUTHORITY_SPECIFY_IN_THE_COMMENTS_FIELD = "09",
    LITHIUM_ION_BATTERIES_COMPLYING_WITH_SECTION_II_OF_PI965_CAO = "10",
    LITHIUM_ION_BATTERIES_COMPLYING_WITH_SECTION_II_OF_PI966 = "11",
    LITHIUM_ION_BATTERIES_COMPLYING_WITH_SECTION_II_OF_PI967 = "12",
    LITHIUM_METAL_BATTERIES_COMPLYING_WITH_SECTION_II_OF_PI968_CAO = "13",
    LITHIUM_METAL_BATTERIES_COMPLYING_WITH_SECTION_II_OF_PI969 = "14",
    LITHIUM_METAL_BATTERIES_COMPLYING_WITH_SECTION_II_OF_PI970 = "15",
    OTHER_SPECIFY_IN_THE_COMMENTS_FIELD = "99",
}

export enum TaxClass {
    MINIMUM = "M",
    GENERAL = "G",
    SPECIFIC = "E",
}

export enum DangerMeasurementUnit {
    KG = "1",
    KGG = "2",
    LITERS = "3",
    TI = "4",
    UNITS = "5",
}

export enum Direction {
    NORTH = "N",
    EAST = "L",
    SOUTH = "S",
    WEST = "O",
}

export enum NavigationType {
    INTERIOR = "0",
    CABOTAGE = "1",
}

export enum TrafficType {
    OWN = "0",
    MUTUAL = "1",
    RAIL = "2",
    BUS = "3",
}

export enum RailroadEdge {
    ORIGIN = "1",
    DESTINATION = "2",
}

type __CTe = {
    $: {
        /** Versão do leiaute */
        versao: VERSION;
        /** Identificador da tag a ser assinada. Informar a chave de acesso do CT-e e precedida do literal "CTe" */
        Id: string;
    };
    /** Identificação do CT-e */
    ide: CTeIdentification;
    /** Dados complementares do CT-e para fins operacionais ou comerciais */
    compl?: {
        /** Característica adicional do transporte. Texto livre: REENTREGA; DEVOLUÇÃO; REFATURAMENTO; etc */
        xCaracAd?: string;
        /** Característica adicional do serviço. Texto livre: ENTREGA EXPRESSA; LOGÍSTICA REVERSA; CONVENCIONAL;
         * EMERGENCIAL; etc
         */
        xCaracSer?: string;
        /** Funcionário emissor do CTe */
        xEmi?: string;
        /** Previsão do fluxo da carga. Preenchimento obrigatório para o modal aéreo */
        fluxo?: {
            /** Sigla ou código interno da Filial/Porto/Estação/ Aeroporto de Origem.
             * Observações para o modal aéreo:
             * - Preenchimento obrigatório para o modal aéreo.
             * - O código de três letras IATA do aeroporto de partida deverá ser incluído como primeira anotação. Quando
             * não for possível, utilizar a sigla OACI
             */
            xOrig?: string;
            pass?: {
                /** Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Passagem. Observação para o modal
                 * aéreo:
                 * - O código de três letras IATA, referente ao aeroporto de transferência, deverá ser incluído, quando
                 * for o caso. Quando não for possível, utilizar a sigla OACI. Qualquer solicitação de itinerário deverá
                 * ser incluída
                 */
                xPass?: string;
            }[];
            /** Sigla ou código interno da Filial/Porto/Estação/Aeroporto de Destino. Observações para o modal aéreo:
             * - Preenchimento obrigatório para o modal aéreo.
             * - Deverá ser incluído o código de três letras IATA do aeroporto de destino. Quando não for possível,
             * utilizar a sigla OACI
             */
            xDest?: string;
            /** Código da Rota de Entrega */
            xRota?: string;
        };
        /** Informações ref. a previsão de entrega */
        Entrega?:
            | {
                  /** Entrega sem data definida. Esta opção é proibida para o modal aéreo */
                  semData: {
                      /** Tipo de data/período programado para entrega:
                       * 0 | Sem data definida
                       */
                      tpPer: "0";
                  };
                  /** Entrega com data definida */
                  comData: {
                      /** Tipo de data/período programado para entrega:
                       * 1 | Na data
                       * 2 | Até a data
                       * 3 | A partir da data
                       */
                      tpPer: DeliverySchedulingDateType;
                      /** Data programada. Formato AAAA-MM-DD */
                      dProg: string;
                  };
                  /** Entrega no período definido */
                  noPeriodo: {
                      /** Tipo período:
                       * 4 | no período
                       */
                      tpPer: "4";
                      /** Data inicial. Formato AAAA-MM-DD */
                      dIni: string;
                      /** Data final. Formato AAAA-MM-DD */
                      dFim: string;
                  };
              }
            | {
                  /** Entrega sem hora definida */
                  semHora: {
                      /** Tipo de hora:
                       * 0 | Sem hora definida
                       */
                      tpHor: "0";
                  };
                  /** Entrega com hora definida */
                  comHora: {
                      /** Tipo de hora:
                       * 1 | No horário
                       * 2 | Até o horário
                       * 3 | A partir do horário
                       */
                      tpHor: DeliverySchedulingDateType;
                      /** Hora programada. Formato HH:MM:SS */
                      hProg: string;
                  };
                  /** Entrega no intervalo de horário definido */
                  noInter: {
                      /** Tipo de hora:
                       * 4 | No intervalo de tempo
                       */
                      tpHor: "4";
                      /** Hora inicial. Formato HH:MM:SS */
                      hIni: string;
                      /** Hora final. Formato HH:MM:SS */
                      hFim: string;
                  };
              };
        /** Município de origem para efeito de cálculo do frete */
        origCalc?: string;
        /** Município de destino para efeito de cálculo do frete */
        destCalc?: string;
        /** Observações Gerais */
        xObs?: string;
        /** Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no
         * XTexto
         */
        ObsCont: {
            $: {
                /** Identificação do campo */
                xCampo: string;
            };
            /** Conteúdo do campo */
            xTexto: string;
        }[];
        /** Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no
         * XTexto
         */
        ObsFisco: {
            $: {
                /** Identificação do campo */
                xCampo: string;
            };
            /** Conteúdo do campo */
            xTexto: string;
        }[];
    };
    /** Identificação do Emitente do CT-e */
    emit:
        | (Emit & {
              /** CNPJ do emitente. Informar zeros não significativos */
              CNPJ: string;
          })
        | (Emit & {
              /** CPF do emitente. Informar zeros não significativos. Usar com série específica 920-969 para emitente
               * pessoa física com inscrição estadual
               */
              CPF: string;
          });
    /** Informações do Remetente das mercadorias transportadas pelo CT-e. Poderá não ser informado para os CT-e de
     * redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado
     */
    rem?:
        | (Sender & {
              /** Número do CNPJ. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
               * Informar os zeros não significativos
               */
              CNPJ: "00000000000000" | string;
          })
        | (Sender & {
              /** Número do CPF. Informar os zeros não significativos */
              CPF: string;
          });
    /** Informações do Expedidor da Carga */
    exped?:
        | (Consignor & {
              /** Número do CNPJ. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
               * Informar os zeros não significativos
               */
              CNPJ: "00000000000000" | string;
          })
        | (Consignor & {
              /** Número do CPF. Informar os zeros não significativos */
              CPF: string;
          });
    /** Informações do Recebedor da Carga */
    receb?:
        | (Receiver & {
              /** Número do CNPJ. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
               * Informar os zeros não significativos
               */
              CNPJ: "00000000000000" | string;
          })
        | (Receiver & {
              /** Número do CPF. Informar os zeros não significativos */
              CPF: string;
          });
    /** Informações do Destinatário do CT-e. Poderá não ser informado para os CT-e de redespacho intermediário e
     * serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado
     */
    dest?:
        | (Recipient & {
              /** Número do CNPJ. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros.
               * Informar os zeros não significativos
               */
              CNPJ: "00000000000000" | string;
          })
        | (Recipient & {
              /** Número do CPF. Informar os zeros não significativos */
              CPF: string;
          });
    /** Valores da Prestação de Serviço */
    vPrest: {
        /** Valor Total da Prestação do Serviço. Pode conter zeros quando o CT-e for de complemento de ICMS */
        vTPrest: string;
        /** Valor a Receber */
        vRec: string;
        /** Componentes do Valor da Prestação */
        Comp: {
            /** Nome do componente. Exxemplos: FRETE PESO, FRETE VALOR, SEC/CAT, ADEME, AGENDAMENTO, etc */
            xNome: string;
            /** Valor do componente */
            vComp: string;
        }[];
    };
    /** Informações relativas aos Impostos */
    imp: {
        /** Informações relativas ao ICMS */
        ICMS:
            | {
                  /** Prestação sujeito à tributação normal do ICMS */
                  ICMS00: {
                      /** Classificação Tributária do Serviço:
                       * 00 | Tributação normal ICMS
                       */
                      CST: "00";
                      /** Valor da BC do ICMS */
                      vBC: string;
                      /** Alíquota do ICMS */
                      pICMS: string;
                      /** Valor do ICMS */
                      vICMS: string;
                  };
              }
            | {
                  /** Prestação sujeito à tributação com redução de BC do ICMS */
                  ICMS20: {
                      /** Classificação Tributária do serviço
                       * 20 | tributação com BC reduzida do ICMS
                       */
                      CST: "20";
                      /** Percentual de redução da BC */
                      pRedBC: string;
                      /** Valor da BC do ICMS */
                      vBC: string;
                      /** Alíquota do ICMS */
                      pICMS: string;
                      /** Valor do ICMS */
                      vICMS: string;
                      /** Valor do ICMS de desoneração */
                      vICMSDeson?: string;
                      /** Código de Benefício Fiscal utilizado pela UF */
                      cBenef?: string;
                  };
              }
            | {
                  /** ICMS Isento, não Tributado ou diferido */
                  ICMS45: {
                      /** Classificação Tributária do serviço
                       * 40 | ICMS isenção
                       * 41 | ICMS não tributada
                       * 51 | ICMS diferido
                       */
                      CST: "40" | "41" | "51";
                      /** Valor do ICMS de desoneração */
                      vICMSDeson?: string;
                      /** Código de Benefício Fiscal utilizado pela UF */
                      cBenef?: string;
                  };
              }
            | {
                  /** Tributação pelo ICMS60 - ICMS cobrado por substituição tributária. Responsabilidade do recolhimento
                   * do ICMS atribuído ao tomador ou 3º por ST
                   */
                  ICMS60: {
                      /** Classificação Tributária do serviço
                       * 60 | ICMS cobrado por substituição tributári
                       */
                      CST: "60";
                      /** Valor da BC do ICMS ST retido. Valor do frete sobre o qual será calculado o ICMS a ser
                       * substituído na Prestação
                       */
                      vBCSTRet: string;
                      /** Valor do ICMS ST retido. Resultado da multiplicação do “vBCSTRet” x “pICMSSTRet” – que será
                       * valor do ICMS a ser retido pelo Substituto. Podendo o valor do ICMS a ser retido efetivamente,
                       * sofrer ajustes conforme a opção tributaria do transportador substituído
                       */
                      vICMSSTRet: string;
                      /** Alíquota do ICMS. Percentual de Alíquota incidente na prestação de serviço de transporte */
                      pICMSSTRet: string;
                      /** Valor do Crédito outorgado/Presumido. Preencher somente quando o transportador substituído,
                       * for optante pelo crédito outorgado previsto no Convênio 106/96 e corresponde ao percentual de
                       * 20% do valor do ICMS ST retido
                       */
                      vCred?: string;
                      /** Valor do ICMS de desoneração */
                      vICMSDeson?: string;
                      /** Código de Benefício Fiscal utilizado pela UF */
                      cBenef?: string;
                  };
              }
            | {
                  /** ICMS Outros */
                  ICMS90: {
                      /** Classificação Tributária do serviço
                       * 90 | ICMS outros
                       */
                      CST: "90";
                      /** Percentual de redução da BC */
                      pRedBC?: string;
                      /** Valor da BC do ICMS */
                      vBC: string;
                      /** Alíquota do ICMS */
                      pICMS: string;
                      /** Valor do ICMS */
                      vICMS: string;
                      /** Valor do Crédito Outorgado/Presumido */
                      vCred?: string;
                      /** Valor do ICMS de desoneração */
                      vICMSDeson?: string;
                      /** Código de Benefício Fiscal utilizado pela UF */
                      cBenef?: string;
                  };
              }
            | {
                  /** ICMS devido à UF de origem da prestação, quando diferente da UF do emitente */
                  ICMSOutraUF: {
                      /** Classificação Tributária do Serviço:
                       * 90 | ICMS Outra UF
                       */
                      CST: "90";
                      /** Percentual de redução da BC */
                      pRedBCOutraUF?: string;
                      /** Valor da BC do ICMS */
                      vBCOutraUF: string;
                      /** Alíquota do ICMS */
                      pICMSOutraUF: string;
                      /** Valor do ICMS devido outra UF */
                      vICMSOutraUF: string;
                      /** Valor do ICMS de desoneração */
                      vICMSDeson?: string;
                      /** Código de Benefício Fiscal utilizado pela UF */
                      cBenef?: string;
                  };
              }
            | {
                  /** Simples Nacional */
                  ICMSSN: {
                      /** Classificação Tributária do Serviço:
                       * 90 | ICMS Simples Nacional
                       */
                      CST: "90";
                      /** Indica se o contribuinte é Simples Nacional, 1=Sim */
                      indSN: "1";
                  };
              };
        /** Valor Total dos Tributos */
        vTotTrib?: string;
        /** Informações adicionais de interesse do Fisco. Norma referenciada, informações complementares, etc */
        infAdFisco?: string;
        /** Informações do ICMS de partilha com a UF de término do serviço de transporte na operação interestadual.
         * Grupo a ser informado nas prestações interestaduais para consumidor final, não contribuinte do ICMS
         */
        ICMSUFFim?: {
            /** Valor da BC do ICMS na UF de término da prestação do serviço de transporte */
            vBCUFFim: string;
            /** Percentual do ICMS relativo ao Fundo de Combate à pobreza (FCP) na UF de término da prestação do serviço
             * de transporte. Alíquota adotada nas operações internas na UF do destinatário
             */
            pFCPUFFim: string;
            /** Alíquota interna da UF de término da prestação do serviço de transporte. Alíquota adotada nas operações
             * internas na UF do destinatário
             */
            pICMSUFFim: string;
            /** Alíquota interestadual das UF envolvidas */
            pICMSInter: string;
            /** Valor do ICMS relativo ao Fundo de Combate á Pobreza (FCP) da UF de término da prestação */
            vFCPUFFim: string;
            /** Valor do ICMS de partilha para a UF de término da prestação do serviço de transporte */
            vICMSUFFim: string;
            /** Valor do ICMS de partilha para a UF de início da prestação do serviço de transporte */
            vICMSUFIni: string;
        };
    };
    /** Autorizados para download do XML do DF-e. Informar CNPJ ou CPF. Preencher os zeros não significativos */
    autXML?: (
        | {
              /** CNPJ do autorizado. Informar zeros não significativos */
              CNPJ: string;
          }
        | {
              /** CPF do autorizado. Informar zeros não significativos */
              CPF: string;
          }
    )[];
    /** Informações do Responsável Técnico pela emissão do DF-e */
    infRespTec?: {
        /** CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal
         * eletrônico. Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento
         * fiscal eletrônico
         */
        CNPJ: string;
        /** Nome da pessoa a ser contatada. Informar o nome da pessoa a ser contatada na empresa desenvolvedora do
         * sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo
         * nome
         */
        xContato: string;
        /** Email da pessoa jurídica a ser contatada */
        email: string;
        /** Telefone da pessoa jurídica a ser contatada. Preencher com o Código DDD + número do telefone */
        fone: string;
        /** Identificador do código de segurança do responsável técnico. Identificador do CSRT utilizado para geração do
         * hash
         */
        idCSRT?: string;
        /** Hash do token do código de segurança do responsável técnico. O hashCSRT é o resultado das funções SHA-1 e
         * base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT)
         * Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary
         */
        hashCSRT?: string;
    };
    /** Grupo de informações do pedido de emissão da Nota Fiscal Fácil */
    infSolicNFF?: {
        /** Solicitação do pedido de emissão da NFF. Será preenchido com a totalidade de campos informados no aplicativo
         * emissor serializado
         */
        xSolic: string;
    };
    /** Grupo de Informação do Provedor de Assinatura e Autorização */
    infPAA?: {
        /** CNPJ do Provedor de Assinatura e Autorização */
        CNPJPAA: string;
        /** Assinatura RSA do Emitente para DFe gerados por PAA */
        PAASignature: {
            /** Assinatura digital padrão RSA. Converter o atributo Id do DFe para array de bytes e assinar com a chave
             * privada do RSA com algoritmo SHA1 gerando um valor no formato base64
             */
            SignatureValue: string;
            /** Chave Publica no padrão XML RSA Key */
            RSAKeyValue: string;
        };
    };
};

// schema: TCTe
export type SefazCTE =
    | (__CTe & {
          /** Grupo de informações do CT-e Normal e Substituto */
          infCTeNorm: {
              /** Informações da Carga do CT-e */
              infCarga: {
                  /** Valor total da carga. Dever ser informado para todos os modais, com exceção para o Dutoviário */
                  vCarga: string;
                  /** Produto predominante. Informar a descrição do produto predominante */
                  proPred: string;
                  /** Outras características da carga. "FRIA", "GRANEL", "REFRIGERADA", "Medidas: 12X12X12" */
                  xOutCat: string;
                  /** Informações de quantidades da Carga do CT-e. Para o Aéreo é obrigatório o preenchimento desse campo da
                   * seguinte forma:
                   * 1 | Peso Bruto, sempre em quilogramas (obrigatório)
                   * 2 | Peso Cubado; sempre em quilogramas
                   * 3 | Quantidade de volumes, sempre em unidades (obrigatório)
                   * 4 | Cubagem, sempre em metros cúbicos (obrigatório apenas quando for impossível preencher as dimensões
                   * da(s) embalagem(ens) na tag xDime do leiaute do Aéreo)
                   */
                  infQ: {
                      /** Código da Unidade de Medida:
                       * 00 | M3
                       * 01 | KG
                       * 02 | TON
                       * 03 | UNIDADE
                       * 04 | LITROS
                       * 05 | MMBTU
                       */
                      cUnid: MeasurementUnitCode;
                      /** Tipo da Medida. Exemplos: PESO BRUTO, PESO DECLARADO, PESO CUBADO, PESO AFORADO, PESO AFERIDO, PESO
                       * BASE DE CÁLCULO, LITRAGEM, CAIXAS e etc
                       */
                      tpMed: string;
                      /** Quantidade */
                      qCarga: string;
                  };
                  /** Valor da Carga para efeito de averbação. Normalmente igual ao valor declarado da mercadoria, diferente
                   * por exemplo, quando a mercadoria transportada é isenta de tributos nacionais para exportação, onde é
                   * preciso averbar um valor maior, pois no caso de indenização, o valor a ser pago será maior
                   */
                  vCargaAverb?: string;
              };
              /** Informações dos documentos transportados pelo CT-e Opcional para Redespacho Intermediario e Serviço
               * vinculado a multimodal. Poderá não ser informado para os CT-e de redespacho intermediário e serviço vinculado
               * a multimodal. Nos demais casos deverá sempre ser informado
               */
              infDoc?:
                  | {
                        /** Informações das NF. Este grupo deve ser informado quando o documento originário for NF */
                        infNF:
                            | (NFInformations & {
                                  /** Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit
                                   * Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de
                                   * aeronave com rede ou palete de aeronave com rede sobre um iglu
                                   */
                                  infUnidCarga?: LoadUnitInformation[];
                              })
                            | (NFInformations & {
                                  /** Informações das Unidades de Transporte (Carreta/Reboque/Vagão). Deve ser preenchido com as
                                   * informações das unidades de transporte utilizadas
                                   */
                                  infUnidTransp?: TransportUnitInformation[];
                              });
                    }[]
                  | {
                        /** Informações das NF-e */
                        infNFe:
                            | (NFeInformations & {
                                  /** Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit
                                   * Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de
                                   * aeronave com rede ou palete de aeronave com rede sobre um iglu
                                   */
                                  infUnidCarga?: LoadUnitInformation[];
                              })
                            | (NFeInformations & {
                                  /** Informações das Unidades de Transporte (Carreta/Reboque/Vagão). Deve ser preenchido com as
                                   * informações das unidades de transporte utilizadas
                                   */
                                  infUnidTransp?: TransportUnitInformation[];
                              });
                    }[]
                  | {
                        /** Informações dos demais documentos */
                        infOutros:
                            | (OtherInformations & {
                                  /** Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit
                                   * Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de
                                   * aeronave com rede ou palete de aeronave com rede sobre um iglu
                                   */
                                  infUnidCarga?: LoadUnitInformation[];
                              })
                            | (OtherInformations & {
                                  /** Informações das Unidades de Transporte (Carreta/Reboque/Vagão). Deve ser preenchido com as
                                   * informações das unidades de transporte utilizadas
                                   */
                                  infUnidTransp?: TransportUnitInformation[];
                              });
                    }[];
              /** Documentos de Transporte Anterior */
              docAnt?: {
                  /** Emissor do documento anterior */
                  emiDocAnt: (
                      | (PreviousDocumentIssuer & {
                            /** Número do CNPJ. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com
                             * zeros. Informar os zeros não significativos
                             */
                            CNPJ: "00000000000000" | string;
                        })
                      | (PreviousDocumentIssuer & {
                            /** Número do CPF. Informar os zeros não significativos */
                            CPF: string;
                        })
                  )[];
              };
              /** Informações do modal */
              infModal:
                  | {
                        $: {
                            /** Versão do leiaute específico para o Modal */
                            versaoModal: string;
                        };
                        /** Informações do modal Rodoviário */
                        rodo: {
                            /** Registro Nacional de Transportadores Rodoviários de Carga. Registro obrigatório do emitente do
                             * CT-e junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de
                             * terceiros e mediante remuneração
                             */
                            RNTRC: "ISENTO" | string;
                            /** Ordens de Coleta associados */
                            occ?: {
                                /** Série da OCC */
                                serie?: string;
                                /** Número da Ordem de coleta */
                                nOcc: string;
                                /** Data de emissão da ordem de coleta. Formato AAAA-MM-DD */
                                dEmi: string;
                                emiOcc: {
                                    /** Número do CNPJ. Informar os zeros não significativos */
                                    CNPJ: string;
                                    /** Código interno de uso da transportadora */
                                    cInt?: string;
                                    /** Inscrição Estadual */
                                    IE: string;
                                    /** Sigla da UF. Informar EX para operações com o exterior */
                                    UF: UFIssuer & "EX";
                                    /** Telefone */
                                    fone?: string;
                                };
                            }[];
                        };
                    }
                  | {
                        $: {
                            /** Versão do leiaute específico para o Modal */
                            versaoModal: string;
                        };
                        /** Informações do modal Aéreo */
                        aereo: {
                            /** Número da Minuta. Documento que precede o CT-e, assinado pelo expedidor, espécie de pedido de
                             * serviço
                             */
                            nMinu?: string;
                            /** Número Operacional do Conhecimento Aéreo. Representa o número de controle comumente utilizado
                             * pelo conhecimento aéreo composto por uma sequência numérica de onze dígitos. Os três primeiros
                             * dígitos representam um código que os operadores de transporte aéreo associados à IATA possuem.
                             * Em seguida um número de série de sete dígitos determinados pelo operador de transporte aéreo.
                             * Para finalizar, um dígito verificador, que é um sistema de módulo sete imponderado o qual
                             * divide o número de série do conhecimento aéreo por sete e usa o resto como dígito de
                             * verificação
                             */
                            nOCA?: string;
                            /** Data prevista da entrega. Formato AAAA-MM-DD */
                            dPrevAereo: string;
                            /** Natureza da carga */
                            natCarga: {
                                /** Dimensão. Formato:1234X1234X1234 (cm). Esse campo deve sempre que possível ser preenchido.
                                 * Entretanto, quando for impossível o preenchimento das dimensões, fica obrigatório o
                                 * preenchimento da cubagem em metro cúbico do leiaute do CT-e da estrutura genérica (infQ)
                                 */
                                xDime?: string;
                                /** Informações de manuseio:
                                 * 01 | certificado do expedidor para embarque de animal vivo
                                 * 02 | artigo perigoso conforme Declaração do Expedidor anexa
                                 * 03 | somente em aeronave cargueira
                                 * 04 | artigo perigoso - declaração do expedidor não requerida
                                 * 05 | artigo perigoso em quantidade isenta
                                 * 06 | gelo seco para refrigeração (especificar no campo observações a quantidade)
                                 * 07 | não restrito (especificar a Disposição Especial no campo observações)
                                 * 08 | artigo perigoso em carga consolidada (especificar a quantidade no campo observações)
                                 * 09 | autorização da autoridade governamental anexa (especificar no campo observações)
                                 * 10 | baterias de íons de lítio em conformidade com a Seção II da PI965 – CAO
                                 * 11 | baterias de íons de lítio em conformidade com a Seção II da PI966
                                 * 12 | baterias de íons de lítio em conformidade com a Seção II da PI967
                                 * 13 | baterias de metal lítio em conformidade com a Seção II da PI968 — CAO
                                 * 14 | baterias de metal lítio em conformidade com a Seção II da PI969
                                 * 15 | baterias de metal lítio em conformidade com a Seção II da PI970
                                 * 99 | outro (especificar no campo observações)
                                 */
                                cInfManu?: HandlingInformation[];
                            };
                            /** Informações de tarifa */
                            tarifa: {
                                /** Classe:
                                 * M | Tarifa Mínima
                                 * G | Tarifa Geral
                                 * E | Tarifa Específica
                                 */
                                CL: TaxClass;
                                /** Código da Tarifa. Deverão ser incluídos os códigos de três dígitos, correspondentes à tarifa */
                                cTar?: string;
                                /** Valor da Tarifa. Valor da tarifa por kg quando for o caso */
                                vTar: string;
                            };
                            /** Preenchido quando for transporte de produtos classificados pela ONU como perigosos. O
                             * preenchimento desses campos não desobriga a empresa aérea de emitir os demais documentos
                             * que constam na legislação vigente
                             */
                            peri?: {
                                /** Número ONU/UN. Ver a legislação de transporte de produtos perigosos aplicadas ao
                                 * modal
                                 */
                                nONU: "ND" | string;
                                /** Quantidade total de volumes contendo artigos perigosos. Preencher com o número de
                                 * volumes (unidades) de artigos perigosos, ou seja, cada embalagem devidamente marcada e
                                 * etiquetada (por ex.: número de caixas, de tambores, de bombonas, dentre outros). Não
                                 * deve ser preenchido com o número de ULD, pallets ou containers
                                 */
                                qTotEmb: string;
                                /** Grupo de informações das quantidades totais de artigos perigosos. Preencher conforme
                                 * a legislação de transporte de produtos perigosos aplicada ao modal
                                 */
                                infTotAP: {
                                    /** Quantidade total de artigos perigosos. 15 posições, sendo 11 inteiras e 4
                                     * decimais. Deve indicar a quantidade total do artigo perigoso, tendo como base a
                                     * unidade referenciada na Tabela 3-1 do Doc 9284, por exemplo: litros; quilogramas;
                                     * quilograma bruto etc. O preenchimento não deve, entretanto, incluir a unidade de
                                     * medida. No caso de transporte de material radioativo, deve-se indicar o somatório
                                     * dos Índices de Transporte (TI). Não indicar a quantidade do artigo perigoso por
                                     * embalagem
                                     */
                                    qTotProd: string;
                                    /** Unidade de medida:
                                     * 1 | KG
                                     * 2 | KG G (quilograma bruto)
                                     * 3 | LITROS
                                     * 4 | TI (índice de transporte para radioativos)
                                     * 5 | Unidades (apenas para artigos perigosos medidos em unidades que não se
                                     * enquadram nos itens acima. Exemplo: baterias, celulares, equipamentos, veículos,
                                     * dentre outros)
                                     */
                                    uniAP: DangerMeasurementUnit;
                                };
                            }[];
                        };
                    }
                  | {
                        $: {
                            /** Versão do leiaute específico para o Modal */
                            versaoModal: string;
                        };
                        /** Informações do modal Aquaviário */
                        aquav: {
                            /** Valor da Prestação Base de Cálculo do AFRMM */
                            vPrest: string;
                            /** AFRMM (Adicional de Frete para Renovação da Marinha Mercante) */
                            vAFRMM: string;
                            /** Identificação do Navio */
                            xNavio: string;
                            /** Grupo de informações das balsas */
                            balsa?: {
                                /** Identificador da Balsa */
                                xBalsa: string;
                            };
                            /** Número da Viagem */
                            nViag?: string;
                            /** Direção:
                             * N | Norte
                             * L | Leste
                             * S | Sul
                             * O | Oeste
                             */
                            direc: Direction;
                            /** Irin do navio sempre deverá ser informado */
                            irin: string;
                            /** Grupo de informações de detalhamento dos conteiners (Somente para Redespacho
                             * Intermediário e Serviço Vinculado a Multimodal)
                             */
                            detCont?: {
                                /** Identificação do Container */
                                nCont: string;
                                /** Grupo de informações dos lacres dos cointainers da qtde da carga */
                                lacre: {
                                    /** Lacre */
                                    nLacre: string;
                                }[];
                                /** Informações dos documentos dos conteiners */
                                infDoc?:
                                    | {
                                          /** Informações das NF */
                                          infNF: {
                                              /** Série */
                                              serie: string;
                                              /** Número */
                                              nDoc: string;
                                              /** Unidade de medida rateada (Peso,Volume) */
                                              unidRat?: string;
                                          }[];
                                      }
                                    | {
                                          /** Informações das NFe */
                                          infNFe: {
                                              /** Chave de acesso da NF-e */
                                              chave: string;
                                              /** Unidade de medida rateada (Peso,Volume) */
                                              unidRat?: string;
                                          }[];
                                      };
                            }[];
                            /** Tipo de Navegação:
                             * 0 | Interior
                             * 1 | Cabotagem
                             */
                            tpNav?: NavigationType;
                        };
                    }
                  | {
                        $: {
                            /** Versão do leiaute específico para o Modal */
                            versaoModal: string;
                        };
                        /** Informações do modal Ferroviário */
                        ferrov: {
                            /** Tipo de Tráfego
                             * 0 | Próprio
                             * 1 | Mútuo
                             * 2 | Rodoferroviário
                             * 3 | Rodoviário
                             */
                            tpTraf: TrafficType;
                            /** Detalhamento de informações para o tráfego mútuo */
                            trafMut?: {
                                /** Responsável pelo Faturamento:
                                 * 1 | Ferrovia de origem
                                 * 2 | Ferrovia de destino
                                 */
                                respFat: RailroadEdge;
                                /** Ferrovia Emitente do CTe:
                                 * 1 | Ferrovia de origem
                                 * 2 | Ferrovia de destino
                                 */
                                ferrEmi: RailroadEdge;
                                /** Valor do Frete do Tráfego Mútuo */
                                vFrete: string;
                                /** Chave de acesso do CT-e emitido pelo ferrovia de origem */
                                chCTeFerroOrigem?: string;
                                /** Informações das Ferrovias Envolvidas */
                                ferroEnv: {
                                    /** Número do CNPJ. Informar o CNPJ da Ferrovia Envolvida. Caso a Ferrovia envolvida
                                     * não seja inscrita no CNPJ o campo deverá preenchido com zeros. Informar os zeros
                                     * não significativos
                                     */
                                    CNPJ: "00000000000000" | string;
                                    /** Código interno da Ferrovia envolvida. Uso da transportadora */
                                    cInt?: string;
                                    /** Inscrição Estadual */
                                    IE?: string;
                                    /** Razão Social ou Nome */
                                    xNome: string;
                                    /** Dados do endereço da ferrovia envolvida */
                                    enderFerro: Address;
                                }[];
                            };
                            /** Fluxo Ferroviário. Trata-se de um número identificador do contrato firmado com o cliente */
                            fluxo: string;
                        };
                    }
                  | {
                        $: {
                            /** Versão do leiaute específico para o Modal */
                            versaoModal: string;
                        };
                        /** Informações do modal Dutoviário */
                        duto: {
                            /** Valor da tarifa */
                            vTar?: string;
                            /** Data de Início da prestação do serviço. Formato AAAA-MM-DD */
                            dIni: string;
                            /** Data de Fim da prestação do serviço. Formato AAAA-MM-DD */
                            dFim: string;
                        };
                    };
              /** informações dos veículos transportados */
              veicNovos?: {
                  /** Chassi do veículo */
                  chassi: string;
                  /** Cor do veículo. Código de cada montadora */
                  cCor: string;
                  /** Descrição da cor */
                  xCor: string;
                  /** Código Marca Modelo. Utilizar tabela RENAVAM */
                  xMod: string;
                  /** Valor Unitário do Veículo */
                  vUnit: string;
                  /** Frete Unitário */
                  vFrete: string;
              }[];
              /** Dados da cobrança do CT-e */
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
                  /** Dados das duplicatas */
                  dup?: {
                      /** Número da duplicata */
                      nDup?: string;
                      /** Data de vencimento da duplicata (AAAA-MM-DD) */
                      dVenc?: string;
                      /** Valor da duplicata */
                      vDup?: string;
                  }[];
              };
              /** Informações do CT-e de substituição */
              infCteSub?: {
                  /** Chave de acesso do CT-e a ser substituído (original) */
                  chCte: string;
                  /** Indicador de CT-e Alteração de Tomador */
                  indAlteraToma?: "1";
              };
              /** Informações do CT-e Globalizado */
              infGlobalizado?: {
                  /** Preencher com informações adicionais, legislação do regime especial, etc */
                  xObs: string;
              };
              /** Informações do Serviço Vinculado a Multimodal */
              infServVinc?: {
                  /** informações do CT-e multimodal vinculado */
                  infCTeMultimodal: {
                      /** Chave de acesso do CT-e Multimodal */
                      chCTeMultimodal: string;
                  }[];
              };
          };
      })
    | (__CTe & {
          /** Detalhamento do CT-e complementado */
          infCteComp: {
              /** Chave do CT-e complementado */
              chCTe: string;
          }[];
      });
