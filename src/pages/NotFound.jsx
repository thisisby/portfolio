import React from "react";

import Title from "../components/Title";
import { Link } from "react-router-dom";
import Transition from "../features/Transition";

const NotFound = () => {
  return (
    <Transition>
      <Title title="Oh No! Error 404 💀" />
      <p className="mb-2">Dude, where are you going?</p>
      <Link to="/" className="underline">
        Go home
      </Link>
    </Transition>
  );
};

export default NotFound;
