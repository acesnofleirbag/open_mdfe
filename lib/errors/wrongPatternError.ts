import { SefazError } from "../core/error";

export class WrongPatternError extends SefazError {
    constructor(key: string) {
        super(`Expected pattern for key '${key}', mismatched`);
    }
}
