import '../styles/WorkExperience.css'

const WorkExperience = () => {
    return (
        <section id="work-exp" className="work-exp">
            <div className="work-exp-heading">
                <h2>Work Experience</h2>
            </div>

            <div className="work-exp-container ">
                <div className="work-exp-box nes-container with-title">
                    <p className="title">Northwest Missouri State University</p>
                    <h3>Software Developer</h3>
                    <h3>MAY 2023 - APR 2024</h3>
                    <p>
                        I enhanced React UI components, integrated third-party payment systems, and developed APIs using
                        Node.js and Express for efficient data handling.
                        I also leveraged GitLab for seamless collaboration and version control.
                    </p>
                </div>

                <div className="work-exp-box nes-container with-title">
                    <p className="title">Tata Consultancy Services</p>
                    <h3>Assistant System Engineer</h3>
                    <h3>NOV 2021 - NOV 2022</h3>
                    <p>
                        I played a key role in Sanlam Corporate's transition to Agile, dividing core applications into
                        clusters and participating in Agile ceremonies.
                        I collaborated on secure authentication with JWT tokens, developed dynamic UI components with React
                        and TypeScript, and ensured responsive designs using HTML and CSS.
                        I also built robust back-end APIs with Node.js and Express, conducted comprehensive testing with
                        Jest, Mocha, and Chai, and integrated task manager applications to automate workflows, earning
                        client appreciation for boosting efficiency.
                    </p>
                </div>

                <div className="work-exp-box nes-container with-title">
                    <p className="title">Netenrich Technologies Pvt. Ltd.</p>
                    <h3>GIS Developer</h3>
                    <h3>AUG 2020 - SEP 2021</h3>
                    <p>
                        I developed interactive maps using React.js and Leaflet for dynamic geospatial data visualization,
                        utilizing MongoDB for efficient GeoJSON storage and querying.
                        I also assisted in creating RESTful APIs with Express.js and Node.js for geospatial data operations
                        and conducted spatial data analysis using QGIS, ArcGIS, and turf.js to meet project and client
                        needs.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;