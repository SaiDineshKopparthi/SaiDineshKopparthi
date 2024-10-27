import '../styles/Portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-heading">
                <h2>Portfolio</h2>
            </div>

            <div className="filters">
                <button type="button" className="nes-btn">ALL</button>
                <button type="button" className="nes-btn is-primary">WEB DEVELOPMENT</button>
                <button type="button" className="nes-btn is-success">iOS</button>
                <button type="button" className="nes-btn is-warning">MACHINE LEARNING</button>
                <button type="button" className="nes-btn is-error">GIS</button>
            </div>

            
        </section>
    );
}

export default Portfolio;