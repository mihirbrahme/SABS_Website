import { Link } from 'react-router-dom';
import { Building2, Globe2, ArrowRight } from 'lucide-react';
import './ServiceSplit.css';

const ServiceSplit = () => {
    return (
        <section className="service-split-section">
            <div className="container">
                <div className="split-header">
                    <h2>Two Distinct Practice Areas</h2>
                    <p>Whether you need a dedicated offshore team or Indian statutory compliance, we bring expert CAs to the table.</p>
                </div>

                <div className="split-grid">
                    {/* Global Team Card (Prioritized) */}
                    <Link to="/global-accounting-bookkeeping" className="split-card main-split">
                        <div className="split-icon">
                            <Globe2 size={32} />
                        </div>
                        <h3>Global Brands & CPA Firms</h3>
                        <p>Build your dedicated offshore finance team. Save 50% on overheads without compromising on quality.</p>

                        <div className="service-tags">
                            <span className="service-tag">Hire Senior Accountants</span>
                            <span className="service-tag">Virtual CFOs</span>
                            <span className="service-tag">Payroll Specialists</span>
                        </div>

                        <span className="split-link">Build Your Team <ArrowRight size={16} /></span>
                    </Link>

                    {/* India Card */}
                    <Link to="/chartered-accountancy-india" className="split-card secondary-split">
                        <div className="split-icon">
                            <Building2 size={32} />
                        </div>
                        <h3>Indian Business Advisory</h3>
                        <p>Expert CA services for audit, tax, and compliance. Your regulatory shield in India.</p>

                        <div className="service-tags">
                            <span className="service-tag">Statutory Audit</span>
                            <span className="service-tag">GST & Tax</span>
                            <span className="service-tag">Corporate Law</span>
                        </div>

                        <span className="split-link">Consult Experts <ArrowRight size={16} /></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceSplit;
