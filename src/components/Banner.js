import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Button
} from '@mui/material';
import bannerImage from '../assets/banner-img/Banner-img-1.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ backgroundColor: '#ffffff', color: '#111827', overflow: 'hidden' }}>
      <Box
  component="img"
  src={bannerImage}
  alt="AquaShield Purifier"
  sx={{
    width: { xs: '90%', sm: '80%', md: '70%' }, // make it responsive and smaller
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
    borderRadius: '24px', // rounded edges
    mx: 'auto', // center image horizontally
    mt: 5 // optional: margin-top
  }}
/>

      <Box
        data-aos="fade-up"
        sx={{
          py: { xs: 6, md: 7 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{
          fontWeight: 700,
          fontFamily: `'Roboto Slab', 'Merriweather', 'Playfair Display', serif`,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          color: '#0B132B',
          mb: 2
        }}>
          Ayoob and Partners LLC
        </Typography>

        <Typography variant="h5" sx={{
          fontWeight: 500,
          fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.6rem' },
          maxWidth: 700,
          color: '#444',
          lineHeight: 1.6,
          mb: 3
        }}>
          Purity is not just about clean water; it's about crafting a healthier, more meaningful lifestyle.
        </Typography>

       <Button
  variant="contained"
  size="large"
  sx={{
    textTransform: 'none',
    backgroundColor: '#25D366', // WhatsApp green
    '&:hover': {
      backgroundColor: '#1DA851', // darker shade for hover
    },
    borderRadius: '999px',
    px: 4,
    py: 1.5,
    fontWeight: 600,
    fontSize: '1rem',
    mb: 4
  }}
  href="https://wa.me/96896389104?text=Hi%20AquaShield%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20water%20purifier."
  target="_blank"
  rel="noopener noreferrer"
  startIcon={<WhatsAppIcon />}
>
  Get a Quote on WhatsApp
</Button>


        <Typography variant="body1" sx={{
          color: '#6b7280',
          maxWidth: 640,
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
          lineHeight: 1.8
        }}>
          At AquaShield, we believe in sustainable innovation — where every purifier combines timeless design with eco-conscious living, offering both health and harmony in your home.
        </Typography>
      </Box>
    </Box>
  );
}
