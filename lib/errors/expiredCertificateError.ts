import { SefazError } from "../core/error";

export class ExpiredCertificateError extends SefazError {
    constructor() {
        super("Expired certificate");
    }
}
