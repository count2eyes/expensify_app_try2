import moment from "moment";
import { state, altState } from "../fixtures/filters";
import filtersReducer from "../../reducers/filtersReducer";

test("should set up default filter value", () => {
  const filtersReducerResult = filtersReducer(undefined, { type: "@@INIT" });
  expect(filtersReducerResult).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should SET_TEXT to filters correctly", () => {
  const text = "fee";
  const action = { type: "SET_TEXT", text };
  const filtersReducerResult = filtersReducer(state, action);
  expect(filtersReducerResult.text).toBe(text);
});

test("should SORT_BY filters to amount correctly", () => {
  const dateOrAmount = "amount";
  const action = { type: "SORT_BY", dateOrAmount };
  const filtersReducerResult = filtersReducer(state, action);
  expect(filtersReducerResult.sortBy).toBe(dateOrAmount);
});

test("should SORT_BY filters to date correctly", () => {
  const dateOrAmount = "date";
  const action = { type: "SORT_BY", dateOrAmount };
  const filtersReducerResult = filtersReducer(altState, action);
  expect(filtersReducerResult.sortBy).toBe(dateOrAmount);
});

test("should SET_START_DATE filters to date correctly", () => {
  const startDate = moment(0);
  const action = { type: "SET_START_DATE", startDate };
  const filtersReducerResult = filtersReducer(state, action);
  expect(filtersReducerResult).toEqual({
    ...state,
    startDate: startDate
  });
});

test("should SET_END_DATE filters to date correctly", () => {
  const endDate = moment(0).add(9, "months");
  const action = { type: "SET_END_DATE", endDate };
  const filtersReducerResult = filtersReducer(state, action);
  expect(filtersReducerResult).toEqual({
    ...state,
    endDate: endDate
  });
});
