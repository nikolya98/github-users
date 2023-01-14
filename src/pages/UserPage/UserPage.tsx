import * as React from 'react';
import { useParams } from 'react-router-dom';

import { useUserData } from 'hooks/useUserData';
import { Container } from 'components/Container';
import { StatusWrapper } from 'components/StatusWrapper';

import Profile from './Profile';
import ReposList from './ReposList';

const UserPage: React.FC = () => {
  const { id } = useParams();
  const { user, meta } = useUserData(id || '');

  return (
    <StatusWrapper meta={meta}>
      {user && (
        <Container>
          <Profile user={user} />
          <ReposList user={user} />
        </Container>
      )}
    </StatusWrapper>
  );
};

export default React.memo(UserPage);
