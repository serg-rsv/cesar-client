import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppView from 'layout/AppView';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { MessagesPage } from 'pages/MessagesPage';
import PrivateRoute from 'components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppView />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="messages"
          element={<PrivateRoute element={<MessagesPage />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
