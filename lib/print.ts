import { readFileSync, writeFileSync } from "node:fs";
import * as Handlebars from "handlebars";

export class Print {
    generateDANFE() {
        const layout = readFileSync(__dirname + "/core/static/danfe.hbs");
        const template = Handlebars.compile(layout.toString());
        writeFileSync("/tmp/DANFE.html", template({}));
    }
}
