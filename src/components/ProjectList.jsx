import React from "react";
import Heading from "./Heading";
import ProjectItem from "./ProjectItem";

const frontData = [
  {
    id: 0,
    title: "To-do list web application",
    link: "https://listtodo-app.netlify.app/",
    date: "May 20, 2021",
  },
  {
    id: 1,
    title: "Music player",
    link: "https://playboii.netlify.app/",
    date: "June 29, 2021",
  },
  {
    id: 2,
    title: "My Portfolio web page",
    link: "https://watts-en.netlify.app/",
    date: "November 7, 2021",
  },
  {
    id: 3,
    title: "Notes web application",
    link: "https://notts.netlify.app/",
    date: "September 10, 2021",
  },
  {
    id: 4,
    title: "Game blogging web application",
    link: "https://monster-pay.netlify.app/",
    date: "June 13, 2021",
  },
];

const javaData = [
  {
    id: 0,
    title: "Adventure Game",
    link: "https://github.com/gapcloser/AdventureGame",
    date: "January 7, 2022",
  },
  {
    id: 1,
    title: "Terminal game against PC",
    link: "https://github.com/gapcloser/Java-terminal-game",
    date: "December 16, 2021",
  },
];

const backData = [
  {
    id: 0,
    title: "Customer Tracker",
    link: "https://github.com/gapcloser/Customer_Tracker",
    date: "April 18, 2022",
  },
];

const ProjectList = () => {
  return (
    <div>
      <Heading title="Front-end" />
      {frontData.map((data) => (
        <ProjectItem key={data.id} data={data} />
      ))}
      <br />
      <Heading title="Java" />
      {javaData.map((data) => (
        <ProjectItem key={data.id} data={data} />
      ))}
      <br />
      <Heading title="Back-end" />
      {backData.map((data) => (
        <ProjectItem key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ProjectList;
