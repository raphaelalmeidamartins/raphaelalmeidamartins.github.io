import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container';

function About() {
  return (
    <Container
      component="main"
      sx={{
        paddingBottom: '52px',
        paddingTop: '104px',
      }}
    >
      <Typography variant="h3" element="h1" align="center" gutterBottom>
          Sobre
      </Typography>
    </Container>
  );
}

export default About;
