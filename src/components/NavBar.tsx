import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, List } from '@mui/material';

import { selectEmail, selectIsLoggedIn } from 'redux/selectors';
import NavItem from 'components/NavItem';
import LogoutButton from 'components/LogoutButton';

export interface INavItem {
  label: string;
  to: string;
  private?: boolean;
  restricted?: boolean;
}

const navItems: INavItem[] = [
  {
    label: 'home',
    to: '/',
  },
  {
    label: 'login',
    to: 'login',
    restricted: true,
  },
  {
    label: 'register',
    to: 'register',
    restricted: true,
  },
  {
    label: 'messages',
    to: 'messages',
    private: true,
  },
];

const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectEmail);

  return (
    <AppBar>
      <Toolbar
        sx={{
          maxWidth: 'md',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Typography variant="h6">Cesar</Typography>
        <List
          sx={{
            display: 'flex',
            gap: 2,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {isLoggedIn
            ? navItems.map((navItem) => {
                if (navItem.restricted) {
                  return null;
                }
                return (
                  <NavItem
                    key={navItem.label}
                    to={navItem.to}
                    label={navItem.label}
                  />
                );
              })
            : navItems.map((navItem) => {
                if (navItem.private) {
                  return null;
                }
                return (
                  <NavItem
                    key={navItem.label}
                    to={navItem.to}
                    label={navItem.label}
                  />
                );
              })}
        </List>
        {isLoggedIn && (
          <>
            <Typography>{email}</Typography>
            <LogoutButton />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
