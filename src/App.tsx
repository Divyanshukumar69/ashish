import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AIReceptionist from './components/AIReceptionist';
import ITIPopup from './components/ITIPopup';
import AdmissionBooking from './components/AdmissionBooking';
import VocationalPopup from './components/VocationalPopup';
import ConsultationPopup from './components/ConsultationPopup';
import AssistancePopup from './components/AssistancePopup';
import DeveloperPopup from './components/DeveloperPopup';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative overflow-x-hidden">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <AIReceptionist />
        <ITIPopup />
        <AdmissionBooking />
        <VocationalPopup />
        <ConsultationPopup />
        <AssistancePopup />
        <DeveloperPopup />
      </div>
    </Router>
  );
}

export default App;
