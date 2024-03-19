import { AxiosRequestConfig } from "axios";
import { NFEConfig } from "./@types/nfe";
import { SefazOperations } from "./@types/operations";
import { AxiosHttpClient } from "./adapters/httpClient";
import { XMLClient } from "./adapters/xml";
import { HTTPClient } from "./core/ports/httpClient";
import { WebServices } from "./core/static/webServices";

export class NFE implements SefazOperations {
    private httpClient: HTTPClient<AxiosRequestConfig>;
    private XML: XMLClient;
    private config: NFEConfig;

    constructor(config: NFEConfig) {
        this.httpClient = new AxiosHttpClient();
        this.XML = new XMLClient();
        this.config = config;
    }

    async send(): Promise<void> {
        // @ts-ignore
        const { data } = await this.httpClient.get(WebServices[this.config.UF].authorization[this.config.environment]);
        const res = await this.XML.xml2obj(data);

        console.log(">>1", res);
    }

    cancel(): void {}

    fix_letter(): void {}

    make_useless(): void {}
}
