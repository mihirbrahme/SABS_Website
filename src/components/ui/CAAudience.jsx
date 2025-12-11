import './CAAudience.css';

const CAAudience = () => {
    const audiences = [
        {
            icon: "🌏",
            title: "NRIs & Global Indians",
            desc: "NRIs and returning residents who need to manage income, investments and assets across India and another country, file returns in both jurisdictions and make the best use of DTAA."
        },
        {
            icon: "🏭",
            title: "SMEs & Family Businesses",
            desc: "Manufacturing, trading and service businesses that need ongoing audit, tax and advisory support, along with better controls and reporting."
        },
        {
            icon: "⚖️",
            title: "Professionals and Firms",
            desc: "Doctors, lawyers, consultants and other professionals who want clean books, timely filings and structured guidance on tax and cash flows."
        },
        {
            icon: "🚀",
            title: "Startups and Growing Companies",
            desc: "Early and growth-stage businesses that want their compliance, cap tables and financial reporting in order before investors and lenders come in."
        },
        {
            icon: "🤝",
            title: "NGOs, Trusts and Other Organisations",
            desc: "Non-profits and trusts that require robust governance, documentation and statutory reporting to satisfy boards, donors and regulators."
        }
    ];

    return (
        <section className="ca-audience-section">
            <div className="container">
                <div className="section-header">
                    <h2>Supporting NRIs and Indian Businesses Across Sectors</h2>
                    <p className="section-intro">
                        We work with clients who want dependable CA support, clarity on their tax position and a partner who understands both Indian regulations and cross-border realities.
                    </p>
                </div>

                <div className="audience-chip-grid">
                    {audiences.map((aud, index) => (
                        <div className={`audience-chip ${index === 0 ? 'highlight-chip' : ''}`} key={index}>
                            <div className="chip-header">
                                <span className="chip-icon">{aud.icon}</span>
                                <h3>{aud.title}</h3>
                            </div>
                            <p>{aud.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CAAudience;
