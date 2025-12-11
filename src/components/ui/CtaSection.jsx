import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CtaSection.css';

const CtaSection = ({
    title = "Ready to Explore an Offshore Finance Team?",
    subheading = "Tell us a bit about your business, tools and current setup. We’ll come back with how an offshore team from India can plug in and help — usually within 1 business day.",
    reassurance = "No obligation — just a straightforward conversation with our finance and accounting experts.",
    primaryBtnText = "Book a discovery call",
    primaryBtnLink = "/contact#discovery-call",
    secondaryBtnText = "Send us your requirements",
    secondaryBtnLink = "/contact"
}) => {
    return (
        <section className="final-cta-section">
            <div className="container cta-container">
                <h2>{title}</h2>
                <p className="cta-subheading">
                    {subheading}
                </p>

                <div className="cta-buttons">
                    <a href={primaryBtnLink} className="btn-primary">
                        {primaryBtnText}
                    </a>
                    <Link to={secondaryBtnLink} className="btn-ghost-dark">
                        {secondaryBtnText}
                    </Link>
                </div>

                <p className="cta-reassurance">
                    {reassurance}
                </p>
            </div>
        </section>
    );
};

CtaSection.propTypes = {
    title: PropTypes.string,
    subheading: PropTypes.string,
    reassurance: PropTypes.string,
    primaryBtnText: PropTypes.string,
    primaryBtnLink: PropTypes.string,
    secondaryBtnText: PropTypes.string,
    secondaryBtnLink: PropTypes.string
};

export default CtaSection;
