import { useState } from 'react'
import { buttons } from "../data"
import { logo } from "../data"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="nav">
      <div>
        <div>
          <a href='.nav'><img src={logo[0].img} alt="Solly"/></a>
          <p><span id='s'>S</span>olly<span id="title"> | Web Developer</span></p>
        </div>
        <div id='links'>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
          <p>Education</p>
        </div>
        <div id='close'>
          {
            (isOpen)
              ? <img onClick={() => setIsOpen(!isOpen)} src={buttons.close} alt="close"/>
              : <img onClick={() => setIsOpen(!isOpen)} src={buttons.open} alt="open"/>
          }
      {console.log(isOpen)}
          
        </div>
      </div>
    </nav>
  )
}

export default Nav
