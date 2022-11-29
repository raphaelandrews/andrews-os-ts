
import React, { useState } from 'react';
import './style.css';
import Files from '../Files/Files';
import Draggable from 'react-draggable';

import logo from '../../assets/img/logo-andrews.svg';
import sun from '../../assets/img/sun.png';
import interactiveRating from "../../assets/img/interactive-rating.png";

const Projects = () => {
    const [isDocs, setIsDocs] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isProj, setProj] = useState("/src/assets/img/foto-1.png");
    const [isImg, setIsImg] = useState("/src/assets/img/interactive-rating.png")
    const [isInteractive, setIsInteractive] = useState(false);

    const handleDocs = () => {
        setIsDocs((current) => !current);
    };

    const handleOpen = () => {
        setIsOpen((current) => !current);
    };


    const setChange = (changeImg: any) => {
        setProj(changeImg);
    };

    const handleInteractive = () => {
        setIsInteractive((current) => !current);
    };

    return (
        <div>
            <div className="icon__file cybr-btn"
                onClick={(e) => handleOpen()}
            >
                <i className="bx bx-folder icon__img"></i>
                <div className="icon__text">Projects</div>
                <span className="cybr-btn__glitch">
                    <i className="bx bx-folder icon__img"></i>
                    <div className="icon__text">Projects</div>
                </span>
            </div>

            {isOpen && (
                <Draggable
                    handle="#imhandle"
                    cancel=".buttons"
                >
                    <div className="projects">
                        <div className="projects__header" id="imhandle">
                            <img src={logo} alt="" className='projects__logo' />

                            <div className="projects__path">
                                <span className='path__icon'>&#127760;</span>
                                <span className='path__name'>www.andrews.dev\projects</span>
                            </div>

                            <div className="buttons" onClick={(e) => handleOpen()}>
                                <div className="top__buttons">
                                    <div className="button"></div>
                                    <div className="button"></div>
                                </div>
                                <div className="button"></div>
                            </div>
                        </div>
                        <div className="projects__container">
                            <div className="projects__box">
                                <img src={sun} alt="Vaporwave Sun" className='projects__sun' />
                                <h2 className='projects__top'>&#128293; Hi, here you can check my latest projects &#128293;</h2>
                                <div className='projects__items'>
                                    <div className='projects__files'>
                                        <div className='projects__folder'>
                                            <img src={interactiveRating} className="projects__icon" onClick={(e) => handleInteractive()} />
                                            <h3 className="projects__text">Projects</h3>
                                        </div>
                                        <div className='projects__folder'>
                                            <img src={interactiveRating} className="projects__icon" />
                                            <h3 className="projects__text">Projects</h3>
                                        </div>
                                        <div className='projects__folder'>
                                            <img src={interactiveRating} className="projects__icon" />
                                            <h3 className="projects__text">Projects</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
                    </div>
                </Draggable >
            )
            }

            {isInteractive && (
                <Draggable>
                    <Files />
                </Draggable>
            )}
        </div>
    )
}

export default Projects;