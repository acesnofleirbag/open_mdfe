import { UFCodeIBGE, UFIssuer } from "../general";

type __QueryInformation = {
    /** Versão do Aplicativo que processou o pedido de consulta de cadastro */
    verAplic: string;
    /** Código do status da mensagem enviada */
    cStat: string;
    /** Descrição literal do status do serviço solicitado */
    xMotivo: string;
    /** sigla da UF consultada, utilizar SU para SUFRAMA */
    UF: UFIssuer & "SU";
    /** Data da Consulta */
    dhCons: string;
    /** código da UF de atendimento */
    cUF: UFCodeIBGE;
    /** Informações cadastrais do contribuinte consultado */
    infCad: {
        /** Número da Inscrição Estadual do contribuinte */
        IE: string;
        /** Número do CNPJ do contribuinte */
        CNPJ: string;
        /** Número do CPF do contribuinte */
        CPF: string;
        /** Sigla da UF de localização do contribuinte. Em algumas situações, a UF de localização pode ser diferente da
         * UF consultada. Ex. IE de Substituto Tributário
         */
        UF: UFIssuer & "EX";
        /** Situação cadastral do contribuinte:
         * 0 | não habilitado
         * 1 | habilitado
         */
        cSit: "0" | "1";
        /** Indicador de contribuinte credenciado a emitir NF-e.
         * 0 | Não credenciado para emissão da NF-e;
         * 1 | Credenciado;
         * 2 | Credenciado com obrigatoriedade para todas operações;
         * 3 | Credenciado com obrigatoriedade parcial;
         * 4 | a SEFAZ não fornece a informação. Este indicador significa apenas que o contribuinte é
         * credenciado para emitir NF-e na SEFAZ consultada.
         */
        indCredNFe: null;
        /** Indicador de contribuinte credenciado a emitir CT-e.
         * 0 | Não credenciado para emissão da CT-e;
         * 1 | Credenciado;
         * 2 | Credenciado com obrigatoriedade para todas operações;
         * 3 | Credenciado com obrigatoriedade parcial;
         * 4 | a SEFAZ não fornece a informação. Este indicador significa apenas que o contribuinte é
         * credenciado para emitir CT-e na SEFAZ consultada */
        indCredCTe: null;
        /** Razão Social ou nome do contribuinte */
        xNome: string;
        /** Razão Social ou nome do contribuinte */
        xFant?: string;
        /** Regime de Apuração do ICMS */
        xRegApur?: string;
        /** CNAE Fiscal do contribuinte */
        CNAE?: string;
        /** Data de início de atividades do contribuinte */
        dIniAtiv?: string;
        /** Data da última modificação da situação cadastral do contribuinte */
        dUltSit?: string;
        /** Data de ocorrência da baixa do contribuinte */
        dBaixa?: string;
        /** Inscrição Estadual Única */
        IEUnica?: string;
        /** Inscrição Estadual atual */
        IEAtual?: string;
    }[];
    /** Tipo Dados do Endereço */
    Ender?: {
        /** Logradouro */
        xLgr?: string;
        /** Número */
        nro?: string;
        /** Complemento */
        xCpl?: string;
        /** Bairro */
        xBairro?: string;
        /** Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior */
        cMun?: string;
        /** Nome do município */
        xMun?: string;
        /** CEP */
        CEP?: string;
    };
};

type QueryInformation__Type1 = __QueryInformation & {
    /** Inscrição Estadual do contribuinte */
    IE: string;
};

type QueryInformation__Type2 = __QueryInformation & {
    /** CNPJ do contribuinte */
    CNPJ: string;
};

type QueryInformation__Type3 = __QueryInformation & {
    /** CPF do contribuinte */
    CPF: string;
};

type QueryInformation = QueryInformation__Type1 | QueryInformation__Type2 | QueryInformation__Type3;

// web service: NfeConsultaCadastro

// schema: TConsCad
export type FetchRegisterRequest = {
    /** Tipo Pedido de Consulta de cadastro de contribuintes */
    ConsCad: {
        $: { versao: "2.00" };
        /** Dados do Pedido de Consulta de cadastro de contribuintes */
        infCons: {
            /** Serviço Solicitado */
            xServ: "CONS-CAD";
            /** sigla da UF consultada, utilizar SU para SUFRAMA */
            UF: UFIssuer & "SU";
            /** Inscrição Estadual do contribuinte */
            IE: string;
            /** CNPJ do contribuinte */
            CNPJ: string;
            /** CPF do contribuinte */
            CPF: string;
        };
    };
};

// schema: TRetConsCad
export type FetchRegisterResponse = {
    /** Tipo Retorno Pedido de Consulta de cadastro de contribuintes */
    retConsCad: {
        $: { versao: "2.00" };
        /** Dados do Resultado doDados do Pedido de Consulta de cadastro de contribuintes */
        infCons: QueryInformation;
    };
};
