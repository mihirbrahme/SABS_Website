import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import './Insights.css';

const Insights = () => {
    const articles = [
        {
            id: 1,
            title: "Understanding GST Compliance for Indian E-commerce Sellers",
            summary: "A comprehensive guide to GST registration, TCS, and filing requirements for sellers on Amazon, Flipkart and Shopify in India.",
            category: "Taxation (India)",
            date: "Oct 12, 2024"
        },
        {
            id: 2,
            title: "Why Your Startup Needs Cloud Accounting from Day One",
            summary: "Spreadsheets don't scale. Learn how moving to QuickBooks Online or Xero early can save you hours of reconciliation headaches.",
            category: "Cloud Accounting",
            date: "Sep 28, 2024"
        },
        {
            id: 3,
            title: "Outsourcing Bookkeeping: A Guide for US CPA Firms",
            summary: "How to effectively integrate an offshore team into your practice without compromising on quality or security.",
            category: "For CPAs",
            date: "Sep 15, 2024"
        },
        {
            id: 4,
            title: "A2X vs. Manual Entry: The Truth About Amazon Accounting",
            summary: "We compare the accuracy and time-savings of automated connectors versus manual journal entries for high-volume sellers.",
            category: "E-commerce",
            date: "Aug 30, 2024"
        }
    ];

    return (
        <div className="insights-page">
            <SEO
                title="Accounting & Finance Insights | GST, Cloud Tools, & Compliance | SABS & CO"
                description="Latest articles on Indian GST compliance, Global Cloud Accounting, and tips for startup founders and CPAs."
                canonical="https://sabs-website-three.vercel.app/insights"
            />
            <section className="section" style={{ backgroundColor: '#f8fafc', padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1>Insights & Resources</h1>
                    <p className="subheading" style={{ marginTop: '16px', color: 'var(--color-text-main)' }}>
                        Articles, guides and FAQs on accounting, compliance and cloud finance tools.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="articles-grid">
                        {articles.map(article => (
                            <div className="article-card" key={article.id}>
                                <div className="article-meta">
                                    <span className="article-category">{article.category}</span>
                                    <span className="article-date">{article.date}</span>
                                </div>
                                <h3>{article.title}</h3>
                                <p>{article.summary}</p>
                                <Link to="#" className="link-arrow">Read more →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Insights;
