import { convertToDateString } from "../convertToDateString";

test("convertToDateString works", () => {
  expect(convertToDateString("2020-04-03T12:39:20Z")).toBe("4/3/2020");
});
