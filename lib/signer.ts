import { ISigner } from "./@types/signer";

export class Signer implements ISigner {
    private cert: string;

    constructor(cert: string) {
        this.cert = cert;
    }

    signXML(): void {
        console.log(this.cert);
    }

    signXML_X509(): void {}
}
