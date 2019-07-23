import chai from "chai";
import { generateSessionToken } from "../utils";

const { assert } = chai;

function countOccurrences(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}

describe("Session Utilities", () => {
  describe("generateSessionToken", () => {
    it("should not generate the same token more than once", () => {
      const tokens = new Array(100).fill().map(generateSessionToken);
      const occurrences = tokens.map(token => countOccurrences(tokens, token));

      assert(occurrences.every(count => count === 1));
    });
  });
});
