import sum from "./index.js";
import assert from "node:assert";
import test from "node:test";

// Test: Both arguments are numbers and positive
test("sum of 2 and 3 should return 5", () => {
  assert.strictEqual(sum(2, 3), 5);
});

// Test: One argument is not a number
test('sum of "2" and 3 should return 0', () => {
  assert.strictEqual(sum("2", 3), 0);
});

// Test: One argument is negative
test("sum of -2 and 3 should return 0", () => {
  assert.strictEqual(sum(-2, 3), 0);
});

// Test: Both arguments are negative
test("sum of -2 and -3 should return 0", () => {
  assert.strictEqual(sum(-2, -3), 0);
});

// Test: One argument is a number, the other is undefined
test("sum of 2 and undefined should return 0", () => {
  assert.strictEqual(sum(2, undefined), 0);
});

// Test: Both arguments are zero
test("sum of 0 and 0 should return 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});
