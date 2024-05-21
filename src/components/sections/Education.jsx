import Section from "../Section";
import { education } from "../../../cv";
import '../../assets/Education.css';

const Education = () => {
  return (
    <Section title="Educación">
      <ul>
        {education.map(({ institution, startDate, endDate, area }) => {
          const startYear = new Date(startDate).getFullYear();
          const endYear =
            endDate != null ? new Date(endDate).getFullYear() : "Actual";
          const years = `${startYear} - ${endYear}`;

          return (
            <li key={area}>
              <article>
                <header>
                  <div>
                    <h3>{institution}</h3>
                  </div>

                  <time>{years}</time>
                </header>

                <footer>
                  <p>{area}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Education;
