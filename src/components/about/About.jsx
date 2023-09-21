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
                PSA10, Slurp Boba, Memo App, Gericht Restaurant
              </small>
            </article>
          </div>

          <p>
          Hi, I am an aspiring software engineer passionate about full-stack development. 
          My dedication to sharpening my Python, TypeScript, and iOS development skills reflects 
          my commitment to staying at the forefront of technological advancements. 
          I am excited about the prospect of contributing to innovative projects and 
          eager to start a rewarding career as a software engineer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
