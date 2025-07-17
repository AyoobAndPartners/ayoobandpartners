import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useCollection } from '../hooks/useCollection';

export default function Products() {
  const products = useCollection('products');

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Our Products</Typography>
      <Grid container spacing={3}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
              <CardMedia image={p.imageURL} title={p.name} sx={{ height: 200 }} />
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2">{p.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
