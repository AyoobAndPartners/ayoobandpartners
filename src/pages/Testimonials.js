import React from 'react';
import { 
  Avatar, 
  Card, 
  CardContent,
  Grid, 
  Typography, 
  Container, 
  Box,
  Rating,
  Chip
} from '@mui/material';
import { useCollection } from '../hooks/useCollection';

export default function Testimonials() {
  const testimonials = useCollection('testimonials');

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip 
            label="TESTIMONIALS" 
            variant="outlined" 
            color="primary"
            sx={{ mb: 2, fontWeight: 600 }}
          />
          <Typography 
            variant="h3" 
            component="h1"
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              color: 'primary.main'
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Here's what our satisfied clients have to say about their experience working with us.
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={6} lg={4} key={testimonial.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ p: 3, flex: 1 }}>
                  {/* Rating */}
                  <Rating 
                    value={testimonial.rating || 5} 
                    readOnly 
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  
                  {/* Message */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3,
                      fontStyle: 'italic',
                      lineHeight: 1.6
                    }}
                  >
                    "{testimonial.message}"
                  </Typography>
                  
                  {/* Author */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                    <Avatar 
                      src={testimonial.avatarURL} 
                      sx={{ width: 48, height: 48, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                      {testimonial.company && (
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.company}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Card sx={{ p: 4, backgroundColor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Ready to Join Our Success Stories?
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              Experience the same level of excellence that our clients rave about.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}