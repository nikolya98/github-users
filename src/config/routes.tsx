import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

import Root from 'pages/Root';
import UsersPage from 'pages/UsersPage';
import UserProfilePage from 'pages/UserProfilePage';
import UsersSearchPage from 'pages/UsersSearchPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route element={<UsersPage />} index />
      <Route path="users" element={<UsersPage />} index={true} />
      <Route path="users/:id" element={<UserProfilePage />} />
      <Route path="search" element={<UsersSearchPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);
