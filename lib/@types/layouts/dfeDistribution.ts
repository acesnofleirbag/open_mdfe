import { EnvironmentIdentifier } from "./nfe";
import { VERSION } from "./version";

// web service: NfeDistribuicaoDFe

// schema: TDistDFeInt
export type DFeDistributionRequest = {
    distDFeInt: {
        $: { versao: VERSION };
        tpAmb: EnvironmentIdentifier;
        cUFAutor: null;
        CNPJ: string;
        CPF: string;
        distNSU: {
            ultNSU: string;
        };
        consNSU: {
            NSU: string;
        };
        consChNFe: {
            chNFe: string;
        };
    };
};

// schema: TRetDistDFeInt
export type DFeDistributionResponse = {
    retDistDFeInt: {
        $: { versao: VERSION };
        tpAmb: EnvironmentIdentifier;
        verAplic: string;
        cStat: string;
        xMotivo: string;
        dhResp: string;
        ultNSU: string;
        maxNSU: string;
        loteDistDFeInt: {
            docZip: string;
        };
        NSU: string;
        schema: string;
    };
};
