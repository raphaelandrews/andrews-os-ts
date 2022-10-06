import { useState } from 'react';
import './style.css';
import Documents from '../Documents/Documents';

const Dashboard = () => {
    const [isDocs, setIsDocs] = useState(true);

    const handleDocs = () => {
        setIsDocs((current) => !current);
    };

    return (
        <div className="db__container">
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
                    <div className='docs__path'>
                        <div className='docs__top'></div>
                    </div>
                    <Documents />
                </div>
            </div>
            <div className="About"></div>
            <div className="A1"></div>
            <div className="A2"></div>
            <div className="A3"></div>
            <div className="A4"></div>
            <div className="A5"></div>
            <div className="A6"></div>
        </div>
    )
}

export default Dashboard;