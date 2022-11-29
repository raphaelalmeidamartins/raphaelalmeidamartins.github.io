import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container';
import * as React from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { AppContext } from '../../context';

function Footer() {
  const { lang } = React.useContext(AppContext);

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container
        component="main"
        sx={{
          paddingBottom: '26px',
          paddingTop: '26px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '13px',
          }}
        >
          <IconButton
            size="large"
            component="a"
            href="https://github.com/raphaelalmeidamartins"
            target="_blank"
            title="Github"
            sx={{
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'text.primary',
              color: 'text.primary',
              fontSize: '1.8rem',
              margin: '0 6px',
            }}
          >
            <FaGithubAlt />
          </IconButton>
          <IconButton
            size="large"
            component="a"
            href="https://www.linkedin.com/in/raphaelameidamartins/"
            target="_blank"
            color="secondary"
            title="Linkedin"
            sx={{
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'text.primary',
              color: 'text.primary',
              fontSize: '1.8rem',
              margin: '0 6px',
            }}
          >
            <FaLinkedinIn />
          </IconButton>
          <IconButton
            size="large"
            component="a"
            href="mailto:raphael.almeida.martins@gmail.com"
            target="_blank"
            color="secondary"
            title="Email"
            sx={{
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'text.primary',
              color: 'text.primary',
              fontSize: '1.8rem',
              margin: '0 6px',
            }}
          >
            <MdMail />
          </IconButton>
        </Box>
        {lang === 'BR' ? (
          <Typography variant="body1" element="p" align="center" paragraph>
            2022 © Raphael Martins. Alguns direitos reservados
            <br />
            Desenvolvido com React.js, MUI e Emotion.js
            <br />
            SVG Background por{' '}
            <a
              style={{ color: 'white' }}
              target="_blank"
              href="https://bgjar.com"
              rel="noreferrer"
            >
              BGJar
            </a>
          </Typography>
        ) : (
          <Typography variant="body1" element="p" align="center" paragraph>
            2022 © Raphael Martins. Some rights reserved
            <br />
            Developed with React.js, MUI and Emotion.js
            <br />
            SVG Background by{' '}
            <a
              style={{ color: 'white' }}
              target="_blank"
              href="https://bgjar.com"
              rel="noreferrer"
            >
              BGJar
            </a>
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default Footer;
