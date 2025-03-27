import { expect, describe, it } from "vitest";
import { styleText } from "node:util";

describe("test-1", () => {
  it("passes", () => {
    console.warn(styleText("yellow", "WARNING: fake warning"));
    expect(true).toEqual(true);
  });
});
