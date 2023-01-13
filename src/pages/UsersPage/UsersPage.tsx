import * as React from 'react';

import { UsersList } from 'components/UsersList';
import { useUsersData } from 'hooks/useUsersData';

const UsersPage: React.FC = () => {
  const { users } = useUsersData();

  return <UsersList users={users} />;
};

export default React.memo(UsersPage);
