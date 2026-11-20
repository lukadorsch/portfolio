import Button from './Button';
import './Hero.css';

function Hero() {
    return(
        <section className="hero">
            <div className="hero__content">
                <p className="hero__status">
                    <span className="hero__status-dot"></span>
                    Open to a mandatory internship from October 2027
                </p>
                <h1 className="hero__title">
                    Hi, I'm Luka – I design and build interfaces, then test them with real people.
                </h1>
                <p className="hero__text">
                    <strong>Visual Computing student</strong> at Hochschule Coburg, focused on{' '}
                    <strong>UX and front-end development</strong>. I take projects from first idea to
                    working code: understanding what people need, building the product and testing it
                    with real people to make it better.
                </p>
                <div className="hero__actions">
                    <Button href="#work">View case studies</Button>
                    <Button variant="secondary" href="/cv.pdf" download="Luka_Dorsch_CV.pdf">Download CV</Button>
                </div>
            </div>
            <img className="hero__image" src="/portrait.jpg" alt="Portrait of Luka Dorsch" />
        </section>
    );
}

export default Hero;