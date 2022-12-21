export type BaseUsersItemApi = {
  id: string;
  login: string;
};

export type UsersItemApi = BaseUsersItemApi & {
  avatar_url: string;
  company: string;
  public_repos: number;
};
