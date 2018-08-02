import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { state, altState } from "../fixtures/filters";

let wrapper, setStartDate, setEndDate, setText, sortBy;

beforeEach(() => {
  setText = jest.fn();
  sortBy = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={state}
      setText={setText}
      sortBy={sortBy}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render expenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render expenseListFilters w/ alt data correctly", () => {
  wrapper.setProps({ filters: altState });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "vac";
  wrapper.find("input").simulate("change", {
    target: {
      value
    }
  });
  expect(setText).toHaveBeenLastCalledWith(value);
});

test("should sortBy amount", () => {
  const selectedOption = "amount";
  wrapper.find("select").simulate("change", {
    target: {
      value: selectedOption
    }
  });
  expect(sortBy).toHaveBeenLastCalledWith(selectedOption);
});

test("should sortBy date", () => {
  wrapper.setProps({ filters: altState });
  const selectedOption = "date";
  wrapper.find("select").simulate("change", {
    target: {
      value: selectedOption
    }
  });
  expect(sortBy).toHaveBeenLastCalledWith(selectedOption);
});

test("should handle date changes", () => {
  const startDate = moment(0).subtract(4, "months");
  const endDate = moment(0).add(4, "months");
  wrapper.find(DateRangePicker).prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle dateFocusChanges", () => {
  const calendarFocused = "endDate";
  wrapper.find(DateRangePicker).prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("focusedInput")).toBe(calendarFocused);
});
