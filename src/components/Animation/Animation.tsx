import Draggable from "react-draggable";
import './style.css'

const Animation = () => {
    return (
        <Draggable
            handle="#imhandle"
            cancel=".buttons"
        >
            <div className="animation">
                <div className="animation__header" id="imhandle">
                    <div className="buttons" >
                        <div className="top__buttons">
                            <div className="button"></div>
                            <div className="button"></div>
                        </div>
                        <div className="button"></div>
                    </div>
                </div>
                <div className="animation__bg">
                    <div className="lamp">
                        <div className="lava">
                            <div className="blob"></div>
                            <div className="blob"></div>
                            <div className="blob"></div>
                            <div className="blob"></div>
                            <div className="blob"></div>
                            <div className="blob"></div>
                            <div className="blob"></div>
                            <div className="blob"></div>
                            <div className="blob top"></div>
                            <div className="blob bottom"></div>

                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </Draggable>
    )
}

export default Animation