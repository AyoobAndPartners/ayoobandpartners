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
  InputBase,
  useMediaQuery,
  useTheme,
  Collapse,
  Fade,
  Slide
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Phone,
  Water,
  Close,
  ArrowForward
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export default function ModernNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Handle scroll effect
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
        background: scrolled 
          ? 'rgba(15, 23, 42, 0.95)' 
          : 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled 
          ? '1px solid rgba(148, 163, 184, 0.1)' 
          : '1px solid rgba(148, 163, 184, 0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: scrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.12)' 
          : '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, minHeight: '60px' }}>
          
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(59, 130, 246, 0.25)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-1px) scale(1.02)',
                  boxShadow: '0 6px 20px rgba(59, 130, 246, 0.3)',
                },
              }}
            >
              <Water sx={{ color: 'white', fontSize: 20 }} />
            </Box>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateX(2px)',
                },
              }}
            >
              Aqua Shield Oman
            </Typography>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navLinks.slice(0, -1).map((link) => (
                <Button
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: isActiveLink(link.path) ? '#3b82f6' : '#e2e8f0',
                    fontWeight: isActiveLink(link.path) ? 600 : 500,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:hover': {
                      color: '#3b82f6',
                      '&::after': {
                        width: '80%',
                      },
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Collapse in={searchOpen} orientation="horizontal" timeout={400}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      bgcolor: 'rgba(30, 41, 59, 0.8)',
                      borderRadius: 2,
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      mr: 1,
                      width: 240,
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:focus-within': {
                        borderColor: '#3b82f6',
                        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
                    <InputBase
                      placeholder="Search products..."
                      sx={{
                        flex: 1,
                        px: 3,
                        py: 1,
                        fontSize: '0.95rem',
                        color: '#e2e8f0',
                        '&::placeholder': {
                          color: '#94a3b8',
                        },
                      }}
                      autoFocus
                    />
                  </Box>
                </Collapse>
                <IconButton
                  onClick={() => setSearchOpen(!searchOpen)}
                  sx={{
                    color: searchOpen ? '#3b82f6' : '#94a3b8',
                    bgcolor: searchOpen ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      color: '#3b82f6',
                      bgcolor: 'rgba(59, 130, 246, 0.1)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            )}
            
            <Button
              variant="contained"
              startIcon={<Phone />}
              endIcon={<ArrowForward sx={{ ml: 0.5, transition: 'transform 0.3s ease' }} />}
              component={Link}
              to="/contact"
              sx={{
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 2,
                px: 3,
                py: 1,
                boxShadow: '0 4px 16px rgba(59, 130, 246, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  transition: 'left 0.5s ease',
                },
                '&:hover': {
                  background: 'linear-gradient(135deg, #2563eb, #0891b2)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 6px 20px rgba(59, 130, 246, 0.35)',
                  '&::before': {
                    left: '100%',
                  },
                  '& .MuiSvgIcon-root:last-child': {
                    transform: 'translateX(2px)',
                  },
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Contact Us
            </Button>

            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  color: '#e2e8f0',
                  bgcolor: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    color: '#3b82f6',
                    bgcolor: 'rgba(59, 130, 246, 0.1)',
                    transform: 'translateY(-1px)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
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
        SlideProps={{
          timeout: 400,
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
                  letterSpacing: '-0.02em',
                }}
              >
                Menu
              </Typography>
              <IconButton 
                onClick={() => setDrawerOpen(false)} 
                sx={{
                  color: '#94a3b8',
                  bgcolor: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  '&:hover': {
                    color: '#ef4444',
                    bgcolor: 'rgba(239, 68, 68, 0.1)',
                    borderColor: 'rgba(239, 68, 68, 0.3)',
                    transform: 'rotate(90deg)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Close />
              </IconButton>
            </Box>
          </Slide>
          
          <List sx={{ '& .MuiListItem-root': { mb: 2 } }}>
            {navLinks.map((link, index) => (
              <Fade 
                key={link.label} 
                in={drawerOpen} 
                timeout={300} 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ListItem
                  component={Link}
                  to={link.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: 3,
                    bgcolor: isActiveLink(link.path) 
                      ? 'rgba(59, 130, 246, 0.1)' 
                      : 'transparent',
                    border: '1px solid',
                    borderColor: isActiveLink(link.path) 
                      ? 'rgba(59, 130, 246, 0.3)' 
                      : 'rgba(148, 163, 184, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                      transition: 'left 0.5s ease',
                    },
                    '&:hover': {
                      bgcolor: 'rgba(59, 130, 246, 0.1)',
                      borderColor: 'rgba(59, 130, 246, 0.3)',
                      transform: 'translateX(8px)',
                      '&::before': {
                        left: '100%',
                      },
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: isActiveLink(link.path) ? 600 : 500,
                      fontSize: '1.1rem',
                      color: isActiveLink(link.path) ? '#3b82f6' : '#e2e8f0',
                      transition: 'color 0.3s ease',
                    }}
                  />
                  {isActiveLink(link.path) && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                      }}
                    />
                  )}
                </ListItem>
              </Fade>
            ))}
          </List>

          {/* Mobile Search */}
          <Fade in={drawerOpen} timeout={300} style={{ transitionDelay: '400ms' }}>
            <Box sx={{ mt: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: 'rgba(30, 41, 59, 0.8)',
                  borderRadius: 3,
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:focus-within': {
                    borderColor: '#3b82f6',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                  }
                }}
              >
                <SearchIcon sx={{ color: '#94a3b8', ml: 2 }} />
                <InputBase
                  placeholder="Search products..."
                  sx={{
                    flex: 1,
                    px: 2,
                    py: 1.5,
                    fontSize: '0.95rem',
                    color: '#e2e8f0',
                    '&::placeholder': {
                      color: '#94a3b8',
                    },
                  }}
                />
              </Box>
            </Box>
          </Fade>
        </Box>
      </Drawer>
    </AppBar>
  );
}