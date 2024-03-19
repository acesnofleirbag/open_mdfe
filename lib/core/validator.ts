import { ExpectedArrayError } from "../errors/expectedArrayError";
import { InvalidArrayLengthError } from "../errors/invalidArrayLengthError";
import { InvalidStringLengthError } from "../errors/invalidStringLengthError";
import { WrongPatternError } from "../errors/wrongPatternError";

export class Validator {
    static regex(key: string, value: string, pattern: RegExp): string {
        if (!pattern.test(value)) {
            throw new WrongPatternError(key);
        }

        return value;
    }

    static strlen(key: string, value: string, min: number, max: number): string {
        if (value.length < min || value.length > max) {
            throw new InvalidStringLengthError(key, min, max, value.length);
        }

        return value;
    }

    static arrlen(key: string, value: any[], min: number, max: number): any[] {
        if (!Array.isArray(value)) {
            throw new ExpectedArrayError();
        }

        if (value.length < min || value.length > max) {
            throw new InvalidArrayLengthError(key, min, max, value.length);
        }

        return value;
    }
}
