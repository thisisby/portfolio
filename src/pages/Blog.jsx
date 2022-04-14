import React from "react";

import Title from "../components/Title";
import Transition from "../features/Transition";

const Blog = () => {
  return (
    <Transition>
      <Title title="Blog" />
      <p>Planning to start it soon...</p>
    </Transition>
  );
};

export default Blog;
