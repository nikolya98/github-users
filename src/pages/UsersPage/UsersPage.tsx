import * as React from 'react';

import { UsersList } from 'components/UsersList';
import { useUsersData } from 'hooks/useUsersData';
import { StatusWrapper } from 'components/StatusWrapper';

const UsersPage: React.FC = () => {
  const { users, meta } = useUsersData();

  return (
    <StatusWrapper meta={meta}>
      <UsersList users={users} />
    </StatusWrapper>
  );
};

export default React.memo(UsersPage);
