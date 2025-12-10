import './TechMarquee.css';

const TechMarquee = () => {
    const techs = [
        "QuickBooks", "Xero", "Gusto", "A2X", "Shopify",
        "Amazon", "Stripe", "Zoho Books", "Tally Prime", "Bill.com"
    ];

    return (
        <div className="tech-marquee-section">
            <div className="marquee-container">
                <div className="marquee-content">
                    {techs.map((tech, i) => (
                        <div className="tech-chip" key={i}>{tech}</div>
                    ))}
                    {techs.map((tech, i) => (
                        <div className="tech-chip" key={`dup-${i}`}>{tech}</div>
                    ))}
                    {/* Duplicate again for seamless loop if needed on wide screens */}
                    {techs.map((tech, i) => (
                        <div className="tech-chip" key={`dup2-${i}`}>{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechMarquee;
