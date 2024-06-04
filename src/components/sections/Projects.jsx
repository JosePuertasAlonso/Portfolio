import React, { useState } from "react";
import Section from "../Section";
import "../../assets/Projects.css";
import { projects } from "../../../cv";
import { Github } from "../../icons/Github";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

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

  return (
    <Section title="Proyectos">
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
                <header>
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
            Enlace al proyecto:
            <a href={selectedProject.github} 
               style={{ 
                fontSize: "0.85rem", 
                marginLeft:"10px",
                textDecoration: "underline",
                }}>
              {selectedProject.github}
            </a>
          </h2>
          <h2>Aptitudes</h2>
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
