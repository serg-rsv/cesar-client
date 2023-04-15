import { Link, ListItem, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { INavItem } from 'components/NavBar';

const NavItem = ({ to, label }: INavItem) => {
  return (
    <ListItem key={to}>
      <Link
        component={NavLink}
        to={to}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&.active': {
            color: 'ActiveCaption',
          },
          ':hover': { color: 'ThreeDFace' },
        }}
      >
        <Typography sx={{ textTransform: 'uppercase' }}>{label}</Typography>
      </Link>
    </ListItem>
  );
};

export default NavItem;
