import React, { useState } from "react";
import Section from "../Section";
import "../../assets/Projects.css";
import { Github } from "../../icons/Github";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const { t, i18n } = useTranslation();
  const projects = t("projects", { returnObjects: true });
  return (
    <Section title={t("sections.projects")}>
      <ul>
        {projects.map((project) => {
          const { url, description, highlights, name, github, details } =
            project;
          return (
            <li
              key={name}
              onClick={() => openModal(project)}
              className="proyectos"
            >
              <article>
                <header style={{display: "flex", alignItems:"center"}}>
                  <h3>
                    {name}
                    {github && (
                      <a
                        className="github-code-link"
                        href={github}
                        target="_blank"
                        title={`Ver código fuente del proyecto ${name}`}
                        onClick={(e) => e.stopPropagation()} // Prevent opening the modal when clicking the link
                      >
                        <Github />
                      </a>
                    )}

                  </h3>
                  {url && (
                      <a className="deploy-button"
                      target="_blank"
                      href={url}
                      onClick={(e) => e.stopPropagation()} 
                      >
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span>{i18n.language === 'es' ? 'Ver' : 'See'}</span>
                      </a>
                    )}
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
      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className={`custom-modal-content ${modalIsOpen ? "" : "closed"}`}
        >
          <div className="dialog-cabecera">
            <h1>{selectedProject.name}</h1>
            <MdClose className="dialog-close" onClick={closeModal} />
          </div>
          <p className="dialog-details">{selectedProject.details}</p>
          <h2>
            {t("others.projectLink")}:
            <a
              href={selectedProject.github}
              target="_blank"
              style={{
                fontSize: "0.85rem",
                marginLeft: "10px",
                textDecoration: "underline",
              }}
            >
              {selectedProject.github}
            </a>
          </h2>
          <h2>{t("sections.skills")}</h2>
          <ul className="dialog-aptitudes">
            {selectedProject.highlights.map((highlight) => (
              <li key={highlight} className="dialog-li">
                {highlight}
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </Section>
  );
};

export default Projects;
