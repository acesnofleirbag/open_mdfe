import { EventReceptionResponse } from "./eventReception";
import { IBGEOrganCode } from "./nfe";

// web service: NFeRecepcaoEvento

// schema: TEnvEventoCancNFe
export type CancelRequest = {
    $: { versao: "1.00" };
    descEvento: "Cancelamento";
    nProt: string;
    xJust: string;
    cOrgaoAutor: IBGEOrganCode;
    tpAutor: string;
    verAplic: string;
    chNFeRef: string;
};

// schema: TRetEnvEventoCancNFe === TRetEnvEvento
export type CancelResponse = EventReceptionResponse;
