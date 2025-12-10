import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-white)' }}>
                <div className="container">
                    <div className="section-header">
                        <h1>About SABS & CO</h1>
                        <p className="subheading" style={{ fontSize: '1.25rem', marginTop: '16px' }}>
                            We are a Pune-based Chartered Accountancy firm that brings together traditional audit rigour and modern cloud technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story / Mission */}
            <section className="section section-grey">
                <div className="container">
                    <div className="about-split">
                        <div className="about-text">
                            <h2>Our Story</h2>
                            <p>Founded by experienced Chartered Accountants, SABS & CO was built on the belief that finance should be a growth driver, not just a compliance burden.</p>
                            <p>We saw two distinct needs in the market: Indian businesses needing dependable, high-quality audit and tax advisory, and global businesses needing reliable offshore accounting teams that actually understand international standards.</p>
                            <p>Today, we serve hundreds of clients across India, USA, UK and Australia, bridging the gap between local expertise and global delivery.</p>
                        </div>
                        <div className="about-stat-box">
                            <div className="stat-item">
                                <div className="stat-num">10+</div>
                                <div className="stat-label">Years of Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-num">500+</div>
                                <div className="stat-label">Clients Served</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-num">100%</div>
                                <div className="stat-label">Cloud Certified</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team / Partners (Simplified) */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Led by Chartered Accountants</h2>
                        <p>Our leadership team ensures every engagement—whether a statutory audit in Pune or bookkeeping for a startup in New York—meets our strict quality standards.</p>
                    </div>
                    {/* Add Partner Cards here if details provided, otherwise placeholder text */}
                    <div className="team-grid">
                        <div className="team-card">
                            <div className="avatar-placeholder">CA</div>
                            <h3>Senior Partner</h3>
                            <p className="role">Audit & Assurance</p>
                            <p>Fellow Chartered Accountant with deep expertise in statutory audits and corporate law.</p>
                        </div>
                        <div className="team-card">
                            <div className="avatar-placeholder">CA</div>
                            <h3>Managing Partner</h3>
                            <p className="role">Tax & International Accounting</p>
                            <p>Specialises in direct tax, international tax treaties and cloud accounting setups.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <h2>Join Our Journey</h2>
                    <p>Looking for a finance partner who cares about your growth?</p>
                    <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
                        <Link to="/contact" className="btn-primary">Contact us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
