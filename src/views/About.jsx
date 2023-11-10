import { about } from '../data'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <p>{about.pitch}</p>
      <a
        className='resumeDownload'
        href='/downloadables/Solomon_Resume.pdf'
        download="solomon's resume">
        Download Resume
      </a>
    </section>
  )
}

export default About
