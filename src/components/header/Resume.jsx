import React from "react";
import CV from "../../images/Sky_Lin.pdf"

const Resume = () => {
  return (
    <div className="resume">
      <a href={CV} className="btn" download>
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">Let's Chat</a>
    </div>
  );
};

export default Resume;
