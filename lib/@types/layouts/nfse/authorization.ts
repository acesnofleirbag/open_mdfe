import { SefazNFSe } from "./nfse";

export type NFSe_AuthorizationRequest = {
    $: {
        /** Informar o identificador precedido do literal ‘NFS’. A regra de formação do identificador de 53 posições da
         * NFS-e é: "NFS" + Cód.Mun.(7) + Amb.Ger.(1) + Tipo de Inscrição Federal(1) + Inscrição Federal(14) +
         * No.NFS-e(13) + AnoMes Emis.(4) + Cód.Num.(9) + DV(1)
         */
        Id: string;
    };
    infNFSe: SefazNFSe;
};

export type NFSe_AuthorizationResponse = unknown;
