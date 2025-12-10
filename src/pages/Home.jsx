import { Link } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import AnimatedStats from '../components/ui/AnimatedStats';
import ServiceSplit from '../components/ui/ServiceSplit';
import TechMarquee from '../components/ui/TechMarquee';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* 1. New Hero */}
            <Hero />

            {/* 2. Trust Bar (Animated Stats) */}
            <AnimatedStats />

            {/* 3. Core Services (Split Layout) */}
            <ServiceSplit />

            {/* 4. Tech Stack (Marquee) */}
            <TechMarquee />

            {/* 5. Talent / Who We Serve (New Split Layout with Office Image) */}
            <section className="section bg-light">
                <div className="container">
                    <div className="split-grid align-center">
                        <div className="text-content">
                            <div className="section-header">
                                <h2>Meet Your New Finance Team</h2>
                                <p>We don't just "do tasks". We integrate into your workflow. From dedicated bookkeepers to fractional CFOs, our team becomes yours.</p>
                            </div>
                            <div className="check-list-grid">
                                <ul className="check-list">
                                    <li><strong>Senior Accountants</strong>: GAAP Expert CAs</li>
                                    <li><strong>Tax Preparers</strong>: US/UK Tax Knowledge</li>
                                    <li><strong>Virtual CFOs</strong>: Strategic Financial Planning</li>
                                </ul>
                            </div>
                            <Link to="/who-we-serve" className="btn-primary">View Talent Roles</Link>
                        </div>
                        <div className="image-content">
                            <img
                                src="/assets/office-meeting.png"
                                alt="SABS Team Meeting"
                                style={{ width: '100%', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-lg)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why SABS (Tech Focus with Abstract Image) */}
            <section className="section">
                <div className="container">
                    <div className="split-grid align-center reverse-mobile">
                        <div className="image-content">
                            <img
                                src="/assets/tech-dashboard.png"
                                alt="Financial Tech Stack"
                                style={{ width: '100%', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-lg)' }}
                            />
                        </div>
                        <div className="text-content">
                            <div className="section-header">
                                <h2>Tech-First. Future-Ready.</h2>
                                <p>We aren't a traditional paper-pushing firm. We are experts in modern financial stacks (Xero, QBO, Bill.com) and automation.</p>
                            </div>
                            <div className="why-grid-simple one-col">
                                <div className="benefit-item">
                                    <h4>Seamless Integration</h4>
                                    <p>We plug directly into your existing software ecosystem.</p>
                                </div>
                                <div className="benefit-item">
                                    <h4>Real-Time Reporting</h4>
                                    <p>Get financial insights when you need them, not months later.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Final CTA */}
            <section className="section cta-section">
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Scale?</h2>
                    <p style={{ color: '#cbd5e1', marginBottom: '32px', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 32px' }}>Book a discovery call to see how we can streamline your finance function.</p>
                    <div className="hero-actions" style={{ justifyContent: 'center' }}>
                        <Link to="/contact" className="btn-primary">Book a Discovery Call</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
