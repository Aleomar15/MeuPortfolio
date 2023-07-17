import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiJava,
  DiMysql,
  DiReact,
  DiPython,
  DiGit,
  DiBootstrap,
} from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'

const technologies=[
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "bootstrap", name: "Bootstrarp", icon: <DiBootstrap />},
  { id: "python", name: "Python", icon: <DiPython />},
  { id: "git", name: "Git", icon: <DiGit />},

];
const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech)=>(
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit iure, sunt repellat molestias, debitis magnam veritatis voluptatum voluptatem et laboriosam amet in saepe quasi odio vel eligendi sed, adipisci optio.</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default TechnologiesContainer