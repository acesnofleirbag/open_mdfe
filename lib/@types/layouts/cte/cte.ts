import { CodeCityIBGE, EnvironmentIdentifier, UFCodeIBGE, UFIssuer } from "../general";

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

enum DeliverySchedulingDateType {
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

// schema: TCTe
export type SefazCTE = {
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
              /** CPF do emitente. Informar zeros não significativos. Usar com série específica 920-969 para emitente pessoa
               * física com inscrição estadual
               */
              CPF: string;
          });
    /** Informações do Remetente das mercadorias transportadas pelo CT-e. Poderá não ser informado para os CT-e de
     * redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado
     */
    rem?: {
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

        // @@@: choice
    };
    exped?: {};
    receb?: {};
    dest?: {};
    vPrest: {};
    imp: {};
    autXML?: {}[];
    infRespTec?: {};
    infSolicNFF?: {};
    infPAA?: {};
    // @@@: choice
};
