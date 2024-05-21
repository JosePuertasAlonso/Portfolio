import Section from "../Section";
import { work } from "../../../cv";
import '../../assets/Experience.css';

const Experience = () => {
  return (
    <Section title="Experiencia laboral">
      <ul>
        {work.map(
          ({
            name,
            startDate,
            endDate,
            position,
            summary,
            highlights,
            url,
          }) => {
            const startYear = new Date(startDate).getFullYear();
            const endYear =
              endDate != null ? new Date(endDate).getFullYear() : "Actual";

            return (
              <li>
                <article>
                  <header>
                    <div>
                      <h3>
                        <a href={url} title={`Ver ${name}`} target="_blank">
                          {name}
                        </a>
                      </h3>
                      <h4>{position}</h4>
                    </div>

                    <div>
                      <time datetime={startDate} data-title={startDate}>
                        {startYear}
                      </time>
                      {" - "}
                      <time datetime={endDate} data-title={endDate}>
                        {endYear}
                      </time>
                    </div>
                  </header>

                  <footer>
                    <p>{summary}</p>
                  </footer>
                </article>
              </li>
            );
          }
        )}
      </ul>
    </Section>
  );
};

export default Experience;
