import { Children } from 'react';
import './CaseStudySection.css';
import Reveal from './Reveal';

function CaseStudySection({ overline, title, intro, children }) {
    return (
        <section className="css">
            <Reveal as="p" className="css__overline">
                {overline}
            </Reveal>
            {title && (
                <Reveal as="h2" className="css__title">
                    {title}
                </Reveal>
            )}
            {intro && (
                <Reveal as="p" className="css__intro" delay={0.08}>
                    {intro}
                </Reveal>
            )}
            {Children.map(children, (child) =>
                child == null || child === false
                    ? child
                    : <Reveal delay={0.16}>{child}</Reveal>
            )}
        </section>
    );
}

export default CaseStudySection;
