import { NormalizeApi } from './common';

export type BaseUserApi = {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  blog: string;
};

export type RepoApi = {
  id: number;
  name: string;
  description: string;
};

export type UserApi = BaseUserApi & {
  repos: RepoApi[];
};

export type User = NormalizeApi<UserApi>;
