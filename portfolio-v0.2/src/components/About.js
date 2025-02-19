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
          <p></p>

          <p></p>
        </div>

        <div className="about-content nes-container with-title">
          <p className="title">Developer</p>
          <p></p>
        </div>

        <div className="about-content nes-container with-title">
          <p className="title">Full Stack</p>

          <p></p>
        </div>
      </div>
    </section>
  );
};

export default About;
