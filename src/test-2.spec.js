import { expect, describe, it } from "vitest";

describe("test-2", () => {
  it("passes", () => {
    // but deliberately fails, for good measure
    expect(false).toEqual(true);
  });
});
