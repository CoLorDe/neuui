import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return(
    <div className="footer">
      <nav>
        <Link to="/neuui">Home</Link>
        <a href="https://github.com/CoLorDe/neuui">GitHub</a>
        <a href="https://colorde.github.io/">Other apps</a>
      </nav>
    </div>
  )
}

export default Footer;
