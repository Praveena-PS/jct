import { motion } from 'framer-motion';
import { Camera, MapPin, Star } from 'lucide-react';

const Gallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=50&w=800&fm=webp', title: 'Alleppey Sunrise', category: 'Backwaters' },
    { url: 'https://images.unsplash.com/photo-1593417034675-3ed7eda1bee9?auto=format&fit=crop&q=50&w=800&fm=webp', title: 'Luxury Houseboat', category: 'Exterior' },
    { url: 'https://images.unsplash.com/photo-1597387019303-dad392814837?auto=format&fit=crop&q=50&w=800&fm=webp', title: 'Peaceful Canal', category: 'Backwaters' },
    { url: 'https://images.unsplash.com/photo-1582208942219-40e14015694c?auto=format&fit=crop&q=50&w=800&fm=webp', title: 'Traditional Boat', category: 'Spaces' },
    { url: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=50&w=800&fm=webp', title: 'Lush Greenery', category: 'Nature' },
    { url: 'https://images.unsplash.com/photo-1593417033942-bcdf26b74700?auto=format&fit=crop&q=50&w=800&fm=webp', title: 'Sunset Glow', category: 'Backwaters' },
    { url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=50&w=800&fm=webp', title: 'Wedding Mood', category: 'Weddings' },
    { url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=50&w=800&fm=webp', title: 'Premium Stay', category: 'Interior' },
    { url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=50&w=800&fm=webp', title: 'Quiet Waters', category: 'Spaces' }
  ];

  return (
    <div className="bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=70&w=1600&fm=webp" 
            alt="Gallery" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.5em] mb-6 block font-medium text-gold-400"
          >
            Visual Journey
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif italic mb-4"
          >
            Our <span className="not-italic font-bold">Gallery</span>
          </motion.h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-xl break-inside-avoid"
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-gold-400 text-[10px] uppercase tracking-widest font-bold mb-2">{img.category}</span>
                  <h4 className="text-white text-2xl font-serif italic">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-32 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <Camera className="text-gold-500 mx-auto mb-8" size={40} />
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Capturing the Essence of Kerala</h2>
          <p className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Every corner of our vessels is designed to be a frame-worthy moment. From the morning mist to the golden sunsets, witness the beauty of Alleppey through our lens.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
