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
      sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}
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
            sx={{
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'primary.contrastText',
              color: 'primary.contrastText',
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
            sx={{
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'primary.contrastText',
              color: 'primary.contrastText',
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
            sx={{
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'primary.contrastText',
              color: 'primary.contrastText',
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
            Background por{' '}
            <a href="https://www.svgbackgrounds.com/">SVGBackgrounds.com</a>
          </Typography>
        ) : (
          <Typography variant="body1" element="p" align="center" paragraph>
            2022 © Raphael Martins. Some rights reserved
            <br />
            Developed with React.js, MUI and Emotion.js
            <br />
            Background by{' '}
            <a href="https://www.svgbackgrounds.com/">SVGBackgrounds.com</a>
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default Footer;
