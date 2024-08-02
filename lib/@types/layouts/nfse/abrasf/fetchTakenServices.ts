import { CompNFSe, IdentificationPeopleCompany, ResponseMessage } from "./general";

type __TakenServicesRequest = {
    Prestador: IdentificationPeopleCompany;
    Tomador: IdentificationPeopleCompany;
    Intermediario: IdentificationPeopleCompany;
    Pagina: string;
};

type TakenServicesRequest__Type1 = {
    Consulente: IdentificationPeopleCompany;
    NumeroNfse: string;
} & __TakenServicesRequest;

type TakenServicesRequest__Type2 = {
    Consulente: IdentificationPeopleCompany;
    PeriodoEmissao: {
        DataInicial: string;
        DataFinal: string;
    };
} & __TakenServicesRequest;

type TakenServicesRequest__Type3 = {
    Consulente: IdentificationPeopleCompany;
    PeriodoCompetencia: {
        DataInicial: string;
        DataFinal: string;
    };
} & __TakenServicesRequest;

export type NFSeABRASF_FetchTakenServicesRequest =
    | TakenServicesRequest__Type1
    | TakenServicesRequest__Type2
    | TakenServicesRequest__Type3;

export type NFSeABRASF_FetchTakenServicesResponse = {
    ListaNfse: {
        CompNfse: CompNFSe;
        Pagina: string;
    };
    MensagemRetorno: ResponseMessage[];
};
