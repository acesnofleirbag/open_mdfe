import { EnvironmentIdentifier, UFCodeIBGE } from "../general";
import { VERSION } from "../version";

// web service: CTeStatusServicoV4

// schema: TConsStatServ
export type CTeServiceStatusRequest = {
    /** Pedido de Consulta do Status do Serviço CTe */
    consStatServCTe: {
        $: { versao: VERSION };
        /** Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Identificação da UF */
        cUF: UFCodeIBGE;
        /** Serviço Solicitado */
        xServ: "STATUS";
    };
};

// schema: TRetConsStatServ
export type CTeServiceStatusResponse = {
    /** Resultado da Consulta do Status do Serviço CTe */
    retConsStatServCTe: {
        /** Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Versão do Aplicativo que processou a CT-e */
        verAplic: string;
        /** código do status do retorno da consulta */
        cStat: string;
        /** Descrição literal do status do do retorno da consulta */
        xMotivo: string;
        /** Identificação da UF */
        cUF: UFCodeIBGE;
        /** AAAA-MM-DDTHH:MM:SS TZD */
        dhRecbto: string;
        /** Tempo médio de resposta do serviço (em segundos) dos últimos 5 minutos */
        tMed?: number;
        /** AAAA-MM-DDTHH:MM:S. Deve ser preenchida com data e hora previstas para o retorno dos serviços prestados */
        dhRetorno?: string;
        /** Campo observação utilizado para incluir informações ao contribuinte */
        xObs?: string;
    };
};
