import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import { api } from 'api';
import AuthForm from 'components/AuthForm ';
import { useAppDispatch } from 'redux/store';
import { logIn } from 'redux/slices/userSlice';

export const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleOnSubmit = async (email: string, password: string) => {
    setIsLoading(true);
    const token = await api.user.register({ email, password });
    setIsLoading(false);
    if (token) {
      dispatch(logIn(token));
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" align="center" mb={2}>
        Register form
      </Typography>
      <AuthForm
        type="register"
        isLoading={isLoading}
        onSubmit={handleOnSubmit}
      />
    </Box>
  );
};
