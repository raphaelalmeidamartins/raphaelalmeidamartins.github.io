import React from 'react';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'primary.dark' }}>
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
          <Icon
            size="large"
            LinkComponent="a"
            href="https://github.com/raphaelalmeidamartins"
            target="_blank"
            sx={{
              color: 'white',
              fontSize: '1.8rem',
              margin: '0 6px',
            }}
          >
            <FaGithubAlt />
          </Icon>
          <Icon
            size="large"
            LinkComponent="a"
            href="https://www.linkedin.com/in/raphaelameidamartins/"
            target="_blank"
            color="secondary"
            sx={{
              color: 'white',
              fontSize: '1.8rem',
              margin: '0 6px',
            }}
          >
            <FaLinkedinIn />
          </Icon>
          <Icon
            size="large"
            LinkComponent="a"
            href="https://www.linkedin.com/in/raphaelameidamartins/"
            target="_blank"
            color="secondary"
            sx={{
              color: 'white',
              fontSize: '1.8rem',
              margin: '0 6px',
            }}
          >
            <MdMail />
          </Icon>
        </Box>
        <Typography
          variant="body1"
          element="p"
          align="center"
          paragraph
          sx={{ color: 'white' }}
        >
          2022 © Raphael Martins. Alguns direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
