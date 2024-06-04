import Section from "../Section";
import '../../assets/Experience.css';
import { useTranslation } from "react-i18next";

const Experience = () => {

  const { t, i18n } = useTranslation();
  const work = t('work', { returnObjects: true });

  const formatDate = (date) => {
    const lang = i18n.language;
    const options = { month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString(lang, options);
  }

  return (
    <Section title={t("sections.experience")}>
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
            const startFormatted = formatDate(startDate);
            const endFormatted = endDate ? formatDate(endDate) : (i18n.language === 'es' ? t("actual") : t("current"));

            return (
              <li key={name}>
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
                      <time dateTime={startDate} data-title={startDate}>
                        {startFormatted}
                      </time>
                      {" - "}
                      <time dateTime={endDate} data-title={endDate}>
                        {endFormatted}
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
