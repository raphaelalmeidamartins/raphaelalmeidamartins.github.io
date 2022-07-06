import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/system/Container';

function Header() {
  return (
    <AppBar
      sx={{
        padding: '4px 0',
      }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'right' }}>
        <ButtonGroup component="nav" variant="text">
          <Button
            component="a"
            href="#home"
            size="large"
            sx={{ color: 'white' }}
          >
            Home
          </Button>
          <Button
            component="a"
            href="#about"
            size="large"
            sx={{ color: 'white' }}
          >
            Sobre
          </Button>
          <Button
            component="a"
            href="#projects"
            size="large"
            sx={{ color: 'white' }}
          >
            Projetos
          </Button>
          <Button
            component="a"
            href="#contact"
            size="large"
            sx={{ color: 'white' }}
          >
            Contato
          </Button>
        </ButtonGroup>
      </Container>
    </AppBar>
  );
}

export default Header;
