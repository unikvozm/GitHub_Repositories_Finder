import { Repo } from "../types/RepoTypes";
import { convertToDateString } from "./convertToDateString";

export const convertRepoToCardFormat = (repos: Repo[]) => {
  return repos.map((repo: Repo) => {
    return {
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      authorLogin: repo.owner.login,
      url: repo.html_url,
      license: repo.license ? repo.license.name : "unknown",
      created_at: convertToDateString(repo.created_at),
      stars: repo.stargazers_count,
      language: repo.language
    };
  });
};
