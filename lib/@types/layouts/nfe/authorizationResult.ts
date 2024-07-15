import { EnvironmentIdentifier, UFCodeIBGE } from "../general";
import { VERSION } from "../version";

// web service: NfeRetAutorizacao

// schema: TConsReciNFe
export type AuthorizationResultRequest = {
    /** Tipo Pedido de Consulta do Recido do Lote de Notas Fiscais Eletrônicas */
    consReciNFe: {
        $: { versao: VERSION };
        /** Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Número do Recibo */
        nRec: string;
    };
};

// schema: TRetConsReciNFe
export type AuthorizationResultResponse = {
    /** Tipo Retorno do Pedido de Consulta do Recido do Lote de Notas Fiscais Eletrônicas */
    retConsReciNFe: {
        $: { versao: VERSION };
        /** Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Versão do Aplicativo que processou a NF-e */
        verAplic: string;
        /** Número do Recibo Consultado */
        nRec: string;
        /** Código do status da mensagem enviada */
        cStat: string;
        /** Descrição literal do status do serviço solicitado */
        xMotivo: string;
        /** código da UF de atendimento */
        cUF: UFCodeIBGE;
        /** Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SSTZD. Em caso de Rejeição, com data e hora do
         * recebimento do Lote de NF-e enviado
         */
        dhRecbto: string;
        /** Código da Mensagem (v2.0) alterado para tamanho variavel 1-4. (NT2011/004) */
        cMsg?: string;
        /** Mensagem da SEFAZ para o emissor. (v2.0) */
        xMsg?: string;
        /** Protocolo de status resultado do processamento da NF-e */
        protNFe?: {
            $: { versao: VERSION };
            /** Dados do protocolo de status */
            infProt: {
                $: { Id?: string };
                /** Identificação do Ambiente:
                 * 1 | Produção
                 * 2 | Homologação
                 */
                tpAmb: EnvironmentIdentifier;
                /** Versão do Aplicativo que processou a NF-e */
                verAplic: string;
                /** Chaves de acesso da NF-e, compostas por: UF do emitente, AAMM da emissão da NFe, CNPJ do emitente,
                 * modelo, série e número da NF-e e código numérico+DV
                 */
                chNFe: string;
                /** Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SSTZD. Deve ser preenchida com data e hora
                 * da gravação no Banco em caso de Confirmação. Em caso de Rejeição, com data e hora do recebimento do
                 * Lote de NF-e enviado
                 */
                dhRecbto: string;
                /** Número do Protocolo de Status da NF-e:
                 * 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal);
                 * 2 - códiga da UF - 2 posições ano; 10 seqüencial no ano
                 */
                nProt?: string;
                /** Digest Value da NF-e processada. Utilizado para conferir a integridade da NF-e original */
                digVal?: string;
                /** Código do status da mensagem enviada */
                cStat: string;
                /** Descrição literal do status do serviço solicitado */
                xMotivo: string;
                /** Código da Mensagem */
                cMsg?: string;
                /** Mensagem da SEFAZ para o emissor */
                xMsg?: string;
            };
            Signature?: string;
        }[];
    };
};
