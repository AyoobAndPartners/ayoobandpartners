import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack,
  useTheme,
  useMediaQuery,
  Chip
} from '@mui/material';
import { Phone, Email, ArrowForward, Star, Verified, Water } from '@mui/icons-material';

export default function Banner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1a365d 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
          animation: 'float 20s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
            '50%': { transform: 'rotate(180deg) scale(1.1)' }
          }
        }}
      />

      {/* Glassmorphism Cards */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: 120,
          height: 120,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          transform: 'rotate(15deg)',
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'rotate(15deg) scale(1)' },
            '50%': { transform: 'rotate(15deg) scale(1.05)' }
          }
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '8%',
          width: 80,
          height: 80,
          background: 'rgba(59, 130, 246, 0.1)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '20px',
          transform: 'rotate(-12deg)',
          animation: 'float 6s ease-in-out infinite reverse',
        }}
      />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <Stack spacing={5} alignItems="center" textAlign="center">
          
          {/* Status Badge */}
          <Chip
            icon={<Verified sx={{ fontSize: 18, color: '#10b981' }} />}
            label="Trusted by 10,000+ customers"
            sx={{
              background: 'rgba(16, 185, 129, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              color: '#10b981',
              fontWeight: 600,
              py: 1,
              px: 2,
              '& .MuiChip-label': { px: 1 }
            }}
          />

          {/* Main Headline */}
          <Box>
            <Typography
              variant={isMobile ? 'h2' : 'h1'}
              component="h1"
              sx={{
                fontWeight: 900,
                background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 30%, #3b82f6 70%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                mb: 2,
                fontSize: isMobile ? '3rem' : '4.5rem'
              }}
            >
              Pure Water.
            </Typography>
            <Typography
              variant={isMobile ? 'h2' : 'h1'}
              component="h1"
              sx={{
                fontWeight: 900,
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                fontSize: isMobile ? '3rem' : '4.5rem'
              }}
            >
              Better Living.
            </Typography>
          </Box>

          {/* Subheadline */}
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 400,
              maxWidth: '650px',
              lineHeight: 1.6,
              fontSize: isMobile ? '1.1rem' : '1.4rem'
            }}
          >
            Reliable Water Purification Solutions for Homes, Businesses & Industries 
            <Box component="span" sx={{ color: '#3b82f6', fontWeight: 600 }}>
              {' '}Across Oman
            </Box>
          </Typography>

          {/* Stats Row */}
          <Stack 
            direction={isMobile ? 'column' : 'row'} 
            spacing={isMobile ? 2 : 6}
            sx={{ mt: 3 }}
          >
            {[
              { icon: <Star sx={{ color: '#fbbf24' }} />, text: '4.9/5 Rating' },
              { icon: <Water sx={{ color: '#3b82f6' }} />, text: '99.9% Pure' },
              { icon: <Verified sx={{ color: '#10b981' }} />, text: '5 Year Warranty' }
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {item.icon}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontWeight: 600,
                    fontSize: '0.95rem'
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* CTA Buttons */}
          <Stack 
            direction={isMobile ? 'column' : 'row'} 
            spacing={3} 
            sx={{ mt: 5 }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone />}
              endIcon={<ArrowForward />}
              href="tel:+968-your-number"
              sx={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: 'white',
                fontWeight: 700,
                py: 2,
                px: 4,
                borderRadius: '16px',
                textTransform: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 15px 40px rgba(59, 130, 246, 0.6)'
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Call Now
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              endIcon={<ArrowForward />}
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                fontWeight: 600,
                py: 2,
                px: 4,
                borderRadius: '16px',
                textTransform: 'none',
                fontSize: '1.1rem',
                borderWidth: 2,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: '#fbbf24',
                  color: '#fbbf24',
                  background: 'rgba(251, 191, 36, 0.1)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 30px rgba(251, 191, 36, 0.2)'
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Get Free Quote
            </Button>
          </Stack>

          {/* Bottom Trust Indicator */}
          <Box
            sx={{
              mt: 4,
              p: 2,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              maxWidth: '500px'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 500,
                lineHeight: 1.4
              }}
            >
              <Box component="span" sx={{ color: '#10b981' }}>✓</Box> Free Installation & Consultation
              <Box component="span" sx={{ mx: 2, color: 'rgba(255, 255, 255, 0.3)' }}>•</Box>
              <Box component="span" sx={{ color: '#10b981' }}>✓</Box> 24/7 Support
              <Box component="span" sx={{ mx: 2, color: 'rgba(255, 255, 255, 0.3)' }}>•</Box>
              <Box component="span" sx={{ color: '#10b981' }}>✓</Box> ISO Certified
            </Typography>
          </Box>
        </Stack>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '40%': { transform: 'translateX(-50%) translateY(-10px)' },
            '60%': { transform: 'translateX(-50%) translateY(-5px)' }
          }
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 50,
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '15px',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              width: 6,
              height: 6,
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scroll 2s infinite',
              '@keyframes scroll': {
                '0%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
                '100%': { opacity: 0, transform: 'translateX(-50%) translateY(20px)' }
              }
            }
          }}
        />
      </Box>
    </Box>
  );
}