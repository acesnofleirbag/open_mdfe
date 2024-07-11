export class SefazError extends Error {
    constructor(message: string) {
        super("ERROR(Open MDF-e): " + message);
    }
}
