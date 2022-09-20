import React, { useState } from "react";
import "./style.css";

import "../About/style.css";

import Draggable from "react-draggable";

import About from "../About/About";
import SortableTable from "../Table/Table";
import data from '../Table/data.json'


const Icons = () => {
  const [isProject, setIsProject] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  

  const handleProject = () => {
    setIsProject((current) => !current);
    {
      /*setIsAbout(true);*/
    }
  };

  const handleAbout = () => {
    setIsAbout((current) => !current);
    {
      /*setIsAbout(true);*/
    }
  };


  return (
    <div className="icons">
      <Draggable>
        <div className="icon__draggable">
          <div className="icon__file" id="projectsIcon"
            onDoubleClick={(e) => handleProject()}
            onTouchEnd={(e) => handleProject()}
          >
            <div className="icon__box">
              <i className="bx bx-folder icon__img"></i>
            </div>
            <span className="icon__text">Projetos</span>
          </div>
        </div>
      </Draggable>

      <Draggable>
        <div className="icon__draggable">
          <div className="icon__file"
            onDoubleClick={(e) => handleAbout()}
            onTouchEnd={(e) => handleAbout()}>
            <div className="icon__box">
              <i className="bx bx-user icon__img"></i>
            </div>
            <span className="icon__text">About Me</span>
          </div>
        </div>
      </Draggable>

      <Draggable>
        <div className="icon__draggable">
          <div className="icon__file">
            <div className="icon__box">
              <i className="bx bxs-contact icon__img"></i>
            </div>
            <span className="icon__text">Contact</span>
          </div>
        </div>
      </Draggable>

      <Draggable>
        <div className="icon__draggable">
          <div className="icon__file">
            <div className="icon__box">
              <i className="bx bxs-file-txt icon__img"></i>
            </div>
            <span className="icon__text">Text Editor</span>
          </div>
        </div>
      </Draggable>

      <Draggable>
        <div className="icon__draggable">
          <div className="icon__file">
            <div className="icon__box">
              <i className="bx bx-code icon__img"></i>
            </div>
            <span className="icon__text">Tecnologies</span>
          </div>
        </div>
      </Draggable>

      <Draggable>
        <div className="icon__draggable">
          <div className="icon__file">
            <div className="icon__box">
              <i className="bx bx-music icon__img"></i>
            </div>
            <span className="icon__text">Music</span>
          </div>
        </div>
      </Draggable>

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
            <SortableTable data={data} />
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
