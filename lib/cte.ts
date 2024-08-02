import { SefazCTE } from "./@types/layouts/cte/cte";
import { CTeValidator } from "./core/validator/cte";
import { Document } from "./document";

export class CTe extends Document<SefazCTE> {
    constructor(payload: SefazCTE) {
        super(payload, CTeValidator);
    }
}
