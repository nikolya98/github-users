export const BASE_URL = 'https://api.github.com';

// Эндопоинты апишки todo: type it
export const ENDPOINTS_MAP = {
  users: '/users',
  user: (id: string) => `/users/${id}`,
  search: '/search/users',
  repos: (id: string) => `/users/${id}/repos`,
};
