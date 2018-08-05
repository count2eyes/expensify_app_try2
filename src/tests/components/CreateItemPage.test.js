import React from "react";
import { shallow } from "enzyme";
import { CreateItem } from "../../components/CreateItemPage";
import expenses from "../fixtures/expenses";

let wrapper, startAddExpense, history;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <CreateItem startAddExpense={startAddExpense} history={history} />
  );
});

test("should createItem", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should createItem", () => {
  wrapper.find("Connect(AddExpenseForm)").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
