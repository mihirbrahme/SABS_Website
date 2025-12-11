import './EngagementModels.css';

const EngagementModels = () => {
    return (
        <section className="engagement-section">
            <div className="container">
                <div className="section-header center-aligned">
                    <h2>Engagement Models That Fit Your Stage</h2>
                    <p className="section-intro">
                        Whether you’re starting small or scaling fast, we structure the engagement so it’s predictable for you and manageable for our team.
                    </p>
                </div>

                <div className="engagement-grid">
                    {/* Model 1 */}
                    <div className="engagement-model-card">
                        <div className="model-icon">🔄</div>
                        <h3>Monthly Retainer</h3>
                        <p>For ongoing bookkeeping, payroll and reporting support.</p>
                        <div className="model-detail">Fixed monthly fee, agreed scope and clear timelines.</div>
                    </div>

                    {/* Model 2 */}
                    <div className="engagement-model-card">
                        <div className="model-icon">👥</div>
                        <h3>Dedicated Team</h3>
                        <p>For CPA firms and larger brands needing full-time or part-time dedicated staff.</p>
                        <div className="model-detail">You get named resources, a dedicated engagement manager and defined review mechanisms.</div>
                    </div>

                    {/* Model 3 */}
                    <div className="engagement-model-card">
                        <div className="model-icon">📋</div>
                        <h3>Project-Based</h3>
                        <p>For clean-up, catch-up, system migration and one-time setup projects.</p>
                        <div className="model-detail">Clear deliverables, timelines and handover documentation.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngagementModels;
