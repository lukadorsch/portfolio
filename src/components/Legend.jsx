import './Legend.css';

function Legend()  {
    return (
        <div className="legend">
            <span className="legend__item">
                <span className="legend__swatch" style={{ background: 'var(--chart-1)' }} />
                Nintendo Switch Pro Controller
            </span>
            <span className="legend__item">
                <span className="legend__swatch" style={{ background: 'var(--chart-2)' }} />
                KORG nanoKONTROL2
            </span>
        </div>
    );
}

export default Legend;