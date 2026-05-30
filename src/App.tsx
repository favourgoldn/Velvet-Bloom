/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomCTA } from './components/layout/MobileBottomCTA';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Memberships from './pages/Memberships';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-ivory text-charcoal pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback routes for unbuilt pages */}
            <Route path="/gallery" element={<div className="pt-32 pb-16 text-center text-2xl font-serif text-primary">Gallery coming soon</div>} />
            <Route path="/gift-cards" element={<div className="pt-32 pb-16 text-center text-2xl font-serif text-primary">Gift Cards coming soon</div>} />
            <Route path="/book" element={<div className="pt-32 pb-16 text-center text-2xl font-serif text-primary">Booking funnel coming soon</div>} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomCTA />
      </div>
    </Router>
  );
}
