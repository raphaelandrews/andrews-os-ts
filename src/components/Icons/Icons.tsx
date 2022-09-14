import React, { useState } from "react";
import Modals from "../About/About";
import "./style.css";

import "../About/style.css";

import interactiveRating from "../../assets/img/interactive-rating.png";
import nftCard from "../../assets/img/nft-card.png";
import orderSummary from "../../assets/img/order-summary.png";
import Draggable from "react-draggable";

import  SortableTable  from "../Table/Table";
import data from '../Table/data.json'


const Icons = () => {
  const [isProject, setIsProject] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isImg, setIsImg] = useState("/src/assets/img/nft-card.png")
  
  const setChange = (changeImg: any) => {
    setIsImg(changeImg);
  };

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
        <div className="icon__file" id="projectsIcon" onDoubleClick={handleProject}>
          <i className="bx bx-folder icon__img"></i>
          <span className="icon__text">Projetos</span>
        </div>
      </Draggable>

      <Draggable>
      <div className="icon__file" onDoubleClick={handleAbout}>
        <i className="bx bx-user icon__img"></i>
        <span className="icon__text">About Me</span>
      </div>
      </Draggable>

      <Draggable>
      <div className="icon__file">
        <i className="bx bxs-contact icon__img"></i>
        <span className="icon__text">Contact</span>
      </div>
      </Draggable>
    
    <Draggable>
      <div className="icon__file">
        <i className="bx bxs-file-txt icon__img"></i>
        <span className="icon__text">Text Editor</span>
      </div>
      </Draggable>

      <Draggable>
      <div className="icon__file">
        <i className="bx bx-code icon__img"></i>
        <span className="icon__text">Tecnologies</span>
      </div>
      </Draggable>

      <Draggable>
      <div className="icon__file">
        <i className="bx bx-music icon__img"></i>
        <span className="icon__text">Music</span>
      </div>
      </Draggable>

      {isProject && (
        <Draggable
        handle="#imhandle"
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

          <div className="about__box">
            <div className="gallery">
              <figure className="gallery__main">
                <img
                  className="gallery__img"
                  id="mainImg"
                  src={isImg}
                />
              </figure>

              <ul className="gallery__list">
                <li className="gallery__item">
                  <img id="thumb1" src={interactiveRating} onClick={() => setChange("/src/assets/img/interactive-rating.png")} />
                </li>
                <li className="gallery__item">
                  <img id="thumb2" src={nftCard} onClick={() => setChange("/src/assets/img/nft-card.png")}/>
                </li>
                <li className="gallery__item">
                  <img id="thumb3" src={orderSummary} onClick={() => setChange("/src/assets/img/order-summary.png")}/>
                </li>
              </ul>
            </div>

            <div className="about__content">
              <h1 className="about__title">Raphael Andrews</h1>
              <p className="about__text">
                Olá, eu gosto de desafios e criatividade, sempre buscando me
                inovar. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </p>
              <span className="about__span">Front-End Developer</span>
            </div>
          </div>
        </div>
        </Draggable>
      )}
    </div>
  );
};

export default Icons;
