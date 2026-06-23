import { Home, Ship, Heart, Briefcase, PartyPopper, Package, Phone, Instagram, Facebook, Twitter, Camera, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Services', path: '/services', icon: <Sparkles size={20} /> },
    { name: 'Packages', path: '/packages', icon: <Package size={20} /> },
    { name: 'Gallery', path: '/gallery', icon: <Camera size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 border-b backdrop-blur-md ${
        isScrolled ? 'bg-stone-900/95 py-2 shadow-2xl border-white/10' : 'bg-stone-900/40 py-4 border-transparent hover:bg-stone-900/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center group text-center">
          <span className={`text-xl md:text-2xl font-serif font-bold tracking-[0.1em] transition-colors text-white`}>
            JCT HOUSE BOAT
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all hover:opacity-50 relative group ${
                location.pathname === link.path 
                  ? 'text-white' 
                  : (isScrolled ? 'text-white/90' : 'text-white/80')
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-current transition-all group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
            </Link>
          ))}
          <a 
            href="https://wa.me/919895123012" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded-none text-[10px] uppercase tracking-[0.3em] font-bold border transition-all ${
              isScrolled 
                ? 'border-white text-white hover:bg-white hover:text-gold-600' 
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Enquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all bg-white`} />
          <div className={`w-6 h-0.5 mb-1.5 transition-all bg-white`} />
          <div className={`w-6 h-0.5 transition-all bg-white`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-stone-900/95 backdrop-blur-2xl shadow-2xl border-t border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 text-sm uppercase tracking-widest font-medium transition-colors ${
                    location.pathname === link.path ? 'text-gold-400' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="text-white">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/20 my-2" />
              <a 
                href="https://wa.me/919895123012" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-white text-gold-600 py-4 rounded-none text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold-50 transition-colors"
              >
                <WhatsAppIcon size={18} className="text-gold-600" />
                WhatsApp Booking
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
