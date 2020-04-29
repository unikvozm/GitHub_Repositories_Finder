import React from "react";
import Paging from "../Paging";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Paging />", () => {
  test("should contain 7 buttons", () => {
    const pagingWrapper = shallow(
      <Paging selectedPage={0} numberOfPages={3} onPageChange={jest.fn()} />
    );

    const btn = pagingWrapper.find("button");
    expect(btn).toHaveLength(7);
  });
});
