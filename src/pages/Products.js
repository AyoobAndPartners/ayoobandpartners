import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  Container,
  Skeleton,
  Fade,
  useTheme,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCollection } from '../hooks/useCollection';

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
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    }
  }
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 280,
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  borderRadius: theme.spacing(3),
  textTransform: 'none',
  fontWeight: 600,
  padding: theme.spacing(1.5, 3),
  boxShadow: `0 4px 20px ${alpha('#667eea', 0.3)}`,
  '&:hover': {
    background: 'linear-gradient(45deg, #5a67d8 0%, #6b46c1 100%)',
    boxShadow: `0 8px 30px ${alpha('#667eea', 0.4)}`,
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
    background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    opacity: 0.1,
    zIndex: -1,
  }
}));

const ProductSkeleton = () => {
  const theme = useTheme();
  
  return (
    <Card sx={{ 
      height: '100%', 
      borderRadius: 2,
      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
    }}>
      <Skeleton 
        variant="rectangular" 
        height={280} 
        sx={{ 
          borderRadius: 0,
          background: `linear-gradient(90deg, ${alpha(theme.palette.grey[300], 0.3)} 0%, ${alpha(theme.palette.grey[100], 0.3)} 50%, ${alpha(theme.palette.grey[300], 0.3)} 100%)`,
        }}
      />
      <CardContent sx={{ p: 3 }}>
        <Skeleton 
          variant="text" 
          height={32} 
          sx={{ mb: 2, borderRadius: 1 }}
        />
        <Skeleton 
          variant="text" 
          height={24} 
          sx={{ mb: 1, borderRadius: 1 }}
        />
        <Skeleton 
          variant="text" 
          height={24} 
          width="60%" 
          sx={{ mb: 3, borderRadius: 1 }}
        />
        <Skeleton 
          variant="rounded" 
          height={48} 
          sx={{ borderRadius: 3 }}
        />
      </CardContent>
    </Card>
  );
};

export default function Products() {
  const products = useCollection('products');

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <HeaderContainer>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 800,
            background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          Our Products
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
          Discover our carefully curated collection of premium products designed to enhance your lifestyle
        </Typography>
      </HeaderContainer>

      <Grid container spacing={4}>
        {products.length === 0 ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in timeout={300 + index * 100}>
                <div>
                  <ProductSkeleton />
                </div>
              </Fade>
            </Grid>
          ))
        ) : (
          products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Fade in timeout={300 + index * 100}>
                <div>
                  <StyledCard>
                    <StyledCardMedia
                      component="img"
                      image={product.imageURL || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop'}
                      alt={product.name}
                    />
                    
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Typography 
                        gutterBottom 
                        variant="h6" 
                        component="h3"
                        sx={{ 
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 2,
                          lineHeight: 1.3
                        }}
                      >
                        {product.name}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ 
                          flexGrow: 1,
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>

                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <StyledButton 
                        variant="contained" 
                        fullWidth
                        size="large"
                      >
                        See Product
                      </StyledButton>
                    </CardActions>
                  </StyledCard>
                </div>
              </Fade>
            </Grid>
          ))
        )}
      </Grid>

      {products.length === 0 && (
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 600,
                mb: 2,
                color: 'text.primary'
              }}
            >
              No products found
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ maxWidth: 400, mx: 'auto' }}
            >
              We're working on adding amazing products for you! Check back soon for exciting updates.
            </Typography>
          </Box>
        </Fade>
      )}
    </Container>
  );
}