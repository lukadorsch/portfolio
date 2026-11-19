import './Card.css';

function Card({ badge, status, title, children, style, titleStyle }) {
    return (
        <div className="card" style={style}>
            {(badge || status) && (
                <div className="card__header">
                    {badge}
                    {status}
                </div>
            )}
            {title && <h4 className="card__title" style={titleStyle}>{title}</h4>}
            {children && <div className="card__body">{children}</div>}
        </div>
    );
}

export default Card;