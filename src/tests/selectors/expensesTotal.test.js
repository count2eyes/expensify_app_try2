import React from "react";
import expensesTotal from "../../selectors/expensesTotal";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const total = expensesTotal([]);
  expect(total).toBe(0);
});

test("should return total amount of a single expense", () => {
  const total = expensesTotal([expenses[0]]);
  expect(total).toBe(2.75);
});

test("should return total amount of multiple expenses", () => {
  const total = expensesTotal(expenses);
  expect(total).toBe(39.1);
});
