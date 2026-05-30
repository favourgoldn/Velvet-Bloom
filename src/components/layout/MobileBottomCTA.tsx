import { CalendarDays, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MobileBottomCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ivory border-t border-beige shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)]">
      <div className="flex h-16">
        <a 
          href="tel:+15551234567"
          className="flex-1 flex flex-col items-center justify-center text-primary/80 hover:bg-primary/5 transition-colors border-r border-beige"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </a>
        <Link 
          to="/book"
          className="flex-[2] flex items-center justify-center bg-primary text-ivory font-medium uppercase tracking-wide text-xs hover:bg-primary/90 transition-colors gap-2"
        >
          <CalendarDays size={18} />
          Book Now
        </Link>
      </div>
    </div>
  );
}
