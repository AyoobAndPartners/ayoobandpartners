import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useCollection } from '../hooks/useCollection';

export default function ProductSection() {
  const products = useCollection('products');

  return (
    <section id="products">
      <Typography variant="h4" gutterBottom>Our Products</Typography>
      <Grid container spacing={3}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card>
              <CardMedia image={p.imageURL} title={p.name} sx={{ height: 200 }} />
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2">{p.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}