import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start mb-10 md:fixed md:max-w-[10rem]">
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
        className="text-2xl mb-2 md:mb-5"
      >
        Baistan Tashkulov
      </NavLink>
      <div className="flex md:flex-col">
        <NavLink
          className="font-semibold mr-3 md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to="/projects"
        >
          projects
        </NavLink>
        <NavLink
          className="font-semibold mr-3 md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to="/contacts"
        >
          contacts
        </NavLink>
        <a
          href="https://github.com/gapcloser"
          target="_blank"
          rel="noreferrer"
          className="font-semibold"
        >
          github
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
