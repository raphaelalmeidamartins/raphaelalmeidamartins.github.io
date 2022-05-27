import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projectsData';

function Projects() {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ maxWidth: '1200px' }}
      >
        {projectsData.map((project) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={project.id}
          >
            <ProjectCard key={project.id} {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
