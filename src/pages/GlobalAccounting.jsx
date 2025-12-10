import { Link } from 'react-router-dom';
import './GlobalAccounting.css';

const GlobalAccounting = () => {
    return (
        <div className="ga-page">
            {/* Hero */}
            <section className="section ga-hero-bg" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div className="container">
                    <div className="section-header">
                        <h1>Global Accounting & Bookkeeping – Your Offshore Finance Team in India</h1>
                        <p className="subheading" style={{ fontSize: '1.25rem', marginTop: '16px' }}>
                            We provide dedicated offshore bookkeeping and accounting services for e-commerce brands, startups and CPA firms using modern cloud tools.
                        </p>
                        <ul className="hero-bullets" style={{ marginTop: '24px' }}>
                            <li>E-commerce bookkeeping and reconciliations</li>
                            <li>White-label bookkeeping for CPA firms</li>
                            <li>Payroll processing support (Gusto, QBO, etc.)</li>
                            <li>System setup, migration and integrations</li>
                        </ul>
                        <div className="hero-actions" style={{ marginTop: '32px' }}>
                            <Link to="/contact" className="btn-primary">Book a discovery call</Link>
                            <Link to="/contact" className="btn-ghost">Share your requirements</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Built for E-commerce Brands, Startups and Accounting Firms</h2>
                    </div>
                    <div className="engagement-grid"> {/* Reusing grid layout */}
                        <div className="engagement-card" style={{ textAlign: 'left' }}>
                            <h3>E-commerce & D2C Brands</h3>
                            <p>Multi-channel, marketplace and direct sellers needing accurate COGS and profitability reports.</p>
                        </div>
                        <div className="engagement-card" style={{ textAlign: 'left' }}>
                            <h3>CPA & Accounting Firms</h3>
                            <p>Firms looking to expand capacity via reliable, white-label offshore teams.</p>
                        </div>
                        <div className="engagement-card" style={{ textAlign: 'left' }}>
                            <h3>Startups & Agencies</h3>
                            <p>Founders wanting modern books and reporting without hiring a full in-house finance team.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* E-commerce Bookkeeping */}
            <section className="section section-grey">
                <div className="container">
                    <div className="section-header">
                        <h2>E-commerce Bookkeeping for Shopify, Amazon and Marketplaces</h2>
                        <p>We handle the complexity of e-commerce accounting so your books accurately reflect sales, fees, refunds, COGS and payouts.</p>
                    </div>
                    <div className="service-detail-grid"> {/* Reusing detailed grid */}
                        <div className="service-list-box">
                            <h4>What We Do</h4>
                            <ul className="check-list" style={{ marginBottom: 0 }}>
                                <li>Setup and configuration of QBO/Xero + A2X</li>
                                <li>Recording sales, refunds and fees from marketplaces</li>
                                <li>Reconciling Stripe, PayPal, Razorpay gateways</li>
                                <li>Tracking COGS and inventory (with your inputs)</li>
                                <li>Month-end close with reconciled balances</li>
                            </ul>
                        </div>
                        <div className="service-content">
                            <h3>Outcomes</h3>
                            <p>Clear view of profitability by channel. Books ready for tax advisors, lenders and investors. No more spreadsheet chaos.</p>
                            <Link to="/contact" className="link-arrow">Get an audit of your books →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CPA Firms */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>White-Label Offshore Bookkeeping for CPA & Accounting Firms</h2>
                        <p>We work as your offshore team, following your firm’s standards and workpapers.</p>
                    </div>
                    <div className="service-detail-grid">
                        <div className="service-content">
                            <h3>Scale Without Burnout</h3>
                            <p>Scale your capacity without overloading partners and seniors. We handle the routine processing so your local team can focus on advisory and client relationships.</p>
                        </div>
                        <div className="service-list-box">
                            <h4>Our Support Includes</h4>
                            <ul className="check-list" style={{ marginBottom: 0 }}>
                                <li>Ongoing bookkeeping for your SME clients</li>
                                <li>Clean-up and catch-up work for backlogs</li>
                                <li>Preparation of working papers as per your format</li>
                                <li>Dedicated staff aligned with your time windows</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payroll */}
            <section className="section section-grey">
                <div className="container">
                    <div className="section-header">
                        <h2>Payroll Processing & Employee Reimbursements</h2>
                        <p>We help you run payroll and keep employee records organised using cloud payroll tools.</p>
                    </div>
                    <ul className="check-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                        <li>Employee setup and pay schedule configuration</li>
                        <li>Running regular payroll cycles (Gusto / QBO)</li>
                        <li>Processing employee reimbursements and expenses</li>
                        <li>Syncing payroll data back into accounting system</li>
                    </ul>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Engagement Models</h2>
                        <p>Flexible ways to work with us based on your needs.</p>
                    </div>
                    <div className="engagement-grid">
                        <div className="engagement-card">
                            <h3>Monthly Retainer</h3>
                            <p>For ongoing bookkeeping, payroll and reporting support. Fixed monthly fee.</p>
                        </div>
                        <div className="engagement-card">
                            <h3>Dedicated Team</h3>
                            <p>For CPA firms and larger brands needing full-time or part-time dedicated staff.</p>
                        </div>
                        <div className="engagement-card">
                            <h3>Project Based</h3>
                            <p>For clean-up, catch-up, system migration and one-time setup projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools & Workflow */}
            <section className="section section-grey">
                <div className="container">
                    <div className="section-header">
                        <h2>Tools We Use</h2>
                        <p>QuickBooks Online, Xero, A2X, Shopify, Amazon, Stripe, PayPal, Gusto, Excel.</p>
                    </div>
                    {/* Could reuse tools list component if separated, but text is fine */}
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <h2>Ready to Explore an Offshore Finance Team?</h2>
                    <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
                        <Link to="/contact" className="btn-primary">Book a discovery call</Link>
                        <Link to="/contact" className="btn-ghost">Send us your requirements</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GlobalAccounting;
