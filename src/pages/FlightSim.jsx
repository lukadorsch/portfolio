import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CaseStudyHero from '../components/CaseStudyHero';
import '../components/FlightSim.css';
import CaseStudySection from '../components/CaseStudySection';
import Tag from '../components/Tag';
import Card from '../components/Card';
import Legend from '../components/Legend';
import ResultCard from '../components/ResultCard';
import RatingChart from '../components/RatingChart';
import { objectiveResults, subjectiveResults } from '../data/flightsim';

import { Gamepad2, List, Navigation, RotateCcw, FileSpreadsheet, Flag, ArrowRight, Check } from 'lucide-react';

function FlightSim() {
    const flightSimMetaItems=[
        { header: 'Context', body: 'Hochschule Coburg · HCI2'},
        { header: 'Timeline', body: 'Summer semester 2026'},
        { header: 'Role', body: 'Concept, Development, Testing, Analysis'},
        { header: 'Tools', body: 'Unity 6, C#, CSV analysis'},
    ]
    
    return(
        <div className="flightsim">
            <Nav />
            <main>
                <CaseStudyHero 
                    overline="CASE STUDY · HUMAN-COMPUTER INTERACTION"
                    title="Gamepad vs. MIDI Controller: What's the Best Way to Fly a Plane?"
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
                    control schemes, a clear task for participants and automatic data collection,
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
                        pitch, yaw, roll and turbo.
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
                <CaseStudySection
                    overline="03 — Study Design"
                    title="Same task, two devices, every run measured"
                    intro="Every participant flew the same course with both devices: 
                    through three rings in a fixed order, followed by a landing in a 
                    marked zone. The only thing that changed between runs was the input device."
                >
                    <hr />
                    <div className="card-grid">
                        <div className="css__number-card">
                            <h4 className="css__number-title">7</h4>
                            <p className="css__number-body">participants (5 students, 1 professor, 1 research associate)</p>
                        </div>
                        <div className="css__number-card">
                            <h4 className="css__number-title">2</h4>
                            <p className="css__number-body">input devices</p>
                        </div>
                        <div className="css__number-card">
                            <h4 className="css__number-title">3 rings</h4>
                            <p className="css__number-body">+ landing per run</p>
                        </div>
                        <div className="css__number-card">
                            <h4 className="css__number-title">Within-subjects</h4>
                            <p className="css__number-body">everyone used both devices</p>
                        </div>
                    </div>
                    <hr />
                    <h3 className="css__subHeader">Procedure</h3>
                    <div className="css__steps">
                        <Card badge={<Tag>1</Tag>} title="Choose device">
                            participants picked which device to start with
                        </Card>
                        <ArrowRight className="css__stepArrow" size={18} />
                        <Card badge={<Tag>2</Tag>} title="Practice run">
                            get familiar with the controls
                        </Card>
                        <ArrowRight className="css__stepArrow" size={18} />
                        <Card badge={<Tag>3</Tag>} title="Measured run">
                            performance data logged automatically
                        </Card>
                        <ArrowRight className="css__stepArrow" size={18} />
                        <Card badge={<Tag>4</Tag>} title="Questionnaire">
                            rate the device on a 7-point scale
                        </Card>
                    </div>
                    <p className="css__note">Then the same sequence with the second device.</p>
                    <h3 className="css__subHeader">What I measured</h3>
                    <div className="card-grid">
                        <Card title="Objective · logged automatically">
                            Successful landing · Rings reached · Flight time (successful runs 
                            only) · Number of crashes
                        </Card>
                        <Card title="Subjective · 7-point Likert scale">
                            Intuitiveness · Precision · Fun · Required concentration · Overall rating
                        </Card>
                    </div>
                </CaseStudySection>
                <hr />
                <CaseStudySection
                    overline="04 — Results"
                    title="The gamepad won on performance — but not on fun"
                    intro="The difference in performance was bigger than expected: every gamepad run was successful, 
                    while only one MIDI run made it to the landing. Subjectively, the picture was similar, 
                    with one clear exception: fun."
                >
                    <h3 className="css__subHeader">Objective results</h3>
                    <Legend />
                    <div className="card-grid">
                        {objectiveResults.map((r) => <ResultCard key={r.label} {...r} />)}
                    </div>
                    <p className="css__note">Flight time is left out: only one MIDI run was successful (145 s vs. 45 s average with the gamepad).</p>
                    <h3 className="css__subHeader">Subjective results</h3>
                    <RatingChart data={subjectiveResults} />
                    <div className="card-grid">
                        <Card badge={<Tag>H1</Tag>} status={<span className="card__status"><Check size={16} />Confirmed</span>} title="Performance">
                            The gamepad leads to better performance:
                            more successful runs, fewer crashes, faster flights.
                        </Card>
                        <Card badge={<Tag>H2</Tag>} status={<span className="card__status"><Check size={16} />Confirmed</span>} title="Control">
                            The gamepad feels more intuitive and precise.
                        </Card>
                        <Card badge={<Tag>H3</Tag>} status={<span className="card__status"><Check size={16} />Confirmed</span>} title="Fun">
                            The MIDI controller is just as fun,
                            because of its unusual way of interacting.
                        </Card>
                    </div>
                </CaseStudySection>
                <hr />
                <CaseStudySection 
                    overline="05 — Key Insight"
                >
                    <Card
                        style={{ border: '1px solid var(--accent)', padding: 'clamp(16px, 5vw, 48px)' }}
                        titleStyle={{ maxWidth: 800, fontSize: 'clamp(20px, 3vw, 28px)' }}
                        title="
                    Performance and enjoyment don’t always go together. An unfamiliar input can 
                    be fun even while people keep failing, but for tasks that need precision, 
                    the mapping has to match what users expect."
                    />
                    <h3 className="css__subHeader">Two lessons I'm taking into future projects:</h3>
                    <div className="card-grid">
                        <Card title="Novelty creates engagement, not usability.">
                            The MIDI controller was rated just as fun, but needed twice the concentration 
                            and led to five times more crashes. Fun alone doesn't make an interface work.
                        </Card>
                        <Card title="Mapping beats hardware.">
                            The biggest problem wasn't the device itself but one mapping decision: the pitch fader. 
                            Matching users' mental models matters more than the physical controls.
                        </Card>
                    </div>
                </CaseStudySection>
                <hr />
                <CaseStudySection
                    overline="06 — Reflection"
                    title="What I'd do differently next time"
                    intro="The study gave clear tendencies, but it also had limits I'd fix in a follow-up. 
                    Looking back critically is part of the process, and these lessons directly shaped how I plan studies now."
                >
                    <div className="card-grid">
                        <Card title="Limitations">
                            <ul>
                                <li><strong>Small sample:</strong> 7 participants show tendencies, not proof.</li>
                                <li><strong>Descriptive statistics only:</strong> no significance tests.</li>
                                <li><strong>Order not counterbalanced:</strong> participants chose which device to start with, so learning effects are possible.</li>
                                <li><strong>Flight time for MIDI is based on a single successful run,</strong> so it isn't meaningful.</li>
                            </ul>
                        </Card>
                        <Card title="Next time I would">
                            <ul>
                                <li><strong>Counterbalance the device order</strong> so half the participants start with each device.</li>
                                <li><strong>Run a pilot test first,</strong> which would have caught the pitch-mapping problem before the actual study.</li>
                                <li><strong>Iterate on the MIDI mapping</strong> based on observed errors and test again.</li>
                                <li><strong>Add a significance test</strong> suited to small samples, such as the Wilcoxon signed-rank test.</li>
                            </ul>
                        </Card>
                    </div>
                </CaseStudySection>
                <div className="nav__links">
                    <Link className="legal__link" to="/#work">← Back to home</Link>
                </div>
            </main>
            <hr />
            <Footer />
        </div>
    );
}

export default FlightSim;