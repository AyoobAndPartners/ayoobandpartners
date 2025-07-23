import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Fade,
  Slide
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/LogoWithText.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Service', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export default function ModernNavbar() {

  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path) => location.pathname === path;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: scrolled ? 'rgba(15, 23, 42, 0.12)' : 'rgba(15, 23, 42, 0)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(148, 163, 184, 0.1)'
          : '1px solid rgba(148, 163, 184, 0.05)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled
          ? '0 8px 32px rgba(0, 0, 0, 0.12)'
          : '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: '1200px' }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, minHeight: '60px' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, }}>
           <Box
  component="img"
  src={Logo}
  alt="Aqua Shield Oman Logo"
  onClick={() => navigate('/')}
  sx={{
    width: 60,
    height: 60,
    objectFit: 'contain',
    borderRadius: 1,
    transform: 'scale(1.3)',
    transformOrigin: 'center',
    cursor: 'pointer'
  }}
/>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navLinks.map((link) => (
                link.label === 'Contact' ? (
                  <Button
                    key={link.label}
                    component={Link}
                    to={link.path}
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                      color: '#ffffff',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.9rem',
                      px: 3,
                      py: 1,
                      borderRadius: '999px',
                      boxShadow: '0 4px 20px rgba(59,130,246,0.2)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #2563eb, #0891b2)',
                      },
                      transition: 'all 0.3s ease',
                      ml: 2
                    }}
                  >
                    {link.label}
                  </Button>
                ) : (
                  <Button
                    key={link.label}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: isActiveLink(link.path) ? '#3b82f6' : '#000911ff',
                      fontWeight: isActiveLink(link.path) ? 600 : 500,
                      textTransform: 'none',
                      fontSize: '0.9rem',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isActiveLink(link.path) ? '80%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                        borderRadius: '2px',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        color: '#3b82f6',
                        '&::after': {
                          width: '80%',
                        },
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {link.label}
                  </Button>
                )
              ))}
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: '#071f3fff',
                border: '1px solid rgba(2, 11, 23, 0.94)',
                borderRadius: 2,
              }}
            >
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          <Slide direction="left" in={drawerOpen} timeout={300}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Menu
              </Typography>
              <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#94a3b8' }}>
                <Close />
              </IconButton>
            </Box>
          </Slide>

          <List>
            {navLinks.map((link, index) => (
              <Fade key={link.label} in={drawerOpen} timeout={300} style={{ transitionDelay: `${index * 80}ms` }}>
                <ListItem
                  component={Link}
                  to={link.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: 2,
                    px: 2,
                    py: 1.5,
                    mb: 1,
                    bgcolor: isActiveLink(link.path) ? 'rgba(59,130,246,0.1)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgba(59,130,246,0.1)',
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: isActiveLink(link.path) ? 600 : 500,
                      color: isActiveLink(link.path) ? '#3b82f6' : '#e2e8f0',
                    }}
                  />
                </ListItem>
              </Fade>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
