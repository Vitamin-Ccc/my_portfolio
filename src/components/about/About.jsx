import React from "react";
import "./about.css";
import { SlGraduation } from "react-icons/sl";
import { BsFolderCheck } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
import ME from "../../images/me.jpeg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SlGraduation className="about__icon" />
              <h5>Education</h5>
              <small>
                BS in Information Systems, Certificate in Full-Stack Web
                Development
              </small>
            </article>
            <article className="about__card">
              <AiOutlineIdcard className="about__icon" />
              <h5>Work Experience</h5>
              <small>Freelance Web Developer</small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>
                Slurp Boba, Memo App, Gericht Restaurant
              </small>
            </article>
          </div>

          <p>
            Hi, I am currently looking for an opportunity in software engineering. 
            I'm working on the Gericht Restaurant project and Memo App right now, once they're done I will have a live demo for them so stay tuned for those projects! Please feel free to contact
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
