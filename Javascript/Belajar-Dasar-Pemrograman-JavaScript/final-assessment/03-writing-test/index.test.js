import { sum } from "./index.js";
import assert from "node:assert";
import test from "node:test";

test("sum of 1 and 2 should return 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

test("sum of -1 and -1 should return -2", () => {
  assert.strictEqual(sum(-1, -1), -2);
});

test("sum of 0 and 0 should return 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});
