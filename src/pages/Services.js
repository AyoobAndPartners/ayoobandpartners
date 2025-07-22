import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Build,
  Water,
  AcUnit,
  Opacity,
  LocalDrink,
  Settings,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Domestic RO',
    icon: <Water fontSize="inherit" />,
    shortDescription: 'Safe and pure drinking water solutions for your home.',
  },
  {
    id: 2,
    title: 'Industrial RO System',
    icon: <Build fontSize="inherit" />,
    shortDescription: 'High-volume purification systems for industrial use.',
  },
  {
    id: 3,
    title: 'Softeners',
    icon: <Opacity fontSize="inherit" />,
    shortDescription: 'Reduce hardness and protect your plumbing.',
  },
  {
    id: 4,
    title: 'Water Coolers',
    icon: <AcUnit fontSize="inherit" />,
    shortDescription: 'Efficient cooling systems for all environments.',
  },
  {
    id: 5,
    title: 'RO Filters',
    icon: <LocalDrink fontSize="inherit" />,
    shortDescription: 'Maintain your RO system with genuine filters.',
  },
  {
    id: 6,
    title: 'Spare Parts',
    icon: <Settings fontSize="inherit" />,
    shortDescription: 'Full range of quality spare parts for RO systems.',
  },
  {
    id: 7,
    title: 'AMC (Annual Maintenance Contract)',
    icon: <Build fontSize="inherit" />, 
    shortDescription: 'Hassle-free annual servicing for uninterrupted performance.',
  },
];


export default function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 5, md: 8 },
        background: 'linear-gradient(to bottom, #ffffff, #f4f7fb)',
      }}
    >
      {/* Section Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: '1.7rem', sm: '2.2rem' },
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            maxWidth: 520,
            mx: 'auto',
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          Reliable, high-quality water solutions for every need. Click below to
          learn more about each service.
        </Typography>

        <Box
          sx={{
            mt: 3,
            width: 60,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            mx: 'auto',
          }}
        />
      </Box>

      {/* Service Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: { xs: 2, sm: 4, md: 5 },
        }}
      >
        {services.map((service) => (
          <Paper
            key={service.id}
            elevation={3}
            sx={{
              p: isMobile ? 2 : 3,
              borderRadius: '16px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px) scale(1.02)',
                boxShadow: '0 10px 18px rgba(0,0,0,0.08)',
              },
            }}
          >
            <Box
              sx={{
                mb: 1.5,
                color: theme.palette.primary.main,
                fontSize: isMobile ? '2rem' : '2.5rem',
              }}
            >
              {service.icon}
            </Box>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                fontSize: isMobile ? '0.85rem' : '1rem',
                color: theme.palette.grey[800],
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: isMobile ? '0.75rem' : '0.9rem',
                mt: 1,
                minHeight: 48,
              }}
            >
              {service.shortDescription}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{ mt: 2, fontSize: '0.75rem' }}
              onClick={() => navigate(`/services/${service.id}`)}
            >
              More Details
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
