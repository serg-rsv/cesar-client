import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useAppDispatch } from 'redux/store';
import { logOut } from 'redux/slices/userSlice';

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(logOut());
  };

  return (
    <IconButton onClick={handleLogout} sx={{ borderRadius: 2 }}>
      <ExitToAppIcon />
      Exit
    </IconButton>
  );
};

export default LogoutButton;
