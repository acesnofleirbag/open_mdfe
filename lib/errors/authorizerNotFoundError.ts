import { SefazError } from "../core/error";

export class AuthorizerNotFoundError extends SefazError {
    constructor() {
        super("ERROR(Open MDF-e): Authorizer not found");
    }
}
