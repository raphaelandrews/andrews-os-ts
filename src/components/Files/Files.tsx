import React from 'react'
import './style.css'
import interactiveRating from '../../assets/img/interactive-rating.png'

const Files = () => {
    return (
      <div className="file__box">
        <div className="file__bg">
          <img src={interactiveRating} alt="" className="file__img" />
        </div>
        <h2 className="file__title">Interactive Rating</h2>
        <p className="file__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    );
}

export default Files;