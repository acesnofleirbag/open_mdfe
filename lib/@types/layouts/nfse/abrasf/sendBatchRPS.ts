import { IdentificationPeopleCompany, RPS } from "./general";

export type NFSeABRASF_SendBatchRPS_Request = {
    LoteRps: {
        $: { Id: string; versao: string };
        NumeroLote: string;
        Prestador: IdentificationPeopleCompany;
        QuantidadeRps: string;
        ListaRps: RPS[];
    };
};

export type NFSeABRASF_SendBatchRPS_Response = {}; // FIXME(@@@)
