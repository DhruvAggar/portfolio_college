import React from "react";
import git from "../assets/git.png";
import sql from "../assets/sql.png";
import reactjs from "../assets/reactjs.png";

const Rename = () => {
  return (
    <ul>
      <li>
        <img src={git} alt="Git" />
      </li>
      <li>
        <img src={reactjs} alt="React" />
      </li>
      <li>
        <img src={sql} alt="SQL" />
      </li>
    </ul>
  );
};

export default Rename;
