import GlobalHero from '../components/ui/GlobalHero';
import AudienceSegments from '../components/ui/AudienceSegments';
import ServiceDetailedBlocks from '../components/ui/ServiceDetailedBlocks';
import EngagementModels from '../components/ui/EngagementModels';
import ToolsGrid from '../components/ui/ToolsGrid';
import CtaSection from '../components/ui/CtaSection';
import './GlobalAccounting.css';

const GlobalAccounting = () => {
    return (
        <div className="ga-page">
            <GlobalHero />
            <AudienceSegments />
            <ServiceDetailedBlocks />
            <EngagementModels />
            <ToolsGrid />
            <CtaSection
                title="Ready to Explore an Offshore Finance Team?"
                subheading="Share your business model, tools and current finance challenges. We’ll respond with how an offshore team from India can plug in and help — usually within 1 business day."
                primaryBtnText="Book a discovery call"
                primaryBtnLink="/contact#discovery-call"
                secondaryBtnText="Send us your requirements"
                secondaryBtnLink="/contact"
            />
        </div>
    );
};

export default GlobalAccounting;
