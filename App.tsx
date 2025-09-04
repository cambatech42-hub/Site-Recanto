import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import GuestGuidePage from './components/GuestGuidePage';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-background-beige text-dark-text font-sans antialiased">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/guest-guide" element={<GuestGuidePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;