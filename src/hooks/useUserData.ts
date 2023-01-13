import * as React from 'react';

import { Meta } from 'types/meta';
import { fetchData } from 'utils/fetchData';
import { ENDPOINTS_MAP } from 'config/endpoints';
import { RepoApi, User, BaseUserApi } from 'types/user';
import { normalizeUserApi } from 'utils/normalize';

export const useUserData = (id: string) => {
  const [meta, setMeta] = React.useState<Meta>(Meta.initial);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    (async () => {
      setMeta(Meta.loading);

      const { data: baseUserData, isError } = await fetchData<BaseUserApi>({
        endpoint: ENDPOINTS_MAP.user(id),
      });

      if (isError) {
        setMeta(Meta.error);
        return;
      }

      const { data: repos } = await fetchData<RepoApi[]>({
        endpoint: ENDPOINTS_MAP.repos(id),
        query: { per_page: 6 },
      });

      setMeta(Meta.success);
      setUser(
        normalizeUserApi({
          ...baseUserData,
          repos: repos || [],
        })
      );
    })();
  }, [id]);

  return { meta, user };
};
