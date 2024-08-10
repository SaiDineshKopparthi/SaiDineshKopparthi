import React, { useState } from 'react'
import './Home.css'
import dancingPokemons from './assets/pokemons.gif'
import gymGuy from './assets/gym-guy.gif'
import zombie from './assets/zombie.gif'
import award from './assets/Star_of_the_Month_Award.jpg'
import northwestLogo from './assets/NWMSU.png'
import sastraLogo from './assets/SASTRA.png'
import profilePic from './assets/profile-pic.gif'


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
                        <div className="is-centered">
                            <div className="title">
                                <p>Hey</p>
                                <p>There!</p>
                            </div>
                            <h2 className="nes-text">Welcome to My Digital Portfolio.</h2>
                            <img src={zombie} alt="Zombie" />
                            <br></br>
                            <button className="nes-btn is-error" onClick={handleButtonClick}>Let's Get Started</button>
                        </div>
                    </>
                ) : (
                    <div className="details
                    ">
                        <div className="dancing-pokemons">
                            <img src={dancingPokemons} alt="dancing-pokemons" />
                        </div>
                        <div className="nes-container with-title about-me">
                            <p className="title">About Me</p>
                            <div className="about-content">
                                <div className="about-text">
                                    <p>
                                        I am a recent Master's graduate in Applied Computer Science from Northwest Missouri State University, driven by an unending enthusiasm for learning and a passion for advancing in the field of computer science.
                                        With hands-on experience in developing iOS applications and a solid background in web development using technologies like React, Node.js, and Express, I thrive on the challenge of creating innovative solutions.
                                        My roles have ranged from enhancing user interfaces and integrating third-party applications to supporting educational initiatives and contributing to Agile transformations.
                                    </p>
                                    <p>
                                        My career is marked by a commitment to staying at the forefront of technology and achieving excellence in every project I undertake.
                                        I am dedicated to exploring new technologies and leveraging my skills to drive impactful results.
                                        My diverse experience, from developing dynamic web components to optimizing geospatial data systems, reflects my goal of pushing the boundaries of what's possible in computer science.
                                    </p>
                                </div>
                                <div className="about-image">
                                    <img src={profilePic} alt="Profile" />
                                </div>
                            </div>
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
                                    <li>Revamped existing React UI components with modern web designs, enhancing visual appeal and functionality. Performed unit testing using Jest and React Testing Library, identifying bugs earlier.</li>
                                    <li>Integrated third-party payment applications into the university's application, streamlining payment processes and improving user experience.</li>
                                    <li>Created and maintained APIs using Node.js and Express, efficiently handling SQL queries to retrieve and display data from MySQL databases on the frontend.</li>
                                    <li>Utilized GitLab and Git workflows for efficient version control, ensuring smooth collaboration and code management throughout the development process.</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="work-item">
                                <div className="work-header">
                                    <p className="client">Northwest Missouri State University, Maryville MO</p>
                                    <p className="date">December - 2023 to April - 2024</p>
                                </div>
                                <p className="position">Graduate Assistant - Mobile Compting iOS</p>
                                <p className="responsibilities-title">Responsibilities:</p>
                                <ul className="responsibilities">
                                    <li>Assisted in teaching Mobile Computing IOS graduate course, supporting 80+ students through tutorials, lab sessions, and workshops. </li>
                                    <li>Offered personalized assistance to students, addressing queries, clarifying concepts, and guiding them through assignments and projects.</li>
                                    <li>Contributed to the creation of course materials, including assignments, quizzes, and additional resources.</li>
                                    <li>Collaborated with faculty to enhance course delivery methods and optimize student learning experiences.</li>
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
                                    <li>Actively contributed to Sanlam Corporate's transition from Waterfall to Agile methodologies, assisting in the division of core applications into manageable clusters and participating in Agile ceremonies such as sprint planning and retrospectives.</li>
                                    <li>Collaborated with senior developers to implement secure authentication mechanisms using JWT tokens, enhancing the application's security posture. </li>
                                    <li>Utilized React and TypeScript to create dynamic UI components, employing JSX for efficient rendering and React Router for seamless navigation.</li>
                                    <li>Implemented HTML and CSS to ensure responsive and visually appealing interfaces. Configured Webpack and Babel for optimized bundling and transpilation.</li>
                                    <li>Built robust back-end APIs using Express and Node.js, ensuring seamless integration with front-end components for cohesive application functionality. </li>
                                    <li>Performed rigorous unit testing with Jest on the front end to ensure code quality and reliability. Conducted rigorous unit testing with Mocha and Chai to ensure backend code quality and reliability.</li>
                                    <li>Spearheaded the integration of multiple task manager applications through automated emails and APIs, leveraging client-side technologies and Node.js to automate workflows. Earned client appreciation for significantly improving operational efficiency.</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="work-item">
                                <div className="work-header">
                                    <p className="client">Netenrich Technologies Pvt. Ltd, India</p>
                                    <p className="date">August 2020 to September 2021</p>
                                </div>
                                <p className="position">GIS Developer</p>
                                <p className="responsibilities-title">Responsibilities:</p>
                                <ul className="responsibilities">
                                    <li>Implemented and customized interactive maps using React.js and Leaflet, enabling dynamic data visualization and user interaction with geospatial data.</li>
                                    <li>Utilized MongoDB for storing and querying GeoJSON data, leveraging geospatial indexing to enhance data retrieval performance for location-based applications.</li>
                                    <li>Assisted in developing RESTful APIs with Express.js and Node.js for handling geospatial data operations, including CRUD functions and spatial queries.</li>
                                    <li>Conducted spatial data analysis using QGIS and ArcGIS, and performed geo-processing tasks with turf.js to support project needs and client requirements.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="double-column">
                            <div className="main-section nes-container with-title tools-tech">
                                <p className="title">Tools and Technology</p>
                                <section className="prog-lang">
                                    <h4>Programming Languages</h4>
                                    <hr />
                                    <p className="nes-badge">
                                        <span class="is-warning">JavaScript</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-error">TypeScript</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-dark">Python</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-success">Java</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-primary">Swift</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-dark">Groovy</span>
                                    </p>
                                </section>
                                <br />
                                <section className="db">
                                    <h4>Databases</h4>
                                    <hr />
                                    <p className="nes-badge">
                                        <span class="is-primary">MongoDB</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-success">Firebase</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-error">PostgreSQL</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-warning">MySQL</span>
                                    </p>
                                </section>
                                <br />
                                <section className="web-dev">
                                    <h4>Web Development</h4>
                                    <hr />
                                    <p className="nes-badge">
                                        <span class="is-dark">React</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-error">Node.js</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-primary">Express.js</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-warning">HTML</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-success">CSS</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-error">JSX</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-warning">EJS</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-dark">Webpack</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-success">Babel</span>
                                    </p>
                                </section>
                                <br />
                                <section className="mobile-dev">
                                    <h4>Mobile Development</h4>
                                    <hr />
                                    <p className="nes-badge">
                                        <span class="is-error">Swift</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-primary">SwiftUI</span>
                                    </p>
                                    <p class="nes-badge is-splited">
                                        <span class="is-dark">React</span>
                                        <span class="is-success">Native</span>
                                    </p>
                                </section>
                                <br />
                                <section className="unit-test">
                                    <h4>Unit Testing</h4>
                                    <hr />
                                    <p className="nes-badge">
                                        <span class="is-primary">Jest</span>
                                    </p>
                                    <p class="nes-badge">
                                        <span class="is-dark">Mocha</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-warning">Chai</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-success">RTL</span>
                                    </p>
                                </section>
                                <br />
                                <section className="big-data">
                                    <h4>Big Data</h4>
                                    <hr />
                                    <p className="nes-badge">
                                        <span class="is-success">Hadoop</span>
                                    </p>
                                    <p class="nes-badge">
                                        <span class="is-warning">Kafka</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-error">PySpark</span>
                                    </p>
                                </section>
                                <br />
                                <section className="geo-tools">
                                    <h4>Geospatial Tools</h4>
                                    <hr />
                                    <p className="nes-badge">
                                        <span class="is-dark">Leaflet</span>
                                    </p>
                                    <p class="nes-badge">
                                        <span class="is-success">GeoJSON</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-primary">QGIS</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-warning">ArcGIS</span>
                                    </p>
                                </section>
                                <br />
                                <section className="version-pm">
                                    <h4>Version Control and Project Management</h4>
                                    <hr />
                                    <p className="nes-badge">
                                        <span class="is-primary ">GitHub</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-primary ">GitLab</span>
                                    </p>
                                    <p class="nes-badge">
                                        <span class="is-error">Bitbucket</span>
                                    </p>
                                    <p class="nes-badge">
                                        <span class="is-warning">JIRA</span>
                                    </p>
                                    <p className="nes-badge">
                                        <span class="is-dark">Confluence</span>
                                    </p>
                                </section>
                            </div>
                            <div className="side-section">
                                <div className="nes-container with-title is-dark langs">
                                    <p className="title">Languages</p>
                                    <ul>
                                        <li>English</li>
                                        <li>Telugu</li>
                                        <li>Hindi</li>
                                        <li>French</li>
                                    </ul>
                                </div>
                                <div></div>
                            </div>

                        </div>
                        <div className="gym-guy">
                            <img src={gymGuy} alt="gym-guy" />
                        </div>
                        <div className="double-column">
                            <div className="main-section">
                                <div className="nes-container with-title is-dark edu">
                                    <p className="title">Education</p>
                                    <div className="education-item">
                                        <div className="education-details">
                                            <p>Northwest Missouri State University - Maryville, Mo</p>
                                            <p>Master of Science in Applied Computer Science</p>
                                            <p>CGPA - 4.0</p>
                                            <p>January 2023 - April 2024</p>
                                        </div>
                                        <img src={northwestLogo} alt="Northwest Missouri State University" className="education-logo" />
                                    </div>
                                    <hr />
                                    <div className="education-item">
                                        <div className="education-details">
                                            <p>SASTRA University - Thanjavur, India</p>
                                            <p>Bachelor of Technology (B.Tech.) in Civil Engineering</p>
                                            <p>CGPA - 7.06</p>
                                            <p>July 2017 - June 2021</p>
                                        </div>
                                        <img src={sastraLogo} alt="SASTRA University" className="education-logo" />
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div className="side-section nes-container with-title hobbies">
                                <p className="title">Hobbies</p>
                                <p>I love watching formula one. I am also huge Fernando Alonso and Max Verstappen fan.</p>
                                <p>I also love going to gym and lift some weights. It's like a therapy after a stressful day.</p>
                                <p>I watch anime and One Piece and demon slayer are favorites. Roronoa Zoro is my favorite character.</p>
                                <p>I was introduced to fishing by my close friend and instantly loved it. Still waiting to catch my first fish.</p>
                                <p>On a typical weekend you will find me coding in VSCode.</p>
                            </div>
                        </div>
                        <div className="nes-container with-title awards">
                            <p className="title">Awards</p>
                            <div className="award-list">
                                <p>Recognized with the Star of the Month Award during my tenure at Tata Consultancy Services for successfully completing a complex email integration task, demonstrating full dedication and exceptional technical proficiency to deliver seamless results. </p>
                                <div className="vr"></div>
                                <img src={award} alt="Star of the Month" />
                            </div>

                        </div>
                    </div>
                )
                }
            </div >
        </div >
    );
}

export default Home;