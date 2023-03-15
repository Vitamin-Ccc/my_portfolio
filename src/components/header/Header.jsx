import React from "react";
import "./header.css";
import Resume from "./Resume";
import Social from "./Social";
import ME from "../../images/me Small.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>Sky Lin's</h1>
        <h5>Portfolio</h5>
        <h5 className="text-light">Web Developer/Software Engineer</h5>
        <Resume />
        <Social />
        <div className="me">
          <img src={ME} alt="My Image" />
        </div>

        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
