import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projectsData';

function Projects() {
  const [filter, setFilter] = useState('All');

  useEffect(() => setFilter('All'), []);

  const returnFilteredProjects = () => {
    return projectsData.filter(
      ({ type }) => type === filter || filter === 'All'
    );
  };

  return (
    <>
      <Typography variant="h3" element="h1" align="center" gutterBottom>
        Meus projetos
      </Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}
      >
        <ButtonGroup>
          <Button onClick={() => setFilter('All')}>All</Button>
          <Button onClick={() => setFilter('Front-end')}>Front-end</Button>
          <Button onClick={() => setFilter('Back-end')}>Back-end</Button>
        </ButtonGroup>
      </Box>
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ marginTop: '18px' }}
      >
        {returnFilteredProjects().map((project) => (
          <Grid item xs={12} sm={4} md={4} key={project.id}>
            <ProjectCard key={project.id} {...project} />
          </Grid>
        ))}
        {Boolean(!returnFilteredProjects().length) && (
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="body1" align="center" paragraph>
              Ainda não publiquei projetos de {filter}
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Projects;
