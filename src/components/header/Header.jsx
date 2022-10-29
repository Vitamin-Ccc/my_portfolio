import React from "react";
import "./header.css";
import Resume from "./Resume";
import Social from "./Social";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>Sky Lin</h1>
        <h5>'s Portfolio</h5>
        <h5 className="text-light">Fullstack Developer</h5>
        <Resume />
        <Social />
        <div className="me">
          {/* a picture of myself */}
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
