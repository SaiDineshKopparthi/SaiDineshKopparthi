import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'

const TitleBar = () => {
    const location  = useLocation()

    const getLinkClass = (path) => {
        return location.pathname === path ? 'active' : 'inactive';
    };

    return (
        <nav className="navbar">
            <h3 className="nes-text">Sai Dinesh Kopparthi</h3>
            <div className="links">
                <Link className={`nes-text ${getLinkClass('/')}`} to="/">Home</Link>
                <Link className={`nes-text ${getLinkClass('/projects')}`} to="/projects">Projects</Link>
                <Link className={`nes-text ${getLinkClass('/contact')}`} to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default TitleBar;