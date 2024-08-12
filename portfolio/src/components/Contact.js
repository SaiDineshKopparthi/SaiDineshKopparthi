import '../styles/Contact.css'
import pengu from '../assets/pengu.gif'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [nameError, setNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [messageError, setMessageError] = useState(null)

    const [isDialogOpen, setDialogOpen] = useState(false)
    const [dialogMessage, setDialogMessage] = useState(null)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const validateName = (name) => {
        if (name.trim() === '') {
            setNameError('Please enter your name')
        } else {
            setNameError(null)
        }
    }

    const validateEmail = (email) => {
        if (email.trim() === '') {
            setEmailError('Please enter your e-mail')
        } else if (!emailRegex.test(email.trim())) {
            setEmailError('Please enter a valid email address')
        } else {
            setEmailError(null)
        }
    }

    const validateMessage = (message) => {
        if (message.trim() === '') {
            setMessageError('Please enter a message')
        } else {
            setMessageError(null)
        }
    }

    const validateForm = () => {
        const isNameValid = name.trim() !== '';
        const isEmailValid = email.trim() !== '' && emailRegex.test(email.trim());
        const isMessageValid = message.trim() !== '';

        validateName(name);
        validateEmail(email);
        validateMessage(message);

        return isNameValid && isEmailValid && isMessageValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!validateForm()) {
            return;
        }

        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;


        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Sai Dinesh Kopparthi',
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(response => {
                console.log('email sent success', response)
                setName('')
                setEmail('')
                setMessage('')
                setDialogMessage("Your message has been sent successfully! Thanks for reaching out")
                setDialogOpen(true)
            })
            .catch(error => {
                console.log('Error: ', error)
                setDialogMessage("Oops! Something went wrong. Please try again.")
                setDialogOpen(true)
            })
    }

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className="main-content">
            <div className="contact">
                <div className="nes-container with-title contact-me">
                    <p className="title">Contact Me</p>
                    <form onSubmit={handleSubmit}>
                        <div className="nes-field">
                            <label htmlFor="name_field">Your Name</label>
                            <input
                                type="text"
                                className={`nes-input ${nameError ? 'is-error' : ''}`}
                                placeholder='Please enter your full name'
                                value={name}
                                onChange={event => {
                                    setName(event.target.value)
                                    validateName(event.target.value)
                                }}
                            />
                            {nameError && <p className="nes-text is-error">{nameError}</p>}
                        </div>
                        <div className="nes-field">
                            <label htmlFor="email_field">Your E-mail</label>
                            <input
                                type="text"
                                className={`nes-input ${emailError ? 'is-error' : ''}`}
                                placeholder='Please enter your email'
                                value={email}
                                onChange={event => {
                                    setEmail(event.target.value)
                                    validateEmail(event.target.value)
                                }}
                            />
                            {emailError && <p className="nes-text is-error">{emailError}</p>}
                        </div>
                        <div className="nes-field">
                            <label htmlFor="message_field">Your Message</label>
                            <textarea
                                className={`nes-input ${messageError ? 'is-error' : ''}`}
                                placeholder='Please enter your message...'
                                value={message}
                                onChange={event => {
                                    setMessage(event.target.value)
                                    validateMessage(event.target.value)
                                }}
                            >
                            </textarea>
                            {messageError && <p className="nes-text is-error">{messageError}</p>}
                        </div>
                        <button type="submit" className="nes-btn is-warning">Submit</button>
                    </form>

                </div>
                <section className="icon-list">

                    <a href="https://github.com/saidineshkopparthi" target="_blank" rel="noopener noreferrer">
                        <i className="nes-icon github is-large"></i>
                    </a>
                    <a href="mailto:kopparthi.dinesh42224@gmail.com?subject=Contact&body=Hello, I would like to get in touch with you.">
                        <i className="nes-icon gmail is-large"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/dinesh-kopparthi-10862521b/" target="_blank" rel="noopener noreferrer">
                        <i className="nes-icon linkedin is-large"></i>
                    </a>
                </section>
                <img src={pengu} alt="pengu" className="pengu" />

                <div className={`overlay ${isDialogOpen ? 'visible' : ''}`}></div>

                <dialog className="nes-dialog" open={isDialogOpen}>
                    <form method="dialog">
                        <p>{dialogMessage}</p>
                        <menu className="dialog-menu">
                            <button
                                className="nes-btn is-warning"
                                onClick={closeDialog}
                            >
                                OK
                            </button>
                        </menu>
                    </form>
                </dialog>

            </div>
        </div>
    );
}

export default Contact;