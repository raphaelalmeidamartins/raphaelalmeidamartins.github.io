import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projectsData';

function Projects() {
  return (
    <main>
      {projectsData.map((project) => (
        <ProjectCard key={ project.id } {...project} />
      ))}
    </main>
  );
}

export default Projects;
