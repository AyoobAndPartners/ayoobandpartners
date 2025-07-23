import React, { useRef, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  Divider,
  Snackbar,
  Alert,
  Link,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_aebyp8a',
      'template_scluimq',
      form.current,
      '9V9Aallczp0CE0XEw'
    ).then(
      () => {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        form.current.reset();
      },
      () => {
        setSnackbarMessage('Failed to send message. Please try again later.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    );
  };

  return (
    <Box
      sx={{
        bgcolor: '#f8fafd',
        py: { xs: 6, md: 8 },
        px: 2,
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: '#1a202c' }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4a5568',
              maxWidth: 600,
              mx: 'auto',
              mt: 1,
            }}
          >
            We'd love to hear from you. Whether you have a question about features, pricing, or support—our team is ready to help.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          {/* Form Section */}
          <Box flex={1.5}>
            <Card
              elevation={6}
              sx={{
                p: { xs: 3, sm: 5 },
                borderRadius: 3,
                bgcolor: '#fff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={3}>
                Send Us a Message
              </Typography>
              <Box
                component="form"
                ref={form}
                onSubmit={sendEmail}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <TextField label="Name" name="name" variant="outlined" fullWidth required />
                <TextField label="Email" name="email" type="email" variant="outlined" fullWidth required />
                <TextField label="Message" name="message" multiline rows={5} variant="outlined" fullWidth required />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    mt: 2,
                    background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: 99,
                    py: 1.2,
                    fontSize: '1rem',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #023e8a, #0096c7)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Card>
          </Box>

          {/* Contact Info Section */}
          <Box flex={1}>
            <Card
              elevation={6}
              sx={{
                p: { xs: 3, sm: 5 },
                borderRadius: 3,
                bgcolor: '#ffffff',
                background: 'linear-gradient(180deg, #ffffff, #f0f4f8)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={2}>
                Contact Details
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Box display="flex" alignItems="start" gap={2} mb={2}>
                <LocationOn sx={{ color: '#0077b6' }} />
                <Typography sx={{ color: '#4a5568' }}>
                  C.R. No: 1607355, P.O. BOX: 152, Post Code: 120, Sultanate of Oman
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
  <Phone fontSize="small" />
  <Link
    href="tel:+96896389104"
    underline="hover"
    color="inherit"
    variant="body2"
    sx={{ cursor: 'pointer' }}
  >
    +968 9638 9104
  </Link>
</Box>
            <Box
  component="a"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@aquashieldoman.com&su=Product%20Enquiry&body=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20share%20more%20details."
  target="_blank"
  rel="noopener noreferrer"
  display="flex"
  alignItems="center"
  gap={2}
  sx={{ textDecoration: 'none', color: '#4a5568', cursor: 'pointer' }}
>
  <Email sx={{ color: '#0077b6' }} />
  <Typography>sales@aquashieldoman.com</Typography>
</Box>
            </Card>
          </Box>
        </Box>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
