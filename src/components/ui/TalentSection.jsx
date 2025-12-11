import './TalentSection.css';

const TalentSection = () => {
    return (
        <section className="talent-section">
            <div className="container">
                <div className="talent-grid">
                    {/* Left: Text Content */}
                    <div className="talent-content">
                        <h2>Meet Your Offshore Finance Team</h2>
                        <p className="talent-subheading">
                            Dedicated engagement managers, strong review mechanisms and CA-level oversight.
                        </p>

                        <p className="talent-body">
                            Your work doesn’t go into a nameless pool. You get a dedicated engagement manager and a layered review process, supported by a team that understands both compliance and operations.
                        </p>

                        <div className="roles-list">
                            <div className="role-item">
                                <strong>Dedicated Bookkeepers & Accountants</strong> – handling daily transactions, reconciliations and month-end close.
                            </div>
                            <div className="role-item">
                                <strong>E-commerce Accounting Specialists</strong> – managing high-volume marketplace and payment gateway reconciliations.
                            </div>
                            <div className="role-item">
                                <strong>White-label Teams for CPA Firms</strong> – working under your processes and workpapers, so your brand stays front and centre.
                            </div>
                            <div className="role-item">
                                <strong>Virtual CFOs</strong> – building analytics and reports, supporting management decisions.
                            </div>
                        </div>

                        <div className="talent-reassurance">
                            <span className="icon-check">✓</span>
                            All engagements run through defined review mechanisms for consistent quality.
                        </div>

                        <div className="timezone-note">
                            <span className="icon-clock">🕒</span>
                            Our team caters to your time zones, ensuring overlap for reviews and check-ins.
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="talent-image-wrapper">
                        <div className="talent-img-card">
                            <img
                                src="/assets/office-meeting.png"
                                alt="SABS Team Meeting"
                                className="talent-img"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/600x800/f8fafc/0f172a?text=Office+Meeting";
                                }}
                            />
                            <div className="img-overlay-caption">
                                CA-led offshore team in Pune
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentSection;
