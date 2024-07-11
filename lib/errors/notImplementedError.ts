import { SefazError } from "../core/error";

export class NotImplementedError extends SefazError {
    constructor() {
        super("Not implemented");
    }
}
