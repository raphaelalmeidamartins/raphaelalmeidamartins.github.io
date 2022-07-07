import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Wrapper from '../../components/Wrapper';

function Home() {
  return (
    <Wrapper sectionId="home" minHeight="100vh">
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          minHeight: '90vh',
          width: '100%',
        }}
      >
        <Typography
          variant="h1"
          element="h1"
          align="left"
          sx={{ fontFamily: 'Righteous' }}
        >
          Raphael Martins
        </Typography>
        <Typography
          variant="h3"
          element="p"
          align="left"
          paragraph
          sx={{ fontFamily: 'Righteous' }}
        >
          Web Developer
        </Typography>
      </Box>
    </Wrapper>
  );
}

export default Home;
