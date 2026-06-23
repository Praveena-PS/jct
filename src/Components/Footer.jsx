import { Ship, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5 space-y-10">
            <Link to="/" className="flex flex-col group">
              <span className="text-2xl font-serif font-bold tracking-[0.1em]">JCT HOUSE BOAT</span>
            </Link>
            <p className="text-stone-400 text-lg font-light leading-relaxed max-w-md">
              Crafting timeless memories on the emerald waters of Kerala. Experience the pinnacle of backwater luxury with JCT HOUSE BOAT.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-stone-500 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-500 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-500 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gold-500">Navigation</h4>
            <ul className="space-y-4 text-stone-400 font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">Packages</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gold-500">Contact</h4>
            <ul className="space-y-6 text-stone-400 font-light">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-1" />
                <span className="leading-relaxed">Parambil House, Zilla Court Ward, Thathampally PO, Alappuzha- 688013</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <span>+91 98951 23012</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <span>contact@jcthouseboat.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-8 text-stone-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2024 JCT HOUSE BOAT. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
