import React, {useState} from "react";
import "./style.css";

import interactiveRating from "../../assets/img/interactive-rating.png";
import nftCard from "../../assets/img/nft-card.png";
import orderSummary from "../../assets/img/order-summary.png";

const About = () => {
  const [isImg, setIsImg] = useState("/src/assets/img/nft-card.png")

  const setChange = (changeImg: any) => {
    setIsImg(changeImg);
  };
  
  return (
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
                    <img id="thumb2" src={nftCard} onClick={() => setChange("/src/assets/img/nft-card.png")} />
                  </li>
                  <li className="gallery__item">
                    <img id="thumb3" src={orderSummary} onClick={() => setChange("/src/assets/img/order-summary.png")} />
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
  );
};

export default About;
