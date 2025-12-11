import { Link } from 'react-router-dom';
import './ServiceDetailedBlocks.css';

const ServiceDetailedBlocks = () => {
    return (
        <div className="detailed-services-wrapper">

            {/* Block 1: E-commerce */}
            <section className="service-block">
                <div className="container">
                    <div className="service-block-grid">
                        <div className="service-text">
                            <h2>E-commerce Bookkeeping for Shopify, Amazon and Marketplaces</h2>
                            <p className="block-desc">
                                E-commerce accounting is messy — multiple channels, fees, refunds, promos and payout schedules. We handle the complexity so your books accurately reflect sales, fees, refunds, COGS and payouts across platforms.
                            </p>

                            <div className="block-split">
                                <div className="block-list">
                                    <h4>What we do</h4>
                                    <ul className="check-list orange-check">
                                        <li>Setup and configuration of QBO/Xero + A2X</li>
                                        <li>Recording sales, refunds, fees, discounts and taxes</li>
                                        <li>Reconciling Stripe, PayPal, Razorpay payouts</li>
                                        <li>Tracking COGS and inventory impact</li>
                                        <li>Month-end close with channel-wise P&L</li>
                                    </ul>
                                </div>
                                <div className="block-list">
                                    <h4>Outcomes</h4>
                                    <ul className="outcome-list">
                                        <li>Clear view of profitability by channel</li>
                                        <li>Books ready for tax advisors & investors</li>
                                        <li>No more spreadsheet chaos</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="inline-cta">
                                Want an audit of your current e-commerce books? <Link to="/contact">Reach out via our contact form</Link>.
                            </p>
                        </div>
                        <div className="service-visual">
                            {/* Visual Placeholder */}
                            <div className="visual-card">
                                <span className="visual-icon">🛒</span>
                                <h5>Multi-Channel Sync</h5>
                                <div className="channel-row">
                                    <span>Shopify</span> <span>Amazon</span> <span>Stripe</span>
                                </div>
                                <div className="arrow-down">⬇</div>
                                <div className="ledger-box">Clean Books (Xero/QBO)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: White Label for CPAs */}
            <section className="service-block bg-grey">
                <div className="container">
                    <div className="service-block-grid reverse-mobile">
                        <div className="service-visual">
                            <div className="visual-card">
                                <span className="visual-icon">🤝</span>
                                <h5>Your Extended Team</h5>
                                <div className="firm-box">Your CPA Firm</div>
                                <div className="arrow-down">⬇</div>
                                <div className="white-label-box">SABS White-Label Team</div>
                            </div>
                        </div>
                        <div className="service-text">
                            <h2>White-Label Offshore Bookkeeping for CPA & Accounting Firms</h2>
                            <p className="block-desc">
                                We act as your structured offshore team, following your standards, checklists and workpapers. Your clients see your brand — we stay in the background.
                            </p>

                            <div className="block-split">
                                <div className="block-list">
                                    <h4>What we do</h4>
                                    <ul className="check-list orange-check">
                                        <li>Ongoing bookkeeping for SME clients</li>
                                        <li>Cleanup and catch-up work for backlogs</li>
                                        <li>Preparation of working papers per your format</li>
                                        <li>Dedicated staff and engagement managers</li>
                                    </ul>
                                </div>
                                <div className="block-list">
                                    <h4>Outcomes</h4>
                                    <ul className="outcome-list">
                                        <li>More time for advisory and planning</li>
                                        <li>Consistent quality and documentation</li>
                                        <li>Predictable cost for routine work</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: Payroll */}
            <section className="service-block">
                <div className="container">
                    <div className="service-block-grid">
                        <div className="service-text">
                            <h2>Payroll Processing & Employee Reimbursements</h2>
                            <p className="block-desc">
                                We help you run payroll and keep employee-related records organised using cloud payroll tools, while syncing everything cleanly into your accounting system.
                            </p>

                            <div className="block-split">
                                <div className="block-list">
                                    <h4>What we do</h4>
                                    <ul className="check-list orange-check">
                                        <li>Employee setup and pay schedule configuration</li>
                                        <li>Running regular payroll cycles (Gusto, QBO)</li>
                                        <li>Processing employee reimbursements and expenses</li>
                                        <li>Syncing payroll back to accounting system</li>
                                    </ul>
                                </div>
                                <div className="block-list">
                                    <h4>Outcomes</h4>
                                    <ul className="outcome-list">
                                        <li>Fewer payroll errors and surprises</li>
                                        <li>Clean reconciliation with general ledger</li>
                                        <li>Clear visibility into payroll costs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="service-visual">
                            <div className="visual-card">
                                <span className="visual-icon">💰</span>
                                <h5>Payroll Sync</h5>
                                <div className="channel-row">
                                    <span>Gusto</span> <span>Expensify</span>
                                </div>
                                <div className="arrow-down">⬇</div>
                                <div className="ledger-box">Accounting System</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServiceDetailedBlocks;
