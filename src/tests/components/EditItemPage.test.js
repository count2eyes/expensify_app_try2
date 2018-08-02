import React from "react";
import { shallow } from "enzyme";
import { EditItem } from "../../components/EditItemPage";
import expenses from "../fixtures/expenses";

let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditItem
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});

test("should render editItem page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should submit edited item correctly", () => {
  wrapper.find("Connect(AddExpenseForm)").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test("should remove item successfully", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
});
