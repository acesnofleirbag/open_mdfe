import { EnvironmentIdentifier, UFCodeIBGE } from "./nfe";
import { VERSION } from "./version";

// web service: NfeStatusServico

// schema: TConsStatServ
export type ServiceStatusRequest = {
    consStatServ: {
        $: { versao: VERSION };
        tpAmb: EnvironmentIdentifier;
        cUF: UFCodeIBGE;
        xServ: "STATUS";
    };
};

// schema: TRetConsStatServ
export type ServiceStatusResponse = {
    retConsStatServ: {
        $: { versao: VERSION };
        tpAmb: EnvironmentIdentifier;
        verAplic: string;
        cStat: string;
        xMotivo: string;
        cUF: UFCodeIBGE;
        dhRecbto: string;
        tMed?: string;
        dhRetorno?: string;
        xObs?: string;
    };
};
