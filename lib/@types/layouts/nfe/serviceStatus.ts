import { EnvironmentIdentifier, UFCodeIBGE } from "../general";
import { VERSION } from "../version";

// web service: NfeStatusServico

// schema: TConsStatServ
export type NFeServiceStatusRequest = {
    /** Tipo Pedido de Consulta do Status do Serviço */
    consStatServ: {
        $: { versao: VERSION; xmlns: "http://www.portalfiscal.inf.br/nfe" };
        /** Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Sigla da UF consultada */
        cUF: UFCodeIBGE;
        /** Serviço Solicitado */
        xServ: "STATUS";
    };
};

// schema: TRetConsStatServ
export type NFeServiceStatusResponse = {
    /** Tipo Resultado da Consulta do Status do Serviço */
    $: { xmlns: string };
    retConsStatServ: {
        $: { versao: VERSION; xmlns: string };
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
        /** Código da UF responsável pelo serviço */
        cUF: UFCodeIBGE;
        /** Data e hora do recebimento da consulta no formato AAAA-MM-DDTHH:MM:SSTZD */
        dhRecbto: string;
        /** Tempo médio de resposta do serviço (em segundos) dos últimos 5 minutos */
        tMed?: string;
        /** AAAA-MM-DDTHH:MM:SS, Deve ser preenchida com data e hora previstas para o retorno dos serviços prestados */
        dhRetorno?: string;
        /** Campo observação utilizado para incluir informações ao contribuinte */
        xObs?: string;
    };
};
