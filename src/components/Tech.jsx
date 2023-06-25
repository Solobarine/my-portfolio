
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import languages from "../data/languages";
import front_end from "../data/front_end";
import back_end from "../data/backend";
import databases from "../data/databases"
import test_tools from "../data/test_tools"
import tools from "../data/tools"
import TechSkill from "./TechSkill";

const Tech = () => {

  return (
    <section id="technologies">
      <h2>Skills and Abilities</h2>
      <div className="stack">
        <h3>Languages</h3>
        <div>
          {
            languages.map((item, index) => (
              <TechSkill key={index} data={item} index={index} />
            ))
          }
        </div>
      </div>
      <div className="stack">
        <h3>Front End</h3>
        <div>
          {
            front_end.map((item, index) => (
              <TechSkill key={index} data={item} index={index} />
            ))
          }
        </div>
      </div>
      <div className="stack">
        <h3>Back End</h3>
        <div>
        {
            back_end.map((item, index) => (
              <TechSkill key={index} data={item} index={index} />
            ))
          }
        </div>
      </div>
      <div className="stack">
        <h3>DataBases</h3>
        <div>
        {
            databases.map((item, index) => (
              <TechSkill key={index} data={item} index={index} />
            ))
          }
        </div>
      </div>
      <div className="stack">
        <h3>Testing Libraries</h3>
        <div>
        {
            test_tools.map((item, index) => (
              <TechSkill key={index} data={item} index={index} />
            ))
          }
        </div>
      </div>
      <div className="stack">
        <h3>Tools</h3>
        <div>
        {
            tools.map((item, index) => (
              <TechSkill key={index} data={item} index={index} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Tech
