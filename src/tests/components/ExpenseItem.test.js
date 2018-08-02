import React from "react";
import { shallow } from "enzyme";
import ExpenseItem from "../../components/ExpenseItem";
import expenses from "../fixtures/expenses";

test("should render ExpenseItem correctly", () => {
  const wrapper = shallow(<ExpenseItem expense={expenses[2]} />);
  expect(wrapper).toMatchSnapshot();
});
