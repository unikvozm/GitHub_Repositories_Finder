import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Alert } from "../Alert";

configure({ adapter: new Adapter() });

describe("<Alert />", () => {
  test("should render text", () => {
    const text = "hello world";
    const alertWrapper = shallow(<Alert text={text} />);

    const result = alertWrapper.find("div");
    expect(result).toHaveLength(1);
    expect(result.text()).toBe(text);
  });
});
