import LegalPage from '../components/LegalPage';
import content from '../content/datenschutz.html?raw'

function Datenschutz() {
    return(
        <LegalPage title="Datenschutzerklärung">
            <div className="legal__content" dangerouslySetInnerHTML={{ __html: content }} />
        </LegalPage>
    );
}

export default Datenschutz;