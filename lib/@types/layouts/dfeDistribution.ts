import { EnvironmentIdentifier } from "./nfe";
import { VERSION } from "./version";

// web service: NfeDistribuicaoDFe

// schema: TDistDFeInt
export type DFeDistributionRequest = {
    /** Schema de pedido de distribuição de DF-e de interesse */
    distDFeInt: {
        $: { versao: VERSION };
        /**  Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Código da UF do Autor */
        cUFAutor: null;
        /** CNPJ do interessado no DF-e */
        CNPJ: string;
        /** CPF do interessado no DF-e */
        CPF: string;
        /** Grupo para distribuir DF-e de interesse */
        distNSU: {
            /** Último NSU recebido pelo ator. Caso seja informado com zero, ou com um NSU muito antigo, a consulta
             * retornará unicamente as informações resumidas e documentos fiscais eletrônicos que tenham sido
             * recepcionados pelo Ambiente Nacional nos últimos 3 meses
             */
            ultNSU: string;
        };
        /** Grupo para consultar um DF-e a partir de um NSU específico */
        consNSU: {
            /** Número Sequencial Único. Geralmente esta consulta será utilizada quando identificado pelo interessado um
             * NSU faltante. O Web Service retornará o documento ou informará que o NSU não existe no Ambiente Nacional.
             * Assim, esta consulta fechará a lacuna do NSU identificado como faltante
             */
            NSU: string;
        };
        /** Grupo para consultar uma NF-e a partir da chave de acesso */
        consChNFe: {
            /** Chave de acesso da NF-e a ser consultada */
            chNFe: string;
        };
    };
};

// schema: TRetDistDFeInt
export type DFeDistributionResponse = {
    /** Schema do resultado do pedido de distribuição de DF-e de interesse */
    retDistDFeInt: {
        $: { versao: VERSION };
        /**  Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Versão do Web Service NFeDistribuicaoDFe */
        verAplic: string;
        /** Código do status de processamento da requisição */
        cStat: string;
        /** Descrição literal do status do processamento da requisição */
        xMotivo: string;
        /** Data e Hora de processamento da requisição no formato AAAA-MM-DDTHH:MM:SSTZD */
        dhResp: string;
        /** Último NSU pesquisado no Ambiente Nacional. Se for o caso, o solicitante pode continuar a consulta a partir
         * deste NSU para obter novos resultados
         */
        ultNSU: string;
        /** Maior NSU existente no Ambiente Nacional para o CNPJ/CPF informado */
        maxNSU: string;
        /** Conjunto de informações resumidas e documentos fiscais eletrônicos de interesse da pessoa ou empresa */
        loteDistDFeInt: {
            /** Informação resumida ou documento fiscal eletrônico de interesse da pessoa ou empresa. O conteúdo desta
             * tag estará compactado no padrão gZip. O tipo do campo é base64Binary
             */
            docZip: string;
        };
        /** NSU do documento fiscal */
        NSU?: string;
        /** Identificação do Schema XML que será utilizado para validar o XML existente no conteúdo da tag docZip. Vai
         * identificar o tipo do documento e sua versão. Exemplos: resNFe_v1.00.xsd, procNFe_v3.10.xsd,
         * resEvento_1.00.xsd, procEventoNFe_v1.00.xsd
         */
        schema: string;
    };
};
