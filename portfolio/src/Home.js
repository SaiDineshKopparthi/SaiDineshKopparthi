import React, { useState } from 'react'
import './Home.css'
import dancingPokemons from './assets/pokemons.gif'
import gymGuy from './assets/gym-guy.gif'
import zombie from './assets/zombie.gif'

const Home = () => {
    const [showDetails, setShowDetails] = useState(false)

    const handleButtonClick = () => {
        setShowDetails(true)
    }

    return (
        <div className="main-content">
            <div className={`home ${!showDetails ? 'centered' : ''}`} >
                {!showDetails ? (
                    <>
                        <div className="nes-container with-title is-centered">
                            <p className="title">Hey There!</p>
                            <h3 className="nes-text">Welcome to My Digital Portfolio.</h3>
                            <img src={zombie} alt="Zombie" />
                            <br></br>
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
                        <div className="nes-container with-title is-dark work-exp">
                            <p className="title">Work Experience</p>
                            <div className="work-item">
                                <div className="work-header">
                                    <p className="client">Northwest Missouri State University, Maryville MO</p>
                                    <p className="date">May - 2023 to April - 2024</p>
                                </div>
                                <p className="position">Software Developer</p>
                                <p className="responsibilities-title">Responsibilities:</p>
                                <ul className="responsibilities">
                                    <li>Architected and developed high-performance web applications, UI components, and mobile web solutions using React JS, functional JavaScript, TypeScript, HTML5, CSS3, jQuery, and Bootstrap.</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="work-item">
                                <div className="work-header">
                                    <p className="client">Tata Consultancy Services, Hyderabad India</p>
                                    <p className="date">November 2021 - November 2022</p>
                                </div>
                                <p className="position">Assistant Systems Engineer</p>
                                <p className="responsibilities-title">Responsibilities:</p>
                                <ul className="responsibilities">
                                    <li>Architected and developed high-performance web applications, UI components, and mobile web solutions using React JS, functional JavaScript, TypeScript, HTML5, CSS3, jQuery, and Bootstrap.</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="work-item">
                                <div className="work-header">
                                    <p className="client">*********, Hyderabad India</p>
                                    <p className="date">August 2020 to September 2021</p>
                                </div>
                                <p className="position">GIS Developer</p>
                                <p className="responsibilities-title">Responsibilities:</p>
                                <ul className="responsibilities">
                                    <li>Implemented and customized interactive maps using React.js and Leaflet, enabling dynamic data visualization and user interaction with geospatial data.</li>
                                    <li>Utilized MongoDB for storing and querying GeoJSON data, leveraging geospatial indexing to enhance data retrieval performance for location-based applications.</li>
                                    <li>Assisted in developing RESTful APIs with Express.js and Node.js for handling geospatial data operations, including CRUD functions and spatial queries.</li>
                                    <li>Conducted spatial data analysis using QGIS and ArcGIS, and performed geoprocessing tasks turf.js to support project needs and client requirements.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="double-column">
                            <div className="main-section nes-container with-title tools-tech">
                                <p className="title">Tools and Technology</p>
                                <div class="nes-table-responsive">
                                    <table class="nes-table is-bordered">
                                        <tbody>
                                            <tr>
                                            </tr>
                                            <tr>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="side-section nes-container with-title is-dark langs">
                                <p className="title">Languages</p>
                            </div>
                        </div>
                        <div className="gym-guy">
                            <img src={gymGuy} alt="gym-guy" />
                        </div>
                        <div className="double-column">
                            <div className="main-section nes-container with-title is-dark edu">
                                <p className="title">Education</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, et? Officia, fugiat. Vitae architecto, delectus, sunt mollitia rerum vero reiciendis eligendi quasi in, sequi autem asperiores culpa alias sint id!</p>
                            </div>
                            <div className="side-section nes-container with-title hobbies">
                                <p className="title">Hobbies</p>
                            </div>
                        </div>
                        <div className="nes-container with-title awards">
                            <p className="title">Awards</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;