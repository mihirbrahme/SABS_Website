import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './GlobalHero.css';

const GlobalHero = () => {
    return (
        <section className="global-hero-section">
            <div className="container">
                <div className="hero-grid">
                    {/* Left Content */}
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="hero-pill">
                            Offshore accounting for digital & e-commerce teams
                        </div>

                        <h1>
                            Global Accounting & Bookkeeping – <br className="desktop-break" />
                            Your Offshore Finance Team in India
                        </h1>

                        <p className="hero-subheading">
                            We provide dedicated offshore bookkeeping and accounting support for digital and e-commerce businesses, SaaS companies, CPA firms and other growing businesses — using modern cloud tools like QuickBooks Online, Xero and A2X.
                        </p>

                        <ul className="hero-bullets">
                            <li>E-commerce bookkeeping and reconciliations</li>
                            <li>White-label bookkeeping for CPA & accounting firms</li>
                            <li>Payroll processing support (Gusto, QBO, etc.)</li>
                            <li>System setup, cleanup, migration and integrations</li>
                        </ul>

                        <p className="hero-supporting-line">
                            Our experienced, trained resources plug into your existing tools and workflows so your finance function runs smoothly from offshore.
                        </p>

                        <div className="hero-actions-container">
                            <a href="/contact#discovery-call" className="btn-primary">
                                Book a discovery call
                            </a>

                            <Link to="/contact" className="btn-ghost" style={{ marginLeft: '16px' }}>
                                Send us your requirements
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <div className="hero-image-wrapper">
                        <div className="hero-img-card">
                            <img
                                src="/assets/hero-team.png"
                                alt="SABS Offshore Accounting Team"
                                className="hero-img"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/600x500/f8fafc/0f172a?text=Offshore+Team";
                                }}
                            />
                            {/* Badge */}
                            <div className="hero-badge bottom-left">
                                <span className="badge-icon">🌏</span>
                                <div className="badge-text">
                                    <strong>Offshore delivery</strong>
                                    <span>from India based CAs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalHero;
