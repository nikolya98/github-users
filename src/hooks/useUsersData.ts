import React from 'react';

import { Meta } from 'types/meta';
import { BaseUsersItemApi, UsersItemApi } from 'types/users';
import { fetchData } from 'utils/fetchData';
import { ENDPOINT_MAP } from 'config/endpoints';

export const useUsersData = (query?: string) => {
  const [meta, setMeta] = React.useState<Meta>(Meta.initial);
  const [users, setUsers] = React.useState<UsersItemApi[]>([]);

  React.useEffect(() => {
    (async () => {
      setMeta(Meta.loading);

      const { data, isError } = await fetchData<BaseUsersItemApi[] | { items: BaseUsersItemApi[] }>({
        endpoint: query ? ENDPOINT_MAP.search : ENDPOINT_MAP.users,
        query: { per_page: 9, ...(query ? { q: query } : {}) },
      });

      if (isError) {
        setMeta(Meta.error);
        return;
      }

      const baseUsers = Array.isArray(data) ? data : data.items;

      const response = await Promise.all(
        baseUsers.map(({ login }) => fetchData<UsersItemApi>({ endpoint: ENDPOINT_MAP.user(login) }))
      );

      const users: UsersItemApi[] = [];

      for (const { data: user, isError } of response) {
        if (isError) {
          setMeta(Meta.error);
          return;
        }

        users.push(user);
      }

      setMeta(Meta.success);
      setUsers(users);
    })();
  }, [query]);

  return { meta, users };
};
