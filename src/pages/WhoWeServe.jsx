import { Link } from 'react-router-dom';
import './WhoWeServe.css';

const WhoWeServe = () => {
    return (
        <div className="who-page">
            <section className="section" style={{ backgroundColor: '#f8fafc', padding: '100px 0 60px' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-primary-dark)' }}>Who We Serve</h1>
                    <p className="subheading" style={{ fontSize: '1.25rem', color: 'var(--color-text-main)' }}>
                        From Indian SMEs to global e-commerce brands and CPA firms, our services are designed around a few clear client segments.
                    </p>
                </div>
            </section>

            {/* Segments */}
            <section className="section">
                <div className="container">
                    <div className="who-segments">

                        {/* Segment 1 */}
                        <div className="segment-block" id="indian-business">
                            <div className="segment-content">
                                <h2>Indian Businesses & Professionals</h2>
                                <p className="segment-desc">SMEs, family businesses, professionals and organisations looking for dependable Chartered Accountancy support in India.</p>

                                <div className="segment-details">
                                    <h3>Common Challenges</h3>
                                    <ul className="check-list">
                                        <li>Keeping up with changing tax laws (GST, TDS)</li>
                                        <li>Lack of internal controls and structured processes</li>
                                        <li>Need for trustworthy audit and assurance</li>
                                    </ul>

                                    <h3>How We Help</h3>
                                    <p>We provide end-to-end compliance, audit and advisory services acting as your extended finance arm.</p>
                                    <Link to="/chartered-accountancy-india" className="link-arrow">Explore CA Services →</Link>
                                </div>
                            </div>
                        </div>

                        {/* Segment 2 */}
                        <div className="segment-block" id="ecommerce">
                            <div className="segment-content">
                                <h2>E-commerce & D2C Brands</h2>
                                <p className="segment-desc">Online sellers on Shopify, Amazon, Etsy, WooCommerce, Walmart and other platforms.</p>

                                <div className="segment-details">
                                    <h3>Common Challenges</h3>
                                    <ul className="check-list">
                                        <li>Reconciling payouts vs sales across channels</li>
                                        <li>Accounting for refunds, fees and ads spend accurately</li>
                                        <li>Tracking inventory value and COGS</li>
                                    </ul>

                                    <h3>How We Help</h3>
                                    <p>We use A2X and cloud tools to automate and reconcile your books, giving you true profitability visibility.</p>
                                    <Link to="/global-accounting-bookkeeping" className="link-arrow">Explore E-commerce Accounting →</Link>
                                </div>
                            </div>
                        </div>

                        {/* Segment 3 */}
                        <div className="segment-block" id="cpa-firms">
                            <div className="segment-content">
                                <h2>CPA & Accounting Firms</h2>
                                <p className="segment-desc">Firms seeking a structured, white-label offshore bookkeeping team.</p>

                                <div className="segment-details">
                                    <h3>Common Challenges</h3>
                                    <ul className="check-list">
                                        <li>Staff shortages and bandwidth issues</li>
                                        <li>High cost of local hiring for routine work</li>
                                        <li>Need for reliable, trained support</li>
                                    </ul>

                                    <h3>How We Help</h3>
                                    <p>We work as your white-label partner, handling the grunt work so you can focus on advisory and growth.</p>
                                    <Link to="/global-accounting-bookkeeping" className="link-arrow">Explore Outsourcing for CPAs →</Link>
                                </div>
                            </div>
                        </div>

                        {/* Segment 4 */}
                        <div className="segment-block" id="startups">
                            <div className="segment-content">
                                <h2>Startups, Agencies & Digital Businesses</h2>
                                <p className="segment-desc">Founders and teams who want a modern finance stack without a large team.</p>

                                <div className="segment-details">
                                    <h3>Common Challenges</h3>
                                    <ul className="check-list">
                                        <li>Messy spreadsheets and no real-time data</li>
                                        <li>Need for investor-ready reports</li>
                                        <li>Managing payroll and compliance across borders</li>
                                    </ul>

                                    <h3>How We Help</h3>
                                    <p>We set up a lean, cloud-based finance stack (QBO/Xero + Gusto + Billings) and manage it for you.</p>
                                    <Link to="/global-accounting-bookkeeping" className="link-arrow">Explore Startup Accounting →</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <h2>Ready to get started?</h2>
                    <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
                        <Link to="/contact" className="btn-primary">Book a discovery call</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhoWeServe;
