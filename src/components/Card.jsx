import './Card.css';

function Card({ badge, status, title, children }) {
    return (
        <div className="card">
            {(badge || status) && (
                <div className="card__header">
                    {badge}
                    {status}
                </div>
            )}
            {title && <h4 className="card__title">{title}</h4>}
            <div className="card__body">{children}</div>
        </div>
    );
}

export default Card;