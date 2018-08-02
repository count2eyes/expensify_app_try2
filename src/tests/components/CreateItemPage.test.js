import React from "react";
import { shallow } from "enzyme";
import { CreateItem } from "../../components/CreateItemPage";
import expenses from "../fixtures/expenses";

let wrapper, addExpense, history;

beforeEach(() => {
  addExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(<CreateItem addExpense={addExpense} history={history} />);
});

test("should createItem", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should createItem", () => {
  console.log();
  wrapper.find("Connect(AddExpenseForm)").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
