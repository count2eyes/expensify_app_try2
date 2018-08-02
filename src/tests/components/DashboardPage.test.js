import React from "react";
import { shallow } from "enzyme";
import { DateRangePicker } from "react-dates";
import Dashboard from "../../components/DashboardPage";

test("should render Dashboard page correctly", () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});
