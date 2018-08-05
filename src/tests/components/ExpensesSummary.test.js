import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render correctly without no expense", () => {
  const wrapper = shallow(<ExpensesSummary total={0} count={0} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render correctly with expense data", () => {
  const wrapper = shallow(<ExpensesSummary count={7} total={200} />);
  expect(wrapper).toMatchSnapshot();
});
