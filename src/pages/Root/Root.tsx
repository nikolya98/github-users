import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import { Container } from 'components/Container';

const Root: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default React.memo(Root);
