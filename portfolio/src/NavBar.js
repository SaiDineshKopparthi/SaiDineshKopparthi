import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import fireGuy from './assets/fire-guy.gif'
import ResumeDialog from './ResumeDialog'
import './NavBar.css'

const NavBar = () => {
    const location = useLocation()

    const [isDialogOpen, setDialogOpen] = useState(false)

    const getLinkClass = (path) => {
        return location.pathname === path ? 'active' : 'inactive';
    };

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <nav className="navbar">
            <img src={fireGuy} alt="flying-ducky" />
            <h3 className="nes-text">Sai Dinesh Kopparthi</h3>
            <div className="links">
                <button className="nes-btn is-success" onClick={openDialog}>Resume</button>
                <Link className={`nes-text ${getLinkClass('/')}`} to="/">Home</Link>
                <Link className={`nes-text ${getLinkClass('/projects')}`} to="/projects">Projects</Link>
                <Link className={`nes-text ${getLinkClass('/contact')}`} to="/contact">Contact</Link>
            </div>
            <ResumeDialog isOpen={isDialogOpen} onClose={closeDialog} />
        </nav>
    )
}

export default NavBar;