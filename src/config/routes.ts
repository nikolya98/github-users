// Пути страниц приложения todo: type it
export const ROUTES = {
  root: {
    mask: '/',
    getPath: () => '/',
  },
  users: {
    mask: '/users',
    getPath: () => '/users',
  },
  user: {
    mask: '/users/:id',
    getPath: (id: string) => `/users/${id}`,
  },
  search: {
    mask: '/search',
    getPath: () => '/search',
  },
  other: {
    mask: '*',
  },
};
