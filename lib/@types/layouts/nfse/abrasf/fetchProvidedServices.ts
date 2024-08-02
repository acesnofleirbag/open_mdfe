import { CompNFSe, IdentificationPeopleCompany, ResponseMessage } from "./general";

type __FetchProvidedServicesRequest = {
    Tomador?: IdentificationPeopleCompany;
    Intermediario?: IdentificationPeopleCompany;
    Pagina: string;
};

type FetchProvidedServicesRequest__Type1 = {
    Prestador: IdentificationPeopleCompany;
    NumeroNfse: string;
} & __FetchProvidedServicesRequest;

type FetchProvidedServicesRequest__Type2 = {
    Prestador: IdentificationPeopleCompany;
    PeriodoEmissao: {
        DataInicial: string;
        DataFinal: string;
    };
} & __FetchProvidedServicesRequest;

type FetchProvidedServicesRequest__Type3 = {
    Prestador: IdentificationPeopleCompany;
    PeriodoCompetencia: {
        DataInicial: string;
        DataFinal: string;
    };
} & __FetchProvidedServicesRequest;

export type NFSeABRASF_FetchProvidedServicesRequest = {
    ConsultarNfseServicoPrestadoEnvio:
        | FetchProvidedServicesRequest__Type1
        | FetchProvidedServicesRequest__Type2
        | FetchProvidedServicesRequest__Type3;
};

export type NFSeABRASF_FetchProvidedServicesResponse = {
    ListaNfse: {
        CompNfse: CompNFSe[];
        Pagina: string;
    };
    MensagemRetorno: ResponseMessage;
};
