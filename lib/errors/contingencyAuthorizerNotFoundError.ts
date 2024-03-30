import { SefazError } from "../core/error";

export class ContingencyAuthorizerNotFoundError extends SefazError {
    constructor() {
        super("Contingency authorizer not found");
    }
}
