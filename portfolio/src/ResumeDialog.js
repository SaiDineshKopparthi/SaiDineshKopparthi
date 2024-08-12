import React from 'react';
import './ResumeDialog.css';

const ResumeDialog = ({ isOpen, onClose }) => {
    return (
        <>
        <div className={`overlay ${isOpen ? 'visible' : ''}`}></div>
        
        <dialog className="nes-dialog" open={isOpen}>
            <form method="dialog">
                <p>Resume</p>
                <p>Select an option:</p>
                <menu className="dialog-menu">
                    <a
                        href="/RESUME.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nes-btn is-primary btn-with-icon"
                        onClick={onClose}
                    >
                        View Online
                    </a>
                    <a
                        href="/RESUME.pdf"
                        download
                        className="nes-btn is-success btn-with-icon"
                        onClick={onClose}
                    >
                        Download
                    </a>
                </menu>
            </form>
        </dialog>
        </>
    );
}

export default ResumeDialog;