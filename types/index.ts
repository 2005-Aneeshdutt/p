export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  stack: string[];
  metrics: Metric[];
  badge?: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
  fork: boolean;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}
