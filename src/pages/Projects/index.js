import React from "react";
import sonicTrunfo from "../../assets/project-screenshots/sonic-trunfo.png";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
  return (
    <main>
      <ProjectCard
        screenshot={sonicTrunfo}
        title="Sonic Trunfo"
        description="Jogo de cartas estilo Super Trunfo com personagens da série Sonic"
        tools={[
          "React",
          "React Router v6",
          "Redux",
          "RTL",
          "React Icons",
          "JavaScript ES6+",
          "HTML",
          "CSS",
          "Sass",
        ]}
        repositoryLink="https://github.com/raphaelalmeidamartins/sonic-trumps"
        deployLink="https://raphaelalmeidamartins.github.io/sonic-trumps/"
      />
    </main>
  );
}

export default Projects;
