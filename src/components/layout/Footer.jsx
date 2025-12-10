import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>SABS & CO</h3>
                        <p>
                            Chartered Accountants in Pune & Global Cloud Accounting Partner.
                            Serving Indian SMEs, professionals, e-commerce brands, and CPA firms.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/chartered-accountancy-india">Chartered Accountancy (India)</Link></li>
                            <li><Link to="/global-accounting-bookkeeping">Global Accounting</Link></li>
                            <li><Link to="/who-we-serve">Who We Serve</Link></li>
                            <li><Link to="/insights">Insights</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Legal</h4>
                        <ul className="footer-links">
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-use">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} SABS & CO. All rights reserved.</p>
                    <p>Pune, India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
