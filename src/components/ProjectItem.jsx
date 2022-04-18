import React from "react";

const ProjectItem = ({ data }) => {
  return (
    <div className="mb-2">
      <ul className="list-square">
        <li className="text-sm">
          <a
            className="underline"
            target="_blank"
            rel="noreferrer"
            href={data.link}
          >
            {data.title}
          </a>{" "}
          - {data.date}
        </li>
      </ul>
    </div>
  );
};

export default ProjectItem;
