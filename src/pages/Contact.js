import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

export default function Contact() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
        <TextField label="Name" fullWidth />
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Message" multiline rows={4} fullWidth />
        <Button variant="contained" type="submit">Send Message</Button>
      </Box>
    </Container>
  );
}
