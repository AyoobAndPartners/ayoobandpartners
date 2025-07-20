import React from 'react';
import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  Container,
  Chip
} from '@mui/material';
import { Water, Factory, Settings, LocalDrink, Build, Handyman } from '@mui/icons-material';

const products = [
  {
    id: 1,
    name: "Domestic Water Purifiers",
    desc: "Compact RO/UV/UF systems for home kitchens",
    icon: <Water />,
    category: "Domestic",
    color: "#4CAF50"
  },
  {
    id: 2,
    name: "Industrial RO Systems",
    desc: "High-capacity RO plants for commercial use",
    icon: <Factory />,
    category: "Industrial",
    color: "#FF9800"
  },
  {
    id: 3,
    name: "Water Softeners",
    desc: "Prevents scale & extends appliance life",
    icon: <Settings />,
    category: "Treatment",
    color: "#9C27B0"
  },
  {
    id: 4,
    name: "Coolers & Dispensers",
    desc: "RO-cooled dispensers for public spaces",
    icon: <LocalDrink />,
    category: "Cooling",
    color: "#00BCD4"
  },
  {
    id: 5,
    name: "Filters & Parts",
    desc: "All filters, membranes, pumps & fittings",
    icon: <Build />,
    category: "Parts",
    color: "#795548"
  },
  {
    id: 6,
    name: "Annual Maintenance",
    desc: "Full AMC support & emergency service",
    icon: <Handyman />,
    category: "Service",
    color: "#F44336"
  }
];

const Products = () => (
  <Box sx={{ py: 8, backgroundColor: '#f7f9fc' }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        mb={5}
        sx={{ color: '#1e2a38' }}
      >
        Our Solutions
      </Typography>

      <Grid spacing={3}>
        {products.map(({ id, name, desc, icon, category, color }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card
              sx={{
                p: 3,
                borderRadius: 3,
                textAlign: 'center',
                transition: '0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  borderRadius: '50%',
                  backgroundColor: color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                {icon}
              </Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {desc}
              </Typography>
              <Chip
                label={category}
                size="small"
                sx={{
                  backgroundColor: color,
                  color: 'white',
                  fontWeight: 500
                }}
              />
              <Button
                fullWidth
                variant="contained"
                size="medium"
                sx={{
                  mt: 3,
                  textTransform: 'none',
                  fontWeight: 600,
                  backgroundColor: color,
                  '&:hover': {
                    backgroundColor: color,
                    opacity: 0.9
                  }
                }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Products;
