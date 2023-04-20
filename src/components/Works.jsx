import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { useEffect } from 'react';
import { projects } from "../data";
import { stagger } from '../data/variants';

const Card = ({project, index}) => {
  const controls = useAnimation()
  
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
      }, [controls, inView])

  return (
    <Tilt>
    <motion.div
    ref={ref}
    variants={stagger(index)}
    initial='hidden'
    animate={controls}
    className="project">
    <div>
        <div className="project_links">
        {
          project.links.map((item, index) => (
            (item.source)
            ? <a href={item.source} key={index} style={{ backgroundColor: '#eee' }}><img src="/socials/github-sign.png" alt=""/></a>
            : <a href={item.live} key={index}><img src="/logos/internet.png" alt=""/></a>
          ))
        }
        </div>
        <img src={project.image} alt="project.name"/>
      </div>
      <h4>{project.name}</h4>
      <h6>{project.stack}</h6>
      <p>{project.description}</p>
      <ul className="techs">
        {
          project.tech.map((item, index) => (
            <li key={index} style={{color: item.color}}>#&nbsp;{item.name}</li>
          ))
        }
      </ul>
    </motion.div>
    </Tilt>
  )
}

const Works = () => {
  return (
    <section id="works">
      <h2>My Projects</h2>
      <div id="projects">
        {
          projects.map((project, index) => (
            <Card key={index} project={project} index={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Works
