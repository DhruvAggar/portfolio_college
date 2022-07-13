import React, { useState } from "react";
import PL from "./PL";
import Framework from "./Framework";
import Tools from "./Tools";
import "./css/skillset.css"

const Skillset = () => {
  const [active, setActive] = useState("programming languages");
  return (
    <div style={{border:"2px solid red"}}>
      <ul>
        <li
          onClick={() => {
            setActive("programming languages");
          }}
        >
          Programming Languages
        </li>
        <li
          onClick={() => {
            setActive("frameworks");
          }}
        >
          Frameworks
        </li>
        <li
          onClick={() => {
            setActive("tools");
          }}
        >
          Tools
        </li>
      </ul>
      {active === "programming languages" && <PL />}
      {active === "frameworks" && <Framework />}
      {active === "tools" && <Tools />}
    </div>
  );
};

export default Skillset;
