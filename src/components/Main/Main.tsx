import "./style.css";
import mainImg from "../../assets/img/stats-preview-card.png";

const Main = () => {

    return (
        <section className="main">
            <div className="main__box">
                <img src={mainImg} alt="" className="mainImg" />
                <div className="main__row">
                    <h1 className="title">INTERACTIVE RATING</h1>
                    <div className="colors">
                        <div className="color"></div>
                        <div className="color"></div>
                        <div className="color"></div>
                    </div>
                </div>

            </div>
            <div className="aside">
                a
            </div>
        </section>
    );
};

export default Main;