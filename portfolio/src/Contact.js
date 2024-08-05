import './Contact.css'
import pengu from './assets/pengu.gif'

const Contact = () => {
    return (
        <div className="main-content">
            <div className="contact">
                <div className="nes-container with-title contact-me">
                    <p className="title">Contact Me</p>
                    <form action="">
                        <div className="nes-field">
                            <label htmlFor="name_field">Your Name*</label>
                            <input type="text" id="name_field" className="nes-input" placeholder='Please enter your full name' required />
                        </div>
                        <div className="nes-field">
                            <label htmlFor="email_field">Your E-mail*</label>
                            <input type="text" id="email_field" className="nes-input" placeholder='Please enter your email' required />
                        </div>
                        <div className="nes-field">
                            <label htmlFor="message_field">Your Message*</label>
                            <textarea id="message_field" className="nes-textarea" placeholder='Please enter your message...' required></textarea>
                        </div>
                    </form>
                    <button className="nes-btn is-warning">Submit</button>
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
            </div>
        </div>
    );
}

export default Contact;