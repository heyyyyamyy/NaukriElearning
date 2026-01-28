import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import About from './pages/About';
import Enterprise from './pages/Enterprise';
import CertificationProcess from './pages/CertificationProcess';
import HelpCenter from './pages/HelpCenter';
import Careers from './pages/Careers';
import Blog from './pages/Blog';

// Scroll to top and trigger animations helper
const ScrollAndAnimationHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer to trigger animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // For cards or steps, we might want to keep the observer active or disconnect
          // observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    // Initial timeout to ensure DOM is rendered (especially after route change)
    const timeoutId = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollAndAnimationHandler />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/process" element={<CertificationProcess />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;