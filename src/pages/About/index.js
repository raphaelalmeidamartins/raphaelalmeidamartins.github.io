import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import * as React from 'react';
import me from '../../assets/other-images/me.jpg';
import Skills from '../../components/Skills';
import Wrapper from '../../components/Wrapper';
import { AppContext } from '../../context';

function About() {
  const { lang } = React.useContext(AppContext);

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Wrapper sectionId="about">
        <Grid
          container
          spacing={{ xs: 3, sm: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                alignItems: 'center',
                borderWidth: '20px',
                borderStyle: 'dotted double none solid',
                borderColor: 'primary.contrastText',
                borderRadius: '40px',
                display: 'flex',
                height: 'fit-content',
                justifyContent: 'center',
                width: 'fit-content',
              }}
            >
              <img
                src={me}
                alt="Me"
                style={{
                  borderRadius: '40px',
                  maxWidth: '100%',
                  margin: '18px',
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={8}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: '#2F2440',
                height: '100%',
                padding: '18px',
              }}
            >
              <Typography variant="h2" element="h1" align="left" gutterBottom>
                {lang === 'BR' ? 'Ol??,' : 'Hello,'}
              </Typography>
              {lang === 'BR' ? (
                <>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    sou Raphael Martins desenvolvedor Web em forma????o. Escolhi a
                    ??rea de programa????o porque acredito que a tecnologia ?? uma
                    ferramenta capaz de mudar o mundo para melhor levando
                    informa????o e oportunidades.{' '}
                    <strong>Eu quero fazer parte desta mudan??a.</strong>
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    Antes de descobrir minha aptid??o por desenvolvimento de
                    software, fiz um curso t??cnico em Design Gr??fico e me formei
                    em Gest??o Financeira. Apesar de n??o ter seguido carreira em
                    nenhuma dessas ??reas, essa bagagem me proporciona alguns
                    diferenciais como programador. O contato com design me
                    trouxe uma sensibilidade est??tica mais apurada que facilita
                    meu trabalho com CSS e constru????o de interfaces. Enquanto
                    meu contato com matem??tica financeira e estat??stica ajuda na
                    l??gica dos meus algor??timos.
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    Sou uma pessoa bastante criativa, com iniciativa e perfil de
                    lideran??a. Entre os valores que mais prezo est??o o{' '}
                    <strong>comprometimento e a colabora????o.</strong>
                  </Typography>
                </>
              ) : (
                <>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    I am Raphael Martins, a Web developer in the making. I chose
                    the software development area because I believe technology
                    is a powerful tool capable of changing the world for the
                    better. <strong>I want to be a part of that.</strong>
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    Before I discovered my passion for coding, I took a Graphic
                    Design course and graduated in Financial Management.
                    Although I did not follow any of these career paths, this
                    prior knowledge gives me some attractive characteristics
                    as a developer. The design background is an asset while
                    working with CSS, and my experience in financial math
                    helps me with the logic of my algorithms.
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    I am a creative with initiative. The things I value the most
                    in the work environment are{' '}
                    <strong>commitment and teamwork.</strong>
                  </Typography>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
        <Skills />
      </Wrapper>
    </Box>
  );
}

export default About;
