import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './AnimatedStats.css';

const StatItem = ({ end, suffix, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="stat-item" ref={ref}>
            <div className="stat-number">
                {isInView ? <CountUp end={end} duration={2.5} /> : 0}
                {suffix}
            </div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

const AnimatedStats = () => {
    return (
        <div className="stats-bar">
            <div className="container">
                <div className="stats-grid">
                    <StatItem end={10} suffix="+" label="Years Experience" />
                    <StatItem end={500} suffix="+" label="Clients Served" />
                    <StatItem end={100} suffix="%" label="Compliance Record" />
                    <StatItem end={50} suffix="+" label="Team Members" />
                </div>
            </div>
        </div>
    );
};

export default AnimatedStats;
