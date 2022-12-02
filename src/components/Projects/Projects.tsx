import React, { useState } from 'react';
import './style.css';
import '../Icons/style.css'
import Files from '../Files/Files';
import Draggable from 'react-draggable';

import logo from '../../assets/img/logo-andrews.svg';
import sun from '../../assets/img/sun.png';
import statsCard from "../../assets/img/stats-preview-card.png";
import nftCard from "../../assets/img/nft-card.png";
import interactiveRating from "../../assets/img/interactive-rating.png";
import cardComponent from "../../assets/img/profile-card-component.png";
import orderSummary from "../../assets/img/order-summary.png";
import qrCode from "../../assets/img/qr-code.png";
import htmlIcon from '../../assets/img/html-icon.svg';
import cssIcon from '../../assets/img/css-icon.svg';
import jsIcon from '../../assets/img/js-icon.svg';

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
                                <div className='projects__files'>
                                    <div className='projects__folder cybr-btn'>
                                        <img src={statsCard} className="projects__preview" onClick={(e) => handleInteractive()} />
                                        <h3 className="projects__text">Stats Preview Card</h3>
                                        <span className='cybr-btn__glitch'>
                                            <img src={statsCard} className="projects__preview" onClick={(e) => handleInteractive()} />
                                            <h3 className="projects__text">Stats Preview Card</h3>
                                        </span>
                                    </div>

                                    <div className='projects__folder cybr-btn'>
                                        <img src={nftCard} className="projects__preview" />
                                        <h3 className="projects__text">NFT Card</h3>
                                        <span className='cybr-btn__glitch'>
                                            <img src={nftCard} className="projects__preview" />
                                            <h3 className="projects__text">NFT Card</h3>
                                        </span>
                                    </div>

                                    <div className='projects__folder cybr-btn'>
                                        <img src={interactiveRating} className="projects__preview" />
                                        <h3 className="projects__text">Interactive Rating</h3>
                                        <span className='cybr-btn__glitch'>
                                            <img src={interactiveRating} className="projects__preview" />
                                            <h3 className="projects__text">Interactive Rating</h3>
                                        </span>
                                    </div>

                                    <div className='projects__folder cybr-btn'>
                                        <img src={cardComponent} className="projects__preview" />
                                        <h3 className="projects__text">Card Component</h3>
                                        <span className='cybr-btn__glitch'>
                                            <img src={cardComponent} className="projects__preview" />
                                            <h3 className="projects__text">Card Component</h3>
                                        </span>
                                    </div>

                                    <div className='projects__folder cybr-btn'>
                                        <img src={orderSummary} className="projects__preview" />
                                        <h3 className="projects__text">Order Summary</h3>
                                        <span className='cybr-btn__glitch'>
                                            <img src={orderSummary} className="projects__preview" />
                                            <h3 className="projects__text">Order Summary</h3>
                                        </span>
                                    </div>

                                    <div className='projects__folder cybr-btn'>
                                        <img src={qrCode} className="projects__preview" />
                                        <h3 className="projects__text">QR Code</h3>
                                        <span className='cybr-btn__glitch'>
                                            <img src={qrCode} className="projects__preview" />
                                            <h3 className="projects__text">QR Code</h3>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable >
            )
            }

            {isInteractive && (
                <Draggable
                    handle="#imhandle"
                    cancel=".buttons"
                >
                    <div className='file-1'>
                        <div className="projects__header" id="imhandle">
                            <img src={logo} alt="" className='projects__logo' />

                           
                                <span className='path__name'>Stats Preview Card</span>
                            

                            <div className="buttons" onClick={(e) => handleInteractive()}>
                                <div className="top__buttons">
                                    <div className="button"></div>
                                    <div className="button"></div>
                                </div>
                                <div className="button"></div>
                            </div>
                        </div>
                        <Files />
                    </div>
                </Draggable>
            )}
        </div>
    )
}

export default Projects;