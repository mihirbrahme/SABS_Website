import Hero from '../components/ui/Hero';
import AnimatedStats from '../components/ui/AnimatedStats';
import ServiceSplit from '../components/ui/ServiceSplit';
import TechMarquee from '../components/ui/TechMarquee';
import TalentSection from '../components/ui/TalentSection';
import WhyChooseUs from '../components/ui/WhyChooseUs';
import CtaSection from '../components/ui/CtaSection';
import './Home.css';

import SEO from '../components/seo/SEO';

const Home = () => {
    return (
        <div className="home-page">
            <SEO
                title="SABS & CO - Global Cloud Accounting & Chartered Accountants"
                description="Expert offshore finance team in India. SABS & CO provides specialized bookkeeping, tax, and accounting services for global firms."
                canonical="https://sabs-website-three.vercel.app/"
            />
            <Hero />
            <AnimatedStats />
            <ServiceSplit />
            <TechMarquee />
            <TalentSection />
            <WhyChooseUs />
            <CtaSection />
        </div>
    );
};

export default Home;
