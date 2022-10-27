import React, { useState } from "react";
import "./style.css";

import "../About/style.css";

import Draggable from "react-draggable";

import About from "../About/About";
import Projects from "../Projects/Projects";


const Icons = () => {
  const [isDoc, setIsDoc] = useState(false);
  const [isProj, setIsProj] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const handleDoc = () => {
    setIsDoc((current) => !current);
  };

  const handleProj = () => {
    setIsProj((current) => !current);
  };

  const handleAbout = () => {
    setIsAbout((current) => !current);
  };


  return (
    <div>
      <div className="icons">
        <div className="icon__file"
          onClick={(e) => handleProj()}
        >
          <i className="bx bx-folder icon__img"></i>
          <span className="icon__text">Projects</span>
        </div>

        <div className="icon__file"
          onClick={(e) => handleAbout()}
        >
          <i className="bx bx-folder icon__img"></i>
          <span className="icon__text">Projects</span>
        </div>

        <div className="icon__file"
          onClick={(e) => handleAbout()}
        >
          <i className="bx bx-user icon__img"></i>
          <span className="icon__text">About Me</span>
        </div>

        <div className="icon__file">
          <i className="bx bxs-contact icon__img"></i>
          <span className="icon__text">Contact</span>
        </div>
      </div>
      
      {isProj && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
        >
          <div className="projects">
            <div className="projects__header" id="imhandle">
              <span className="projects__title">Projects</span>
              <div className="buttons" onClick={handleProj}>
                <div className="top__buttons">
                  <div className="button"></div>
                  <div className="button"></div>
                </div>
                <div className="button"></div>
              </div>
            </div>
            <Projects />
          </div>
        </Draggable>
      )}

      {isAbout && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
        >
          <div className="about">
            <div className="about__header" id="imhandle">
              <div className="buttons" onClick={handleAbout}>
                <div className="top__buttons">
                  <div className="button"></div>
                  <div className="button"></div>
                </div>
                <div className="button"></div>
              </div>
            </div>

            <About />
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Icons;
