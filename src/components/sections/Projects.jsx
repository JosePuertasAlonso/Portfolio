import Section from "../Section";
import "../../assets/Projects.css";
import { projects } from "../../../cv";
import { Github } from "../../icons/Github";

const Projects = () => {
  return (
    <Section title="Proyectos">
      <ul>
        {projects.map(({ url, description, highlights, name, github }) => {
          return (
            <li key={name}>
              <article>
                <header>
                  <h3>
                    {name}
                    {github && (
                      <a
                        className="github-code-link"
                        href={github}
                        target="_blank"
                        title={`Ver código fuente del proyecto ${name}`}
                      >
                        <Github />
                      </a>
                    )}
                  </h3>
                </header>
                <p>{description}</p>
                <footer>
                  {highlights.map((highlight) => {
                    return <span key={highlight}>{highlight}</span>;
                  })}
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Projects;
