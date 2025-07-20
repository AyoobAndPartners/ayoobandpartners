import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  // Rating,
  Chip,
} from '@mui/material';
import { useCollection } from '../hooks/useCollection';

export default function Testimonials() {
  const testimonials = useCollection('testimonials');

  return (
    <Box sx={{ py: 6, bgcolor: '#f8fafc' }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={5}>
          <Chip label="TESTIMONIALS" color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
            What Our Clients Say
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Hear directly from those who trust our service.
          </Typography>
        </Box>

        <Grid spacing={3}>
          {testimonials.map(({ id, message, rating, name, role, company, avatarURL }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 2,
                  '&:hover': { boxShadow: 3, transform: 'translateY(-3px)' },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  {/* <Rating value={rating || 5} readOnly size="small" sx={{ mb: 1 }} /> */}
                  <Typography variant="body2" fontStyle="italic" mb={2}>
                    “{message}”
                  </Typography>
                  <Box display="flex" alignItems="center" mt="auto">
                    <Avatar src={avatarURL} sx={{ width: 40, height: 40, mr: 1.5 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {role}{company && `, ${company}`}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={6} textAlign="center">
          <Card sx={{ p: 3, bgcolor: 'primary.main', color: '#fff' }}>
            <Typography variant="h6" fontWeight={600}>
              Ready to Join Our Success Stories?
            </Typography>
            <Typography variant="body2" mt={1}>
              Get in touch and let’s build something great together.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
