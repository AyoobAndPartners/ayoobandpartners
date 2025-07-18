import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import {
  Water,
  Home,
  Business,
  Factory,
  Support,
  CheckCircle,
  LocationOn,
  Settings,
  Build
} from '@mui/icons-material';

export default function About() {
  const keyPoints = [
    {
      icon: <LocationOn color="primary" />,
      text: "Oman-based expert team"
    },
    {
      icon: <Settings color="primary" />,
      text: "Custom solutions for homes, businesses & factories"
    },
    {
      icon: <Build color="primary" />,
      text: "Reliable post-sale service and annual maintenance"
    }
  ];

  const services = [
    { name: "Domestic RO Units", icon: <Home color="primary" /> },
    { name: "Industrial RO Systems", icon: <Factory color="primary" /> },
    { name: "Water Softeners", icon: <Water color="primary" /> },
    { name: "UV Filtration", icon: <CheckCircle color="primary" /> },
    { name: "Water Coolers", icon: <Business color="primary" /> }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip 
            label="ABOUT US" 
            variant="outlined" 
            color="primary"
            sx={{ mb: 2, fontWeight: 600 }}
          />
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              color: 'primary.main'
            }}
          >
            About Aquashield Oman
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} lg={8}>
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary'
                }}
              >
                Your Trusted Water Purification Partner
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4,
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  fontSize: '1.1rem'
                }}
              >
                Aquashield Oman is a trusted name in water purification and treatment 
                solutions, catering to residential, commercial, and industrial needs. 
                With years of experience and a commitment to quality, we provide 
                cutting-edge water purification systems including Domestic RO Units, 
                Industrial RO Systems, Softeners, UV Filtration, and Water Coolers.
              </Typography>
              
              <Box sx={{ 
                p: 3, 
                backgroundColor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                mb: 4
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  To ensure every drop you consume is safe, clean, and healthy.
                </Typography>
              </Box>

              {/* Key Points */}
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary'
                }}
              >
                Why Choose Aquashield?
              </Typography>
              <List>
                {keyPoints.map((point, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {point.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={point.text}
                      primaryTypographyProps={{
                        fontSize: '1.1rem',
                        fontWeight: 500
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Services Sidebar */}
          <Grid item xs={12} lg={4}>
            <Card elevation={2} sx={{ p: 3 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3,
                  fontWeight: 600,
                  color: 'primary.main',
                  textAlign: 'center'
                }}
              >
                Our Services
              </Typography>
              <List>
                {services.map((service, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {service.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={service.name}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: '0.95rem'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>

            {/* Stats Card */}
            <Card elevation={2} sx={{ p: 3, mt: 3, textAlign: 'center' }}>
              <Support sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                24/7 Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Round-the-clock customer support and maintenance services
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Card 
            sx={{ 
              p: 4, 
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              color: 'white'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Ready for Pure, Safe Water?
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Contact Aquashield Oman today for a consultation and discover the perfect 
              water purification solution for your needs.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}