import React, { useState } from "react";
import "./style.css";

import "../About/style.css";

import Draggable from "react-draggable";

import About from "../About/About";
import SortableTable from "../Table/Table";
import data from '../Table/data.json'
import Tabs from '../Table/Tabs'
import Documents from "../Documents/Documents";


const Icons = () => {
  const [isDoc, setIsDoc] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const handleDoc = () => {
    setIsDoc((current) => !current);
  };

  const handleProject = () => {
    setIsProject((current) => !current);
  };

  const handleAbout = () => {
    setIsAbout((current) => !current);
  };


  return (
    <div className="icons">
      <div className="icon__draggable">
        <div className="icon__file" id="projectsIcon"
          onDoubleClick={(e) => handleDoc()}
          onTouchEnd={(e) => handleDoc()}
        >
          <i className="bx bx-folder icon__img"></i>
          <span className="icon__text">Documents</span>
        </div>
      </div>

      <div className="icon__draggable">
        <div className="icon__file" id="projectsIcon"
          onDoubleClick={(e) => handleProject()}
          onTouchEnd={(e) => handleProject()}
        >
          <i className="bx bx-folder icon__img"></i>
          <span className="icon__text">Projects</span>
        </div>
      </div>

      <div className="icon__draggable">
        <div className="icon__file"
          onDoubleClick={(e) => handleAbout()}
          onTouchEnd={(e) => handleAbout()}
        >
          <i className="bx bx-user icon__img"></i>
          <span className="icon__text">About Me</span>
        </div>
      </div>

      <div className="icon__draggable">
        <div className="icon__file">
          <i className="bx bxs-contact icon__img"></i>
          <span className="icon__text">Contact</span>
        </div>
      </div>

      <div className="icon__draggable">
        <div className="icon__file">
          <i className="bx bxs-file-txt icon__img"></i>
          <span className="icon__text">Text Editor</span>
        </div>
      </div>

      <div className="icon__draggable">
        <div className="icon__file">
          <i className="bx bx-code icon__img"></i>
          <span className="icon__text">Tecnologies</span>
        </div>
      </div>

      <div className="icon__draggable">
        <div className="icon__file">
          <i className="bx bx-music icon__img"></i>
          <span className="icon__text">Music</span>
        </div>
      </div>

      {isDoc && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
        >
          <div className="modals projects" id="modal">
            <div className="modal__draggable projects__header" id="imhandle">
              <span className="projects__title">Projects</span>
              <div className="buttons" onClick={handleDoc}>
                <div className="top__buttons">
                  <div className="button"></div>
                  <div className="button"></div>
                </div>
                <div className="button"></div>
              </div>
            </div>
            <Documents />
          </div>
        </Draggable>
      )}

      {isProject && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
        >
          <div className="modals projects" id="modal">
            <div className="modal__draggable projects__header" id="imhandle">
              <span className="projects__title">Projects</span>
              <div className="buttons" onClick={handleProject}>
                <div className="top__buttons">
                  <div className="button"></div>
                  <div className="button"></div>
                </div>
                <div className="button"></div>
              </div>
            </div>
            <Tabs />
          </div>
        </Draggable>
      )}

      {isAbout && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
        >
          <div className="modals about" id="modal">
            <div className="modal__draggable about__header" id="imhandle">
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
