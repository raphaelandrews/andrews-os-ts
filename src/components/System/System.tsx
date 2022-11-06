/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

import interactiveRating from "../../assets/img/foto-1.png";
import nftCard from "../../assets/img/foto-2.png";
import orderSummary from "../../assets/img/foto-3.png";
import foto from "../../assets/img/foto-raphael.png";
import os from "../../assets/img/andrewsos.png";

import Check from "../Check/Check";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const System = () => {
  const [isImg, setIsImg] = useState("/src/assets/img/foto-1.png")
  const [pink, setPink] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [purple, setPurple] = useState(false);
  const [white, setWhite] = useState(false);

  const setChange = (changeImg: any) => {
    setIsImg(changeImg);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (pink) setPink(false);
      if (yellow) setYellow(false);
      if (purple) setPurple(false);
      if (white) setWhite(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pink, yellow, purple, white]);

  const { height, width } = useWindowDimensions();

  return (
    <div className="system__box">
      <h2 className="system__title">Andrews OS</h2>
      <div className="system__border">
        <div className="system__handle">
          <img src={foto} alt="" className="system__photo" />
        </div>
      </div>
      <div className="system__bg">
        {/*<div className="bg__line"><div className="bg__internal bg__internal-1"></div></div>*/}
      </div>


      {/*<div className="gallery">
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
      </div>*/}

      <div className="system__content">
        <h3 className="system__text">
          OS: <span className="system__span">Andrews</span>
        </h3>
        <h3 className="system__text">
          Location: <span className="system__span">Aracaju/SE</span>
        </h3>
        <h3 className="system__text">
          Role: <span className="system__span">Web Developer</span>
        </h3>
        <h3 className="system__text">
          Description:{" "}
          <span className="system__span">
            Lorem ipsum dolor
          </span>
        </h3>
        <h3 className="system__text">
          Font:{" "}
          <span className="system__span">
            Source Code Pro
          </span>
        </h3>
        <h3 className="system__text">
          Icons Memory:{" "}
          <span className="system__span">
            Font Awesome
          </span>
        </h3>
        <h3 className="system__text">
          Theme:{" "}
          <span className="system__span">
            Theme
          </span>
        </h3>
        <h3 className="system__text">
          Device Resolution:{" "}
          <span className="system__span">
          {width}x{height}
          </span>
        </h3>
        <h3 className="system__text">
          Version:{" "}
          <span className="system__span">
            1.0
          </span>
        </h3>

        <div className="system__colors">
          <div className="colors" title="#ea2e8c" onClick={() => { setPink(true); navigator.clipboard.writeText('#ea2e8c') }}>
            <Check
              isVisible={pink}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: pink ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
          <div className="colors" title="#f08e0f" onClick={() => { setYellow(true); navigator.clipboard.writeText('#f08e0f') }}>
            <Check
              isVisible={yellow}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: yellow ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
          <div className="colors" title="#000024" onClick={() => { setPurple(true); navigator.clipboard.writeText('#000024') }}>
            <Check
              isVisible={purple}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: purple ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>

          <div className="colors" title="#ededf7" onClick={() => { setWhite(true); navigator.clipboard.writeText('#ededf7') }}>
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
        </div>

        <img src={os} alt="" className="os" />
      </div>
    </div>
  );
};

export default System;
