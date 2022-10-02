/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import "./style.css";

import interactiveRating from "../../assets/img/foto-1.png";
import nftCard from "../../assets/img/foto-2.png";
import orderSummary from "../../assets/img/foto-3.png";

import Check from "../Check/Check";

const About = () => {
  const [isImg, setIsImg] = useState("/src/assets/img/foto-1.png")
  const [darkBlue, setDarkBlue] = useState(false);
  const [darkPurple, setDarkPurple] = useState(false);
  const [pink, setPink] = useState(false);
  const [green, setGreen] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [violet, setViolet] = useState(false);
  const [purple, setPurple] = useState(false);
  const [blue, setBlue] = useState(false);
  const [grey, setGrey] = useState(false);

  const setChange = (changeImg: any) => {
    setIsImg(changeImg);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (darkBlue) setDarkBlue(false);
      if (darkPurple) setDarkPurple(false);
      if (pink) setPink(false);
      if (green) setGreen(false);
      if (yellow) setYellow(false);
      if (violet) setViolet(false);
      if (purple) setPurple(false);
      if (blue) setBlue(false);
      if (grey) setGrey(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [darkBlue, darkPurple, pink, green, yellow, violet, purple, blue, grey]);


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
          <div className="colors" title="#272935" onClick={() => { setDarkBlue(true); navigator.clipboard.writeText('#272935') }}>
            <Check
              isVisible={darkBlue}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: darkBlue ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
          <div className="colors" title="#1e2029" onClick={() => { setDarkPurple(true); navigator.clipboard.writeText('#1e2029') }}>
            <Check
              isVisible={darkPurple}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: darkPurple ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
          <div className="colors" title="#f38198" onClick={() => { setPink(true); navigator.clipboard.writeText('#f38198') }}>
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
          <div className="colors" title="#59decc" onClick={() => { setGreen(true); navigator.clipboard.writeText('#59decc') }}>
            <Check
              isVisible={green}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: green ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
          <div className="colors" title="#f2a473" onClick={() => { setYellow(true); navigator.clipboard.writeText('#f2a473') }}>
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
          <div className="colors" title="#8a98f4" onClick={() => { setViolet(true); navigator.clipboard.writeText('#8a98f4') }}>
            <Check
              isVisible={violet}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: violet ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
          <div className="colors" title="#c573dd" onClick={() => { setPurple(true); navigator.clipboard.writeText('#c573dd') }}>
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
          <div className="colors" title="#77e7f3" onClick={() => { setBlue(true); navigator.clipboard.writeText('#77e7f3') }}>
            <Check
              isVisible={blue}
              css={{
                color: 'green',
                strokeDasharray: 50,
                strokeDashoffset: blue ? 0 : -50,
                transition: "all 300ms ease-in-out"
              }}
            />
          </div>
          <div className="colors" title="#dbdbdb" onClick={() => { setGrey(true); navigator.clipboard.writeText('#dbdbdb') }}>
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
