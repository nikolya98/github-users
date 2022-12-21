import React from 'react';

import { UsersList } from 'components/UsersList';
import { useUsersData } from 'hooks/useUsersData';
import { useSearchParams } from 'react-router-dom';

const UsersSearchPage: React.FC = () => {
  const [search] = useSearchParams();
  const query = search.get('query') || '';
  const { users } = useUsersData(query);

  return (
    <>
      <h1 className="title">Пользователи по запросу: {query}</h1>
      <UsersList users={users} />
    </>
  );
};

export default UsersSearchPage;
