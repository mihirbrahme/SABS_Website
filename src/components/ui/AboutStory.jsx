import './AboutStory.css';

const AboutStory = () => {
    return (
        <section className="about-story-section">
            <div className="container">
                <div className="story-split">
                    {/* Story Text */}
                    <div className="story-content">
                        <h2>Our Story</h2>
                        <p>
                            SABS & CO began as a traditional CA practice in the mid-1980s, serving Indian businesses, professionals and organisations with audit, tax and advisory services.
                        </p>
                        <p>
                            Over the years, we saw two clear needs emerging: Indian businesses needing dependable, high-quality CA support, and global businesses needing a reliable offshore partner in India.
                        </p>
                        <p>
                            With this in mind, we evolved from being just a local CA firm into a partner-led finance practice that delivers core Chartered Accountancy services in India and runs offshore accounting teams for global brands.
                        </p>
                        <p>
                            Today, SABS & CO blends old-school CA rigour with new-age tools like QuickBooks Online, Xero, A2X and modern ERPs — so your finances are not just compliant, but structured for clarity and long-term decisions.
                        </p>
                    </div>

                    {/* Key Stats Card */}
                    <div className="story-stats-card">
                        <div className="stats-header">
                            <h3>A Practice Built on Experience and Continuity</h3>
                        </div>
                        <div className="stats-list">
                            <div className="stat-row">
                                <span className="stat-num">35+</span>
                                <span className="stat-label">Years of continuous CA practice</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-num">500+</span>
                                <span className="stat-label">Clients supported over time</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-num">5+</span>
                                <span className="stat-label">Countries served globally</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-num">20</span>
                                <span className="stat-label">Member strong finance team</span>
                            </div>
                        </div>
                        <p className="stats-caption">
                            A stable, partner-led firm that has grown from a local CA office in Pune to a global-facing finance partner.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
