import React from 'react';

import { Meta } from 'types/meta';
import { fetchData } from 'utils/fetchData';
import { ENDPOINT_MAP } from 'config/endpoints';
import { RepoApi, User, UserApi } from 'types/user';

export const useUserData = (id: string) => {
  const [meta, setMeta] = React.useState<Meta>(Meta.initial);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    (async () => {
      setMeta(Meta.loading);

      const { data: user, isError } = await fetchData<UserApi>({
        endpoint: ENDPOINT_MAP.user(id),
      });

      if (isError) {
        setMeta(Meta.error);
        return;
      }

      const { data: repos } = await fetchData<RepoApi[]>({
        endpoint: ENDPOINT_MAP.repos(id),
        query: { per_page: 6 },
      });

      setMeta(Meta.success);
      setUser({
        ...user,
        repos: repos || [],
      });
    })();
  }, [id]);

  return { meta, user };
};
