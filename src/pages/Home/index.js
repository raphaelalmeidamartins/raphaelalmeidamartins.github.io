import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import * as React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import Wrapper from '../../components/Wrapper';
import { AppContext } from '../../context';

function Home() {
  const { lang } = React.useContext(AppContext);
  const { palette: { background } } = useTheme();

  const resume = {
    EN: 'https://drive.google.com/file/d/1QORXJLNG4Qc7Ev2rTXZL9Db-8f8s1P83/view?usp=sharing',
    BR: 'https://drive.google.com/file/d/1gJMEDO7kExFr1GhRolEGkyqfxlKQlmDI/view?usp=sharing',
  };

  return (
    <Wrapper sectionId="home" minHeight="100vh">
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          minHeight: '85vh',
          width: '100%',
        }}
      >
        <Typography
          variant="h1"
          element="h1"
          align="left"
          sx={{
            fontSize: { xs: '3.5rem', sm: '6rem', md: '7rem' },
            transition: '400ms',
            position: 'relative',
            textShadow: `8px 8px 5px ${background.default}`,
          }}
        >
          <span>Raphael</span>
          <br />
          <span style={{ marginLeft: '60px' }}>Martins</span>
          <Typography
            variant="h3"
            element="p"
            align="center"
            paragraph
            sx={{
              fontSize: { xs: '1rem', sm: '2rem', md: '2.125rem' },
              transition: '400ms',
              position: 'absolute',
              left: '30%',
              rotate: '-4deg',
              width: '100%'
            }}
          >
            Web Developer
          </Typography>
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexFlow: {
              xs: 'column nowrap',
              sm: 'row nowrap',
              md: 'row nowrap',
            },
            justifyContent: 'center',
            marginTop: { xs: '80px', sm: '140px', md: '140px' },
            transition: '400ms',
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            size="large"
            component="a"
            href="#contact"
            sx={{
              marginRight: {
                xs: '0',
                sm: '12px',
                md: '12px',
              },
              marginBottom: {
                xs: '12px',
                sm: '0',
                md: '0',
              },
              transition: '400ms',
              width: '200px',
            }}
          >
            {lang === 'BR' ? 'Entre em contato' : 'Get in touch'}
          </Button>
          <Button
            variant="outlined"
            size="large"
            component="a"
            href={resume[lang]}
            sx={{
              width: '200px',
              transition: '400ms',
              backdropFilter: 'blur(10px)',
            }}
          >
            {lang === 'BR' ? 'Baixar CV' : 'Download CV'}
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <IconButton
          component="a"
          href="#about"
          title={lang === 'BR' ? 'Descer' : 'Descend'}
          sx={{ fontSize: '3rem' }}
        >
          <RiArrowDownSLine />
        </IconButton>
      </Box>
    </Wrapper>
  );
}

export default Home;
