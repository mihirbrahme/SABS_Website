import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Trust Built Over Decades",
            desc: "35+ years as a CA practice, 500+ clients and a 20-member team create a foundation of reliability you can lean on.",
            icon: "🛡️"
        },
        {
            title: "Documented, Process-Driven Work",
            desc: "From day one, we define checklists, SOPs and review steps. Documentation isn’t an afterthought — it’s how we ensure consistency.",
            icon: "📄"
        },
        {
            title: "Cross-Technology Integration",
            desc: "We don’t just post entries; we help connect your finance stack — from payment gateways to QBO/Xero — and support migrations.",
            icon: "🔌"
        },
        {
            title: "Clear Reporting, Not Just Data Dumps",
            desc: "You get structured reports, analytics and management views so you always know what’s going on — not just a pile of ledgers.",
            icon: "📊"
        }
    ];

    return (
        <section className="why-section">
            <div className="container">
                <div className="section-header center-aligned">
                    <span className="eyebrow-label">Why Clients Choose Us</span>
                    <h2>Trust, Experience and Capability — Delivered Offshore.</h2>
                    <p>A legacy CA firm, a modern offshore model and strong documentation, reporting and integration support.</p>
                </div>

                <div className="why-grid-cards">
                    {reasons.map((reason, index) => (
                        <div className="why-card" key={index}>
                            <div className="why-icon">{reason.icon}</div>
                            <h3>{reason.title}</h3>
                            <p>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
