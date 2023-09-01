import { skills } from "../data/skills";
import TechSkill from "./TechSkill";

const Tech = () => {

  return (
    <section id="technologies">
      <h2>Skills and Abilities</h2>
      <div>
        {
          skills.map((skill, index) => (
            <div className="stack">
              <div>
                  <TechSkill key={index} data={skill.content} title={skill.title}/>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Tech
