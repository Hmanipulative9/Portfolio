import { motion } from 'motion/react';
import { Mail, Linkedin, Github, ArrowUpRight, PenTool } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase text-xs mb-4"
          >
            07 / Contact
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold font-display tracking-tighter mb-8"
          >
            Let's Work <br /> <span className="text-accent">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-12 leading-relaxed"
          >
            Whether you're building a product, launching a brand, or need a technical mind with a design eye — I'm ready. Let's make something worth noticing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <a
              href="mailto:hhasnayen@gmail.com"
              className="group relative px-12 py-6 bg-accent text-black font-bold text-xl rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                hhasnayen@gmail.com <Mail size={24} />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>

            <div className="flex gap-6">
              {[
                { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/hasnayen-bin-emrun-294280319/' },
                { name: 'GitHub', icon: Github, href: 'https://github.com/Hmanipulative9' },
                { name: 'Behance', icon: PenTool, href: 'https://www.behance.net/hasnainbn' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-accent font-bold uppercase tracking-widest text-xs transition-colors group"
                >
                  {social.name} <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 text-[25vw] font-bold font-display text-white/[0.01] select-none pointer-events-none leading-none translate-y-1/2">
        CONTACT
      </div>
    </section>
  );
}
