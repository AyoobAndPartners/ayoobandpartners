import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Phone, Email } from '@mui/icons-material';

export default function Banner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        px: 2,
        py: isMobile ? 8 : 0,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">

          {/* Headline */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem'
              },
              lineHeight: 1.2
            }}
          >
            water purifier That Works
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              maxWidth: 600,
              fontSize: {
                xs: '1rem',
                sm: '1.05rem',
                md: '1.15rem'
              },
              lineHeight: 1.7
            }}
          >
            Durable and professional water purifier solutions for homes, businesses, and industrial sites across Oman.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={2}
            justifyContent="center"
            sx={{ pt: 2, width: '100%' }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone />}
              fullWidth={isMobile}
              href="tel:+968-your-number"
              sx={{
                backgroundColor: '#2563eb',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: '#1e40af'
                }
              }}
            >
              Call Now
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              fullWidth={isMobile}
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.3)',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                '&:hover': {
                  borderColor: '#3b82f6',
                  color: '#3b82f6',
                }
              }}
            >
              Get Free Quote
            </Button>
          </Stack>

          {/* Trust Statement */}
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.6)',
              pt: 4,
              fontSize: '0.9rem'
            }}
          >
            ISO Certified • 5-Year Warranty • 10,000+ Happy Clients
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
