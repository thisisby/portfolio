import React from "react";

import Title from "../components/Title";
import Text from "../components/Text";
import Transition from "../features/Transition";

const Home = () => {
  return (
    <Transition>
      <Title title="About 🤖" />
      <Text>
        <b>3+ years</b> of experience in Web Development. 🚀<br /> <br />
        Experienced Golang and TypeScript software engineer with broad expertise in software development and system design. 🦾 <br />
        Experience in <u>e-commerce</u>, <u>analytics</u>, and <u>automation</u> domains: working with monolithic and microservices architecture. <b>Big fan of LeetCode 🤓</b>
        <br />
        <br />
        Fast learner, able to pick up any technology satisfying business needs in a reasonable time.
        Gaining knowledge in software orchestration and developing cloud-native applications for AWS. Good troubleshooting and investigation skills.

        <br />
        <br />
        <ul style={{ listStyle: "square" }}>
          <b>Overall Stack:</b>
          <li>Golang, JavaScript/TypeScript</li>
          <li>Gin, Fiber, Express JS, Nest JS</li>
          <li>PostgreSQL, MongoDB</li>
          <li>Microservices, REST, Redis, gRPC, WebSocket, SOLID, DRY</li>
          <li>Linux, Bash, Docker</li>
          <li>Git, GitHub, GitLab, CICD, Unit testing, Swagger</li>
        </ul>
      </Text>
    </Transition>
  );
};

export default Home;
