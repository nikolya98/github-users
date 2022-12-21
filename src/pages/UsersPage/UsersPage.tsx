import React, { FC } from 'react';

import { UsersList } from 'components/UsersList';
import { useUsersData } from 'hooks/useUsersData';

const UsersPage: FC = () => {
  const { users } = useUsersData();

  return <UsersList users={users} />;
};

export default React.memo(UsersPage);
