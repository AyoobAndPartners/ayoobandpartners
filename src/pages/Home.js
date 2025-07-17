import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container sx={{ textAlign: 'center', py: 10 }}>
      <Typography variant="h3" fontWeight={600} color="primary.dark">Welcome to Aqua Shield Oman</Typography>
      <Typography variant="h6" sx={{ mt: 2, color: 'text.secondary' }}>
        Purity meets innovation. Explore our premium water purification solutions.
      </Typography>
      <Button component={Link} to="/products" variant="contained" sx={{ mt: 4 }}>Explore Products</Button>
    </Container>
  );
}
