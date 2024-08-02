import { CompNFSe, IdentificationPeopleCompany, ResponseMessage } from "./general";

export type NFSeABRASF_FetchBatchRPS_Request = {
    Prestador: IdentificationPeopleCompany;
    Protocolo: string;
};

export type NFSeABRASF_FetchBatchRPS_Response = CompNFSe & {
    MensagemRetorno: ResponseMessage[];
};
