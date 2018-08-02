import moment from "moment";
import expenses from "../fixtures/expenses";
import { state, altState } from "../fixtures/filters";

import selector from "../../selectors/expenses";

test("should select expenses correctly when sortBy/default is 'date'", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const selectedExpenses = selector(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test("should select expenses correctly sortBy filter is 'amount'", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const selectedExpenses = selector(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test("should select expenses setText filter correctly", () => {
  const filters = {
    text: "nner",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const selectedExpenses = selector(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[2]]);
});

test("should select expenses startDate filter correctly", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const selectedExpenses = selector(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[1], expenses[0]]);
});

test("should select expenses endDate filter correctly", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(1, "days")
  };
  const selectedExpenses = selector(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[0], expenses[2]]);
});
