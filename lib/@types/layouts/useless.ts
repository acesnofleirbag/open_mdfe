import { EnvironmentIdentifier, UFCodeIBGE } from "./nfe";
import { VERSION } from "./version";

// web service: NfeInutilizacao

// schema: TInutNFe
export type UselessRequest = {
    /** Tipo Pedido de Inutilização de Numeração da Nota Fiscal Eletrônica */
    inutNFe: {
        $: { versao: VERSION };
        /** Dados do Pedido de Inutilização de Numeração da Nota Fiscal Eletrônica */
        infInut: {
            $: { Id: string };
            /** Identificação do Ambiente:
             * 1 | Produção
             * 2 | Homologação
             */
            tpAmb: EnvironmentIdentifier;
            /** Serviço Solicitado */
            xServ: "INUTILIZAR";
            /** Código da UF do emitente */
            cUF: UFCodeIBGE;
            /** Ano de inutilização da numeração */
            ano: string;
            /** CNPJ do emitente */
            CNPJ: string;
            /** Modelo da NF-e (55, 65, etc) */
            mod: string;
            /** Série da NF-e */
            serie: string;
            /** Número da NF-e inicial */
            nNFIni: string;
            /** Número da NF-e final */
            nNFFin: string;
            /** Justificativa do pedido de inutilização */
            xJust: string;
        };
    };
};

// schema: TRetInutNFe
export type UselessResponse = {
    /** Tipo retorno do Pedido de Inutilização de Numeração da Nota Fiscal Eletrônica */
    retInutNFe: {
        $: { versao: VERSION };
        /** Dados do Retorno do Pedido de Inutilização de Numeração da Nota Fiscal Eletrônica */
        infInut: {
            $: { Id?: string };
            /** Identificação do Ambiente:
             * 1 | Produção
             * 2 | Homologação
             */
            tpAmb: EnvironmentIdentifier;
            /** Versão do Aplicativo que processou a NF-e */
            verAplic: string;
            /** Código do status da mensagem enviada */
            cStat: string;
            /** Descrição literal do status do serviço solicitado */
            xMotivo: string;
            /** Código da UF que atendeu a solicitação */
            cUF: UFCodeIBGE;
            /** Ano de inutilização da numeração */
            ano: string;
            /** CNPJ do emitente */
            CNPJ?: string;
            /** Modelo da NF-e (55, etc) */
            mod?: string;
            /** Série da NF-e */
            serie?: string;
            /** Número da NF-e inicial */
            nNFIni?: string;
            /** Número da NF-e final */
            nNFFin?: string;
            /** Data e hora de recebimento, no formato AAAA-MM-DDTHH:MM:SS. Deve ser preenchida com data e hora da
             * gravação no Banco em caso de Confirmação. Em caso de Rejeição, com data e hora do recebimento do Pedido
             * de Inutilização
             */
            dhRecbto: string;
            /** Número do Protocolo de Status da NF-e:
             * 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal);
             * 2 - código da UF - 2 posições ano; 10 seqüencial no ano
             */
            nProt?: string;
        };
        Signature?: string;
    };
};
