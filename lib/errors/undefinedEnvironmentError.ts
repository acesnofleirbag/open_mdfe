import { SefazError } from "../core/error";

export class UndefinedEnvironmentError extends SefazError {
    constructor(key: string) {
        super(`Undefined variable: '${key}'`);
    }
}
