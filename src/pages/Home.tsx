import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, CheckCircle, ArrowRight, ShieldCheck, Leaf, Sparkles, Clock, CalendarDays } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    title: 'Signature Massages',
    desc: 'Relieve tension and restore balance with our customized full-body massage therapies.',
    duration: '60 - 90 Min',
    price: 'From $120',
    img: 'https://images.unsplash.com/photo-1600334129128-68505411082c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Luxury Facials',
    desc: 'Rejuvenate your skin with medical-grade products tailored to your unique complexion.',
    duration: '60 Min',
    price: 'From $140',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Body Rituals',
    desc: 'Exfoliating scrubs and hydrating wraps leaving your skin smooth and radiant.',
    duration: '75 Min',
    price: 'From $160',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Couples Retreats',
    desc: 'Share a moment of pure tranquility with our side-by-side massage experiences.',
    duration: '90 - 120 Min',
    price: 'From $280',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-ivory selection:bg-champagne/30 selection:text-primary">
      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: yImage }}>
          <div className="absolute inset-0 bg-primary/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Spa Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <span className="text-champagne tracking-[0.2em] uppercase text-sm font-medium mb-6 block">Welcome to Your Sanctuary</span>
            <h1 className="text-5xl md:text-7xl font-serif text-ivory mb-6 leading-tight">
              Luxury Wellness Experiences <br className="hidden md:block"/> Designed To Restore Your Glow
            </h1>
            <p className="text-lg md:text-xl text-ivory/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Personalized treatments, expert therapists, and a tranquil sanctuary created for complete rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book" className="w-full sm:w-auto px-8 py-4 bg-champagne text-primary font-medium uppercase tracking-wide text-sm hover:bg-gold transition-colors block text-center min-w-[200px]">
                Book Appointment
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-ivory text-ivory font-medium uppercase tracking-wide text-sm hover:bg-ivory hover:text-primary transition-colors block text-center min-w-[200px]">
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-ivory/80 text-sm"
          >
            <div className="flex items-center gap-2"><div className="flex text-champagne"><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/></div> <span>5.0 / 5.0 Rating</span></div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-ivory/50"></div>
            <span>Certified Therapists</span>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-ivory/50"></div>
            <span>Thousands of Happy Clients</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary/60 tracking-widest uppercase text-sm font-medium mb-3 block">Our Treatments</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Featured Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-serif text-primary mb-3">{service.title}</h3>
              <p className="text-charcoal/70 text-sm mb-4 leading-relaxed font-light">{service.desc}</p>
              <div className="flex items-center justify-between border-t border-charcoal/10 pt-4">
                <div className="text-xs text-charcoal/60 uppercase tracking-wider flex flex-col gap-1">
                  <span>{service.duration}</span>
                  <span className="font-medium text-primary">{service.price}</span>
                </div>
                <button className="text-primary group-hover:text-champagne transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/services" className="inline-block border-b border-primary text-primary hover:text-champagne hover:border-champagne transition-colors uppercase tracking-widest text-sm pb-1">
            View All Services
          </Link>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="bg-primary text-ivory py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-champagne tracking-widest uppercase text-sm font-medium mb-3 block">The Velvet Bloom Difference</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Expert care in a<br/>relaxing environment.</h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-champagne/30 flex items-center justify-center shrink-0 text-champagne pt-1">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-champagne">Expert Professionals</h4>
                    <p className="text-ivory/70 text-sm leading-relaxed font-light">Licensed specialists with advanced training dedicated to your wellbeing and specific needs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-champagne/30 flex items-center justify-center shrink-0 text-champagne pt-1">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-champagne">Premium Products</h4>
                    <p className="text-ivory/70 text-sm leading-relaxed font-light">We exclusively use medical-grade and luxury botanical skincare products for optimal results.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-champagne/30 flex items-center justify-center shrink-0 text-champagne pt-1">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-champagne">Proven Results</h4>
                    <p className="text-ivory/70 text-sm leading-relaxed font-light">Experience visible transformations and lasting tranquility long after your session ends.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1544161514-63303d7c3d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Spa Therapist" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-ivory text-primary p-8 hidden md:block max-w-[240px] shadow-xl">
                <div className="text-4xl font-serif mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider font-medium text-charcoal/70">Years of Luxury Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Experience Gallery */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-primary/60 tracking-widest uppercase text-sm font-medium mb-3 block">Discover Unmatched Tranquility</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary">The Spa Experience</h2>
            </div>
            <Link to="/gallery" className="inline-block border-b border-primary text-primary hover:text-champagne hover:border-champagne transition-colors uppercase tracking-widest text-sm pb-1">
              View Full Gallery
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 aspect-[16/9] md:aspect-auto overflow-hidden">
              <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Relaxation Lounge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Treatment Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Luxury Products" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Results & Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
         <span className="text-primary/60 tracking-widest uppercase text-sm font-medium mb-3 block">Client Stories</span>
         <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16">Stories of Relaxation</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div key={item} whileHover={{ y: -5 }} className="bg-white p-8 md:p-10 shadow-sm border border-charcoal/5">
                <div className="flex justify-center text-champagne mb-6">
                  <Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/>
                </div>
                <p className="text-charcoal/80 font-serif italic text-lg leading-relaxed mb-6">
                  "{['The most incredible facial I have ever received. The attention to detail and luxury atmosphere made me feel like royalty.', 'A true sanctuary in the city. The deep tissue massage melt away months of corporate stress. I am now a monthly member!', 'My bridal party spent the day here before my wedding. The staff accommodated us perfectly and our skin was absolutely glowing.'][item-1]}"
                </p>
                <div className="text-sm font-medium text-primary uppercase tracking-wide">— {['Sarah Jenkins', 'Michael T.', 'Emily R.'][item-1]}</div>
              </motion.div>
            ))}
         </div>
         
         <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-charcoal/10 pt-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif text-primary mb-2">4.9</span>
              <span className="text-xs uppercase tracking-widest text-charcoal/60">Average Rating</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-4xl font-serif text-primary mb-2">5k+</span>
              <span className="text-xs uppercase tracking-widest text-charcoal/60">Happy Clients</span>
            </div>
             <div className="flex flex-col items-center">
               <span className="text-4xl font-serif text-primary mb-2">80%</span>
              <span className="text-xs uppercase tracking-widest text-charcoal/60">Return Rate</span>
            </div>
         </div>
      </section>

      {/* 6. Membership Program Highlight */}
      <section className="bg-ivory py-24 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-ivory rounded-sm overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-4xl font-serif mb-6">The Velvet Bloom<br className="hidden md:block"/> Reserve Membership</h2>
              <p className="text-ivory/80 leading-relaxed font-light mb-8 max-w-md">
                Commit to your wellness with our exclusive membership program. Enjoy monthly treatments, priority booking, and VIP perks.
              </p>
              <ul className="space-y-4 mb-10 text-sm font-light">
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-champagne"/> One 60-min signature massage or facial monthly</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-champagne"/> 15% off all additional treatments</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-champagne"/> Exclusive member-only events and gifts</li>
              </ul>
              <div>
                <Link to="/memberships" className="inline-block px-8 py-4 border border-champagne text-champagne font-medium uppercase tracking-wide text-sm hover:bg-champagne hover:text-primary transition-colors">
                  View Plans & Programs
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Spa Membership" className="w-full h-full object-cover min-h-[400px]" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Booking CTA */}
      <section className="py-32 relative text-center">
        <div className="absolute inset-0 bg-sage/10 -z-10"></div>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Your Wellness Journey Starts Today</h2>
          <p className="text-charcoal/70 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
            Appointments available this week. Step into our sanctuary and let the stress of the outside world melt away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book" className="px-10 py-4 bg-primary text-ivory font-medium uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <CalendarDays size={18}/>
              Book Appointment
            </Link>
            <a href="tel:+15551234567" className="px-10 py-4 border border-primary text-primary font-medium uppercase tracking-wide text-sm hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
              <Clock size={18}/>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
