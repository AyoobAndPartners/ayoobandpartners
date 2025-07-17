import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Enrich20</Typography>
        <Button href="#products">Products</Button>
        <Button href="#testimonials">Testimonials</Button>
        <Button href="mailto:support@enrich20.com" color="primary">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}