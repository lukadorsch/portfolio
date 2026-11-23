import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Footer from '../components/Footer';

function Home() {
    const { hash, key } = useLocation();

    useEffect(() => {
        if (!hash) return;
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }, [hash, key]);

    return(
        <div className="home">
            <Nav />
            <main className="home__content">
                <Hero />
                <Work />
                <About />
            </main>
            <hr />
            <Footer />
        </div>
    );
}

export default Home;
