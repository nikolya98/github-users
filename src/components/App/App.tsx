import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Root from 'pages/Root/Root';
import UsersPage from 'pages/UsersPage/UsersPage';
import UserProfilePage from 'pages/UserProfilePage/UserProfilePage';
import UsersSearchPage from 'pages/UsersSearchPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Navigate to="users" replace />} />
          <Route path="users" errorElement={<>adasd</>}>
            <Route index element={<UsersPage />} />
            <Route path=":id" element={<UserProfilePage />} />
          </Route>
          <Route path="search" element={<UsersSearchPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(App);
