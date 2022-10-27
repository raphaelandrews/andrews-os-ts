
import { useState } from 'react';
import './style.css';
import Draggable from 'react-draggable';


const Projects = () => {
    const [isDocs, setIsDocs] = useState(true);
    const [isProj, setProj] = useState("/src/assets/img/foto-1.png")

    const handleDocs = () => {
        setIsDocs((current) => !current);
    };

    const [isImg, setIsImg] = useState("/src/assets/img/interactive-rating.png")

    const setChange = (changeImg: any) => {
        setProj(changeImg);
    };

    return (
        <div className="projects__container">
            <div className="projects__box">
                <div className='projects__files'>
                    <div className='projects__folder'>
                        <i className="bx bx-folder projects__icon"></i>
                        <span className="projects__text">Projects</span>
                    </div>
                    <div className='projects__folder'>
                        <i className="bx bx-folder projects__icon"></i>
                        <span className="projects__text">Projects</span>
                    </div>
                    <div className='projects__folder'>
                        <i className="bx bx-folder projects__icon"></i>
                        <span className="projects__text">Projects</span>
                    </div>
                    <div className='projects__folder'>
                        <i className="bx bx-folder projects__icon"></i>
                        <span className="projects__text">Projects</span>
                    </div>
                    <div className='projects__folder'>
                        <i className="bx bx-folder projects__icon"></i>
                        <span className="projects__text">Projects</span>
                    </div>
                </div>
            </div>
            <div className="projects__img">
                <div className="projects__header">
                    <div className="buttons" onClick={(e) => handleDocs()}>
                        <div className="top__buttons">
                            <div className="button"></div>
                            <div className="button"></div>
                        </div>
                        <div className="button"></div>
                    </div>
                </div>
                <img className="project__img" src={isProj} />
            </div>
        </div>
    )
}

export default Projects;