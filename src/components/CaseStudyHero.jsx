import './CaseStudyHero.css';

function CaseStudyHero({ overline, title,  subtitle, metaItems, image }) {
    return (
        <div className="csh">
            <p className="csh__overline">{overline}</p>
            <h1 className="csh__title">{title}</h1>
            <p className="csh__subtitle">{subtitle}</p>
            <div className="csh__metaRow">
                {metaItems.map(({ header, body }) => (
                    <div className="csh__metaItem" key={header}>
                        <p className="csh__metaHeader">{header}</p>
                        <p className="csh__metaBody">{body}</p>
                    </div>
                ))}
            </div>
            <img className="csh__image" src={image} alt={title} />
        </div>
    );
}

export default CaseStudyHero;