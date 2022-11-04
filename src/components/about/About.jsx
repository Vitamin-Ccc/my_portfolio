import React from "react";
import "./about.css";
import { SlGraduation } from "react-icons/sl";
import { BsFolderCheck } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
// import ME from "../../images/me.JPG";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt="My Image" /> */}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SlGraduation className="about__icon" />
              <h5>Education</h5>
              <small>
                BS in Information Systems, Certificate in Fullstack Web
                Development
              </small>
            </article>
            <article className="about__card">
              <AiOutlineIdcard className="about__icon" />
              <h5>Work Experience</h5>
              <small>Software Support Engineer Intern at MasterControl</small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>
                Building a website for my friend's business, expecting December
                of 2022
              </small>
            </article>
          </div>

          <p>
            Hi, I graduated from a full-time fullstack web development bootcamp
            in February of 2022. I am currently looking for a junior level web
            developer or software engineer position. Please feel free to contact
            me if you are interested in knowing more about my experience and
            projects.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
