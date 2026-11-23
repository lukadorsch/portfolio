import Tag from './Tag';
import './ProjectCard.css';
import useReveal from '../hooks/useReveal';

function ProjectCard({ image, title, description, tags, href, delay = 0 }) {
    const [ref, isVisible] = useReveal();
        
    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? "is-visible" : ""}`}
            style={{ "--delay": `${delay}s` }}
        >
            <a className="project-card" href={href}>
                <img className="project-card__image" src={image} alt={title}></img>
                <div className="project-card__tags">
                    {tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__description">{description}</p>
                <span className="project-card__link">Read case study <span className="project-card__arrow">→</span></span>
            </a>
        </div>
    );
}

export default ProjectCard;