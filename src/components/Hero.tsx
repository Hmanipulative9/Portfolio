import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.9] mb-6 tracking-tighter">
            Hasnayen <br />
            <span className="text-accent">Bin Emrun</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 font-light leading-relaxed">
            Computer Engineer <span className="text-white/20 mx-2">|</span> Cybersecurity & Networking Enthusiast <span className="text-white/20 mx-2">|</span> Web Developer <span className="text-white/20 mx-2">|</span> Graphic Designer
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-black font-bold rounded-full flex items-center gap-2 hover:bg-accent/90 transition-colors"
            >
              View Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              Contact Me <Mail size={20} />
            </motion.a>
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[3/4] max-w-md mx-auto md:ml-auto"
        >
          <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl animate-pulse" />
          <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 group">
            <img
              src="/profile.png"
              alt="Hasnayen Bin Emrun"
              className="w-full h-full object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl">
              <p className="text-xs text-accent font-bold tracking-widest uppercase mb-1">Hasnayen</p>
              <p className="text-sm text-white/80 leading-relaxed">Tech-savvy computer engineer and creative designer, delivering secure, efficient, and visually compelling digital solutions</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl" />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
