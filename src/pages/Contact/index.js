import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Wrapper from '../../components/Wrapper';

function Contact() {
  return (
    <Wrapper sectionId="contact">
      <Typography variant="h2" element="h1" align="center" gutterBottom>
        Fale comigo
      </Typography>
      <Typography variant="body1" element="p" align="center" paragraph>
        Deseja saber mais alguma coisa? Preencha os campos abaixo que em breve retornarei o seu contato 
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
        <FormControl>
          <TextField variant="filled" label="Nome" name="name" required />
        </FormControl>
        <FormControl>
          <TextField variant="filled" label="Email" name="email" required />
        </FormControl>
        <FormControl>
          <TextField variant="filled" label="Assunto" name="subject" required />
        </FormControl>
        <FormControl>
          <TextField
            variant="filled"
            label="Mensagem"
            name="message"
            rows="10"
            maxLength="1000"
            multiline
            required
          />
        </FormControl>
        <FormControl sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              marginTop: '2.1em',
              maxWidth: '80%',
              width: '200px',
            }}
          >
            Enviar contato
          </Button>
        </FormControl>
      </Box>
    </Wrapper>
  );
}

export default Contact;
