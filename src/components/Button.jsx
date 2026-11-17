import './Button.css'

function Button({ children, variant = 'primary', href, onClick }) {
    const className = `button button--${variant}`;

    if (href) {
        return (
            <a className={className} href={href}>
                {children}
            </a>
        );
    }

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;