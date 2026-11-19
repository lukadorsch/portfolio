import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CaseStudyHero from '../components/CaseStudyHero';
import '../components/FlightSim.css';
import CaseStudySection from '../components/CaseStudySection';
import Tag from '../components/Tag';
import Card from '../components/Card';

import { Gamepad2, List, Navigation, RotateCcw, FileSpreadsheet, Flag } from 'lucide-react';

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
                <hr />
                <CaseStudySection 
                    overline="02 — What I built"
                    title="From a given flight sim to a testable study setup"
                    intro="The course provided a basic Unity flight simulation. My job was
                    to turn it into something I could actually run a study with: two complete
                    control schemes, a clear trask for participants and automatic data collection,
                    so every run was measured the same way."
                >
                    <div className="card-grid">
                        <Card badge={<Tag><Gamepad2 size={18} /></Tag>} title="Two control schemes">
                            Nintendo Switch Pro Controller and KORG nanoKONTROL2 MIDI controller
                        </Card>
                        <Card badge={<Tag><List size={18} /></Tag>} title="Start menu">
                            Participants pick their input device before each run
                        </Card>
                        <Card badge={<Tag><Navigation size={18} /></Tag>} title="Direction indicator">
                            An arrow pointing to the next ring, so nobody gets lost
                        </Card>
                    </div>
                    <div className="card-grid">
                        <Card badge={<Tag><RotateCcw size={18} /></Tag>} title="Crash detection & respawn">
                            Crashes are counted and the run continues
                        </Card>
                        <Card badge={<Tag><FileSpreadsheet size={18} /></Tag>} title="Automatic CSV logging">
                            Success, rings, flight time and crashes saved per run
                        </Card>
                        <Card badge={<Tag><Flag size={18} /></Tag>} title="Results screen">
                            Shown after a successful landing
                        </Card>
                    </div>
                    <h3 className="css__subHeader">Control Mapping</h3>
                    <p className="css__intro">Both devices controlled the same four actions: 
                        pitch, yaw roll and turbo
                    </p>
                    <div className="css__mappingGrid">
                        <Card title="Nintendo Switch Pro Controller">
                            <img className="css__mapping" src="/mapping-gamepad.svg" alt="" />
                        </Card>
                        <Card title="KORG nanoKONTROL2 MIDI controller">
                            <img className="css__mapping" src="/mapping-midi.svg" alt="" />
                        </Card>
                    </div>
                </CaseStudySection>
                <hr />
                
            </main>
            <hr />
            <Footer />
        </div>
    );
}

export default FlightSim;