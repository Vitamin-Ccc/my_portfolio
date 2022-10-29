import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Social = () => {
  return (
    <div className="social__media">
      <a href="https://www.linkedin.com/in/skylin555/" className="icon"><BsLinkedin /></a>
      <a href="https://github.com/Vitamin-Ccc" className="icon"><BsGithub /></a>
    </div>
  )
}

export default Social