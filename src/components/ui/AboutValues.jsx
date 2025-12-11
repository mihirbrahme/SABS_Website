import './AboutValues.css';

const AboutValues = () => {
    return (
        <section className="about-values-section">
            <div className="container">
                <div className="section-header">
                    <h2>How We Work</h2>
                </div>

                <div className="values-grid">
                    <div className="value-card">
                        <div className="val-icon">🤝</div>
                        <h3>Partner-Led, Process-Driven</h3>
                        <p>Every mandate has a responsible partner, defined review mechanisms and clear documentation — so quality doesn’t depend on any one individual.</p>
                    </div>

                    <div className="value-card">
                        <div className="val-icon">⚙️</div>
                        <h3>Tech-Enabled, Not Tech-Only</h3>
                        <p>We use tools like QBO, Xero and A2X to make work efficient, but we never lose sight of the fundamentals: reconciliation, controls and clear reporting.</p>
                    </div>

                    <div className="value-card">
                        <div className="val-icon">🌏</div>
                        <h3>Global Mindset, Local Accountability</h3>
                        <p>Whether helping an NRI or a US e-commerce brand, we act as a long-term, accountable partner — not a transactional vendor.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutValues;
