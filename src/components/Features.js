import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button
} from '@mui/material';
import { Droplets, Zap, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Droplets,
    title: "Pure Quality",
    description: "99.9% pure water using advanced filtration."
  },
  {
    icon: Zap,
    title: "Fast Installation",
    description: "Installed within 24 hours by experts."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to assist your needs."
  }
];

const Features = () => (
  <Box sx={{ py: 10, backgroundColor: '#f9fafc' }}>
    <Container maxWidth="lg">
      <Box textAlign="center" mb={8}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Why Choose Aqua Shield Oman?
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
          Trusted water purifier services designed for reliability, speed, and support.
        </Typography>
      </Box>

      <Grid spacing={4}>
        {features.map(({ icon: Icon, title, description }, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: '#e0f4ff',
                  color: '#0077b6',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#0077b6',
                    color: '#ffffff'
                  }
                }}
              >
                <Icon size={28} />
              </Box>
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={8}>
        <Link to="/services" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 30,
              background: 'linear-gradient(45deg, #0077b6, #00b4d8)',
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(0, 183, 255, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #005f8f, #00a3c4)',
                boxShadow: '0 6px 20px rgba(0, 183, 255, 0.4)',
              }
            }}
          >
            Explore Our Services
          </Button>
        </Link>
      </Box>
    </Container>
  </Box>
);

export default Features;
