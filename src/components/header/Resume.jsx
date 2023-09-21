import React from "react";
import CV from "../../images/UpdatedResume_SkyLin0316.pdf"

const Resume = () => {
  return (
    <div className="resume">
      <a href={CV} className="btn" download>
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">Let's Connect</a>
    </div>
  );
};

export default Resume;
