import { SefazError } from "../core/error";

export class ExpectedArrayError extends SefazError {
    constructor() {
        super("Invalid input expected array received other type");
    }
}
