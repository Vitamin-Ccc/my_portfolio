import React from "react";
import "./header.css";
import Resume from "./Resume";

const Header = () => {
  return (
    <header>
      <div>
        <h5>Hey! Welcome to</h5>
        <h1>Sky Lin</h1>
        <h5>'s Portfolio</h5>
        <h5 className="text-light">Fullstack Developer</h5>
        <Resume />
      </div>
    </header>
  );
};

export default Header;
