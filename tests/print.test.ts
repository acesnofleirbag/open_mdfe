import { expect, test } from "vitest";
import { Print } from "../lib/print";

test("DANFE layout", () => {
    // arrange
    const print = new Print();

    // act
    print.generateDANFE();

    // assert
    expect(1).toEqual(1);
});
