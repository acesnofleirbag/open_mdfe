import { EnvironmentIdentifier, SuframaIbgeOrganCode } from "../general";
import { VERSION } from "../version";

// web service: CTeRecepcaoEventoV4

// schema: TEvento
export type CTeEventReceptionRequest = {
    eventoCTe: {
        $: { versao: string };
        infEvento: {
            $: { Id: string };
            /** Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar
             * SUFRAMA
             */
            cOrgao: SuframaIbgeOrganCode;
            tpAmb: EnvironmentIdentifier;
            /** Chave de Acesso do CT-e vinculado ao evento */
            chCTe: string;
            /** Data e Hora do Evento, formato UTC (AAAA-MM-DDThh:mm:ssTZD) */
            dhEvento: string;
            /** Tipo do Evento */
            tpEvento: string;
            /** Seqüencial do evento para o mesmo tipo de evento. Para maioria dos eventos será 1, nos casos em que
             * possa existir mais de um evento o autor do evento deve numerar de forma seqüencial
             */
            nSeqEvento: string;
            /** Detalhamento do evento específico */
            detEvento: unknown;
            /** Grupo de informações do pedido de registro de evento da Nota Fiscal Fácil */
            infSolicNFF?: {
                /** Solicitação do pedido de registro de evento da NFF. Será preenchido com a totalidade de campos
                 * informados no aplicativo emissor serializado
                 */
                xSolic: string;
            };
            /** Grupo de Informação do Provedor de Assinatura e Autorização */
            infPAA?: {
                /** CNPJ do Provedor de Assinatura e Autorização */
                CNPJPAA: string;
                /** Assinatura RSA do Emitente para DFe gerados por PAA */
                PAASignature: {
                    /** Assinatura digital padrão RSA. Converter o atributo Id do DFe para array de bytes e assinar com
                     * a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64
                     */
                    SignatureValue: string;
                    /** Chave Publica no padrão XML RSA Key */
                    RSAKeyValue: string;
                };
            };
        };
        Signature: string;
    };
};

// schema: TRetEvento
export type CTeEventReceptionResponse = {
    $: { versao: VERSION };
    retEventoCTe: {
        infEvento: {
            $: { Id?: string };
            /** Identificação do Ambiente:
             * 1 | Produção
             * 2 | Homologação
             */
            tpAmb: EnvironmentIdentifier;
            /** Versão do Aplicativo que processou a CT-e */
            verAplic: string;
            /** Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar
             * SUFRAMA
             */
            cOrgao: SuframaIbgeOrganCode;
            /** código do status do retorno da consulta */
            cStat: string;
            /** Descrição literal do status do do retorno da consulta */
            xMotivo: string;
            /** Chave de Acesso CT-e vinculado */
            chCTe?: string;
            /** Tipo do Evento vinculado */
            tpEvento?: string;
            /** Descrição do Evento */
            xEvento?: string;
            /** Seqüencial do evento */
            nSeqEvento?: string;
            /** Data e Hora de do recebimento do evento ou do registro do evento formato AAAA-MM-DDThh:mm:ssTZD */
            dhRegEvento?: string;
            /** Número do protocolo de registro do evento */
            nProt?: string;
        };
    };
    Signature?: string;
};
