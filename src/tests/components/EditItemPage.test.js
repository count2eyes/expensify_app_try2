import React from "react";
import { shallow } from "enzyme";
import { EditItem } from "../../components/EditItemPage";
import expenses from "../fixtures/expenses";

let wrapper, startEditExpense, startRemoveExpense, history;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditItem
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});

test("should render editItem page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle AddExpenseForm", () => {
  wrapper.find("Connect(AddExpenseForm)").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[0].id,
    expenses[0]
  );
});

test("should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
});
