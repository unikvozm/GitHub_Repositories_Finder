import { LicenseType } from "./LicenseType";

export type ResponseType = {
  total_count: number;
  incomplete_results: boolean;
  items: Repo[];
};

export type Repo = {
  id: number;
  node_id?: string;
  name: string;
  full_name: string;
  private?: boolean;
  owner: Owner;
  html_url: string;
  description?: string;
  fork?: boolean;
  url?: string;
  created_at: string;
  updated_at?: string;
  pushed_at?: string;
  homepage?: string;
  size?: number;
  stargazers_count: number;
  watchers_count?: number;
  language: string;
  forks_count?: number;
  open_issues_count?: number;
  forks_url?: string;
  keys_url?: string;
  collaborators_url?: string;
  teams_url?: string;
  hooks_url?: string;
  issue_events_url?: string;
  events_url?: string;
  assignees_url?: string;
  branches_url?: string;
  tags_url?: string;
  blobs_url?: string;
  git_tags_url?: string;
  git_refs_url?: string;
  trees_url?: string;
  statuses_url?: string;
  languages_url?: string;
  stargazers_url?: string;
  contributors_url?: string;
  subscribers_url?: string;
  subscription_url?: string;
  commits_url?: string;
  git_commits_url?: string;
  comments_url?: string;
  issue_comment_url?: string;
  contents_url?: string;
  compare_url?: string;
  merges_url?: string;
  archive_url?: string;
  downloads_url?: string;
  issues_url?: string;
  pulls_url?: string;
  milestones_url?: string;
  notifications_url?: string;
  labels_url?: string;
  releases_url?: string;
  deployments_url?: string;
  git_url?: string;
  ssh_url?: string;
  clone_url?: string;
  svn_url?: string;
  has_issues?: boolean;
  has_projects?: boolean;
  has_downloads?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  mirror_url?: string;
  archived?: boolean;
  disabled?: boolean;
  license: License;
  forks?: number;
  open_issues?: number;
  watchers?: number;
  master_branch?: string;
  default_branch?: string;
  score?: number;
};

export type Owner = {
  login: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  received_events_url?: string;
  type?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  site_admin?: boolean;
};

export type License = {
  key: LicenseType;
  name: string;
  spdx_id?: string;
  url?: string;
  node_id?: string;
};

export type CardType = {
  id: number;
  name: string;
  fullName: string;
  authorLogin: string;
  url: string;
  license: string;
  created_at: string;
  stars: number;
  language: string;
};
