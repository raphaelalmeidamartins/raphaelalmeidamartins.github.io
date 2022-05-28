import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projectsData';

function Projects() {
  const [filter, setFilter] = useState('All');

  useEffect(() => setFilter('All'), []);

  const returnFilteredProjects = () => {
    return projectsData
      .filter(({ type }) => type === filter || filter === 'All');
  };

  return (
    <Container
      sx={{
        paddingBottom: '52px',
        paddingTop: '52px',
      }}
    >
      <Typography variant="h3" element="h1" align="center" gutterBottom>
        Meus projetos
      </Typography>
      <ButtonGroup>
        <Button onClick={ () => setFilter('All') }>All</Button>
        <Button onClick={ () => setFilter('Front-end') }>Front-end</Button>
        <Button onClick={ () => setFilter('Back-end') }>Back-end</Button>
      </ButtonGroup>
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ marginTop: '18px' }}
      >
        {returnFilteredProjects()
          .map((project) => (
            <Grid item xs={12} sm={4} md={4} key={project.id}>
              <ProjectCard key={project.id} {...project} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Projects;
