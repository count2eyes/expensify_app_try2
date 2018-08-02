import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";
import { altState } from "../fixtures/filters";

test("should render ExpenseList correctly with expenses", () => {
  const wrapper = shallow(
    <ExpenseList expenses={expenses} filters={altState} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList correctly without expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} filters={altState} />);
  expect(wrapper).toMatchSnapshot();
});
