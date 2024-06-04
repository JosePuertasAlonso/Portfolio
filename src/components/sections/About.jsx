import { useTranslation } from "react-i18next";
import Section from "../Section";

const About = () => {
  const { t } = useTranslation();
  return (
    <Section title={t("sections.about")}>
      <p>{t("basics.summary")}</p>
    </Section>
  );
};

export default About;
