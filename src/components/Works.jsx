import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import projects from '../data/projects'

const Card = ({ project, index }) => {
  const [isLarge, setIsLarge] = useState(false)
  console.log(isLarge)
  const controls = useAnimation()

  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <>
      <div
        ref={ref}
        onBlur={() => setIsLarge(false)}
        className={`project ${isLarge ? 'modalOn' : ''}`}>
        {isLarge && (
          <button
            onClick={() => setIsLarge(false)}
            id='closeModal'>
            &#10006;
          </button>
        )}
        <img
          id='project_image'
          src={project.image}
          alt='project.name'
        />
        <h4 id='project_name'>{project.name}</h4>
        <h4 id='project_stack'>{project.stack} Application</h4>
        <p id='project_description'>{project.description}</p>
        {isLarge ? (
          <div id='project_languages'>
            <h6>{project.languages.length > 1 ? 'Languages' : 'Language'}</h6>
            <div>
              {project.languages.map(language => (
                <img
                  className='project_language'
                  src={language.logo}
                  alt={language.name}
                />
              ))}
            </div>
          </div>
        ) : null}
        {project.tech.length > 0 ? (
          <div id='project_tech'>
            <h6>{project.tech.length > 1 ? 'Technologies' : 'Technology'}</h6>
            <ul className='techs'>
              {project.tech.map((tech, index) => (
                <li key={index}>
                  <img
                    className='tech_logo'
                    src={tech.logo}
                    alt={tech.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {isLarge ? (
          <div id='project_links'>
            <h6>Project Links</h6>
            <div>
              {project.links.map(link => (
                <>
                  {link.source ? (
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href={link.source}>
                      {`${link.title}`}
                      <img
                        src='/technologies/github.svg'
                        alt='GitHub'
                      />
                    </a>
                  ) : (
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href={link.live}>
                      Live Demo
                      <img
                        src='/logos/internet.png'
                        alt='Live'
                      />
                    </a>
                  )}
                </>
              ))}
            </div>
          </div>
        ) : null}
        {!isLarge && (
          <button
            onBlur={() => setIsLarge(false)}
            className='toggleModal'
            onClick={() => setIsLarge(!isLarge)}>
            See More
          </button>
        )}
      </div>
      {isLarge ? (
        <div
          onClick={() => setIsLarge(false)}
          className={`${isLarge ? 'overlay_active' : ''}`}
          id='overlay'></div>
      ) : null}
    </>
  )
}

const Works = () => {
  return (
    <section id='works'>
      <h2>My Projects</h2>
      <h3>Full Stack Applications</h3>
      <div id='projects'>
        {projects.map((project, index) =>
          project.stack === 'Full Stack' ? (
            <Card
              key={index}
              project={project}
              index={index}
            />
          ) : null
        )}
      </div>
      <h3>Front End Applications</h3>
      <div id='projects'>
        {projects.map((project, index) =>
          project.stack === 'Front End' ? (
            <Card
              key={index}
              project={project}
              index={index}
            />
          ) : null
        )}
      </div>
      <h3>Command Line Applications</h3>
      <div id='projects'>
        {projects.map((project, index) =>
          project.stack === 'Command Line' ? (
            <Card
              key={index}
              project={project}
              index={index}
            />
          ) : null
        )}
      </div>
    </section>
  )
}

export default Works
