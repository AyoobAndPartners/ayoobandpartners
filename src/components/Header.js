import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700, color: '#006064' }}>
          Aqua Shield Oman
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/products" color="inherit">Products</Button>
          <Button component={Link} to="/testimonials" color="inherit">Testimonials</Button>
          <Button component={Link} to="/contact" color="primary" variant="contained">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
