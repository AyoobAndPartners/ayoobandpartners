import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Card,
  Divider,
} from '@mui/material';
import {
  Email, Phone, LocationOn
} from '@mui/icons-material';

export default function Contact() {
  return (
    <Box sx={{ bgcolor: '#f5f7fa', py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="primary.main"
          gutterBottom
        >
          Get in Touch
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          maxWidth={600}
          mx="auto"
          mb={4}
        >
          We'd love to hear from you. Whether you have a question about features, pricing, or support, our team is ready to answer all your questions.
        </Typography>

        <Grid  spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Send Us a Message
              </Typography>
              <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <TextField label="Name" variant="outlined" fullWidth />
                <TextField label="Email" type="email" variant="outlined" fullWidth />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                    color: 'white',
                    fontWeight: 600,
                    py: 1.2,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1565c0 0%, #2196f3 100%)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Company Info */}
          <Grid item xs={12} md={5}>
            <Card elevation={1} sx={{ height: '100%', p: { xs: 2, sm: 4 } }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Contact Details
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box display="flex" alignItems="flex-start" gap={2} mb={2}>
                <LocationOn color="primary" />
                <Typography variant="body2" color="text.secondary">
                  AquaShield Oman, Al Khuwair, Muscat, Sultanate of Oman
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Phone color="primary" />
                <Typography variant="body2" color="text.secondary">
                  +968 9123 4567
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <Email color="primary" />
                <Typography variant="body2" color="text.secondary">
                  info@aquashieldoman.com
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
