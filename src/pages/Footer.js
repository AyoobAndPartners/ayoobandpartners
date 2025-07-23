import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Instagram, Email, Phone, LocationOn, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0f172a', color: 'white', pt: 6, pb: 3, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              AquaShield Oman
            </Typography>
            <Typography variant="body2" color="grey.400">
              Pure water solutions for homes, businesses, and industries. Trusted and tailored water treatment services across Oman.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link href="#" color="grey.300" underline="hover">Home</Link>
              <Link href="#" color="grey.300" underline="hover">About Us</Link>
              <Link href="#" color="grey.300" underline="hover">Services</Link>
              <Link href="#" color="grey.300" underline="hover">Contact</Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Contact
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
  <LocationOn fontSize="small" />
  <Typography variant="body2" component="address" sx={{ m: 0 }}>
    C.R. No: 1607355, P.O .BOX: 152, Post Code: 120, Sultanate of Oman
  </Typography>
</Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">+968 9638 9104</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Email fontSize="small" />
              <Typography variant="body2">sales@aquashieldoman.com</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, bgcolor: 'grey.700' }} />

        {/* Social & Copyright */}
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" alignItems="center">
          <Typography variant="body2" color="grey.500">
            © {new Date().getFullYear()} Ayoob and Partners.<br/> All rights reserved.
          </Typography>

          <Box>
  <IconButton
    color="inherit"
    href="https://www.facebook.com/share/16xuKnXtqm/"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: 'grey.400' }}
  >
    <Facebook />
  </IconButton>

  <IconButton
    color="inherit"
    href="https://www.instagram.com/aquashieldoman"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: 'grey.400' }}
  >
    <Instagram />
  </IconButton>

  <IconButton
    color="inherit"
    href="https://twitter.com/aquashieldoman"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: 'grey.400' }}
  >
    <Twitter />
  </IconButton>
</Box>

        </Box>
      </Container>
    </Box>
  );
}
