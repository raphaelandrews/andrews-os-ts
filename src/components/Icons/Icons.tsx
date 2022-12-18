import React, { useState } from "react";
import "./style.css";

import "../System/style.css";
import Draggable from "react-draggable";
import System from "../System/System";
import Projects from "../Projects/Projects";



const Icons = () => {
  return (
    <>
      <div className="icons">
        <Projects />

        <System />

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
    </>
  );
};

export default Icons;
