import Tilt from "react-parallax-tilt";
import { technologies } from "../data";

const Tech = () => {
  return (
    <section id="technologies">
      <h2>Technologies</h2>
      <div id="tech">
        {
          technologies.map((tech, index) => (
            <div className="tech" key={index}>
              <Tilt>
                <div id="techContent">
                  <div className="techImg"><img src={tech.imgUrl} alt="technology"/></div>
                  <h4>{tech.name}</h4>
                </div>
              </Tilt>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Tech
