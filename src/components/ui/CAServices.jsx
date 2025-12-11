import './CAServices.css';

const CAServices = () => {
    return (
        <section className="ca-services-section">
            <div className="container">
                <div className="section-header">
                    <h2>Key Service Areas</h2>
                </div>

                <div className="ca-services-grid">
                    {/* 1. Audit */}
                    <div className="ca-service-card">
                        <div className="svc-icon">🛡️</div>
                        <h3>Audit & Assurance</h3>
                        <p className="svc-desc">
                            Independent, well-planned audits that go beyond ticking boxes. We help management, owners and stakeholders gain confidence in the numbers and the controls behind them.
                        </p>
                        <ul className="svc-list">
                            <li>Statutory audits for companies and firms</li>
                            <li>Internal audits focused on systems and processes</li>
                            <li>Tax audits and special-purpose audits</li>
                            <li>Review of internal controls and key risk areas</li>
                        </ul>
                        <div className="svc-outcome">
                            <strong>Outcome:</strong> You receive clear reports, practical recommendations and a CA team available to discuss findings.
                        </div>
                    </div>

                    {/* 2. Taxation (Highlighted) */}
                    <div className="ca-service-card highlight-card">
                        <div className="svc-icon">📄</div>
                        <h3>Taxation, NRI & Regulatory Compliance</h3>
                        <p className="svc-desc">
                            From Indian income tax and GST to NRI filings and DTAA, we help you stay compliant in India while optimising your overall tax position.
                        </p>
                        <ul className="svc-list">
                            <li><strong>NRI & Cross-Border:</strong> Residential status, DTAA benefits, foreign income tax treatment.</li>
                            <li><strong>Indian Direct Tax:</strong> Income tax returns, advance tax, TDS support.</li>
                            <li><strong>Indirect Tax:</strong> GST registration, compliance and filings.</li>
                            <li><strong>Representation:</strong> Assistance during assessments and notices.</li>
                        </ul>
                        <div className="svc-outcome">
                            <strong>Outcome:</strong> Timely compliance in India and a tax position that respects both Indian law and your global status.
                        </div>
                    </div>

                    {/* 3. Systems */}
                    <div className="ca-service-card">
                        <div className="svc-icon">⚙️</div>
                        <h3>Information Systems & ERP Advisory</h3>
                        <p className="svc-desc">
                            As your volumes grow, systems become critical. We review and improve how your accounting and ERP environment is set up — from a finance and controls point of view.
                        </p>
                        <ul className="svc-list">
                            <li>Review of existing accounting and ERP systems</li>
                            <li>Recommendations on controls, approvals and workflows</li>
                            <li>Assistance during implementation and UAT</li>
                            <li>Information systems audits and data checks</li>
                        </ul>
                        <div className="svc-outcome">
                            <strong>Outcome:</strong> Cleaner data, fewer errors and systems that support better decision-making.
                        </div>
                    </div>

                    {/* 4. Outsourcing */}
                    <div className="ca-service-card">
                        <div className="svc-icon">🏗️</div>
                        <h3>Outsourcing & Business Setup Support</h3>
                        <p className="svc-desc">
                            For many businesses and NRIs, outsourcing routine accounting and compliance work to a CA firm is more efficient than building everything in-house.
                        </p>
                        <ul className="svc-list">
                            <li>Bookkeeping and account maintenance for Indian entities</li>
                            <li>MIS preparation and basic management dashboards</li>
                            <li>Payroll accounting support</li>
                            <li>Business setup (Company, Firm, GST, PAN, TAN)</li>
                        </ul>
                        <div className="svc-outcome">
                            <strong>Outcome:</strong> You focus on the business; we keep the books and filings in order.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CAServices;
