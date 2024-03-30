import { EnvironmentIdentifier, IBGEOrganCode } from "./nfe";
import { VERSION } from "./version";

type __EventInformation__Type1 = {
    $: { Id: string };
    cOrgao: IBGEOrganCode;
    tpAmb: EnvironmentIdentifier;
    chNFe: string;
    dhEvento: string;
    tpEvento: string;
    nSeqEvento: string;
    verEvento: string;
    detEvento: unknown[];
};

type __EventInformation__Type2 = {
    $: { Id?: string };
    tpAmb: EnvironmentIdentifier;
    verAplic: string;
    cOrgao: IBGEOrganCode;
    cStat: string;
    xMotivo: string;
    chNFe?: string;
    tpEvento?: string;
    xEvento?: string;
    nSeqEvento?: string;
    cOrgaoAutor?: IBGEOrganCode;
    emailDest?: string;
    dhRegEvento: string;
    nProt: string;
    // TODO: check if exists on response because the schema don't describe this attribute
    // chNFePend: null;
};

// web service: NFeRecepcaoEvento

// schema: TEnvEvento
export type EventReceptionRequest = {
    envEvento: {
        $: { versao: VERSION };
        idLote: string;
        evento: {
            $: { versao: VERSION };
            infEvento:
                | (__EventInformation__Type1 & {
                      CNPJ: string;
                  })
                | (__EventInformation__Type1 & {
                      CPF: string;
                  });
            Signature: string;
        }[];
    };
};

// schema: TRetEnvEvento
export type EventReceptionResponse = {
    retEnvEvento: {
        $: { versao: VERSION };
        idLote: string;
        tpAmb: EnvironmentIdentifier;
        verAplic: string;
        cOrgao: IBGEOrganCode;
        cStat: string;
        xMotivo: string;
        retEvento: {
            $: { versao: VERSION };
            infEvento:
                | (__EventInformation__Type2 & {
                      CNPJDest?: string;
                  })
                | (__EventInformation__Type2 & {
                      CPFDest?: string;
                  });
            Signature?: string;
        }[];
    };
};
