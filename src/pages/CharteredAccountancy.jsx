import { Link } from 'react-router-dom';
import './CharteredAccountancy.css';
// Reusing Home.css for generic hero classes if needed, or rely on global index.css

const CharteredAccountancy = () => {
    return (
        <div className="ca-page">
            {/* Hero */}
            <section className="section ca-hero-bg" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div className="container">
                    <div className="section-header">
                        <h1>Chartered Accountancy Services in India</h1>
                        <p className="subheading" style={{ fontSize: '1.25rem', marginTop: '16px' }}>
                            A Pune-based Chartered Accountancy firm offering audit, taxation, information systems and advisory services to Indian businesses, professionals and organisations.
                        </p>
                        <div className="hero-actions" style={{ marginTop: '32px' }}>
                            <Link to="/contact" className="btn-primary">Speak to a Chartered Accountant</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Supporting Indian Businesses Across Sectors</h2>
                        <p>We help organisations stay compliant, strengthen controls and make sense of their numbers.</p>
                    </div>
                    <ul className="check-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                        <li>SMEs and family businesses</li>
                        <li>Professionals and firms</li>
                        <li>Startups and growing companies</li>
                        <li>NGOs, trusts and other organisations</li>
                    </ul>
                </div>
            </section>

            {/* Audit & Assurance */}
            <section className="section section-grey">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-content">
                            <h3>Audit & Assurance</h3>
                            <p>We provide independent assurance on your financial statements and internal controls, helping stakeholders gain confidence in your numbers and governance.</p>
                        </div>
                        <div className="service-list-box">
                            <h4>Services</h4>
                            <ul className="check-list" style={{ marginBottom: 0 }}>
                                <li>Statutory audits</li>
                                <li>Internal audits</li>
                                <li>Tax audits and special-purpose audits</li>
                                <li>Review of internal controls and risk areas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation */}
            <section className="section">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-content">
                            <h3>Taxation & Regulatory Compliance</h3>
                            <p>We guide you through direct and indirect tax requirements, ensuring timely compliance and proper documentation.</p>
                        </div>
                        <div className="service-list-box">
                            <h4>Services</h4>
                            <ul className="check-list" style={{ marginBottom: 0 }}>
                                <li>Direct tax advisory and return preparation</li>
                                <li>GST / indirect tax compliance and filings</li>
                                <li>TDS advisory and returns</li>
                                <li>Assistance during assessments and notices</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* IS & ERP */}
            <section className="section section-grey">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-content">
                            <h3>Information Systems & ERP Advisory</h3>
                            <p>As your business grows, systems become critical. We review and improve your accounting and ERP workflows from a finance and controls perspective.</p>
                        </div>
                        <div className="service-list-box">
                            <h4>Services</h4>
                            <ul className="check-list" style={{ marginBottom: 0 }}>
                                <li>Review of existing accounting / ERP systems</li>
                                <li>Recommendations on controls and workflows</li>
                                <li>Assistance in implementation and UAT</li>
                                <li>Information systems audits and data checks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outsourcing */}
            <section className="section">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-content">
                            <h3>Outsourcing & Business Setup Support</h3>
                            <p>For many businesses, it is more efficient to outsource routine accounting work to a professional firm.</p>
                        </div>
                        <div className="service-list-box">
                            <h4>Services</h4>
                            <ul className="check-list" style={{ marginBottom: 0 }}>
                                <li>Bookkeeping and account maintenance</li>
                                <li>MIS preparation and basic dashboards</li>
                                <li>Payroll accounting support</li>
                                <li>Business setup & registrations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <h2>Talk to a Chartered Accountant About Your Requirements</h2>
                    <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
                        <Link to="/contact" className="btn-primary">Book a consultation</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CharteredAccountancy;
