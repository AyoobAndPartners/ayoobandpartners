import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Container,
  Chip,
  Fade,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Water, 
  Factory, 
  Settings, 
  LocalDrink, 
  Build, 
  Handyman 
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.15)}`,
    '& .icon-container': {
      transform: 'scale(1.05)',
    }
  }
}));

const IconContainer = styled(Box)(({ theme }) => ({
  height: 280,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'linear-gradient(45deg, #2196F3 0%, #21CBF3 100%)',
  '& .MuiSvgIcon-root': {
    fontSize: '4rem',
    color: 'white',
    opacity: 0.9
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196F3 0%, #21CBF3 100%)',
  borderRadius: theme.spacing(3),
  textTransform: 'none',
  fontWeight: 600,
  padding: theme.spacing(1.5, 3),
  boxShadow: `0 4px 20px ${alpha('#2196F3', 0.3)}`,
  '&:hover': {
    background: 'linear-gradient(45deg, #1976D2 0%, #1CB5E0 100%)',
    boxShadow: `0 8px 30px ${alpha('#2196F3', 0.4)}`,
    transform: 'translateY(-1px)',
  }
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
    height: '100px',
    background: 'linear-gradient(45deg, #2196F3 0%, #21CBF3 100%)',
    borderRadius: '50%',
    opacity: 0.1,
    zIndex: -1,
  }
}));

const CTAContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(8),
  padding: theme.spacing(6),
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(3),
  boxShadow: `0 10px 40px ${alpha(theme.palette.common.black, 0.1)}`,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
}));

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Domestic Water Purifiers",
      description: "RO/UV/UF systems including Reverse Osmosis, UV purifiers, wall-mounted & under sink models with compact designs for home kitchens",
      icon: Water,
      category: "Domestic",
      categoryColor: "#4CAF50",
      features: ["RO Systems", "UV Purifiers", "Wall-mounted", "Under Sink Models"]
    },
    {
      id: 2,
      name: "Industrial RO Systems",
      description: "Customized high-capacity RO plants from 250 LPH to 10,000+ LPH solutions ideal for factories, hospitals, schools, and hotels",
      icon: Factory,
      category: "Industrial",
      categoryColor: "#FF9800",
      features: ["250-10,000+ LPH", "Custom Solutions", "High Capacity", "Commercial Grade"]
    },
    {
      id: 3,
      name: "Water Softeners",
      description: "Domestic & commercial softeners that prevent scaling in pipes and appliances, enhancing water quality and appliance life",
      icon: Settings,
      category: "Treatment",
      categoryColor: "#9C27B0",
      features: ["Scale Prevention", "Pipe Protection", "Appliance Life", "Quality Enhancement"]
    },
    {
      id: 4,
      name: "Water Coolers & Dispensers",
      description: "RO-cooled water dispensers and SS body water coolers suitable for offices, schools, and public spaces",
      icon: LocalDrink,
      category: "Cooling",
      categoryColor: "#00BCD4",
      features: ["RO-Cooled", "SS Body", "Office Use", "Public Spaces"]
    },
    {
      id: 5,
      name: "Filtration Accessories & Parts",
      description: "Complete range of sediment filters, carbon filters, RO membranes, pumps & fittings for all water purification needs",
      icon: Build,
      category: "Parts",
      categoryColor: "#795548",
      features: ["Sediment Filters", "Carbon Filters", "RO Membranes", "Pumps & Fittings"]
    },
    {
      id: 6,
      name: "Annual Maintenance Contracts",
      description: "Comprehensive AMC services including routine visits, filter replacements, and emergency support for all systems",
      icon: Handyman,
      category: "Service",
      categoryColor: "#F44336",
      features: ["Routine Visits", "Filter Replacement", "Emergency Support", "Full Coverage"]
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <HeaderContainer>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #2196F3 0%, #21CBF3 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Our Solutions
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Comprehensive water purification solutions for domestic and industrial needs
          </Typography>
        </HeaderContainer>

        <Grid container spacing={4}>
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Fade in timeout={300 + index * 100}>
                  <div>
                    <StyledCard>
                      <IconContainer className="icon-container">
                        <IconComponent />
                      </IconContainer>
                      
                      <CardContent sx={{ 
                        flexGrow: 1, 
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Typography 
                            variant="h6" 
                            component="h3"
                            sx={{ 
                              fontWeight: 700,
                              color: 'text.primary',
                              lineHeight: 1.3,
                              flexGrow: 1,
                              mb: 0
                            }}
                          >
                            {product.name}
                          </Typography>
                          <Chip 
                            label={product.category}
                            size="small"
                            sx={{ 
                              backgroundColor: product.categoryColor,
                              color: 'white',
                              fontWeight: 600,
                              ml: 1
                            }}
                          />
                        </Box>
                        
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ 
                            flexGrow: 1,
                            lineHeight: 1.6,
                            mb: 2
                          }}
                        >
                          {product.description}
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {product.features.map((feature, idx) => (
                            <Chip 
                              key={idx}
                              label={feature}
                              size="small"
                              variant="outlined"
                              sx={{ 
                                fontSize: '0.75rem',
                                height: 24,
                                borderColor: alpha(product.categoryColor, 0.3),
                                color: product.categoryColor,
                                '&:hover': {
                                  backgroundColor: alpha(product.categoryColor, 0.1)
                                }
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>

                      <CardActions sx={{ p: 3, pt: 0 }}>
                        <StyledButton 
                          variant="contained" 
                          fullWidth
                          size="large"
                        >
                          Learn More
                        </StyledButton>
                      </CardActions>
                    </StyledCard>
                  </div>
                </Fade>
              </Grid>
            );
          })}
        </Grid>

        <Fade in timeout={800}>
          <CTAContainer>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600,
                mb: 2,
                color: 'text.primary'
              }}
            >
              Need Custom Solutions?
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ 
                maxWidth: 600, 
                mx: 'auto', 
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}
            >
              We specialize in creating tailored water purification systems for unique requirements. 
              Contact us for customized solutions and professional consultation.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#2196F3',
                color: '#2196F3',
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                borderWidth: 2,
                '&:hover': {
                  borderColor: '#1976D2',
                  backgroundColor: alpha('#2196F3', 0.1),
                  borderWidth: 2,
                  transform: 'translateY(-1px)',
                  boxShadow: `0 4px 20px ${alpha('#2196F3', 0.2)}`
                }
              }}
            >
              Contact Our Experts
            </Button>
          </CTAContainer>
        </Fade>
      </Container>
    </Box>
  );
}