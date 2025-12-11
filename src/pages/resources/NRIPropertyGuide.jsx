import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';

const NRIPropertyGuide = () => {
    return (
        <div className="page-resource">
            <SEO
                title="NRI Property Tax Guide 2025 | Capital Gains & TDS India"
                description="Comprehensive guide for NRIs selling property in India. Learn about Capital Gains Tax, 20% TDS, and how to lower it with a Nil Deduction Certificate."
                canonical="https://sabs-website-three.vercel.app/resources/nri-property-tax-guide-2025"
                type="article"
            />

            <section className="section section-grey">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span className="text-accent" style={{ fontWeight: '600', marginBottom: '16px', display: 'block' }}>RESOURCE GUIDE</span>
                    <h1>NRI Property Tax Guide 2025: Capital Gains & Repatriation</h1>
                    <p className="lead" style={{ fontSize: '1.25rem', marginTop: '16px', color: 'var(--color-text-main)' }}>
                        Selling property in India as an NRI involves navigating complex TDS rules (often 20% or more), Capital Gains Tax, and Form 15CA/CB for repatriation. Here is exactly what you need to know.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2>1. The "TDS Shock" on Sale of Property</h2>
                    <p>
                        Unlike resident Indians where TDS is 1% on property over ₹50 Lakhs, for **Non-Resident Indians (NRIs)**, the buyer must deduct TDS at the rate of **20% (plus surcharge and cess)** on the **entire sale value**, not just the profit.
                    </p>
                    <p>
                        This often results in a massive cash flow blockage. For example, on a ₹1 Crore sale, ₹20-23 Lakhs might be deducted upfront, even if your actual capital gain is small.
                    </p>

                    <div className="highlight-box" style={{ background: '#fff7ed', padding: '24px', borderRadius: '8px', borderLeft: '4px solid var(--color-accent)', margin: '32px 0' }}>
                        <h3 style={{ marginTop: 0 }}>Solution: Lower Deduction Certificate (LDC)</h3>
                        <p style={{ marginBottom: 0 }}>
                            You can apply to the Income Tax Department for a Lower Deduction Certificate (Form 13) *before* the sale deed is registered. This allows the buyer to deduct TDS at a lower rate (e.g., 3-5%) based on your actual calculated capital gains.
                        </p>
                    </div>

                    <h2>2. Calculation of Capital Gains</h2>
                    <p>
                        <strong>Long Term Capital Gains (LTCG)</strong>: If held for more than 24 months. Taxed at 12.5% (post-2024 budget changes) without indexation benefits in some cases, or 20% with indexation for older properties (rules vary dynamically, consult a CA).
                    </p>
                    <p>
                        <strong>Short Term Capital Gains (STCG)</strong>: If held for less than 24 months. Taxed as per your income slab rates in India.
                    </p>

                    <h2>3. Repatriation of Funds (Form 15CA & 15CB)</h2>
                    <p>
                        Once the property is sold and taxes are paid, moving the money back to your country of residence (USA, UK, Australia, etc.) requires banking compliance.
                    </p>
                    <ul className="check-list">
                        <li><strong>Form 15CB</strong>: A certificate from a Chartered Accountant certifying that taxes have been paid.</li>
                        <li><strong>Form 15CA</strong>: An online declaration filed by you.</li>
                    </ul>

                    <div className="cta-block" style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--color-bg-light)', borderRadius: '16px' }}>
                        <h3>Planning to sell property in India?</h3>
                        <p>Don't let 20% of your sale proceeds get stuck in TDS refunds for years.</p>
                        <Link to="/contact" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                            Consult a CA for Capital Gains & LDC
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NRIPropertyGuide;
