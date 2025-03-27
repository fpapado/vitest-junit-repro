import { expect, describe, it } from "vitest";

describe("test-1", () => {
  it("passes", () => {
    console.warn("WARNING: Fake warning");
    expect(true).toEqual(true);
  });
});
