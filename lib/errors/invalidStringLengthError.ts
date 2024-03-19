import { SefazError } from "../core/error";

export class InvalidStringLengthError extends SefazError {
    constructor(key: string, min: number, max: number, size: number) {
        super(`Invalid string size for key '${key}'. Expected range: min ${min} and max ${max}. Given size: ${size}`);
    }
}
