import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import Box from '@mui/system/Box';
import * as React from 'react';
import me from '../../assets/other-images/me.jpg';
import Skills from '../../components/Skills';
import Wrapper from '../../components/Wrapper';
import { AppContext } from '../../context';
import { motion } from 'framer-motion';

function About() {
  const { lang } = React.useContext(AppContext);
  const {
    palette: { background },
  } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <Wrapper sectionId="about">
        <Grid
          container
          spacing={{ xs: 4, sm: 4, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ paddingTop: '72px' }}
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
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
              style={{
                alignItems: 'center',
                borderWidth: '20px',
                borderStyle: 'dotted double none solid',
                borderColor: background.paper2,
                borderRadius: '40px',
                display: 'flex',
                height: 'fit-content',
                justifyContent: 'center',
                width: 'fit-content',
                rotate: '-3deg',
              }}
            >
              <img
                src={me}
                alt="Me"
                style={{
                  borderRadius: '40px',
                  maxWidth: '100%',
                  margin: '18px',
                  scale: '1.05',
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={4} sm={4} md={8}>
            <Paper
              elevation={3}
              component={motion.div}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
              sx={{
                backgroundColor: 'background.paper2',
                height: '100%',
                padding: '32px',
              }}
            >
              <Typography
                variant="h2"
                element="h1"
                align="left"
                gutterBottom
                sx={{ marginBottom: '38px' }}
              >
                {lang === 'BR' ? 'Olá,' : 'Hello,'}
              </Typography>
              {lang === 'BR' ? (
                <>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    sou Raphael Martins desenvolvedor Web full stack. Escolhi a
                    área de programação porque acredito que a tecnologia é uma
                    ferramenta capaz de mudar o mundo para melhor levando
                    informação e oportunidades.{' '}
                    <strong>Eu quero fazer parte desta mudança.</strong>
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    Antes de descobrir minha aptidão por desenvolvimento de
                    software, fiz um curso técnico em Design Gráfico e me formei
                    em Gestão Financeira. Apesar de não ter seguido carreira em
                    nenhuma dessas áreas, essa bagagem me proporciona alguns
                    diferenciais como programador. O contato com design me
                    trouxe uma sensibilidade estética mais apurada que facilita
                    meu trabalho com CSS e construção de interfaces. Enquanto
                    meu contato com matemática financeira e estatística ajuda na
                    lógica dos meus algorítimos.
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    Sou uma pessoa bastante criativa, com iniciativa e perfil de
                    liderança. Entre os valores que mais prezo estão o{' '}
                    <strong>comprometimento e a colaboração.</strong>
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
                    I am Raphael Martins, a full stack Web developer. I chose
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
                    prior knowledge gives me some attractive characteristics as
                    a developer. The design background is an asset while working
                    with CSS, and my experience in financial math helps me with
                    the logic of my algorithms.
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    I am a creative person with initiative. The things I value
                    the most in the work environment are{' '}
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
