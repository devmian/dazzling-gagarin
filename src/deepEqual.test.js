const { expect } = require("chai");
const deepEqual = require("./deepEqual");

describe("deepEqual", () => {
  it("should return true given undefined, undefined", () => {
    expect(deepEqual(undefined, undefined)).to.equal(true);
  });

  it("should return true given two value equal objects", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob" })).to.equal(true);
  });

  it("should return false given undefined, null", () => {
    expect(deepEqual(undefined, null)).to.equal(false);
  });

  it("should return false given object, null", () => {
    expect(deepEqual({}, null)).to.equal(false);
  });

  it("should return false given object, undefined", () => {
    expect(deepEqual({}, undefined)).to.equal(false);
  });

  it("should return true given two value equal objects with undefined", () => {
    expect(
      deepEqual({ name: "Bob", email: undefined }, { name: "Bob" })
    ).to.equal(true);
  });

  it("should return false given two value equal objects with null", () => {
    expect(deepEqual({ name: "Bob", email: null }, { name: "Bob" })).to.equal(
      false
    );
  });

  it("should return false given two value different objects", () => {
    expect(
      deepEqual({ name: "Bob", email: "dev@gmail.com" }, { name: "Bob" })
    ).to.equal(false);
  });

  it("should return false given two value object, nul", () => {
    expect(deepEqual({ name: "Bob", email: "dev@gmail.com" }, null)).to.equal(
      false
    );
  });

  it("should return true given two value object", () => {
    expect(
      deepEqual(
        { name: "Bob", canEdit: false, id: 222 },
        { name: "Bob", canEdit: false, id: 222 }
      )
    ).to.equal(true);
  });

  it("should return false given two value different objects with undefined", () => {
    expect(
      deepEqual(
        { name: "Bob", email: undefined },
        { name: "Bob", email: "dev@gmail.com" }
      )
    ).to.equal(false);
  });

  it("should return true given two value equal objects with null", () => {
    expect(
      deepEqual({ name: "Bob", email: null }, { name: "Bob", email: null })
    ).to.equal(true);
  });

  it("should return true given two value different objects with null and undefined", () => {
    expect(
      deepEqual({ name: "Bob", email: null }, { name: "Bob", email: undefined })
    ).to.equal(false);
  });
});
