import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center">
                <span className="font-serif text-primary text-2xl italic leading-none">V</span>
              </div>
              <span className="font-serif text-3xl tracking-tight text-ivory">
                Velvet Bloom
              </span>
            </Link>
            <p className="text-ivory/80 text-sm leading-relaxed max-w-sm">
              Luxury wellness experiences designed to restore your mind, body & glow. A tranquil sanctuary created for complete rejuvenation.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory hover:bg-ivory hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory hover:bg-ivory hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory hover:bg-ivory hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-champagne">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-ivory/80 hover:text-ivory transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-ivory/80 hover:text-ivory transition-colors">Our Services</Link></li>
              <li><Link to="/memberships" className="text-ivory/80 hover:text-ivory transition-colors">Memberships</Link></li>
              <li><Link to="/gift-cards" className="text-ivory/80 hover:text-ivory transition-colors">Gift Cards</Link></li>
              <li><Link to="/gallery" className="text-ivory/80 hover:text-ivory transition-colors">Spa Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-champagne">Contact</h3>
            <ul className="space-y-4 text-ivory/80">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-champagne" />
                <span>123 Serenity Boulevard<br />Wellness District, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-champagne" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-champagne" />
                <span>hello@velvetbloomspa.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-champagne">Hours</h3>
            <ul className="space-y-2 text-ivory/80">
              <li className="flex justify-between border-b border-ivory/10 pb-2">
                <span>Mon - Fri</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-ivory/10 pb-2 pt-2">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sunday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/book" className="inline-block w-full bg-champagne text-primary text-center px-6 py-3 rounded-sm font-medium tracking-wide uppercase text-sm hover:bg-gold transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ivory/60">
          <p>&copy; {new Date().getFullYear()} Velvet Bloom Spa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-ivory">Privacy Policy</Link>
            <Link to="#" className="hover:text-ivory">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
