import { EnvironmentIdentifier, UFCodeIBGE } from "../general";
import { SefazNFE, WebServiceMode } from "./nfe";
import { VERSION } from "../version";

// web service: NfeAutorizacao

// schema: TEnviNFe
export type AuthorizationRequest = {
    /** Schema XML de validação do Pedido de Concessão de Autorização da Nota Fiscal Eletrônica */
    enviNFe: {
        $: { versao: VERSION; xmlns: "https://www.portalfiscal.inf.br/nfe" };
        idLote: string;
        /** Indicador de processamento síncrono:
         * 0 | NÃO
         * 1 | SIM (Síncrono)
         */
        indSinc: WebServiceMode;
        NFe: SefazNFE[];
    };
};

// schema: TRetEnviNFe
export type AuthorizationResponse = {
    /** Tipo Retorno do Pedido de Autorização da Nota Fiscal Eletrônica */
    retEnviNFe: {
        $: { versao: VERSION };
        /** Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Versão do Aplicativo que recebeu o Lote */
        verAplic: string;
        /** Código do status da mensagem enviada */
        cStat: string;
        /** Descrição literal do status do serviço solicitado */
        xMotivo: string;
        /** Código da UF de atendimento */
        cUF: UFCodeIBGE;
        /** Data e hora do recebimento, no formato AAAA-MM-DDTHH:MM:SSTZD */
        dhRecbto: string;
        /** Dados do Recibo do Lote */
        infRec?: {
            /** Número do Recibo */
            nRec: string;
            /** Tempo médio de resposta do serviço (em segundos) dos últimos 5 minutos */
            tMed: string;
        };
        /** Protocolo de status resultado do processamento sincrono da NFC-e */
        protNFe?: {
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
                /** Número do Protocolo de Status da NF-:
                 * 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - códiga da UF - 2 posições ano;
                 * 10 seqüencial no ano.
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
        };
    };
};
