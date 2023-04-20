import { educationAndExperience } from "../data";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'

const Card = ({experience}) => {
  return (
    <div className="experienceCard">
      <VerticalTimelineElement
      contentStyle={{ color: '#eee'}}
      date={experience.year}
      icon={
        <div className="school">
          <img src={experience.logo} alt="Logo"/>
        </div>
      } 
      >
        <h3>{experience.name}</h3>
        <p>{experience.field}</p>
        <p>{experience.role}</p>
        <ul>
          {
            experience.highlights.map((point, index) => (
              <li key={index}>{point}</li>
          ))
          }
        </ul>
      </VerticalTimelineElement>
    </div>
  )
}

const Experience = () => {
  return (
    <section id="education">
      <h2>Education and Experience</h2>
      <VerticalTimeline>
        {
          educationAndExperience.map((item, index) => (
            <Card key={index} experience={item} />
          ))
        }
      </VerticalTimeline>
    </section>
  )
}

export default Experience
