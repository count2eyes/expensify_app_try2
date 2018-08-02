import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { AddExpenseForm } from "../../components/AddExpenseForm";
import expenses from "../fixtures/expenses";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AddExpenseForm />);
});

test("should submit form successfully", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should submit form successfully with data", () => {
  const wrapper = shallow(<AddExpenseForm expense={expenses[2]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should submit form w/ error", () => {
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should submit form w/o error", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <AddExpenseForm expense={expenses[2]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state().error).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[2].description,
    amount: expenses[2].amount,
    note: expenses[2].note,
    createdAt: expenses[2].createdAt
  });
});

test("should update state.description successfully", () => {
  const value = "New description";
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("description")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should update valid state.amount successfully", () => {
  const value = "12.79";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should not update invalid state.amount", () => {
  const value = "12.579";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe("");
  expect(wrapper).toMatchSnapshot();
});

test("should update state.note successfully", () => {
  const value = "New note";
  wrapper.find("textarea").simulate("change", {
    target: { value }
  });
  expect(wrapper.state("note")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should update state.createdAt successfully", () => {
  const date = moment();
  wrapper.find(SingleDatePicker).prop("onDateChange")(date);
  expect(wrapper.state("createdAt")).toEqual(date);
});

test("should update state.focused successfully", () => {
  const focusValue = true;
  wrapper.find(SingleDatePicker).prop("onFocusChange")({ focused: focusValue });
  expect(wrapper.state("focused")).toBe(focusValue);
});
