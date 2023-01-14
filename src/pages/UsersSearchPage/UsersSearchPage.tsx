import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

import { UsersList } from 'components/UsersList';
import { useUsersData } from 'hooks/useUsersData';
import { StatusWrapper } from 'components/StatusWrapper';

const UsersSearchPage: React.FC = () => {
  const [search] = useSearchParams();

  const query = search.get('query') || '';
  const { users, meta } = useUsersData(query);

  return (
    <StatusWrapper meta={meta}>
      <h1 className="title">Пользователи по запросу: {query}</h1>
      <UsersList users={users} />
    </StatusWrapper>
  );
};

export default React.memo(UsersSearchPage);
