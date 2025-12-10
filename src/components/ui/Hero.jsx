import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-split">
                    {/* Left Content */}
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>
                            Elite Offshore <br />
                            <span className="highlight">Accounting Teams</span>
                        </h1>
                        <p>
                            Scale your finance function with top 1% Indian talent.
                            We build dedicated offshore teams for growing global brands and CPA firms.
                            <strong> Zero overhead. US GAAP Experts.</strong>
                        </p>

                        <div className="hero-actions">
                            <Link to="/contact" className="btn-primary">Build Your Team</Link>
                            <Link to="/global-accounting-bookkeeping" className="btn-ghost">View Solutions</Link>
                        </div>

                        <div className="trust-badge">
                            <div className="trust-avatars">
                                <div className="trust-avatar" style={{ background: '#cbd5e1' }}></div>
                                <div className="trust-avatar" style={{ background: '#94a3b8' }}></div>
                                <div className="trust-avatar" style={{ background: '#64748b' }}></div>
                            </div>
                            <span>Trusted by 500+ businesses across US, UK & AU</span>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="visual-card image-card">
                            <img
                                src="/assets/hero-team.png"
                                alt="SABS Global Team"
                                className="hero-image"
                            />
                            {/* Floating Badge */}
                            <div className="floating-badge">
                                <span className="badge-icon">✓</span>
                                <div>
                                    <strong>Ready to Deploy</strong>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b' }}>Senior Accountants Available</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
