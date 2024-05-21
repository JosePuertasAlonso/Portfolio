import Section from "../Section";
import {Html as HTML} from "../../icons/Html";
import {Css as CSS} from "../../icons/Css";
import {javascript as JavaScript} from "../../icons/javascript";
import {react as React} from "../../icons/react";
import {sql as SQL} from "../../icons/sql";
import {git as Git} from "../../icons/git";
import {Java} from "../../icons/Java";
import { skills } from "../../../cv";
import '../../assets/Skills.css';

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

  return (
    <Section title="Habilidades">
      <ul className="ul-skills">
        {skills.map(({ name }) => {
          const iconName = name === "Next.js" ? "Next" : name;
          const Icon = SKILLS_ICONS[iconName];

          return (
            <li className="li-skills" key={name}>
              {Icon && <Icon />} <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Skills;
