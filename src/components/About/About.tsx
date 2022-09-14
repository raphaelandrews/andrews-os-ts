import React, {useState} from "react";
import "./style.css";

import interactiveRating from "../../assets/img/interactive-rating.png";
import nftCard from "../../assets/img/nft-card.png";
import orderSummary from "../../assets/img/order-summary.png";

const About = () => {

  
  return (
    <div className="modals" id="modal">
      <div className="buttons" >
        <div className="top__buttons" >
          <div className="button"></div>
          <div className="button"></div>
        </div>
        <div className="button"></div>
      </div>

      <div className="about__box">
        <div className="gallery">
          <figure className="gallery__main">
            <img
              className="gallery__img"
              id="mainImg"
              src={interactiveRating}
            />
          </figure>

          <ul className="gallery__list">
            <li className="gallery__item">
              <img id="thumb1" src={interactiveRating}/>
            </li>
            <li className="gallery__item">
              <img id="thumb2" src={nftCard} />
            </li>
            <li className="gallery__item">
              <img id="thumb3" src={orderSummary} />
            </li>
          </ul>
        </div>

        <div className="about__content">
          <h1 className="about__title">Raphael Andrews</h1>
          <p className="about__text">
            Olá, eu gosto de desafios e criatividade, sempre buscando me inovar.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <span className="about__span">Front-End Developer</span>
        </div>
      </div>
    </div>
  );
};

export default About;
