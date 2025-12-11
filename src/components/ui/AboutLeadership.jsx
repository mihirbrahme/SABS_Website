import './AboutLeadership.css';

const AboutLeadership = () => {
    const partners = [
        {
            name: "CA Surendra Brahme",
            title: "Senior Partner – Audit, Taxation & Information Systems",
            img: "/assets/surendrabrahme.jpg",
            badges: ["CISA", "ICAI ISA", "SAP-FICO"],
            profile: "Surendra has been in continuous practice since 1986. He serves as a consultant in SAP-FICO and is a Certified Information Systems Auditor (CISA), bringing deep expertise in how technology, data and risk intersect."
        },
        {
            name: "CA Sharmila Brahme",
            title: "Partner – Taxation, Quality & Education",
            img: "/assets/sharmilabrahme.jpg",
            badges: ["IFRS", "ISO Lead Auditor", "Quality Audits"],
            profile: "Sharmila has been in practice since 1988, specialising in taxation, quality audits and systems. She is a certified Lead Auditor for ISO 9000 series and combines domain knowledge with a strong appreciation for process integrity."
        },
        {
            name: "Sharda Joshi",
            title: "Partner – Global Accounting & Offshore Delivery",
            img: "/assets/shardajoshi.jpg",
            badges: ["QBO ProAdvisor", "Offshore Delivery"],
            profile: "Sharda leads the global accounting division, building and managing bookkeeping teams for clients in the USA and UK. She ensures work meets international expectations for accuracy and timeliness."
        }
    ];

    return (
        <section className="about-leadership-section">
            <div className="container">
                <div className="section-header">
                    <h2>Partner-Led. Detail-Oriented. Human.</h2>
                    <p className="section-intro">
                        Every engagement — whether it’s an NRI tax file, an Indian statutory audit or offshore bookkeeping — is anchored by an accessible partner.
                    </p>
                </div>

                <div className="partners-grid">
                    {partners.map((p, idx) => (
                        <div className="partner-card" key={idx}>
                            <div className="partner-img-wrapper">
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="partner-img"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/150x150/e2e8f0/475569?text=Partner";
                                    }}
                                />
                            </div>
                            <h3>{p.name}</h3>
                            <p className="partner-title">{p.title}</p>

                            <div className="partner-badges">
                                {p.badges.map((b, i) => (
                                    <span className="p-badge" key={i}>{b}</span>
                                ))}
                            </div>

                            <p className="partner-bio">{p.profile}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutLeadership;
