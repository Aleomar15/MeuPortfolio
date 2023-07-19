import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiJava,
  DiMysql,
  DiReact,
  DiSass,
  DiPython,
  DiGit,
  DiBootstrap,
} from 'react-icons/di'
import{SiSequelize, SiExpress} from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies=[
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Nodejs", icon: <DiNodejsSmall /> },
  { id: "express", name: "Expressjs", icon: <SiExpress /> },
  { id: "sequelize", name: "Sequelize", icon: <SiSequelize />},
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />},
  { id: "python", name: "Python", icon: <DiPython />},
  { id: "git", name: "Git", icon: <DiGit />},

];
const TechnologiesContainer = () => {
  const getText = (name) => {
    const texts = {
      HTML5: "Intermedíario",
      CSS3: "Básico/Intermedíario",
      JavaScript: "Intermedíario",
      Nodejs: "Básico/Intermedíario(Em estudo) ",
      Expressjs: "Básico/Intermedíario(Em estudo) ",
      Sequelize: "Básico/Intermedíario(Em estudo)",
      Java: "Básico/Intermedíario",
      MySQL: "Intermedíario/Avançado",
      React: "Básico",
      Sass: "Básico",
      Bootstrap: "Básico/Intermedíario",
      Python: "Básico",
      Git: "Intermedíario"
    };

    return texts[name]; 
  };
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{getText(tech.name)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer