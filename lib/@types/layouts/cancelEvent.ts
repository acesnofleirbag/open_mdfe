import { EventReceptionResponse } from "./eventReception";
import { IBGEOrganCode } from "./nfe";

// web service: NFeRecepcaoEvento

// schema: TEnvEventoCancNFe
export type CancelRequest = {
    $: { versao: "1.00" };
    /** Descrição do Evento - "Cancelamento" */
    descEvento: "Cancelamento";
    /** Número do Protocolo de Status da NF-:
     * 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - códiga da UF - 2 posições ano;
     * 10 seqüencial no ano.
     */
    nProt: string;
    /** Justificativa do pedido de cancelamento */
    xJust: string;
    /** Código do órgão de autor do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o
     * Ambiente Nacional
     */
    cOrgaoAutor: IBGEOrganCode;
    tpAutor: string;
    /** Versão do Aplicativo que processou a NF-e */
    verAplic: string;
    // WARN: THIS COMMENT WAS NOT FOUND ON OFFICIAL DOCS
    /** Chave de acesso da NF-e referenciada */
    chNFeRef: string;
};

// schema: TRetEnvEventoCancNFe === TRetEnvEvento
export type CancelResponse = EventReceptionResponse;
