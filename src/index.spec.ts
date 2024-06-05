import { assert } from "console";
import { add } from "./index";

describe("When calling the tests", () => {
  it("the tests works", () => {
    const result = "";
    expect(result).toBe("");
  });
  it("ts is configured", () => {
    expect(add(2, 2)).toBe(4);
  });
});
