import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Water, Home, Factory, Business, CheckCircle, LocationOn, Settings, Build, Support,
} from '@mui/icons-material';

export default function About() {
  const keyPoints = [
    { icon: <LocationOn color="primary" />, text: "Oman-based expert team" },
    { icon: <Settings color="primary" />, text: "Tailored solutions for all sectors" },
    { icon: <Build color="primary" />, text: "Annual maintenance & support" },
  ];

  const services = [
    { icon: <Home color="primary" />, name: "Domestic RO Units" },
    { icon: <Factory color="primary" />, name: "Industrial RO Systems" },
    { icon: <Water color="primary" />, name: "Water Softeners" },
    { icon: <CheckCircle color="primary" />, name: "UV Filtration" },
    { icon: <Business color="primary" />, name: "Water Coolers" },
  ];

  return (
    <Box sx={{ py: 6, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={5}>
          <Chip label="ABOUT US" variant="outlined" color="primary" sx={{ mb: 1 }} />
          <Typography variant="h4" fontWeight={700} color="primary.main">
            About Aquashield Oman
          </Typography>
        </Box>

        <Grid  spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            <Card sx={{ p: { xs: 2, sm: 4 } }}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Trusted Water Purification Partner
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3} lineHeight={1.7}>
                Aquashield Oman provides advanced water treatment systems for homes,
                businesses, and industries. We offer Domestic & Industrial RO Systems,
                Softeners, UV Filtration, and Water Coolers—all backed by expert service.
              </Typography>

              <Box sx={{ p: 3, bgcolor: 'primary.main', borderRadius: 2, color: 'white', mb: 3 }}>
                <Typography variant="h6" fontWeight={600}>Our Mission</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Delivering safe, clean, and healthy water for every drop you use.
                </Typography>
              </Box>

              <Typography variant="h6" fontWeight={600} mb={2}>
                Why Choose Us?
              </Typography>
              <List dense>
                {keyPoints.map(({ icon, text }, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>{icon}</ListItemIcon>
                    <ListItemText primary={text} primaryTypographyProps={{ fontSize: '1rem' }} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            <Card sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
              <Typography
                variant="h6"
                color="primary.main"
                textAlign="center"
                fontWeight={600}
                mb={3}
              >
                Our Services
              </Typography>

              <Grid spacing={2}>
                {services.map(({ icon, name }, i) => (
                  <Grid item xs={6} sm={4} md={6} key={i}>
                    <Card
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        transition: '0.3s',
                        '&:hover': {
                          boxShadow: 4,
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <Box sx={{ fontSize: 40, mb: 1, color: 'primary.main' }}>
                        {icon}
                      </Box>
                      <Typography variant="body2" fontWeight={500}>
                        {name}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Card>

            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>
                <Support />
              </Avatar>
              <Typography variant="h6" fontWeight={600}>24/7 Support</Typography>
              <Typography variant="body2" color="text.secondary">
                Always here for assistance and maintenance.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Box mt={6} textAlign="center">
          <Card
            sx={{
              p: { xs: 3, sm: 4 },
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              color: 'white',
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" fontWeight={600} mb={1}>
              Ready for Pure, Safe Water?
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Get in touch with Aquashield Oman for the ideal water solution.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
