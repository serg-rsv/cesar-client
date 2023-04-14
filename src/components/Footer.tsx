import { IconButton, Typography } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer
      style={{
        width: '100vw',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} Serhii Rybak
        <IconButton
          aria-label="Linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
      </Typography>
    </footer>
  );
};

export default Footer;
