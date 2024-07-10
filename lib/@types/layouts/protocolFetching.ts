import { EnvironmentIdentifier, IBGEOrganCode, UFCodeIBGE } from "./nfe";
import { VERSION } from "./version";

type __Event = {
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

type __EventReturn = {
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
    emailDest?: string;
    dhRegEvento: string;
    nProt?: string;
};

// web service: NfeConsultaProtocolo

// schema: TConsSitNFe
export type ProtocolFetchingRequest = {
    consSitNFe: {
        $: { versao: VERSION };
        tpAmb: EnvironmentIdentifier;
        xServ: "CONSULTAR";
        chNFe: string;
    };
};

// schema: TRetConsSitNFe
export type ProtocolFetchingResponse = {
    retConsSitNFe: {
        $: { versao: VERSION };
        tpAmb: EnvironmentIdentifier;
        verAplic: string;
        cStat: string;
        xMotivo: string;
        cUF: UFCodeIBGE;
        dhRecbto: string;
        chNFe: string;
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
        retCancNFe?: {
            infCanc: {
                $: { Id?: string };
                tpAmb: EnvironmentIdentifier;
                verAplic: string;
                cStat: string;
                xMotivo: string;
                cUF: UFCodeIBGE;
                chNFe?: string;
                dhRecbto?: string;
                nProt?: string;
            };
            Signature?: string;
        };
        procEventoNFe?: {
            $: { versao: string };
            evento: {
                infEvento: (__Event & { CNPJ: string }) | (__Event & { CPF: string });
                Signature: string;
            };
            retEvento: {
                infEvento: (__EventReturn & { CNPJDest?: string }) | (__EventReturn & { CPFDest?: string });
                Signature?: string;
            };
        }[];
    };
};
