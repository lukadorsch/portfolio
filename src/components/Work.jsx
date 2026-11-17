import ProjectCard from './ProjectCard';
import './Work.css';

function Work() {
    return (
        <section className="work" id="work">
            <h2 className="work__title">Selected Work</h2>
            <div className="work__cards">
                <ProjectCard
                image="/flightsim.png"
                title="AI Product Data Checker"
                description="An AI-assisted tool that helps shop teams keep product data consistent."
                tags={['UX for AI', 'React', 'Python', 'User Research']}
                href="/data-checker"
                />
                <ProjectCard
                image="/flightsim.png"
                title="Joystick vs. Sliders"
                description="A user study comparing two input devices for controlling a flight simulation."
                tags={['User Research', 'Unity', 'C#']}
                href="/flight-sim"
                />
            </div>
        </section>
    );
}

export default Work;