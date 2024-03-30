import { EnvironmentIdentifier, UFCodeIBGE } from "./nfe";
import { VERSION } from "./version";

// web service: NfeRetAutorizacao

// schema: TConsReciNFe
export type AuthorizationResultRequest = {
    consReciNFe: {
        $: { versao: VERSION };
        tpAmb: EnvironmentIdentifier;
        nRec: string;
    };
};

// schema: TRetConsReciNFe
export type AuthorizationResultResponse = {
    retConsReciNFe: {
        $: { versao: VERSION };
        tpAmb: EnvironmentIdentifier;
        verAplic: string;
        nRec: string;
        cStat: string;
        xMotivo: string;
        cUF: UFCodeIBGE;
        dhRecbto: string;
        cMsg?: string;
        xMsg?: string;
        protNFe?: {
            $: { versao: VERSION };
            infProt: {
                $: { Id?: string };
                tpAmb: EnvironmentIdentifier;
                verAplic: string;
                chNFe: string;
                dhRecbto: string;
                nProt?: string;
                digVal?: string;
                cStat: string;
                xMotivo: string;
                cMsg?: string;
                xMsg?: string;
            };
            Signature?: string;
        }[];
    };
};
