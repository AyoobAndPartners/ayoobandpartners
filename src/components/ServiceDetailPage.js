import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  useTheme,
  Divider,
} from '@mui/material';
import { CheckCircle, InfoOutlined, ThumbUp, ArrowBack } from '@mui/icons-material';
import { services } from '../data/servicesData';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();

  const service = services.find((s) => s.id.toString() === id);

  if (!service) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h6">Service not found.</Typography>
      </Box>
    );
  }

  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      {/* Hero Banner */}
      <Box
        sx={{
          backgroundImage: `url(${service.image || 'https://via.placeholder.com/1200x400?text=Service+Banner'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: 180, md: 280 },
          borderRadius: 3,
          mb: 4,
        }}
      />

      {/* Title & Subtitle */}
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{ color: theme.palette.primary.main, fontSize: { xs: '1.8rem', md: '2.3rem' } }}
      >
        {service.title}
      </Typography>

      {service.subtitle && (
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {service.subtitle}
        </Typography>
      )}

      {/* Description */}
      <Typography
        variant="body1"
        color="text.secondary"
        paragraph
        sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' } }}
      >
        {service.description}
      </Typography>

      {/* Additional Description (if available) */}
      {service.longDescription && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.7 }}
        >
          {service.longDescription}
        </Typography>
      )}

      <Divider sx={{ my: 4 }} />

      {/* Key Features */}
      <Typography
        variant="h6"
        fontWeight={600}
        gutterBottom
        sx={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <InfoOutlined color="primary" /> Key Features
      </Typography>

      <Grid container spacing={2} mb={5}>
        {service.features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                borderRadius: 2,
                backgroundColor: '#f9f9f9',
              }}
            >
              <CheckCircle color="primary" />
              <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                {feature}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Why Choose Us / Benefits */}
      {service.benefits && (
        <>
          <Typography
            variant="h6"
            fontWeight={600}
            gutterBottom
            sx={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <ThumbUp color="primary" /> Why Choose This Service
          </Typography>

          <Grid container spacing={2} mb={4}>
            {service.benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    backgroundColor: '#e3f2fd',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                    • {benefit}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* CTA Button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Button onClick={() => navigate(-1)} variant="outlined" startIcon={<ArrowBack />}>
          Back to Services
        </Button>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
        >
          Contact Us
        </Button>
        </Link>

      </Box>
    </Container>
  );
}
