import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import { api } from 'api';
import AuthForm from 'components/AuthForm ';
import { useAppDispatch } from 'redux/store';
import { logIn } from 'redux/slices/userSlice';

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleOnSubmit = async (email: string, password: string) => {
    setIsLoading(true);
    const token = await api.user.login({ email, password });
    setIsLoading(false);
    if (token) {
      dispatch(logIn(token));
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" align="center" mb={2}>
        Login form
      </Typography>
      <AuthForm type="login" isLoading={isLoading} onSubmit={handleOnSubmit} />
    </Box>
  );
};
