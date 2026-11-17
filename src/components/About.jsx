import Tag from './Tag';
import './About.css';

function About() {
    const skillGroups = [
        { title: 'Design & Research', items: ['Figma', 'User Research', 'Usability Testing'] },
        { title: 'Code', items: ['Python', 'Java', 'C#', 'React', 'Unity'] },
        { title: 'Currently', text: 'Visual Computing (B.Sc.), Hochschule Coburg\nWorking student, E-Commerce' },
    ];
    return (
        <section className="about" id="about">
            <h2 className="about__title">About</h2>
            <div className="about__content">
                <p className="about__text">Out of everything in my Visual Computing studies, two things stuck with me most: human-computer interaction and web development. I like understanding why people struggle with an interface, and then actually building the better version.
                    <br></br><br></br>Alongside my studies, I work as a working student in e-commerce, maintaining product data and content for an online shop. That’s also where the idea for my AI product data checker came from.
                    <br></br><br></br>Outside of work, you’ll find me making music or doing sports.
                </p>
                <div className="about__blocks">
                    {skillGroups.map((group) => (
                        <div className="about__block" key={group.title}>
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
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;