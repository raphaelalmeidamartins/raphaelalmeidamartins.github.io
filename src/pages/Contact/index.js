import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Wrapper from '../../components/Wrapper';
import { AppContext } from '../../context';

function Contact() {
  const { lang } = React.useContext(AppContext);

  return (
    <Wrapper sectionId="contact">
      <Typography
        variant="h2"
        element="h1"
        align="center"
        gutterBottom
        sx={{ marginBottom: '38px' }}
      >
        {lang === 'BR' ? 'Fale comigo' : 'Get in touch'}
      </Typography>
      <Typography variant="body1" element="p" align="center" paragraph>
        {lang === 'BR'
          ? 'Deseja saber mais alguma coisa? Preencha os campos abaixo que em breve retornarei o seu contato'
          : 'Do you want to know more about me? Send me a message below and I\'ll answer as soon as I can'}
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          display: 'flex',
          flexDirection: 'column',
          backdropFilter: 'blur(4px)'
        }}
        action="https://formsubmit.co/raphael.almeida.martins@gmail.com"
        method="POST"
        autoComplete="off"
      >
        <FormControl>
          <TextField
            variant="filled"
            label={lang === 'BR' ? 'Nome' : 'Name'}
            name="name"
            required
          />
        </FormControl>
        <FormControl>
          <TextField variant="filled" label="Email" name="email" required />
        </FormControl>
        <FormControl>
          <TextField
            variant="filled"
            label={lang === 'BR' ? 'Assunto' : 'Subject'}
            name="subject"
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="filled"
            label={lang === 'BR' ? 'Mensagem' : 'Message'}
            name="message"
            rows="10"
            maxLength="1000"
            multiline
            required
          />
        </FormControl>
        <FormControl
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
          }}
        >
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
            {lang === 'BR' ? 'Enviar contato' : 'Send message'}
          </Button>
        </FormControl>
      </Box>
    </Wrapper>
  );
}

export default Contact;
