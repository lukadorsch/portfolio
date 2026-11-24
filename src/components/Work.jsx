import ProjectCard from './ProjectCard';
import './Work.css';

function Work() {
    return (
        <section className="work" id="work">
            <h2 className="work__title">Selected Work</h2>
            <div className="work__cards">
                <ProjectCard
                image="/placeholder.png"
                title="AI Product Data Checker"
                description="An AI-assisted tool that helps shop teams keep product data consistent."
                tags={['UX for AI', 'React', 'Python', 'User Research']}
                href="/data-checker"
                delay={0.1}
                />
                <ProjectCard
                image="/flightsim.png"
                title="Gamepad vs. MIDI Controller"
                description="A user study comparing two input devices for controlling a flight simulation."
                tags={['User Research', 'Unity', 'C#']}
                href="/flight-sim"
                delay={0.2}
                />
            </div>
        </section>
    );
}

export default Work;