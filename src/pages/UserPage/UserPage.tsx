import * as React from 'react';
import { useParams } from 'react-router-dom';

import { useUserData } from 'hooks/useUserData';
import { Container } from 'components/Container';

import Profile from './Profile';
import ReposList from './ReposList';

const UserPage: React.FC = () => {
  const { id } = useParams();
  const { user } = useUserData(id || '');

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Profile user={user} />
      <ReposList user={user} />
    </Container>
  );
};

export default React.memo(UserPage);
