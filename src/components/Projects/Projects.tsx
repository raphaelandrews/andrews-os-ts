
import { useState } from 'react';
import './style.css';
import SortableTable from '../Table/Table'
import data from '../Table/data.json'


const Projects = () => {
    const [isDocs, setIsDocs] = useState(true);

    const handleDocs = () => {
        setIsDocs((current) => !current);
    };

    const [isImg, setIsImg] = useState("/src/assets/img/interactive-rating.png")

    const setChange = (changeImg: any) => {
        setIsImg(changeImg);
    };

    return (
        <div className="projects__container">
            <div className="docs">
                <div className="docs__header">
                    <div className="buttons" onClick={(e) => handleDocs()}>
                        <div className="top__buttons">
                            <div className="button"></div>
                            <div className="button"></div>
                        </div>
                        <div className="button"></div>
                    </div>
                </div>
                <div className='docs__box'>
                    <SortableTable data={data} />
                </div>
            </div>
            <div className="A4">
                <div className="docs__header">
                    <div className="buttons" onClick={(e) => handleDocs()}>
                        <div className="top__buttons">
                            <div className="button"></div>
                            <div className="button"></div>
                        </div>
                        <div className="button"></div>
                    </div>
                </div>
                <img className="project__img" src={isImg} />
            </div>
        </div>
    )
}

export default Projects;