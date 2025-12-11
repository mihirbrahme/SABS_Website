import './AudienceSegments.css';

const AudienceSegments = () => {
    return (
        <section className="audience-section">
            <div className="container">
                <div className="section-header center-aligned">
                    <h2>Built for E-commerce Brands, SaaS Companies, CPA Firms and Digital Businesses</h2>
                    <p className="section-intro">
                        Our offshore finance team is designed around a few clear client profiles. We adapt the workflow, communication and reporting to how you already operate.
                    </p>
                </div>

                <div className="audience-grid">
                    {/* Card 1 */}
                    <div className="audience-card">
                        <div className="audience-icon">🛍️</div>
                        <h3>E-commerce & D2C Brands</h3>
                        <p>
                            Multi-channel sellers on Shopify, Amazon and other platforms who need accurate sales, fee, refund and payout reconciliation — and a clear view of margins.
                        </p>
                        <ul className="micro-bullets">
                            <li>We untangle marketplace reports, fees and payouts.</li>
                            <li>You get timely books and clear channel-wise profitability.</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="audience-card">
                        <div className="audience-icon">💼</div>
                        <h3>CPA & Accounting Firms</h3>
                        <p>
                            Firms that want a structured, white-label offshore bookkeeping team following their standards and workpapers, without losing control of client relationships.
                        </p>
                        <ul className="micro-bullets">
                            <li>Offload routine processing and clean-up work.</li>
                            <li>Keep your brand in front while we do the heavy lifting in the background.</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="audience-card">
                        <div className="audience-icon">🚀</div>
                        <h3>SaaS Companies, Startups & Agencies</h3>
                        <p>
                            SaaS companies, digital-first startups and agencies that want a modern finance stack without building a large in-house team.
                        </p>
                        <ul className="micro-bullets">
                            <li>Move from spreadsheets to a clean cloud accounting setup.</li>
                            <li>Get investor-friendly reports and cash-flow visibility.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudienceSegments;
