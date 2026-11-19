import './RatingChart.css';
import Legend from './Legend';

function Bar({ value, color }) {
    return (
        <div className="rating-chart__bar-wrap">
            <span className="rating-chart__value">{value}</span>
            <div className="rating-chart__bar" style={{ height: `${(value / 7) * 100}%`, background: color }} />
        </div>
    );
}

function RatingChart({ data}) {
    return (
        <div className="card">
            <div className="rating-chart__header">
                <h4 className="card__title">How participants rated the devices</h4>
                <Legend />
            </div>
            <div className="rating-chart">
                {data.map((d) => (
                    <div key={d.label} className={`rating-chart__group ${d.highlight ? 'is-highlight' : ''}`}>
                        <div className="rating-chart__bars">
                            <Bar value={d.gamepad} color="var(--chart-1)" />
                            <Bar value={d.midi} color="var(--chart-2)" />
                        </div>
                        <span className="rating-chart__label">{d.label}</span>
                    </div>
                ))}
            </div>
            <p className="rating-chart__note">Scale 1-7. For concentration, lower is better.</p>
        </div>
    );
}

export default RatingChart;