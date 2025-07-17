import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Container>
      <Header />
      <ProductSection />
      <Testimonials />
    </Container>
  );
}

export default App;