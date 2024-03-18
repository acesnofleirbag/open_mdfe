import { UndefinedEnvironmentError } from "../errors/undefinedEnvironmentError";

export class Env {
    static readonly _envs: Record<any, any> = {
        ACCESS_KEY_LENGTH: 44,
    };

    static get(key: string) {
        const value = Env._envs[key];

        if (!value) {
            throw new UndefinedEnvironmentError(key);
        }

        return value;
    }
}
