import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import './Careers.css';

const Careers = () => {
    const jobs = [
        {
            id: 1,
            title: "Senior Audit Assistant",
            location: "Pune (On-site)",
            type: "Full-time",
            desc: "Conduct statutory and tax audits for SME clients. Requires 2-3 years experience."
        },
        {
            id: 2,
            title: "Global Bookkeeping Associate",
            location: "Pune / Remote",
            type: "Full-time",
            desc: "Handle QBO/Xero bookkeeping for US/UK clients. Communication skills are key."
        },
        {
            id: 3,
            title: "Articled Assistant (Intern)",
            location: "Pune",
            type: "Internship",
            desc: "Learn across audit, tax and cloud accounting domains under CA mentorship."
        }
    ];

    return (
        <div className="careers-page">
            <SEO
                title="Careers at SABS & CO | Join Our Finance Team"
                description="Explore career opportunities in Audit, Taxation, and Global Cloud Accounting in Pune. Join a tech-forward CA firm."
                canonical="https://sabs-website-three.vercel.app/careers"
            />
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1>Careers at SABS & CO</h1>
                    <p className="subheading" style={{ marginTop: '16px', color: 'var(--color-text-main)' }}>
                        Build a career that spans traditional audit rigour and modern global finance.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Work With Us?</h2>
                        <p>We believe in continuous learning, fair flexibility and exposure to international best practices.</p>
                    </div>

                    <div className="why-grid" style={{ marginBottom: '60px' }}>
                        <div className="why-card">
                            <h3>Global Exposure</h3>
                            <p>Work with clients from US, UK, Australia and learn global accounting standards.</p>
                        </div>
                        <div className="why-card">
                            <h3>Tech-Forward</h3>
                            <p>Master the latest cloud tools like QuickBooks, A2X, Gusto and Xero.</p>
                        </div>
                        <div className="why-card">
                            <h3>Mentorship</h3>
                            <p>Direct guidance from experienced Chartered Accountants.</p>
                        </div>
                        <div className="why-card">
                            <h3>Work-Life Balance</h3>
                            <p>Structured processes and reasonable hours compared to traditional firms.</p>
                        </div>
                    </div>

                    <div className="section-header">
                        <h2>Open Positions</h2>
                    </div>
                    <div className="jobs-grid">
                        {jobs.map(job => (
                            <div className="job-card" key={job.id}>
                                <div className="job-header">
                                    <h3>{job.title}</h3>
                                    <span className="job-type">{job.type}</span>
                                </div>
                                <p className="job-location">📍 {job.location}</p>
                                <p className="job-desc">{job.desc}</p>
                                <Link to="/contact" className="link-arrow">Apply Now →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <h2>Don't see a fit?</h2>
                    <p>We are always looking for talent. Send your CV to careers@sabs.co.in</p>
                    <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
                        <Link to="/contact" className="btn-primary">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
