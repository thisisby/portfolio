import React from "react";

import Title from "../components/Title";
import Text from "../components/Text";
import Transition from "../features/Transition";

const Home = () => {
  return (
    <Transition>
      <Title title="About" />
      <Text>
        Hi there! 👋 My name is Baistan, and I am a full stack developer.
        <br />
        I am interested in the job role of Software Engineer where I can apply
        my technical skills in coding and software design to fulfil the clients
        requirements and augment the reputation of the company.
        <br />
        <br />
        In short: <br /> 💻 Fullstack Developer. <br /> 🎨 Frequent artist.{" "}
        <br /> 📱 Rare designer.
      </Text>
    </Transition>
  );
};

export default Home;
