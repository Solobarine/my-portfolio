import Tilt from "react-parallax-tilt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { technologies } from "../data";
import { stagger } from "../data/variants";

const Tech = () => {

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if(inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="technologies">
      <h2>Technologies</h2>
      <div id="tech">
        {
          technologies.map((tech, index) => (
            <motion.div
            ref={ref}
            variants={stagger(index)}
            initial='hidden'
            animate={controls}
            className="tech" key={index}>
              <Tilt>
                <div id="techContent">
                  <div className="techImg"><img src={tech.imgUrl} alt="technology"/></div>
                  <h4>{tech.name}</h4>
                </div>
              </Tilt>
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}

export default Tech
