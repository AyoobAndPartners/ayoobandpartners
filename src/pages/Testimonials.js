import React from 'react';
import { Avatar, Card, Grid, Typography, Container, Box } from '@mui/material';
import { useCollection } from '../hooks/useCollection';

export default function Testimonials() {
  const testimonials = useCollection('testimonials');

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>What People Say</Typography>
      <Grid container spacing={3}>
        {testimonials.map(t => (
          <Grid item xs={12} md={4} key={t.id}>
            <Card sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar src={t.avatarURL} sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6">{t.name}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">{t.role}</Typography>
                </Box>
              </Box>
              <Typography color="text.secondary">"{t.message}"</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
