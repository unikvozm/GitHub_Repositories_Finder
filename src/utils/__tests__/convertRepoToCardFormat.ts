import { convertRepoToCardFormat } from "../convertRepoToCardFormat";
import { LicenseType } from "../../types/LicenseType";

test("convertRepoToCardFormat works", () => {
  const repos = [
    {
      id: 1,
      name: "test",
      full_name: "test",
      owner: {
        login: "test"
      },
      html_url: "https://github.com/test",
      description: "test",
      created_at: "2020-04-03T12:39:20Z",
      stargazers_count: 0,
      language: "JavaScript",
      license: {
        key: LicenseType["GNU Affero General Public License v3.0"],
        name: "GNU General Public License v3.0"
      }
    }
  ];

  const card = [
    {
      id: 1,
      name: "test",
      fullName: "test",
      authorLogin: "test",
      url: "https://github.com/test",
      license: "GNU General Public License v3.0",
      created_at: "4/3/2020",
      stars: 0,
      language: "JavaScript"
    }
  ];
  expect(convertRepoToCardFormat(repos)).toEqual(card);
});
