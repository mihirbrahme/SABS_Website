import { Link } from 'react-router-dom';
import './CABridge.css';

const CABridge = () => {
    return (
        <section className="ca-bridge-strip">
            <div className="container">
                <div className="bridge-content">
                    <span className="bridge-icon">🌐</span>
                    <div className="bridge-text">
                        <span className="bridge-eyebrow">A CA Firm with Global & NRI Experience</span>
                        <p>
                            Our work with global clients feeds directly into our Indian CA practice.
                            For NRIs, that means a team that understands both Indian regulations and the realities of working with overseas employers.
                        </p>
                    </div>
                </div>
                <div className="bridge-action">
                    <Link to="/global-accounting-bookkeeping" className="bridge-link">
                        Learn about our Global Accounting & Offshore Bookkeeping →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CABridge;
