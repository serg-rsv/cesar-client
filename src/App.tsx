import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppView from 'layout/AppView';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { MessagesPage } from 'pages/MessagesPage';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { checkToken } from 'api/user/checkToken';

function App() {
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AppView />}>
        <Route index element={<PublicRoute element={<HomePage />} />} />
        <Route
          path="login"
          element={<PublicRoute element={<LoginPage />} restricted />}
        />
        <Route
          path="register"
          element={<PublicRoute element={<RegisterPage />} restricted />}
        />
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
