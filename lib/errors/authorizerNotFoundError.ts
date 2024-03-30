import { SefazError } from "../core/error";

export class AuthorizerNotFoundError extends SefazError {
    constructor() {
        super("Authorizer not found");
    }
}
