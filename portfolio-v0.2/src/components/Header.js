import React from 'react';

import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">

            <nav className="navbar-left">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#work-exp">Work Experience</a>
            </nav>

            <a href="#home" className="logo">Dinesh<span>.</span></a>

            <nav className="navbar-right">
                <a href="#technologies">Technologies</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;