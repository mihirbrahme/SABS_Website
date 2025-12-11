import Hero from '../components/ui/Hero';
import AnimatedStats from '../components/ui/AnimatedStats';
import ServiceSplit from '../components/ui/ServiceSplit';
import TechMarquee from '../components/ui/TechMarquee';
import TalentSection from '../components/ui/TalentSection';
import WhyChooseUs from '../components/ui/WhyChooseUs';
import CtaSection from '../components/ui/CtaSection';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
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
