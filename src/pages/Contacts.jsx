import React from "react";

import Title from "../components/Title";
import Text from "../components/Text";
import Transition from "../features/Transition";

const data = [
  {
    id: 0,
    title: "Gmail",
    text: "baistan.tashkulov@gmail.com",
    link: "mailto: baistan.tashkulov@gmail.com",
  },
  {
    id: 1,
    title: "Phone / WhatsApp",
    text: "+996 (771)-390-338",
    link: "https://wa.me/+996771390338",
  },
  {
    id: 2,
    title: "Instagram",
    text: "Watts.en",
    link: "https://www.instagram.com/watts.en/",
  },
];

const Contacts = () => {
  return (
    <Transition>
      <Title title="Contacts" />
      <Text>Let's start a project together</Text>
      <br />
      <ul className="list-square">
        {data.map((x) => (
          <li key={x.id} className="text-sm mb-2">
            <b>{x.title}: </b>
            <a
              href={x.link}
              className="underline"
              rel="noreferrer"
              target="_blank"
            >
              {x.text}
            </a>
          </li>
        ))}
      </ul>
    </Transition>
  );
};

export default Contacts;
