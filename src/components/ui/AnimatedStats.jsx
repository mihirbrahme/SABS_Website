import { useRef } from 'react';
import { useInView } from 'framer-motion';
import './AnimatedStats.css';

const StatItem = ({ number, label, suffix = "+", icon }) => {
    return (
        <div className="stat-item">
            <div className="stat-number-wrapper">
                <span className="stat-number">{number}{suffix}</span>
            </div>
            <p className="stat-label">{label}</p>
        </div>
    );
};

const AnimatedStats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { id: 1, number: "35", label: "Years of Experience" },
        { id: 2, number: "500", label: "Clients Supported" },
        { id: 3, number: "5", label: "Countries Served" },
        { id: 4, number: "20", label: "Member Team" },
    ];

    return (
        <section className="stats-section" ref={ref}>
            <div className="container">
                <div className="stats-header">
                    <span className="stats-eyebrow">Experience You Can Trust</span>
                </div>

                <div className="stats-grid">
                    {stats.map((stat) => (
                        <StatItem
                            key={stat.id}
                            number={stat.number}
                            label={stat.label}
                        />
                    ))}
                </div>

                <div className="stats-caption">
                    <p>
                        A legacy CA firm that has evolved into a modern offshore finance team — combining long-term trust with today’s tools and workflows.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AnimatedStats;
