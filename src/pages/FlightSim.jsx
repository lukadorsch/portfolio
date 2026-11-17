import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CaseStudyHero from '../components/CaseStudyHero';
import '../components/FlightSim.css';
import CaseStudySection from '../components/CaseStudySection';
import Tag from '../components/Tag';
import Card from '../components/Card';

function FlightSim() {
    const flightSimMetaItems=[
        { header: 'Context', body: 'Coburg University · HCI2'},
        { header: 'Timeline', body: 'Summer semester 2026'},
        { header: 'Role', body: 'Concept, Development, Testing, Analysis'},
        { header: 'Tools', body: 'Unity 6, C#, CSV analysis'},
    ]
    
    return(
        <div className="flightsim">
            <Nav />
            <hr />
            <main>
                <CaseStudyHero 
                    overline="CASE STUDY · HUMAN-COMPUTER INTERACTION"
                    title="Gamepad vs. MIDI Mixer: What's the Best Way to Fly a Plane?"
                    subtitle="A user study comparing input methods in a Unity flight simulation"
                    metaItems={flightSimMetaItems}
                    image="/flightsim.png"
                />
                <hr />
                <CaseStudySection 
                    overline="01 — The Question"
                    title="Does a familiar controller always win?"
                    intro="Gamepads are the default way to steer in games, 
                        but alternative devices like MIDI controllers promise a more 
                        physical, hands-on way to interact. I wanted to find out how 
                        much performance we trade for novelty, and whether an unusual 
                        input can make up for it in user experience."
                >
                    <div className="card-grid">
                        <Card badge={<Tag>H1</Tag>} title="Performance">
                            The gamepad leads to better performance:
                            more successful runs, fewer crashes, faster flights.
                        </Card>
                        <Card badge={<Tag>H2</Tag>} title="Control">
                            The gamepad feels more intuitive and precise.
                        </Card>
                        <Card badge={<Tag>H3</Tag>} title="Fun">
                            The MIDI controller is just as fun,
                            because of its unusual way of interacting.
                        </Card>
                    </div>
                </CaseStudySection>
            </main>
            <hr />
            <Footer />
        </div>
    );
}

export default FlightSim;