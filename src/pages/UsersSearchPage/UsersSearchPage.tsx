import React from 'react';

import { UsersList } from 'components/UsersList';

const UsersSearchPage: React.FC = () => {
  return (
    <>
      <h1 className="title">Пользователи по запросу defunkt</h1>
      <UsersList />
    </>
  );
};

export default UsersSearchPage;
