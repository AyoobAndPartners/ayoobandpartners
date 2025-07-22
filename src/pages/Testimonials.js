import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  Typography,
  Chip,
} from '@mui/material';

const testimonials = [
  {
    id: 1,
    message:
      "Absolutely impressed with the quality of service.",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    company: "BrightWave Media",
    avatarURL: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    message:
      "They delivered beyond our expectations. A reliable partner for all our needs.",
    name: "Arun Patel",
    role: "Operations Head",
    company: "Zenith Solutions",
    avatarURL: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    message:
      "The experience has been seamless from start to finish. Truly top-notch service!",
    name: "Emily Wong",
    role: "Product Designer",
    company: "Creatix Labs",
    avatarURL: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    message:
      "Customer support was exceptional. They were there every step of the way.",
    name: "James Smith",
    role: "CTO",
    company: "NovaTech",
    avatarURL: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    id: 5,
    message:
      "We’ve seen incredible results. The team truly understands our business.",
    name: "Nikita Rao",
    role: "Founder",
    company: "Bloom Consultancy",
    avatarURL: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: 6,
    message:
      "Their attention to detail and dedication is unmatched. Would definitely recommend!",
    name: "David Lee",
    role: "Project Manager",
    company: "Axis Innovations",
    avatarURL: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Chip
            label="TESTIMONIALS"
            color="primary"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Typography
            variant="h4"
            fontWeight={700}
            color="primary.main"
            gutterBottom
          >
            What Our Clients Say
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Honest words from our satisfied customers.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map(({ id, message, name, avatarURL }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 3,
                  p: 3,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontStyle: 'italic',
                    mb: 3,
                    lineHeight: 1.7,
                  }}
                >
                  “{message}”
                </Typography>

                <Box display="flex" alignItems="center" mt="auto">
                  <Avatar
                    src={avatarURL}
                    alt={name}
                    sx={{ width: 48, height: 48, mr: 2 }}
                  />
                  <Typography variant="subtitle2" fontWeight={600}>
                    {name}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={8} textAlign="center">
          <Card
            sx={{
              display: 'inline-block',
              px: 4,
              py: 3,
              borderRadius: 3,
              bgcolor: 'primary.main',
              color: '#ffffff',
              boxShadow: '0 6px 20px rgba(59,130,246,0.3)',
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Ready to Join Our Success Stories?
            </Typography>
            <Typography variant="body2" mt={1}>
              Contact us today and let's start something extraordinary.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
