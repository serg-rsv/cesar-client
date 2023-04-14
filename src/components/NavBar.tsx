import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/selectors';

interface NavItem {
  label: string;
  to: string;
  private: boolean;
}

const navItems: NavItem[] = [
  {
    label: 'home',
    to: '/',
    private: false,
  },
  {
    label: 'login',
    to: 'login',
    private: false,
  },
  {
    label: 'register',
    to: 'register',
    private: false,
  },
  {
    label: 'messages',
    to: 'messages',
    private: true,
  },
];

const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          Cesar
        </Typography>
        <List sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((navItem) => {
            if (!navItem.private || isLoggedIn) {
              return (
                <ListItem key={navItem.to}>
                  <NavLink to={navItem.to}>
                    <Typography color="inherit">{navItem.label}</Typography>
                  </NavLink>
                </ListItem>
              );
            }
            return null;
          })}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
