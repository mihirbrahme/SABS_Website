import { Link } from 'react-router-dom';
import './CtaSection.css';

const CtaSection = () => {
    return (
        <section className="final-cta-section">
            <div className="container cta-container">
                <h2>Ready to Explore an Offshore Finance Team?</h2>
                <p className="cta-subheading">
                    Tell us a bit about your business, tools and current setup. We’ll come back with how an offshore team from India can plug in and help — usually within 1 business day.
                </p>

                <div className="cta-buttons">
                    <a href="/contact#discovery-call" className="btn-primary">
                        Book a discovery call
                    </a>
                    <Link to="/contact" className="btn-ghost-dark">
                        Send us your requirements
                    </Link>
                </div>

                <p className="cta-reassurance">
                    No obligation — just a straightforward conversation with our finance and accounting experts.
                </p>
            </div>
        </section>
    );
};

export default CtaSection;
