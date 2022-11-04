import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Social = () => {
  return (
    <div className="social__media">
      <a href="https://www.linkedin.com/in/skylin555/" className="icon" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Vitamin-Ccc" className="icon" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default Social