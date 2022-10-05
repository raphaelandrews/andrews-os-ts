/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import "./style.css";

import interactiveRating from "../../assets/img/foto-1.png";
import nftCard from "../../assets/img/foto-2.png";
import orderSummary from "../../assets/img/foto-3.png";

import Check from "../Check/Check";

const About = () => {
  const [isImg, setIsImg] = useState("/src/assets/img/foto-1.png")
  const [white, setWhite] = useState(false);
  const [black, setBlack] = useState(false);
  const [grey, setGrey] = useState(false);

  const setChange = (changeImg: any) => {
    setIsImg(changeImg);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (white) setWhite(false);
      if (black) setBlack(false);
      if (grey) setGrey(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [white, black, grey]);


  return (
    <div className="about__box">
      <div className="gallery">
        <figure className="gallery__main">
          <img className="gallery__img" id="mainImg" src={isImg} />
        </figure>

        <ul className="gallery__list">
          <li className="gallery__item">
            <img
              id="thumb1"
              src={interactiveRating}
              onClick={() =>
                setChange("/src/assets/img/foto-1.png")
              }
            />
          </li>
          <li className="gallery__item">
            <img
              id="thumb2"
              src={nftCard}
              onClick={() => setChange("/src/assets/img/foto-2.png")}
            />
          </li>
          <li className="gallery__item">
            <img
              id="thumb3"
              src={orderSummary}
              onClick={() => setChange("/src/assets/img/foto-3.png")}
            />
          </li>
        </ul>
      </div>

      <div className="about__content">
        <h3 className="about__title">
          andrews<span className="about__title-span">@</span>dev
        </h3>
        <h3 className="about__text">
          OS: <span className="about__span">Andrews</span>
        </h3>
        <h3 className="about__text">
          Location: <span className="about__span">Aracaju/SE</span>
        </h3>
        <h3 className="about__text">
          Role: <span className="about__span">Web Developer</span>
        </h3>
        <h3 className="about__text">
          Description:{" "}
          <span className="about__span">
            Lorem ipsum dolor
          </span>
        </h3>
        <h3 className="about__text">
          Font:{" "}
          <span className="about__span">
            Source Code Pro
          </span>
        </h3>
        <h3 className="about__text">
          Icons Memory:{" "}
          <span className="about__span">
            Font Awesome
          </span>
        </h3>
        <h3 className="about__text">
          Theme:{" "}
          <span className="about__span">
            Theme
          </span>
        </h3>
        <h3 className="about__text">
          Resolution:{" "}
          <span className="about__span">
            2880x1800
          </span>
        </h3>
        <h3 className="about__text">
          Version:{" "}
          <span className="about__span">
            1.0
          </span>
        </h3>

        <div className="about__colors">
          <div className="colors" title="#ffffff" onClick={() => { setWhite(true); navigator.clipboard.writeText('#ffffff') }}>
            <Check
              isVisible={white}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: white ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
          <div className="colors" title="#252525" onClick={() => { setBlack(true); navigator.clipboard.writeText('#252525') }}>
            <Check
              isVisible={black}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: black ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
          <div className="colors" title="#b7b8b8" onClick={() => { setGrey(true); navigator.clipboard.writeText('#dbdbdb') }}>
            <Check
              isVisible={grey}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: grey ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
