import { useState } from 'react'
import Menu from '../components/Menu'
import { buttons } from "../data"
import { logo } from "../data"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    if(isOpen) {
      document.getElementById('menu').style.top = '-150px'
    } else {
      document.getElementById('menu').style.top = '80px'
    }
  }

  return (
    <>
    <nav className="nav" id='navigation'>
      <div>
        <div>
          <a href='#landing'><img src={logo[0].img} alt="Solly"/></a>
          <p><span id='s'>S</span>olly<span id="title"> | Web Developer</span></p>
        </div>
        <div id='links'>
          <a href='#about'>About</a>
          <a href='#works'>Projects</a>
          <a href='#contactMe'>Contact</a>
          <a href='#education'>Education</a>
        </div>
        <div id='close'>
          {
            (isOpen)
              ? <img onClick={() => {
                setIsOpen(!isOpen)
                toggleMenu()
              }} src={buttons.close} alt="close"/>
              : <img onClick={() => {
                setIsOpen(!isOpen)
                toggleMenu()
              }} src={buttons.open} alt="open"/>
          }
        </div>
      </div>
    </nav>
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Nav
