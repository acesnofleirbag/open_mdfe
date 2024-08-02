import { CompNFSe, IdentificationPeopleCompany, ResponseMessage } from "./general";

export type NFSeABRASF_FetchNFSeRangeRequest = {
    Prestador: IdentificationPeopleCompany;
    Faixa: {
        NumeroNfseInicial: string;
        NumeroNfseFinal: string;
    };
    Pagina: string;
};

export type NFSeABRASF_FetchNFSeRangeResponse = {
    ListaNfse: {
        CompNfse: CompNFSe;
        Pagina: string;
    };
    MensagemRetorno: ResponseMessage[];
};
