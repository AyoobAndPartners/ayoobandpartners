import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Box,
  alpha,
  Fade
} from '@mui/material';
import { Droplets, Zap, Shield, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: Droplets,
      title: "Pure Quality",
      description: "Advanced filtration technology ensures 99.9% pure water for your family's health.",
      color: "#4FC3F7",
      gradient: "linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)"
    },
    {
      icon: Zap,
      title: "Fast Installation",
      description: "Professional installation within 24 hours of order confirmation.",
      color: "#FFB74D",
      gradient: "linear-gradient(135deg, #FFB74D 0%, #FF9800 100%)"
    },
    {
      icon: Shield,
      title: "5-Year Warranty",
      description: "Comprehensive warranty coverage with free maintenance and support.",
      color: "#81C784",
      gradient: "linear-gradient(135deg, #81C784 0%, #66BB6A 100%)"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your water purification needs.",
      color: "#E57373",
      gradient: "linear-gradient(135deg, #E57373 0%, #F44336 100%)"
    }
  ];

  return (
    <Box sx={{ 
      py: 12, 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, ${alpha('#ffffff', 0.1)} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${alpha('#ffffff', 0.1)} 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, ${alpha('#ffffff', 0.1)} 0%, transparent 50%)
          `,
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontWeight: 800, 
                mb: 3, 
                color: 'white',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Why Choose Aqua Shield Oman?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: alpha('#ffffff', 0.9),
                maxWidth: 600,
                mx: 'auto',
                fontWeight: 300,
                fontSize: '1.1rem'
              }}
            >
              Experience the perfect blend of technology, reliability, and exceptional service
            </Typography>
          </Box>
        </Fade>

        {/* Features Grid - Fixed the key issues */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Fade in={true} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card 
                    sx={{ 
                      height: '400px', // Fixed height to prevent cutting
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${alpha('#ffffff', 0.2)}`,
                      borderRadius: 4,
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&:hover': { 
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: `0 20px 40px ${alpha(feature.color, 0.3)}`,
                        '& .feature-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          background: feature.gradient,
                          color: 'white'
                        },
                        '& .feature-overlay': {
                          opacity: 1
                        }
                      }
                    }}
                  >
                    {/* Animated overlay */}
                    <Box
                      className="feature-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${alpha(feature.color, 0.1)} 0%, transparent 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        borderRadius: 4,
                        zIndex: 1
                      }}
                    />
                    
                    <CardContent sx={{ 
                      position: 'relative', 
                      zIndex: 2, 
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Box 
                        className="feature-icon"
                        sx={{ 
                          mb: 3, 
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: alpha(feature.color, 0.1),
                          color: feature.color,
                          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
                        }}
                      >
                        <Icon size={36} />
                      </Box>
                      
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 2,
                          color: '#2c3e50',
                          fontSize: '1.3rem'
                        }}
                      >
                        {feature.title}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#5a6c7d',
                          lineHeight: 1.7,
                          fontSize: '0.95rem',
                          textAlign: 'center'
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            );
          })}
        </Grid>

        {/* CTA Section */}
        <Fade in={true} timeout={1000} style={{ transitionDelay: '800ms' }}>
          <Box sx={{ textAlign: 'center', mt: 8 }}>
           <Link to="/products" style={{ textDecoration: 'none' }}>
  <Button 
    variant="contained" 
    size="large" 
    sx={{ 
      mb: 3,
      px: 6,
      py: 2,
      fontSize: '1.1rem',
      fontWeight: 600,
      background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
      border: 0,
      borderRadius: 50,
      boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)',
      color: 'white',
      textTransform: 'none',
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      '&:hover': {
        background: 'linear-gradient(45deg, #FF5252 30%, #26A69A 90%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 35px rgba(255, 107, 107, 0.4)'
      }
    }}
  >
    Explore Our Products
  </Button>
</Link>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: alpha('#ffffff', 0.9),
                maxWidth: 500,
                mx: 'auto',
                fontSize: '1rem',
                lineHeight: 1.8,
                fontWeight: 300
              }}
            >
              Join thousands of satisfied customers who trust Aqua Shield for their water purification needs.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Features;