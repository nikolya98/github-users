import React, { FC } from 'react';

import { UsersList } from 'components/UsersList';

const UsersPage: FC = () => {
  return <UsersList />;
};

export default React.memo(UsersPage);
