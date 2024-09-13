import React, { useEffect, useState } from 'react';

import '../styles/LoadingScreen.css';

import loadingGif from '../assets/zombie-loading.gif'

const LoadingScreen = ({ onComplete }) => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2200;
        const intervalTime = 50;
        const increment = 100 / (duration / intervalTime);

        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 0);
                    return oldProgress;
                }
                return Math.min(oldProgress + increment, 100)
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="progress-container">
            <img src={loadingGif} alt="loading-gif" />
            <progress className="nes-progress" value={progress} max="100"></progress>
            <div className="percentage">{Math.round(progress)}%</div>
        </div>
    );
}

export default LoadingScreen;