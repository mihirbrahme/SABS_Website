import SEO from '../components/seo/SEO';
import CAHero from '../components/ui/CAHero';
import CAAudience from '../components/ui/CAAudience';
import CAServices from '../components/ui/CAServices';
import CABridge from '../components/ui/CABridge';
import CtaSection from '../components/ui/CtaSection';
import './CharteredAccountancy.css';

const CharteredAccountancy = () => {
    return (
        <div className="ca-page">
            <SEO
                title="Chartered Accountants in Pune, India | Audit & Tax | SABS & CO"
                description="Comprehensive Chartered Accountancy services in Pune. Statutory Audit, Tax Compliance, NRI Services, and Business Advisory."
                canonical="https://sabs-website-three.vercel.app/chartered-accountancy-india"
            />
            <CAHero />
            <CAAudience />
            <CAServices />
            <CABridge />
            <CtaSection
                title="Talk to a Chartered Accountant About Your Requirements"
                subheading="Share a few details about your situation — whether it’s NRI taxation in two countries, an upcoming audit, or ongoing compliance for your business. We’ll review and get back to you, usually within 1 business day."
                primaryBtnText="Book a consultation"
                primaryBtnLink="/contact#form"
                secondaryBtnText="Write to us at hello@sabs.co.in"
                secondaryBtnLink="/contact" // Using contact as fallback or mailto if preferred
            />
        </div>
    );
};

export default CharteredAccountancy;
