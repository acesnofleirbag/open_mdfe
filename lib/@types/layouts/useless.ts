import { EnvironmentIdentifier, UFCodeIBGE } from "./nfe";
import { VERSION } from "./version";

// web service: NfeInutilizacao

// schema: TInutNFe
export type UselessRequest = {
    inutNFe: {
        $: { versao: VERSION };
        infInut: {
            $: { Id: string };
            tpAmb: EnvironmentIdentifier;
            xServ: "INUTILIZAR";
            cUF: UFCodeIBGE;
            ano: string;
            CNPJ: string;
            mod: string;
            serie: string;
            nNFIni: string;
            nNFFin: string;
            xJust: string;
        };
        Signature: string;
    };
};

// schema: TRetInutNFe
export type UselessResponse = {
    retInutNFe: {
        $: { versao: VERSION };
        infInut: {
            $: { Id?: string };
            tpAmb: EnvironmentIdentifier;
            verAplic: string;
            cStat: string;
            xMotivo: string;
            cUF: UFCodeIBGE;
            ano: string;
            CNPJ?: string;
            mod?: string;
            serie?: string;
            nNFIni?: string;
            nNFFin?: string;
            dhRecbto: string;
            nProt?: string;
        };
        Signature?: string;
    };
};
