import React from 'react'
import "./footer.css"
import {BsGithub, BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">My Logo</a>

      <ul className="permalinks">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/skylin555/" className="icon" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Vitamin-Ccc" className="icon" target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sky Lin's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer