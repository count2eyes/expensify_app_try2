import React from "react";
import { shallow } from "enzyme";
import Help from "../../components/HelpPage";

test("should render Help correctly", () => {
  const wrapper = shallow(<Help />);
  expect(wrapper).toMatchSnapshot();
});
