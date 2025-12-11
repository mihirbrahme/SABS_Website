import CAHero from '../components/ui/CAHero';
import CAAudience from '../components/ui/CAAudience';
import CAServices from '../components/ui/CAServices';
import CABridge from '../components/ui/CABridge';
import CtaSection from '../components/ui/CtaSection';
import './CharteredAccountancy.css';

const CharteredAccountancy = () => {
    return (
        <div className="ca-page">
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
