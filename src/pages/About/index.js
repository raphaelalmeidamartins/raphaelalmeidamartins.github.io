import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import me from '../../assets/other-images/me.jpg';
import Skills from '../../components/Skills';
import Wrapper from '../../components/Wrapper';

function About() {
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
                borderStyle: 'dotted double none',
                borderColor: 'background.default',
                borderRadius: '50%',
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
                  borderRadius: '50%',
                  maxWidth: '90%',
                  margin: '18px',
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={8}>
            <Typography variant="h2" element="h1" align="left" gutterBottom>
              Olá,
            </Typography>
            <Typography variant="body1" element="p" align="left" paragraph>
              sou Raphael Martins desenvolvedor Web Jr. em formação. Escolhi a
              área de programação porque acredito que a tecnologia é uma
              ferramenta capaz de mudar o mundo para melhor levando informação e
              oportunidades.{' '}
              <strong>Eu quero fazer parte desta mudança.</strong>
            </Typography>
            <Typography variant="body1" element="p" align="left" paragraph>
              Antes de descobrir minha aptidão por desenvolvimento de software,
              fiz um curso técnico em Design Gráfico e me formei em Gestão
              Financeira. Apesar de não ter seguido carreira em nenhuma dessas
              áreas, essa bagagem me proporciona alguns diferenciais como
              programador. O contato com design me trouxe uma sensibilidade
              estética mais apurada que facilita meu trabalho com CSS e
              construção de interfaces. Enquanto meu contato com matemática
              financeira e estatística ajuda na lógica dos meus algorítimos.
            </Typography>
            <Typography variant="body1" element="p" align="left" paragraph>
              Sou uma pessoa bastante criativa, com iniciativa e perfil de
              liderança. Entre os valores que mais prezo estão o{' '}
              <strong>comprometimento e a colaboração.</strong>
            </Typography>
          </Grid>
        </Grid>
        <Skills />
      </Wrapper>
    </Box>
  );
}

export default About;
