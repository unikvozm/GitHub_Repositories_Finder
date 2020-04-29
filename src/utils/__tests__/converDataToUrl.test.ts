import { convertDataToUrl } from "../convertDataToUrl";

test("convertDataToUrl works", () => {
  const queries = {
    search: "test",
    page: 0,
    license: "test",
    per_page: 20
  };

  expect(convertDataToUrl(queries)).toEqual(
    expect.stringContaining(
      "https://api.github.com/search/repositories?q=test+language:javascript+license:test"
    )
  );
  expect(convertDataToUrl(queries)).toEqual(
    expect.stringContaining("&sort=stars&order=desc&page=0&per_page=20")
  );
});
