import { expect, test } from "vitest";
import { AccessKeyVersion } from "../lib/@types/accessKey";
import { AccessKey } from "../lib/accessKey";
import { CSRT } from "../lib/csrt";

test("generate CSRT hash", () => {
    // arrange
    const accessKey = new AccessKey(AccessKeyVersion.V400, "41180678393592000146558900000006041028190697");
    const code = new CSRT(accessKey, "G8063VRTNDMO886SFNK5LDUDEI24XJ22YIPO");

    // act
    const hash = code.genHash();

    // assert
    expect(hash).toEqual("aWv6LeEM4X6u4+qBI2OYZ8grigw=");
});
