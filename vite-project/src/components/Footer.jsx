// Footer.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '10px 24px', 
        backgroundColor: '#1976d2', 
        color: 'white',
        width: '100%',
        boxSizing: 'border-box', 
      }}
    >
      <Typography variant="body1" component="div">
        © 2024 My Website
      </Typography>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Link component={RouterLink} to="/" color="inherit">
          Home
        </Link>
        <Link component={RouterLink} to="/projects" color="inherit">
          Projects
        </Link>
        <Link component={RouterLink} to="/contact" color="inherit">
          Contact
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
