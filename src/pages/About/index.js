import React from 'react';
import Typography from '@mui/material/Typography';
import Wrapper from '../../components/Wrapper';

function About() {
  return (
    <Wrapper sectionId="about">
      <Typography variant="h3" element="h1" align="left" gutterBottom>
          Olá,
      </Typography>
      <Typography variant="body1" element="p" align="left" paragraph>
          sou Raphael Martins desenvolvedor Web Jr. em formação. Escolhi a área de
          programação porque acredito que a tecnologia é uma ferramenta capaz de
          mudar o mundo para melhor levando informação e oportunidades.{' '}
        <strong>Eu quero fazer parte desta mudança.</strong>
      </Typography>
      <Typography variant="body1" element="p" align="left" paragraph>
          Antes de descobrir minha aptidão por desenvolvimento de software, fiz um
          técnico em Design Gráfico e me formei em Gestão Financeira. Apesar de
          não ter seguido carreira em nenhuma dessas áreas, essa bagagem me
          proporciona <strong>alguns diferenciais como programador</strong>. O
          contato com design me trouxe uma sensibilidade estética mais apurada que{' '}
        <strong>facilita meu trabalho com CSS</strong> e construção de
          interfaces. Enquanto meu contato com matemática financeira e estatística
          ajuda
        <strong> na lógica dos meus algorítimos</strong>.
      </Typography>
      <Typography variant="body1" element="p" align="left" paragraph>
          Sou uma pessoa bastante criativa, com iniciativa e perfil de liderança.
          Entre os valores que mais prezo estão o{' '}
        <strong>comprometimento e a colaboração.</strong>
      </Typography>
    </Wrapper>
  );
}

export default About;
