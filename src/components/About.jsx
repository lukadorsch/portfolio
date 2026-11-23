import Tag from './Tag';
import './About.css';
import useReveal from '../hooks/useReveal';

function AboutBlock({ group, delay }) {
    const [ref, isVisible] = useReveal(0.1);

    return (
        <div 
            ref={ref}
            className={`about__block reveal ${isVisible ? "is-visible" : ""}`}
            style={{ "--delay": `${delay}s` }}
        >
            <h3 className="about__block-title">{group.title}</h3>
            {group.items ? (
                <div className="about__tags">
                    {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                    ))}
                </div>
            ) : (
                <p className="about__block-text">{group.text}</p>
            )}
        </div>
    );
}

function About() {
    const skillGroups = [
        { title: 'Design & Research', items: ['Figma', 'User Research', 'Usability Testing'] },
        { title: 'Code', items: ['Python', 'Java', 'C#', 'React', 'Unity'] },
        { title: 'Currently', text: 'Visual Computing (B.Sc.), Hochschule Coburg\nWorking student, E-Commerce' },
    ];
    const [titleRef, titleVisible] = useReveal(0.1);
    const [textRef, textVisible] = useReveal(0.1);

    return (
        <section 
            className="about" id="about"
        >
            <h2 
                ref={titleRef}
                className={`about__title reveal ${titleVisible ? "is-visible" : ""}`}
            >
                About
            </h2>
            <div className="about__content">
                <p 
                    ref={textRef}
                    className={`about__text reveal ${textVisible ? "is-visible" : ""}`}
                >
                    Out of everything in my Visual Computing studies, two things stuck with me most: human-computer interaction and web development. I like understanding why people struggle with an interface, and then actually building the better version.
                    <br></br><br></br>Alongside my studies, I’m a working student in e-commerce, maintaining product data and content for an online shop. That’s also where the idea for my AI product data checker came from.
                    <br></br><br></br>Outside of work, you’ll find me making music or doing sports.
                </p>
                <div className="about__blocks">
                    {skillGroups.map((group, index) => (
                        <AboutBlock
                            key={group.title}
                            group={group}
                            delay={index * 0.15 + 0.15}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
