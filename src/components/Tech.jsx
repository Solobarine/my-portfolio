import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { skills } from "../data/skills";
import { stagger } from '../data/variants';
import TechSkill from "./TechSkill";

const Card = ({index, skill}) => {
    const controls = useAnimation()
    
    const [ref, inView] = useInView()
  
    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
        }, [controls, inView])

  return(
    <motion.div
    style={{'transition': `${0.2 * index}`}}
    ref={ref}
    variants={stagger(index)}
    initial='hidden'
    animate={controls}
    className="stack">
        <div>
            <TechSkill key={index} data={skill.content} title={skill.title}/>
        </div>
    </motion.div>
  )
}

const Tech = () => {

  return (
    <section id="technologies">
      <h2>Skills and Abilities</h2>
      <div>
        {
          skills.map((skill, index) => (
            <div style={{'transition': `${0.2 * index}`}} className="stack">
              <div>
                  <Card key={index} skill={skill}/>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Tech
