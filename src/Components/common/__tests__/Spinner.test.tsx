import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Spinner from "../spinner";

configure({ adapter: new Adapter() });

describe("<Spinner />", () => {
  test("Spinner exists", () => {
    const spinnerWrapper = shallow(<Spinner />);

    const result = spinnerWrapper.find("span");
    expect(result).toHaveLength(1);
  });
});
