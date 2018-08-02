import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import {
  setText,
  sortBy,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("should return setText action object correctly", () => {
  const text = "hello";
  const action = setText(text);
  expect(action).toEqual({
    type: "SET_TEXT",
    text
  });
});

test("should return sortBy amount action object correctly", () => {
  const dateOrAmount = "amount";
  const action = sortBy(dateOrAmount);
  expect(action).toEqual({ type: "SORT_BY", dateOrAmount });
});

test("should return sortBy date action object correctly", () => {
  const dateOrAmount = "date";
  const action = sortBy(dateOrAmount);
  expect(action).toEqual({ type: "SORT_BY", dateOrAmount });
});

test("should return set startDate action object correctly", () => {
  const date = moment(0);
  const action = setStartDate(date);
  expect(action).toEqual({ type: "SET_START_DATE", startDate: date });
});

test("should return set endDate action object correctly", () => {
  const date = moment(0).add(4, "days");
  const action = setEndDate(date);
  expect(action).toEqual({ type: "SET_END_DATE", endDate: date });
});
