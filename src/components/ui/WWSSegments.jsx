import { Link } from 'react-router-dom';
import './WWSSegments.css';

const WWSSegments = () => {
    return (
        <section className="wws-segments-section">
            <div className="container">
                <div className="wws-grid">

                    {/* Segment 1: NRIs */}
                    <div className="wws-card border-top-accent">
                        <div className="wws-card-header">
                            <span className="wws-icon">🛂</span>
                            <h3>NRIs, Global Indians & Indian Professionals</h3>
                        </div>
                        <p className="wws-desc">
                            NRIs, returning residents and Indian professionals with income or assets in more than one country — who need clarity on what is taxed where.
                        </p>

                        <div className="wws-detail">
                            <h4>Common Challenges</h4>
                            <ul>
                                <li>Understanding residential status and tax impact</li>
                                <li>Taxation of salary/investments in India vs overseas</li>
                                <li>Risk of double taxation without DTAA</li>
                            </ul>
                        </div>

                        <div className="wws-detail">
                            <h4>How We Help</h4>
                            <ul>
                                <li>Assessing residential status and DTAA application</li>
                                <li>Filing Indian returns with proper disclosures</li>
                                <li>Coordinating with overseas tax advisors</li>
                            </ul>
                        </div>

                        <Link to="/chartered-accountancy-india" className="wws-link">
                            Explore our CA Services in India →
                        </Link>
                    </div>

                    {/* Segment 2: Indian Businesses */}
                    <div className="wws-card">
                        <div className="wws-card-header">
                            <span className="wws-icon">🏭</span>
                            <h3>Indian Businesses, Family Enterprises & Organisations</h3>
                        </div>
                        <p className="wws-desc">
                            SMEs, family-run businesses and organisations in India that want dependable CA support for audit, tax, systems and ongoing compliance.
                        </p>

                        <div className="wws-detail">
                            <h4>Common Challenges</h4>
                            <ul>
                                <li>Keeping up with changing tax rules (GST, TDS)</li>
                                <li>Limited internal controls and manual processes</li>
                                <li>No clear periodic financial view or MIS</li>
                            </ul>
                        </div>

                        <div className="wws-detail">
                            <h4>How We Help</h4>
                            <ul>
                                <li>Statutory, tax and internal audits</li>
                                <li>Direct tax, GST and regulatory filings</li>
                                <li>Information systems and ERP reviews</li>
                            </ul>
                        </div>

                        <Link to="/chartered-accountancy-india" className="wws-link">
                            Explore our CA Services in India →
                        </Link>
                    </div>

                    {/* Segment 3: E-commerce */}
                    <div className="wws-card border-top-accent">
                        <div className="wws-card-header">
                            <span className="wws-icon">🛍️</span>
                            <h3>E-commerce & D2C Brands</h3>
                        </div>
                        <p className="wws-desc">
                            Online sellers on Shopify, Amazon and other platforms who need their financials to keep pace with fast-moving orders, payouts and marketing spends.
                        </p>

                        <div className="wws-detail">
                            <h4>Common Challenges</h4>
                            <ul>
                                <li>Reconciling marketplace reports, fees and refunds</li>
                                <li>Matching gateway settlements with orders</li>
                                <li>Tracking COGS and inventory impact</li>
                            </ul>
                        </div>

                        <div className="wws-detail">
                            <h4>How We Help</h4>
                            <ul>
                                <li>Setting up QBO/Xero + A2X automation</li>
                                <li>Weekly reconciliations across channels</li>
                                <li>Producing channel-wise P&L reports</li>
                            </ul>
                        </div>

                        <Link to="/global-accounting-bookkeeping" className="wws-link">
                            Explore Global Accounting & Offshore Bookkeeping →
                        </Link>
                    </div>

                    {/* Segment 4: CPA & SaaS */}
                    <div className="wws-card">
                        <div className="wws-card-header">
                            <span className="wws-icon">☁️</span>
                            <h3>CPA Firms, SaaS Companies & Digital Businesses</h3>
                        </div>
                        <p className="wws-desc">
                            Overseas CPA firms and digital-first businesses that want a clean finance stack and extra hands without over-hiring locally.
                        </p>

                        <div className="wws-detail">
                            <h4>Common Challenges</h4>
                            <ul>
                                <li>Staff shortages and burnout (CPA Firms)</li>
                                <li>Finance stack spread across tools (SaaS)</li>
                                <li>Limited visibility into margins and runway</li>
                            </ul>
                        </div>

                        <div className="wws-detail">
                            <h4>How We Help</h4>
                            <ul>
                                <li>Structured, white-label offshore teams (CPAs)</li>
                                <li>Lean cloud finance stack setup (SaaS)</li>
                                <li>Investor-friendly reporting</li>
                            </ul>
                        </div>

                        <Link to="/global-accounting-bookkeeping" className="wws-link">
                            Explore Global Accounting & Offshore Bookkeeping →
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WWSSegments;
