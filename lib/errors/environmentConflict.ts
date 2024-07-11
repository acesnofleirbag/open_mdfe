import { SefazError } from "../core/error";

export class EnvironmentConflictError extends SefazError {
    constructor() {
        super("NF-e/SEFAZ environment conflict");
    }
}
