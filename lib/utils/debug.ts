import { writeFileSync } from "fs";

// Utility class to expose schemas for debug purposes
export class DebugUtility {
    static write(path: string, payload: any) {
        writeFileSync(path, payload);
    }
}
