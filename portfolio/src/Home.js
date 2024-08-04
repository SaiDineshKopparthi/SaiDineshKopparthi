import React, { useState } from 'react'
import './Home.css'
import dancingPokemons from './assets/pokemons.gif'

const Home = () => {
    const [showDetails, setShowDetails] = useState(false)

    const handleButtonClick = () => {
        setShowDetails(true)
    }

    return (
        <div className={`home ${!showDetails ? 'centered' : ''}`} >
            {!showDetails ? (
                <>
                    <div className="nes-container with-title is-centered">
                        <p className="title">Hey There!</p>
                        <h3 className="nes-text">Welcome to My Digital Portfolio.</h3>
                        <br />
                        <button className="nes-btn is-error" onClick={handleButtonClick}>Let's Get Started</button>
                    </div>
                </>
            ) : (
                <div className="details">
                    <div className="dancing-pokemons">
                        <img src={dancingPokemons} alt="dancing-pokemons" />
                    </div>
                    <div className="nes-container with-title about-me">
                        <p className="title">About Me</p>
                        <p>I am a recent Master's graduate in Applied Computer Science from Northwest Missouri State University with an unending enthusiasm for learning new technologies.
                            During my Master's program, I worked as a Graduate Assistant for the iOS Mobile Computing course, which provided me the opportunity to develop several iOS applications using Swift.
                            Additionally, I have professional experience as an Assistant System Engineer at Tata Consultancy Services in Hyderabad, India.</p>
                        <p>I love keeping myself busy with developing new types of websites every chance I get.
                            With a particular fondness for JavaScript, I use React, Express.js, and Node.js for web development.
                            In my free time, I enjoy going to gym 🏋🏽 and watching Formula One 🏎️.</p>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Home;