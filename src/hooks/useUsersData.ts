import * as React from 'react';

import { Meta } from 'types/meta';
import { BaseUsersItemApi, UsersItem, UsersItemApi } from 'types/users';
import { fetchData } from 'utils/fetchData';
import { ENDPOINTS_MAP } from 'config/endpoints';
import { normalizeUsersItemApi } from 'utils/normalize';

export const useUsersData = (query?: string) => {
  const [meta, setMeta] = React.useState<Meta>(Meta.initial);
  const [users, setUsers] = React.useState<UsersItem[]>([]);

  React.useEffect(() => {
    (async () => {
      setMeta(Meta.loading);

      const { data, isError } = await fetchData<BaseUsersItemApi[] | { items: BaseUsersItemApi[] }>({
        endpoint: query ? ENDPOINTS_MAP.search : ENDPOINTS_MAP.users,
        query: { per_page: 9, ...(query ? { q: query } : {}) },
      });

      if (isError) {
        setMeta(Meta.error);
        return;
      }

      const baseUsers = Array.isArray(data) ? data : data.items;

      const response = await Promise.all(
        baseUsers.map(({ login }) => fetchData<UsersItemApi>({ endpoint: ENDPOINTS_MAP.user(login) }))
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
      setUsers(users.map(normalizeUsersItemApi));
    })();
  }, [query]);

  return { meta, users };
};
