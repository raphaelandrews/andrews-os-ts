import './style.css'
import statsCard from '../../assets/img/stats-preview-card.png'

const Files = () => {
  return (
    <div className="file__box">
      <img src={statsCard} alt="" className="file__img" />
      <div className="file__content">
        <h2 className="file__title">Interactive Rating</h2>
        <p className="file__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default Files;