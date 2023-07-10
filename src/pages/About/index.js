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
                    sou Raphael Martins, um <strong>desenvolvedor full stack</strong> apaixonado
                    por usar tecnologia para fazer um impacto positivo no mundo.
                    Acredito que a programação é uma área empolgante que
                    impulsiona a inovação e resolve problemas importantes.
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    Antes de descobrir minha paixão por código, cursei
                    design gráfico e me formei em gestão financeira. Essa
                    diversidade de experiências me proporciona uma perspectiva
                    única sobre a solução de problemas e uma variedade de
                    habilidades que aplico ao meu trabalho. Meu conhecimento em
                    design é útil quando trabalho com CSS, e minha formação em
                    matemática financeira me ajuda a pensar
                    os algorítimos com uma mentalidade estruturada.
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    Como uma pessoa criativa e determinada, tomo a iniciativa e
                    prospero em ambientes colaborativos que valorizam o
                    comprometimento e o trabalho em equipe. Estou sempre
                    procurando novos desafios e oportunidades para aprender e
                    crescer como profissional.
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
                    I am Raphael Martins, a <strong>full stack web developer</strong> passionate
                    about using technology to make a positive impact on the
                    world. I believe that software development is an exciting
                    field that can drive innovation and solve important
                    problems.
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    Before discovering my love for coding, I pursued a Graphic
                    Design course and graduated in Financial Management. This
                    diverse background gives me a unique perspective on
                    problem-solving and a range of skills that I apply to my
                    work. My design expertise comes in handy when working with
                    CSS, and my financial math background helps me approach
                    algorithmic challenges with a structured mindset.
                  </Typography>
                  <Typography
                    variant="body1"
                    element="p"
                    align="left"
                    paragraph
                  >
                    As a creative and driven individual, I take initiative and
                    thrive in collaborative environments that value commitment
                    and teamwork. I am constantly seeking new challenges and
                    opportunities to learn and grow as a professional.
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
