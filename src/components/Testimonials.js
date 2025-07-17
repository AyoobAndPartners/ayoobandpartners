import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { useCollection } from '../hooks/useCollection';

export default function Testimonials() {
  const testimonials = useCollection('testimonials');

  return (
    <section id="testimonials">
      <Typography variant="h4" gutterBottom>What People Say</Typography>
      <Grid container spacing={2}>
        {testimonials.map(t => (
          <Grid item xs={12} md={4} key={t.id}>
            <Card>
              <CardContent>
                <Avatar src={t.avatarURL} />
                <Typography variant="h6">{t.name}</Typography>
                <Typography variant="subtitle2">{t.role}</Typography>
                <Typography>{t.message}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}