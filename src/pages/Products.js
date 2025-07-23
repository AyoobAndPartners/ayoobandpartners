import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import uvImg from '../assets/uv-img.png';
import roImg1 from '../assets/ro-omg-1.jpeg';
import roImg2 from '../assets/ro-img-2.png';
import mediaImg from '../assets/media-img.png';

const products = [
  {
    id: 1,
    name: 'Residential RO System',
    description:
      'Perfect for home use, this RO system delivers pure and safe drinking water by eliminating 99.9% of impurities including heavy metals, chlorine, and microbes.',
    features: [
      'Advanced RO + UV filtration',
      'Smart auto shut-off',
      'Wall-mounted design',
    ],
    image: roImg1,
  },
  {
    id: 2,
    name: 'Commercial Water Purifier',
    description:
      'Engineered for commercial use, this purifier provides uninterrupted water flow with multi-layered purification — ideal for offices, restaurants, and institutions.',
    features: [
      'High-flow capacity',
      'Digital control panel',
      'Up to 50 L/hr output',
    ],
    image: roImg2,
  },
  {
    id: 3,
    name: 'Industrial Filtration Unit',
    description:
      'Heavy-duty system tailored for factories and plants. Handles large volumes with high precision to ensure clean water across industrial applications.',
    features: [
      'Rust-proof stainless steel tank',
      'Multi-stage filters',
      'Flow rate up to 500 L/hr',
    ],
    image: mediaImg,
  },
  {
    id: 4,
    name: 'UV Water Purifier',
    description:
      'Eco-friendly solution that uses ultraviolet light to eliminate harmful pathogens without altering water chemistry. Ideal for areas with biological contamination.',
    features: [
      'Chemical-free purification',
      'Long-lasting UV lamp',
      'Compact and easy to maintain',
    ],
    image: uvImg,
  },
];

export default function ProductPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6 } }}>
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

      {/* Product Cards Grid */}
      <Grid spacing={4} sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 3,
                boxShadow: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  height: 180,
                  backgroundColor: '#f9f9f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                    p: 2,
                  }}
                />
              </Box>
              <CardContent sx={{ p: isMobile ? 2 : 3, flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color="primary"
                  gutterBottom
                >
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Stack spacing={0.5}>
                  {product.features.map((feature, index) => (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      key={index}
                    >
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
