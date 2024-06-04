import Section from "../Section";
import {Html as HTML} from "../../icons/Html";
import {Css as CSS} from "../../icons/Css";
import {javascript as JavaScript} from "../../icons/javascript";
import {react as React} from "../../icons/react";
import {sql as SQL} from "../../icons/sql";
import {git as Git} from "../../icons/git";
import {Java} from "../../icons/Java";
import '../../assets/Skills.css';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const SKILLS_ICONS = {
    Java,
    HTML,
    CSS,
    JavaScript,
    React,
    SQL,
    Git,
  };

  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true });

  return (
    <Section title={t("sections.skills")}>
      <ul className="ul-skills">
        {skills.map(({ name, level }) => {
          const iconName = name === "Next.js" ? "Next" : name;
          const Icon = SKILLS_ICONS[iconName];

          return (
            <li className="li-skills" key={name}>
              {Icon && <Icon />} <span>{name} - {level}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Skills;
