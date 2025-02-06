import React from "react";

import "../styles/About.css";

import profilePic from "../assets/profile-pic.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-heading">
        <h2>About Me</h2>
      </div>

      <div className="about-content-wrapper">
        <div className="about-image">
          <img src={profilePic} alt="profile-pic" />
          <button type="button" className="nes-btn is-success">
            Download Resume
          </button>
        </div>

        <div className="about-content nes-container with-title">
          <p className="title">Full Stack Developer</p>
          <p>
            I am a recent Master's graduate in Applied Computer Science from
            Northwest Missouri State University, driven by an unending
            enthusiasm for learning and a passion for advancing in the field of
            computer science. With hands-on experience in developing iOS
            applications and a solid background in web development using
            technologies like React, Node.js, and Express, I thrive on the
            challenge of creating innovative solutions. My roles have ranged
            from enhancing user interfaces and integrating third-party
            applications to supporting educational initiatives and contributing
            to Agile transformations.
          </p>

          <p>
            My career is marked by a commitment to staying at the forefront of
            technology and achieving excellence in every project I undertake. I
            am dedicated to exploring new technologies and leveraging my skills
            to drive impactful results. My diverse experience, from developing
            dynamic web components to optimizing geospatial data systems,
            reflects my goal of pushing the boundaries of what's possible in
            computer science.
          </p>
        </div>

        <div className="about-content nes-container with-title">
          <p className="title">Developer</p>
          <p>
            I am a recent Master's graduate in Applied Computer Science from
            Northwest Missouri State University, driven by an unending
            enthusiasm for learning and a passion for advancing in the field of
            computer science. With hands-on experience in developing iOS
            applications and a solid background in web development using
            technologies like React, Node.js, and Express, I thrive on the
            challenge of creating innovative solutions. My roles have ranged
            from enhancing user interfaces and integrating third-party
            applications to supporting educational initiatives and contributing
            to Agile transformations.
          </p>
        </div>

        <div className="about-content nes-container with-title">
          <p className="title">Full Stack</p>

          <p>
            My career is marked by a commitment to staying at the forefront of
            technology and achieving excellence in every project I undertake. I
            am dedicated to exploring new technologies and leveraging my skills
            to drive impactful results. My diverse experience, from developing
            dynamic web components to optimizing geospatial data systems,
            reflects my goal of pushing the boundaries of what's possible in
            computer science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
