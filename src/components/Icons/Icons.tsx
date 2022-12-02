import React, { useState } from "react";
import "./style.css";

import "../System/style.css";
import Draggable from "react-draggable";
import System from "../System/System";
import Projects from "../Projects/Projects";



const Icons = () => {
  const [isDoc, setIsDoc] = useState(false);
  const [isProj, setIsProj] = useState(false);
  const [isSystem, setIsSystem] = useState(false);

  const handleDoc = () => {
    setIsDoc((current) => !current);
  };

  const handleProj = () => {
    setIsProj((current) => !current);
  };

  const handleSystem = () => {
    setIsSystem((current) => !current);
  };


  return (
    <div>
      <div className="icons">
        <Projects />

        <div className="icon__file cybr-btn"
          onClick={(e) => handleSystem()}
        >
          <i className="bx bx-folder icon__img"></i>
          <div className="icon__text cybr-btn">System</div>
          <span className="cybr-btn__glitch">
            <i className="bx bx-folder icon__img"></i>
            <div className="icon__text">System</div>
          </span>
        </div>

        <div className="icon__file cybr-btn">
          <i className="bx bx-user icon__img"></i>
          <div className="icon__text cybr-btn">About Me</div>
          <span className="cybr-btn__glitch">
            <i className="bx bx-user icon__img"></i>
            <div className="icon__text">About Me</div>
          </span>
        </div>

        <div className="icon__file cybr-btn">
          <i className="bx bxs-contact icon__img"></i>
          <div className="icon__text cybr-btn">Contact</div>
          <span className="cybr-btn__glitch">
            <i className="bx bx-user icon__img"></i>
            <div className="icon__text">Contact</div>
          </span>
        </div>
      </div>

      {isSystem && (
        <Draggable
          handle="#imhandle"
          cancel=".buttons"
        >
          <div>
            <div className="system">
              <div className="system__header" id="imhandle">
                <div className="buttons" onClick={handleSystem}>
                  <div className="top__buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="button"></div>
                </div>
              </div>

              <System />
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Icons;
