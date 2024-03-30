import { EnvironmentIdentifier, SefazNFE, UFCodeIBGE, WebServiceMode } from "./nfe";
import { VERSION } from "./version";

// web service: NfeAutorizacao

// schema: TEnviNFe
export type AuthorizationRequest = {
    enviNFe: {
        $: { versao: VERSION };
        idLote: string;
        indSinc: WebServiceMode;
        NFe: SefazNFE[];
    };
};

// schema: TRetEnviNFe
export type AuthorizationResponse = {
    retEnviNFe: {
        $: { versao: VERSION };
        tpAmb: EnvironmentIdentifier;
        verAplic: string;
        cStat: string;
        xMotivo: string;
        cUF: UFCodeIBGE;
        dhRecbto: string;
        infRec?: {
            nRec: string;
            tMed: string;
        };
        protNFe?: {
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
        };
    };
};
