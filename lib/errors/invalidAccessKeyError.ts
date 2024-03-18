import { SefazError } from "../core/error";

export class InvalidAccessKeyError extends SefazError {
    constructor() {
        super("Invalid access key");
    }
}
