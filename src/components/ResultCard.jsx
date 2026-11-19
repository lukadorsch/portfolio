import './ResultCard.css';

function ResultBar({ value, max, unit, color }) {
    return (
        <div className="result-bar">
            <div className="result-bar__track">
                <div className="result-bar__fill" style={{ width: `${(value / max) * 100}%`, background: color }} />
            </div>
            <span className="result-bar__value">{value}{unit}</span>
        </div>
    );
}

function ResultCard({ label, gamepad, midi, max, unit }) {
    return (
        <div className="card">
            <h4 className="card__title">{label}</h4>
            <ResultBar value={gamepad} max={max} unit={unit} color="var(--chart-1)" />
            <ResultBar value={midi} max={max} unit={unit} color="var(--chart-2)" />
        </div>
    );
}

export default ResultCard;