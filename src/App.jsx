import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';
import CharteredAccountancy from './pages/CharteredAccountancy';
import GlobalAccounting from './pages/GlobalAccounting';
import WhoWeServe from './pages/WhoWeServe';
import Insights from './pages/Insights';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NRIPropertyGuide from './pages/resources/NRIPropertyGuide';
import CaseStudyUSAgency from './pages/resources/CaseStudyUSAgency';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chartered-accountancy-india" element={<CharteredAccountancy />} />
          <Route path="/global-accounting-bookkeeping" element={<GlobalAccounting />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* Resources */}
          <Route path="/resources/nri-property-tax-guide-2025" element={<NRIPropertyGuide />} />
          <Route path="/resources/case-study-us-agency" element={<CaseStudyUSAgency />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
