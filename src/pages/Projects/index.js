import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { Reorder } from 'framer-motion';
import * as React from 'react';
import ProjectCard from '../../components/ProjectCard';
import Wrapper from '../../components/Wrapper';
import { AppContext } from '../../context';
import projectsData from '../../data/projectsData';

function Projects() {
  const [filter, setFilter] = React.useState('All');
  const [filteredProjects, setFilteredProjects] = React.useState(projectsData);

  const { lang } = React.useContext(AppContext);

  React.useEffect(() => setFilter('All'), []);

  React.useEffect(() => {
    setFilteredProjects(
      projectsData.filter(
        ({ type }) => type.includes(filter) || filter === 'All'
      )
    );
  }, [filter]);

  return (
    <Wrapper sectionId="projects" minHeight="100vh">
      <Typography variant="h2" element="h1" align="center" gutterBottom>
        {lang === 'BR' ? 'Meus projetos' : 'My work'}
      </Typography>
      <Typography variant="body1" element="p" align="center" paragraph>
        {lang === 'BR'
          ? 'Confira abaixo alguns projetos que desenvolvi na minha trajetória como desenvolvedor'
          : 'Checkout below some projects I\'ve developed'}
      </Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}
      >
        <ButtonGroup variant="contained" sx={{ marginBottom: '26px' }}>
          <Button onClick={() => setFilter('All')}>
            {lang === 'BR' ? 'Todos' : 'All'}
          </Button>
          <Button onClick={() => setFilter('Front-end')}>Front</Button>
          <Button onClick={() => setFilter('Back-end')}>Back</Button>
          <Button onClick={() => setFilter('Data Science')}>
            Data Science
          </Button>
        </ButtonGroup>
      </Box>
      <Grid
        container
        component={Reorder.Group}
        values={projectsData}
        onReorder={filteredProjects}
        spacing={{ xs: 4, sm: 4, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ marginTop: '18px' }}
      >
        {filteredProjects.map((project) => (
          <Grid
            item
            component={Reorder.Item}
            value={project}
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            xs={12}
            sm={4}
            md={4}
            key={project.id}
          >
            <ProjectCard key={project.id} {...project} />
          </Grid>
        ))}
        {Boolean(!filteredProjects.length) && (
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="body1" align="center" paragraph>
              {lang === 'BR'
                ? `Ainda não publiquei projetos de ${filter}`
                : `I haven't published ${filter} projects yet`}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
}

export default Projects;
