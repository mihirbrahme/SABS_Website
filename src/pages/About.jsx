import SEO from '../components/seo/SEO';
import AboutHero from '../components/ui/AboutHero';
import AboutStory from '../components/ui/AboutStory';
import AboutLeadership from '../components/ui/AboutLeadership';
import AboutValues from '../components/ui/AboutValues';
import CtaSection from '../components/ui/CtaSection';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <SEO
                title="About SABS & CO - Chartered Accountants in Pune"
                description="We are a team of Chartered Accountants and Financial Experts bridging the gap between Indian compliance and Global efficiency."
                canonical="https://sabs-website-three.vercel.app/about"
            />
            <AboutHero />
            <AboutStory />
            <AboutLeadership />
            <AboutValues />

            <CtaSection
                title="Want to Know if We’re the Right Fit?"
                subheading="If you’re an NRI, an Indian business owner, a founder of a digital brand or a CPA firm owner, we’re happy to have an honest conversation about whether SABS & CO is the right partner for you."
                primaryBtnText="Talk to our team"
                primaryBtnLink="/contact#discovery-call"
                secondaryBtnText="Learn about our services"
                secondaryBtnLink="/global-accounting-bookkeeping"
            />
        </div>
    );
};

export default About;
