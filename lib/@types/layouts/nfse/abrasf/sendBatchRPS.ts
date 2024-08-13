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

// TODO: schema
export type NFSeABRASF_SendBatchRPS_Response = {};
