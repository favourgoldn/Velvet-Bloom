import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Memberships', path: '/memberships' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md py-4 shadow-sm border-beige'
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-serif text-ivory text-xl italic leading-none group-hover:scale-110 transition-transform">V</span>
            </div>
            <span className={`font-serif text-2xl tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-primary md:text-ivory'}`}>
              Velvet Bloom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm tracking-wide uppercase transition-colors hover:text-champagne ${
                    isActive
                      ? 'text-champagne font-medium'
                      : scrolled ? 'text-charcoal' : 'text-ivory/90'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/book"
              className={`px-6 py-2.5 rounded-sm font-medium tracking-wide uppercase text-sm transition-all ${
                scrolled
                  ? 'bg-primary text-ivory hover:bg-primary/90'
                  : 'bg-ivory text-primary hover:bg-ivory/90'
              }`}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X className={scrolled || isOpen ? "text-primary" : "text-ivory"} />
            ) : (
              <Menu className={scrolled ? "text-primary" : "text-ivory"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-ivory border-b border-beige shadow-lg md:hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-serif tracking-wide transition-colors ${
                      isActive ? 'text-champagne' : 'text-charcoal hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-beige mt-2">
                <Link
                  to="/book"
                  className="flex justify-center w-full bg-primary text-ivory px-6 py-3 rounded-sm font-medium tracking-wide uppercase text-sm transition-all hover:bg-primary/90"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
