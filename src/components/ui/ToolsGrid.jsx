import './ToolsGrid.css';

const ToolsGrid = () => {
    const tools = [
        "QuickBooks Online", "Xero", "A2X", "Shopify", "Amazon",
        "Stripe", "PayPal", "Gusto", "Razorpay", "Excel"
    ];

    return (
        <section className="tools-grid-section">
            <div className="container">
                <div className="section-header center-aligned">
                    <h2>Tools We Use</h2>
                    <p className="section-intro">
                        We work inside the tools you already have — or help you move from spreadsheets to a modern cloud stack.
                    </p>
                </div>

                <div className="tools-wrapper">
                    <div className="tools-container">
                        {tools.map((tool, idx) => (
                            <div className="tool-pill" key={idx}>
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

export default ToolsGrid;
