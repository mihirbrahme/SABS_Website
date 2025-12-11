import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';

const CaseStudyUSAgency = () => {
    return (
        <div className="page-resource">
            <SEO
                title="Case Study: US Digital Agency Saves 40% on Finance Costs"
                description="See how a NY-based creative agency switched to SABS & CO for offshore bookkeeping, reducing monthly closings to 5 days and overheads by 40%."
                canonical="https://sabs-website-three.vercel.app/resources/case-study-us-agency"
                type="article"
            />

            <section className="section section-grey">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span className="text-accent" style={{ fontWeight: '600', marginBottom: '16px', display: 'block' }}>CLIENT SUCCESS STORY</span>
                    <h1>How a NY-based Digital Agency Cut Overhead by 40% with Offshore Bookkeeping</h1>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="stats-grid-mini" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
                        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
                            <strong style={{ display: 'block', fontSize: '2rem', color: 'var(--color-accent)' }}>40%</strong>
                            <span>Cost Reduction</span>
                        </div>
                        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
                            <strong style={{ display: 'block', fontSize: '2rem', color: 'var(--color-accent)' }}>5 Days</strong>
                            <span>Monthly Close Time</span>
                        </div>
                        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
                            <strong style={{ display: 'block', fontSize: '2rem', color: 'var(--color-accent)' }}>100%</strong>
                            <span>Tax Compliance</span>
                        </div>
                    </div>

                    <h2>The Challenge</h2>
                    <p>
                        A fast-growing creative agency in New York with $4M in ARR was struggling with its finance function. Their local bookkeeper was expensive ($65/hr) and availability was sporadic.
                    </p>
                    <ul className="check-list" style={{ listStyle: 'none' }}>
                        <li>❌ Invoices from freelancers were getting lost.</li>
                        <li>❌ Monthly P&L was delayed by 20+ days.</li>
                        <li>❌ No clear visibility on project-wise profitability.</li>
                    </ul>

                    <h2>The SABS Solution</h2>
                    <p>
                        SABS & CO deployed a dedicated offshore accounting team of two (1 Senior Reviewer + 1 Associate). We migrated them from a desktop legacy system to a fully cloud-based stack.
                    </p>
                    <h3>The Tech Stack</h3>
                    <p>
                        <strong>QuickBooks Online (QBO)</strong> for core ledgers.<br />
                        <strong>Dext (Receipt Bank)</strong> for automated expense scanning.<br />
                        <strong>Bill.com</strong> for streamlined AP approvals.
                    </p>

                    <h2>The Results</h2>
                    <p>
                        Within 3 months, the agency's finance function was transformed. The "SABS Team" essentially became their internal finance department, operating on New York time zones for overlap hours.
                    </p>
                    <p>
                        <em>"It feels like they are down the hall, not across the ocean. The accuracy is impeccable, and I finally understand my unit economics."</em> — CEO, Digital Agency.
                    </p>

                    <div className="cta-block" style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--color-bg-light)', borderRadius: '16px' }}>
                        <h3>Scaling an agency?</h3>
                        <p>Get the same financial clarity for your business.</p>
                        <Link to="/global-accounting-bookkeeping" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                            Explore Offshore Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyUSAgency;
