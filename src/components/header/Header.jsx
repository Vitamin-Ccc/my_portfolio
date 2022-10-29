import React from "react";
import "./header.css";
import Resume from "./Resume";
import Social from "./Social";
// import ME from "../../images/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>Sky Lin</h1>
        <h5>'s Portfolio</h5>
        <h5 className="text-light">Frontend Developer</h5>
        <Resume />
        <Social />
        <div className="me">
          {/* <img src={ME} alt="My Image" /> */}
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
