import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Team';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Pricing from './pages/Pricing';

function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Solution />
      <Projects />
      <PricingSection />
      <Testimonials />
      <Contact />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const hiddenNavbarRoutes = ['/pricing'];
  const showNavbar = !hiddenNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/terms' element={<TermsAndConditions />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/refund' element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
