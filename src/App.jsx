import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CharteredAccountancy from './pages/CharteredAccountancy';
import GlobalAccounting from './pages/GlobalAccounting';
import WhoWeServe from './pages/WhoWeServe';
import Insights from './pages/Insights';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
