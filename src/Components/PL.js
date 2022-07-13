import React from "react";
import html from "../assets/html-5.png";
import css from "../assets/css3.png";
import javascript from "../assets/javascript.png";

const Rename = () => {
  return (
    <ul>
      <li>
        <img src={html} />
      </li>
      <li>
        <img src={css} />
      </li>
      <li>
        <img src={javascript} />
      </li>
    </ul>
  );
};

export default Rename;
