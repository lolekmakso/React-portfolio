import "./Projects.scss";

import ProjectsImage1 from "../../assets/project1.png";
import ProjectsImage2 from "../../assets/project2.png";
import ProjectsImage3 from "../../assets/project3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


Modal.setAppElement("#root");

export default function Projects() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container projects">
      <div className="title">Personal Projects</div>
      {/* <div className="project-list">
        <div className="project-list__item">
          <img src={ProjectsImage1} alt="Project" />
        </div>
        <div className="project-list__item">
          <img src={ProjectsImage2} alt="Project" />
        </div>
        <div className="project-list__item">
          <img src={ProjectsImage3} alt="Project" />
        </div>
      </div> */}

      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        enulateTouch={true}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={33.33}
      >
        <div className="projects__carusel">
          <img src={ProjectsImage1} alt="Project" />
        </div>
        <div className="projects__carusel">
          <img src={ProjectsImage2} alt="Project" />
        </div>
        <div className="projects__carusel">
          <img src={ProjectsImage3} alt="Project" />
        </div>
        <div className="projects__carusel">
          <img src={ProjectsImage1} alt="Project" />
        </div>
        <div className="projects__carusel">
          <img src={ProjectsImage2} alt="Project" />
        </div>
        <div className="projects__carusel">
          <img src={ProjectsImage3} alt="Project" />
        </div>
      </Carousel>

      <button onClick={openModal}>Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      
        <button onClick={closeModal}>close</button>
        
      </Modal>
    </div>
  );
}
