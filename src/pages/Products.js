import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import img6StageRo from '../assets/6StageRo.png';
import img400GpdRo from '../assets/400GpdRo.png';
import imgBRO1M from '../assets/BRO-1M.png';
import imgBRO2M from '../assets/BRO-2M.png';
import imgBRO3M from '../assets/bro-3M.png';
import imgClackHead from '../assets/ClackHead.png';

const products = [
  {
    id: 1,
    name: 'AQUA Shield 6 Stage RO System',
    description: 'Compact RO system with 6-stage filtration for home use.',
    features: ['CTO, GAC, PP filters', 'Integrated pressure gauge', 'Ideal for drinking water'],
    image: img6StageRo,
  },
  {
    id: 2,
    name: 'AQUA Shield 400 GPD RO System',
    description: 'Commercial-grade RO purifier with high flow rate.',
    features: ['400 gallons per day', 'Triple blue housing system', 'Heavy-duty design for business use'],
    image: img400GpdRo,
  },
  {
    id: 3,
    name: 'Brackish Water RO Plant 100000 GPD',
    description: 'Industrial RO plant for large-scale water treatment.',
    features: ['100,000 GPD capacity', 'Pre and post-filtration', 'Full control panel and automation'],
    image: imgBRO1M,
  },
  {
    id: 4,
    name: 'Brackish Water RO Plant 20000 GPD',
    description: 'Efficient RO system for medium industrial applications.',
    features: ['20,000 GPD output', 'Robust skid frame', 'Pressure and flow regulation'],
    image: imgBRO2M,
  },
  {
    id: 5,
    name: 'Brackish Water RO Plant 30000 GPD',
    description: 'Compact industrial RO unit for moderate demand.',
    features: ['30,000 GPD flow rate', 'Modular design', 'Durable and scalable setup'],
    image: imgBRO3M,
  },
  {
    id: 6,
    name: 'Clack Head Softener Control Valve',
    description: 'Digital valve head for water softening units.',
    features: ['Programmable LCD display', 'Auto regeneration cycle', 'High efficiency operation'],
    image: imgClackHead,
  },
];

export default function ProductPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          Our Products
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
          Explore our range of water purification and filtration solutions for every scale — residential, commercial, and industrial.
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

      {/* Product Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: { xs: 2, sm: 4, md: 5 },
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            elevation={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '16px',
              bgcolor: '#fff',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px) scale(1.02)',
                boxShadow: '0 10px 18px rgba(0,0,0,0.08)',
              },
            }}
          >
            <Box
              sx={{
                height: 180,
                backgroundColor: '#f9f9f9',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  maxHeight: 250,
                  maxWidth: 200,
                  objectFit: 'cover',
                  mx: 'auto',
                }}
              />
            </Box>
            <CardContent
              sx={{
                px: isMobile ? 2 : 3,
                pb: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 200,
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                sx={{
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  color: theme.palette.grey[800],
                }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, fontSize: isMobile ? '0.75rem' : '0.9rem' }}
              >
                {product.description}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Stack spacing={0.5} sx={{ mt: 1 }}>
                {product.features.map((feature, idx) => (
                  <Typography key={idx} variant="body2" color="text.secondary">
                    • {feature}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
