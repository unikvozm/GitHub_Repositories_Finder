import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "../button";

configure({ adapter: new Adapter() });

describe("<Button />", () => {
  test("should render text", () => {
    const text = "hello world";
    const buttonWrapper = shallow(<Button type="button">{text}</Button>);

    const result = buttonWrapper.find("button");
    expect(result).toHaveLength(1);
  });
});
