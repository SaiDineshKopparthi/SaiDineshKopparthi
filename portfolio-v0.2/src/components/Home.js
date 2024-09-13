import React from 'react';

import '../styles/Home.css';

const Home = () => {
    return (
        <section className="home">
            <div className="background-image"></div>

            <div className="overlay"></div>

            <div className="content">
                <h1>Sai Dinesh Kopparthi</h1>
                <p>
                    Full Stack Web Developer, Aspiring Data Scientist, iOS Mobile Developer
                </p>
            </div>
        </section>
    );
}

export default Home;