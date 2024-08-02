import { CompNFSe, IdentificationPeopleCompany, RPS_Identification, ResponseMessage } from "./general";

export type NFSeABRASF_FetchNFSeRPS_Request = {
    IdentificacaoRps: RPS_Identification;
    Prestador: IdentificationPeopleCompany;
};

export type NFSeABRASF_FetchNFSeRPS_Response = CompNFSe & {
    MensagemRetorno: ResponseMessage[];
};
