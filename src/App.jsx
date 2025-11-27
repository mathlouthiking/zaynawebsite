import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OwnerFeatures from './components/OwnerFeatures';
import AppFeatures from './components/AppFeatures';
import SalonOwners from './components/SalonOwners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen bg-white font-sans text-dark selection:bg-accent selection:text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<>
                <Hero />
                <OwnerFeatures />
                <AppFeatures />
                <ContactForm />
              </>} />
              <Route path="/salon-owners" element={<SalonOwners />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
