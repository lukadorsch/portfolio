import './CaseStudySection.css';

function CaseStudySection({ overline, title, intro, children }) {
    return (
        <section className="css">
            <p className="css__overline">{overline}</p>
            <h2 className="css__title">{title}</h2>
            {intro && <p className="css__intro">{intro}</p>}
            {children}
        </section>
    );
}

export default CaseStudySection;