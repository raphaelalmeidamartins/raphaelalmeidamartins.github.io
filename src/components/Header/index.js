import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/system/Container';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup variant="text">
          <Button onClick={ () => navigate('/') } size="large" sx={{ color: 'white' }}>Home</Button>
          <Button onClick={ () => navigate('/about') } size="large" sx={{ color: 'white' }}>Sobre</Button>
          <Button onClick={ () => navigate('/projects') } size="large" sx={{ color: 'white' }}>Projetos</Button>
          <Button onClick={ () => navigate('/contact') } size="large" sx={{ color: 'white' }}>Contato</Button>
        </ButtonGroup>
      </Container>
    </AppBar>
  );
}

export default Header;
