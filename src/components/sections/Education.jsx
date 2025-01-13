import Section from "../Section";
import "../../assets/Education.css";
import { useTranslation } from "react-i18next";
import uma from "../../icons/education/uma.webp";
import unir from "../../icons/education/unir.webp";
import ual from "../../icons/education/ual.webp";

const Education = () => {
  const { t, i18n } = useTranslation();
  const education = t("education", { returnObjects: true });

  const formatDate = (date) => {
    const lang = i18n.language;
    const options = { month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString(lang, options);
  };

  const imageMap = {
    ual: ual,
    uma: uma,
    unir: unir,
  };
  return (
    <Section title={t("sections.education")}>
      <ul>
        {education.map(
          ({ institution, startDate, endDate, area, metaname }) => {
            const startYear = formatDate(startDate);
            const endYear = endDate
              ? formatDate(endDate)
              : i18n.language === "es"
              ? t("actual")
              : t("current");
            const years = `${startYear} - ${endYear}`;

            return (
              <li key={area}>
                <article>
                  <header>
                    <div>
                      <h3>{institution}</h3>
                      <time>{years}</time>
                    </div>
                    <img
                      className="logo_education"
                      src={imageMap[metaname]}
                      alt={name}
                    />
                  </header>

                  <footer>
                    <p>{area}</p>
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

export default Education;
