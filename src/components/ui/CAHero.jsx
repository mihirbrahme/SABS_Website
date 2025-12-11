import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CAHero.css';

const CAHero = () => {
    return (
        <section className="ca-hero-section">
            <div className="container">
                <div className="ca-hero-grid">
                    {/* Left Content */}
                    <motion.div
                        className="ca-hero-content"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="ca-hero-pill">
                            Pune · Chartered Accountants · India & NRI Tax
                        </div>

                        <h1>
                            Chartered Accountancy Services in India – <br className="desktop-break" />
                            with NRI & Cross-Border Tax Expertise
                        </h1>

                        <p className="ca-hero-subheading">
                            A Pune-based Chartered Accountancy firm helping NRIs and Indian businesses manage audits, taxation and systems with confidence — backed by decades of experience and a modern, tech-enabled approach.
                        </p>

                        <p className="ca-hero-supporting">
                            Whether you’re filing returns in India and overseas, or running a business that needs dependable CA support, we bring structured processes, clear communication and practical advice.
                        </p>

                        <div className="ca-hero-actions">
                            <a href="/contact#form" className="btn-primary">
                                Speak to a Chartered Accountant
                            </a>
                        </div>

                        <div className="ca-hero-secondary-link">
                            Looking for offshore bookkeeping and global finance support instead? <br />
                            <Link to="/global-accounting-bookkeeping" className="link-arrow-text">
                                Explore our Global Accounting services
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <div className="ca-hero-image-wrapper">
                        <div className="ca-hero-img-card">
                            <img
                                src="/assets/office-meeting.png"
                                alt="Chartered Accountant discussion"
                                className="ca-hero-img"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/600x500/f8fafc/0f172a?text=CA+Discussion";
                                }}
                            />
                            {/* Badge */}
                            <div className="hero-badge bottom-left">
                                <span className="badge-icon">🇮🇳</span>
                                <div className="badge-text">
                                    <strong>NRI & Cross-Border</strong>
                                    <span>Tax Expertise</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CAHero;
