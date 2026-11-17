import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <header className="nav container">
            <Link className="nav__wordmark" to="/">
                Luka Dorsch<span className="nav__dot">.</span>
            </Link>
            <nav className="nav__links">
                <Link to="/#work">Work</Link>
                <Link to="/#about">About</Link>
            </nav>
        </header>
    );
}

export default Nav;
