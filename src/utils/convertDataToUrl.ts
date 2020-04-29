import { UrlQueries } from "../types/urlQueriesType";

const today = new Date();
const prvDateMonth = new Date(
  today.getFullYear(),
  today.getMonth() - 1,
  today.getDate()
);
const year = prvDateMonth.getFullYear();
let month: number | string = prvDateMonth.getMonth() + 1;
month = month > 9 ? month : `0${month}`;
let date: number | string = prvDateMonth.getDate();
date = date > 9 ? date : `0${date}`;

export const convertDataToUrl = (queries: UrlQueries): string => {
  const { search, license, page, per_page } = queries;
  return `https://api.github.com/search/repositories?q=${search}+language:javascript${
    license ? "+license:" + license : ""
  }+created:%3E=${year}-${month}-${date}&sort=stars&order=desc&page=${page}&per_page=${per_page}`;
};
