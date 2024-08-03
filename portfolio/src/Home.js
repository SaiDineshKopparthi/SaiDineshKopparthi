import React, { useState, useEffect, useRef } from 'react'
import clickSound from './sounds/click-sound.mp3';
import './Home.css'

const Home = () => {
    const [showDetails, setShowDetails] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        audioRef.current = new Audio(clickSound);
        audioRef.current.preload = 'auto';
    }, []);

    const handleButtonClick = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        }
        setShowDetails(true)
    }

    return (
        <div className="home">
            {!showDetails ? (
                <>
                    <h1 className="nes-text is-success">Hey There! Welcome to My Digital Portfolio.</h1>
                    <br />
                    <button className="nes-btn is-success" onClick={handleButtonClick}>Let's Get Started</button>
                </>
            ) : (
                <div className="details">
                    <p className="nes-text is-success">This will be home page</p>
                </div>
            )}

        </div>
    );
}

export default Home;