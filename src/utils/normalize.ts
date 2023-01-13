import { User, UserApi } from 'types/user';
import { UsersItem, UsersItemApi } from 'types/users';

export const normalizeUserApi = (data: UserApi): User => ({
  id: data.id,
  name: data.name,
  login: data.login,
  avatarUrl: data.avatar_url,
  followers: data.followers,
  following: data.following,
  blog: data.blog,
  repos: data.repos,
});

export const normalizeUsersItemApi = (data: UsersItemApi): UsersItem => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
  company: data.company,
  publicRepos: data.public_repos,
});
