import Tag from './Tag';
import './ProjectCard.css';

function ProjectCard({ image, title, description, tags, href }) {
    return (
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
    );
}

export default ProjectCard;