import { Link } from 'react-router-dom';
import './LegalPage.css';
import Nav from './Nav';
import Footer from './Footer';

function LegalPage({ title, children }) {
    return (
        <div className="page">
            <div className="legal">
                <Nav />
                <article lang="de">
                    <h1 className="legal__title">{title}</h1>
                    {children}
                    <div className="nav__links">
                        <Link className="legal__link" to="/">← Zurück zur Startseite</Link>
                    </div>
                </article>
                <hr />
                <Footer />
            </div>
        </div>
    );
}

export default LegalPage;