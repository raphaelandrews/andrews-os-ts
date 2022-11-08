
import { useState } from 'react';
import './style.css';
import Files from '../Files/Files';
import Draggable from 'react-draggable';


const Projects = () => {
    const [isDocs, setIsDocs] = useState(true);
    const [isProj, setProj] = useState("/src/assets/img/foto-1.png");
    const [isImg, setIsImg] = useState("/src/assets/img/interactive-rating.png")
    const [isInteractive, setIsInteractive] = useState(false);

    const handleDocs = () => {
        setIsDocs((current) => !current);
    };


    const setChange = (changeImg: any) => {
        setProj(changeImg);
    };

    const handleInteractive = () => {
        setIsInteractive((current) => !current);
    };

    return (
        <div className="projects__container">
            <div className="projects__box">
                <div className='projects__top'></div>
                <div className='projects__items'>
                    <div className='projects__aside'>
                        <h2>Tecnologies</h2>
                        <div className='projects__list'>
                            <div className='projects__item'>
                                <i className="bx bx-folder item__icon"></i>
                                <span className="item__text">All</span>
                            </div>
                        </div>
                    </div>
                    <div className='projects__files'>
                        <div className='projects__folder'>
                            <div className="projects__icon" onClick={(e) => handleInteractive()}></div>
                            <h3 className="projects__text">Projects</h3>
                        </div>
                        <div className='projects__folder'>
                            <div className="projects__icon"></div>
                            <h3 className="projects__text">Projects</h3>
                        </div>
                        <div className='projects__folder'>
                            <div className="projects__icon"></div>
                            <h3 className="projects__text">Projects</h3>
                        </div>
                        <div className='projects__folder'>
                            <div className="projects__icon"></div>
                            <h3 className="projects__text">Projects</h3>
                        </div>
                        <div className='projects__folder'>
                            <div className="projects__icon"></div>
                            <h3 className="projects__text">Projects</h3>
                        </div>
                        <div className='projects__folder'>
                            <div className="projects__icon"></div>
                            <h3 className="projects__text">Projects</h3>
                        </div>
                    </div>
                </div>
            </div>

            {isInteractive && (
                <Files />
            )}

            {/*<div className="projects__img">
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
            </div>*/}
        </div>
    )
}

export default Projects;