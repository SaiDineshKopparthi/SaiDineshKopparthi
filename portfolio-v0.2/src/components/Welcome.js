import '../styles/Welcome.css';

import zombie from '../assets/zombie.gif'

const Welcome = ({whenClickedStarted}) => {
    return (
        <div className="welcome-container">
            <div className="title">
                <p>Hey</p>
                <p>There!</p>
            </div>
            <h2 className="nes-text">Welcome to My Digital Portfolio.</h2>
            <img src={zombie} alt="Zombie" />
            <button className="nes-btn is-error" onClick={whenClickedStarted}>Let's Get Started</button>
        </div>
    );
}

export default Welcome;