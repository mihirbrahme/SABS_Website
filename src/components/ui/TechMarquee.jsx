import './TechMarquee.css';

const TechMarquee = () => {
    // List of logos using text placeholders or basic shapes if images unavailable
    // For now assuming we don't have SVG files for all, so using text styling for demo, 
    // but structure is ready for <img> tags.
    // In a real scenario, we'd iterate over an array of image paths.

    // Using a simple array of names for now to represent the logos described.
    const tools = [
        "QuickBooks Online", "Xero", "A2X", "Shopify", "Amazon",
        "Stripe", "PayPal", "Gusto", "Razorpay", "Excel"
    ];

    return (
        <section className="tech-section">
            <div className="container">
                <div className="tech-header">
                    <span className="eyebrow-label">Tools We Work With</span>
                    <h2>We Operate Inside Your Existing Finance Stack</h2>
                    <p>
                        Our teams are trained on tools like QuickBooks Online, Xero, A2X, and Gusto.
                        If you’re still on spreadsheets or switching systems, we support implementation, setup and migration.
                    </p>
                </div>

                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {/* Duplicated list for infinite scroll effect would go here */}
                        {/* For static layout requested in "Logo Row" */}
                        {tools.map((tool, idx) => (
                            <div className="tech-pill" key={idx}>
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="certifications">
                    <div className="cert-badge">
                        <span className="cert-icon">✓</span>
                        <span>Xero Certified</span>
                    </div>
                    <div className="cert-badge">
                        <span className="cert-icon">✓</span>
                        <span>QuickBooks ProAdvisor</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechMarquee;
