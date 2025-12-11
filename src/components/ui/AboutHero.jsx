import { motion } from 'framer-motion';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <section className="about-hero-section">
            <div className="container">
                <div className="about-hero-grid">
                    {/* Left Content */}
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="about-pill">
                            Pune · Chartered Accountants · Global & NRI Focus
                        </div>

                        <h1>About SABS & CO</h1>

                        <p className="about-hero-subtext">
                            SABS & CO is a Pune-based Chartered Accountancy firm with over three decades of practice in India — now combining that legacy with modern, cloud-based offshore accounting for global clients and NRI families.
                        </p>
                    </motion.div>

                    {/* Right Image */}
                    <div className="about-hero-image-wrapper">
                        <div className="about-hero-img-card">
                            <img
                                src="/assets/office-team-collab.png"
                                alt="SABS & CO Team"
                                className="about-hero-img"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/600x400/f8fafc/0f172a?text=SABS+Team";
                                }}
                            />
                            {/* Optional Badge */}
                            <div className="hero-badge bottom-right">
                                <span className="badge-icon">🏛️</span>
                                <div className="badge-text">
                                    <strong>Pune-based</strong>
                                    <span>Partner-led CA Firm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
