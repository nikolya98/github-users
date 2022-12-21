export type UserApi = {
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

export type User = UserApi & {
  repos: RepoApi[];
};
