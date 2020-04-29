import { CardType } from "./RepoTypes";
import { LicenseType } from "./LicenseType";

export type ReposState = {
  repos: CardType[];
};

export type FormState = {
  search: string;
  license?: LicenseType | undefined;
  page: number;
  per_page: number;
  items_count: number;
};

export interface ReduxState {
  repos: ReposState;
  form: FormState;
  app: AppState;
}

export type AppState = {
  loading: boolean;
  alert?: string;
};
