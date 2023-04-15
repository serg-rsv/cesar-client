import { useState } from 'react';
import { TextField, Button, IconButton, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface IAuthFormProps {
  type: 'login' | 'register';
  isLoading: boolean;
  onSubmit: (email: string, password: string) => void;
}

const AuthForm = ({ type, isLoading, onSubmit }: IAuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <TextField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        required
      />
      <TextField
        id="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        required
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleToggleShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        sx={{ width: 'fit-content', alignSelf: 'center' }}
      >
        {type === 'login' ? 'Log in' : 'Register'}
      </Button>
    </Box>
  );
};

export default AuthForm;
