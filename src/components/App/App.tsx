import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Root from 'pages/Root';
import UsersPage from 'pages/UsersPage/UsersPage';
import UserProfilePage from 'pages/UserProfilePage';
import UsersSearchPage from 'pages/UsersSearchPage';
import { ROUTES } from 'config/routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root.mask} element={<Root />}>
          <Route index element={<Navigate to={ROUTES.users.mask} replace />} />
          <Route path={ROUTES.users.mask}>
            <Route index element={<UsersPage />} />
            <Route path={ROUTES.user.mask} element={<UserProfilePage />} />
          </Route>
          <Route path={ROUTES.search.mask} element={<UsersSearchPage />} />
          <Route path={ROUTES.other.mask} element={<Navigate to={ROUTES.root.mask} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(App);
