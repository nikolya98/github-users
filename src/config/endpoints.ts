export const BASE_URL = 'https://api.github.com';

export const ENDPOINT_MAP = {
  users: '/users',
  user: (id: string) => `/users/${id}`,
  search: '/search/users',
  repos: (id: string) => `/users/${id}/repos`,
};
