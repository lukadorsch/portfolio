import './Footer.css';

function Footer() {
    const links = [
        { label: 'Email', href: 'mailto:luka.dorsch@gmail.com' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luka-dorsch-0913a844a/' },
        { label: 'GitHub', href: 'https://github.com/lukadorsch' },
        { label: 'CV', href: '/cv.pdf', download: 'Luka_Dorsch_CV.pdf' },
    ];

    const renderLinks = (items) => (
        <nav className="footer__links">
            {items.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    download={link.download}
                    {...(link.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                >
                    {link.label}
                </a>
            ))}
        </nav>
    );

    return (
        <footer className="footer" id="contact">
            <div className="footer__line">
                <h2 className="footer__title">
                    Let's work together<span className="footer__dot">.</span>
                </h2>
                {renderLinks(links.slice(0, 2))}
            </div>
            <div className="footer__line">
                <p className="footer__text">
                    Looking for an intern who designs, builds and tests? I'd love to hear from you.
                </p>
                {renderLinks(links.slice(2))}
            </div>
            <div className="footer__line footer__line--meta">
                <p>© {new Date().getFullYear()} Luka Dorsch</p>
                <div className="footer__legal">
                    <a href="/impressum">Impressum</a>
                    <a href="/datenschutz">Datenschutz</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
