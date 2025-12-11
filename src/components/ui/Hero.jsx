import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
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
                            Offshore accounting · India-based · Cloud-tool experts
                        </div>

                        <h1>
                            A Dedicated Offshore Finance Team, <br className="desktop-break" />
                            Built on 35+ Years of CA Experience.
                        </h1>

                        <p className="hero-subheading">
                            SABS & CO is your offshore finance and accounting team in India — skilled in tools like QuickBooks Online and Xero, with deep expertise in e-commerce integrations and cloud finance.
                        </p>

                        <p className="hero-audience">
                            Designed for <strong>digital and e-commerce businesses</strong>, <strong>CPA firms</strong> and other businesses looking for a dedicated accounting and finance partner.
                        </p>

                        <div className="hero-actions-container">
                            <a href="/contact#discovery-call" className="btn-primary" style={{ display: 'inline-block' }}>
                                Talk to our finance and accounting experts
                            </a>

                            <p className="hero-secondary-link">
                                Looking for Chartered Accountancy services in India? <br className="mobile-break" />
                                <Link to="/chartered-accountancy-india" className="link-arrow-text">View our CA practice</Link>
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <div className="hero-image-wrapper">
                        <div className="hero-img-card">
                            <img
                                src="/assets/hero-team.png"
                                alt="SABS Offshore Finance Team"
                                className="hero-img"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/600x400/f8fafc/0f172a?text=SABS+Team";
                                }}
                            />
                            {/* Badge */}
                            <div className="hero-badge bottom-left">
                                <span className="badge-icon">👥</span>
                                <div className="badge-text">
                                    <strong>20-member</strong>
                                    <span>offshore finance team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
