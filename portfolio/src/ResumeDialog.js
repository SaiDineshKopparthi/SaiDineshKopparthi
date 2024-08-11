import React from 'react';
import './ResumeDialog.css';

const ResumeDialog = ({ isOpen, onClose }) => {
    return (
        <dialog className="nes-dialog" open={isOpen}>
            <form method="dialog">
                <p>Resume</p>
                <p>Select an option:</p>
                <menu className="dialog-menu">
                    <a
                        href="/RESUME.docx"
                        download
                        className="nes-btn is-success"
                        onClick={onClose}
                    >
                        Download
                    </a>
                    <button
                        type="button"
                        className="nes-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </menu>
            </form>
        </dialog>
    );
}

export default ResumeDialog;