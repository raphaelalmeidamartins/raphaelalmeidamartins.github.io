import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container';

function Contact() {
  return (
    <Container
      component="main"
      sx={{
        paddingBottom: '52px',
        paddingTop: '104px',
      }}
    >
      <Typography variant="h3" element="h1" align="center" gutterBottom>
        Contato
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          display: 'flex',
          flexDirection: 'column',
        }}
        action="https://formsubmit.co/raphael.almeida.martins@gmail.com"
        method="POST"
        autoComplete="off"
      >
        <FormControl sx={{ display: 'flex' }}>
          <TextField
            label="Nome"
            name="name"
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Email"
            name="email"
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Assunto"
            name="subject"
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Mensagem"
            name="message"
            rows="10"
            maxLength="1000"
            multiline
            required
          />
        </FormControl>
        <FormControl>
          <Button type="submit" variant="contained" size="large" sx={{ marginTop: '0.7em' }}>
            Enviar
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}

export default Contact;
