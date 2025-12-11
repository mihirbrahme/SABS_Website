import SEO from '../components/seo/SEO';
import WWSHeader from '../components/ui/WWSHeader';
import WWSSegments from '../components/ui/WWSSegments';
import CtaSection from '../components/ui/CtaSection';
import './WhoWeServe.css';

const WhoWeServe = () => {
    return (
        <div className="who-page">
            <SEO
                title="Who We Serve - CA & Offshore Finance Solutions | SABS & CO"
                description="Tailored financial solutions for Startups, NRIs, Global Agencies, and SME Manufacturers. Discover how we help your specific sector."
                canonical="https://sabs-website-three.vercel.app/who-we-serve"
            />
            <WWSHeader />
            <WWSSegments />
            <CtaSection
                title="Not Sure Where You Fit? Let’s Talk."
                subheading="Whether you’re an NRI with income in two countries, a founder running an e-commerce brand, or a CPA firm looking for capacity, we can map your situation to the right mix of CA services and offshore support. We usually respond within 1 business day."
                primaryBtnText="Book a discovery call"
                primaryBtnLink="/contact#discovery-call"
                secondaryBtnText="Send us your details"
                secondaryBtnLink="/contact#form"
            />
        </div>
    );
};

export default WhoWeServe;
