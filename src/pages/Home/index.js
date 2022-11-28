import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { RiArrowDownSLine } from 'react-icons/ri';
import Wrapper from '../../components/Wrapper';
import { AppContext } from '../../context';

function Home() {
  const { lang } = React.useContext(AppContext);

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
          align="center"
          sx={{
            fontFamily: 'MuseoModerno',
            fontSize: { xs: '3rem', sm: '3.75rem', md: '6rem' },
            fontWeight: 500,
            transition: '400ms',
          }}
        >
          Raphael Martins
        </Typography>
        <Typography
          variant="h3"
          element="p"
          align="center"
          paragraph
          sx={{
            fontFamily: 'MuseoModerno',
            fontSize: { xs: '2.125rem', sm: '3rem', md: '3.75rem' },
            transition: '400ms',
          }}
        >
          Web Developer
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
            marginTop: '18px',
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
            { lang === 'BR' ? 'Entre em contato' : 'Get in touch'}
          </Button>
          <Button
            variant="outlined"
            size="large"
            component="a"
            href={resume[lang]}
            sx={{ width: '200px', transition: '400ms' }}
          >
            { lang === 'BR' ? 'Baixar CV' : 'Download CV'}
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
          title={ lang === 'BR' ? 'Descer' : 'Descend' }
          sx={{ fontSize: '3rem' }}
        >
          <RiArrowDownSLine />
        </IconButton>
      </Box>
    </Wrapper>
  );
}

export default Home;
