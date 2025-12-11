import { Link } from 'react-router-dom';
import './ServiceSplit.css';

const ServiceSplit = () => {
    return (
        <section className="service-split-section">
            <div className="container">
                <div className="section-header center-aligned">
                    <span className="eyebrow-label">What We Do</span>
                    <h2>Offshore Accounting at the Core. <br /> CA Expertise in the Background.</h2>
                    <p className="section-intro">
                        Our primary focus is to run your finance function as an offshore team.
                        Underneath that, we remain a full-service Chartered Accountancy firm in India,
                        so your books are built with controls, compliance and long-term reliability in mind.
                    </p>
                </div>

                <div className="split-cards-grid">
                    {/* Global Accounting Card - Primary */}
                    <div className="service-card primary-card">
                        <div className="card-badge">Primary Service</div>
                        <div className="card-content">
                            <h3>Global Accounting & Offshore Bookkeeping</h3>
                            <p className="card-desc">
                                We plug into your existing workflows and tools to handle the day-to-day finance backbone — from bookkeeping and reconciliations to month-end close and reporting.
                            </p>

                            <ul className="check-list orange-check">
                                <li>End-to-end bookkeeping and reconciliations</li>
                                <li>E-commerce accounting for Shopify, Amazon and other marketplaces</li>
                                <li>Cleanup projects and catch-up bookkeeping</li>
                                <li>White-label bookkeeping support for CPA and accounting firms</li>
                                <li>Payroll processing support (Gusto, QBO, etc.)</li>
                                <li>System setup, migration and integrations</li>
                            </ul>

                            <div className="card-action">
                                <Link to="/global-accounting-bookkeeping" className="btn-primary full-width">
                                    Explore Global Accounting Services
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CA Services Card - Secondary */}
                    <div className="service-card secondary-card">
                        <div className="card-content">
                            <h3>Our Chartered Accountancy Practice in India</h3>
                            <p className="card-desc">
                                SABS & CO began as a traditional CA firm in Pune. This legacy practice powers our offshore work — giving you teams that understand controls and compliance.
                            </p>

                            <ul className="check-list simple-bullet">
                                <li>Statutory and tax audits for Indian entities</li>
                                <li>Direct and indirect tax advisory & compliance (GST, TDS)</li>
                                <li>Information systems and ERP review from a finance perspective</li>
                                <li>Accounting, MIS and ongoing support for Indian businesses</li>
                            </ul>

                            <div className="card-action">
                                <Link to="/chartered-accountancy-india" className="link-arrow-text">
                                    Learn more about our CA services in India →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSplit;
