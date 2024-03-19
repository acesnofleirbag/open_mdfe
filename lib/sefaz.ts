import { AxiosRequestConfig } from "axios";
import { SefazOperations } from "./@types/operations";
import { HTTPClient } from "./core/ports/httpClient";
import { AxiosHttpClient } from "./adapters/httpClient";
import { EnvironmentIdentifier, UFIssuer } from "./@types/layouts/nfe";

export class SEFAZ implements SefazOperations {
    private httpClient: HTTPClient<AxiosRequestConfig>;

    constructor(
        private readonly environment: EnvironmentIdentifier,
        private readonly UF: UFIssuer,
    ) {
        this.httpClient = new AxiosHttpClient();
    }

    async send(): Promise<void> {
        // @ts-ignore
        const { data } = await this.httpClient.get(WebServices[this.UF].authorization[this.environment]);
    }

    make_useless(): void {}

    fix_letter(): void {}

    cancel(): void {}
}
