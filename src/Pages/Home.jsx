import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, MapPin, Anchor, Waves, Coffee, Utensils, Ship, Camera, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      title: 'Luxury Suite',
      desc: '2 Guests, 1 Master Bedroom, Private Balcony',
      price: 'From ₹ 12,500',
      img: 'https://images.unsplash.com/photo-1593417033920-3c04818ee8a8?auto=format&fit=crop&q=60&w=800&fm=webp'
    },
    {
      title: 'Premium Family',
      desc: '6 Guests, 3 Bedrooms, Upper Deck Lounge',
      price: 'From ₹ 18,500',
      img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=60&w=800&fm=webp'
    },
    {
      title: 'Grand Event Vessel',
      desc: 'Up to 100 Guests, Banquet Hall, Open Deck',
      price: 'Contact for Quote',
      img: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=60&w=800&fm=webp'
    }
  ];

  const features = [
    { icon: <Coffee size={24} />, name: 'Rooftop Lounges' },
    { icon: <Waves size={24} />, name: 'Jacuzzi Suites' },
    { icon: <Anchor size={24} />, name: 'Private Cruises' },
    { icon: <Utensils size={24} />, name: 'Gourmet Dining' },
  ];

  return (
    <div className="bg-[#FDFCFB] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=70&w=1600&fm=webp" 
            alt="Kerala Backwaters" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/70" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl mt-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-gold-400 font-medium tracking-[0.4em] uppercase text-xs mb-8 drop-shadow-md"
          >
            The Ultimate Backwater Experience
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-serif mb-10 leading-[1.1] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          >
            Kerala's Backwaters, <br /> <span className="italic font-light">Redefined.</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl mb-12 text-stone-100/95 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            From intimate escapes to grand celebrations, experience the timeless beauty of Alappuzha aboard our curated fleet of luxury houseboats.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link 
              to="/packages" 
              className="bg-gold-500 text-stone-900 px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gold-400 transition-all tracking-widest text-xs uppercase"
            >
              Explore the Fleet <ArrowRight size={16} />
            </Link>
            <a 
              href="https://wa.me/919895123012" 
              className="text-white border-b border-white/30 hover:border-white pb-1 transition-all text-sm tracking-widest uppercase font-medium"
            >
              Private Enquiry
            </a>
          </motion.div>
        </div>
        

      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                   src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=60&w=1000&fm=webp"
                  alt="Houseboat Life" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <span className="text-gold-600 font-bold tracking-[0.3em] uppercase text-xs">Our Philosophy</span>
                <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
                  Where Nature <br /> Meets <span className="italic">Sophistication</span>
                </h2>
              </div>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                JCT HOUSE BOAT is more than just a cruise; it's a journey into the soul of Kerala. We believe in preserving the authentic charm of the backwaters while providing a level of luxury that is unparalleled.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center">
                    <Ship size={24} />
                  </div>
                  <h4 className="font-serif text-xl text-stone-900">Bespoke Fleet</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">Each vessel in our collection is unique, designed for ultimate comfort.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <h4 className="font-serif text-xl text-stone-900">Iconic Routes</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">We navigate the most scenic and secluded paths of Alappuzha.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-32 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-6">
              <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs">The Collection</span>
              <h2 className="text-4xl md:text-6xl font-serif">Our Signature Fleet</h2>
            </div>
            <Link to="/packages" className="group flex items-center gap-4 text-gold-400">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">View All Vessels</span>
              <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center group-hover:bg-gold-400 group-hover:text-stone-900 transition-all">
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-8 relative">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-gold-400 font-bold text-sm mb-2">{cat.price}</p>
                    <h4 className="text-2xl font-serif">{cat.title}</h4>
                  </div>
                </div>
                <p className="text-stone-400 text-sm mb-6 font-light">{cat.desc}</p>
                <div className="w-8 h-px bg-gold-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Curated Moments</h2>
            <div className="w-24 h-px bg-gold-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=60&w=600&fm=webp', title: 'Sunset Dining', tab: 'weddings' },
              { img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=60&w=600&fm=webp', title: 'Luxury Stays', tab: 'weddings' },
              { img: 'https://images.unsplash.com/photo-1593417033942-bcdf26b74700?auto=format&fit=crop&q=60&w=600&fm=webp', title: 'Grand Events', tab: 'corporate' },
              { img: 'https://images.unsplash.com/photo-1597387019303-dad392814837?auto=format&fit=crop&q=60&w=600&fm=webp', title: 'Private Parties', tab: 'parties' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Link to="/services" state={{ activeTab: item.tab }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-serif italic text-xl">{item.title}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex flex-col items-center text-center p-8 rounded-3xl hover:bg-stone-50 transition-colors duration-500 border border-transparent hover:border-stone-100"
              >
                <div className="w-16 h-16 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white group-hover:shadow-xl group-hover:shadow-gold-500/20 transition-all duration-500">
                  {f.icon}
                </div>
                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-stone-900 group-hover:text-gold-600 transition-colors">{f.name}</h4>
                <div className="w-8 h-px bg-gold-200 mt-6 group-hover:w-16 group-hover:bg-gold-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-stone-900 py-24 px-12 text-center">
            <div className="absolute inset-0 opacity-30">
              <img 
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=60&w=1200&fm=webp" 
                alt="CTA Background" 
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Your Journey Begins <br /> <span className="italic">On the Water</span></h2>
              <p className="text-stone-300 text-lg font-light">
                Experience the magic of Kerala's backwaters with JCT HOUSE BOAT. Whether it's a romantic getaway or a grand celebration, we craft experiences that last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <a 
                  href="https://wa.me/919895123012" 
                  className="bg-gold-500 text-stone-900 px-12 py-4 rounded-full font-bold hover:bg-gold-400 transition-all tracking-widest text-xs uppercase"
                >
                  Book on WhatsApp
                </a>
                <Link 
                  to="/packages" 
                  className="border border-white/30 text-white px-12 py-4 rounded-full font-bold hover:bg-white hover:text-stone-900 transition-all tracking-widest text-xs uppercase"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
