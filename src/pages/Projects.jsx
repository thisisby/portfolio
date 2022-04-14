import React from "react";

import Title from "../components/Title";
import ProjectList from "../components/ProjectList";
import Transition from "../features/Transition";

const Projects = () => {
  return (
    <Transition>
      <Title title="Projects" />
      <ProjectList />
    </Transition>
  );
};

export default Projects;
