import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Typography variant="body2" color="textSecondary" align="center">
          © 2023 Cesar developed by Serhii Rybak
          <IconButton
            aria-label="Linkedin"
            href="https://www.linkedin.com/in/serhii-rybak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
