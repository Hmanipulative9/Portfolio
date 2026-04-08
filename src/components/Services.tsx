import { motion } from 'motion/react';
import { Layout, Share2, Image as ImageIcon, Shield, Network } from 'lucide-react';

const services = [
  {
    title: 'Brand Design',
    description: 'Logo creation, identity development, and brand guidelines that tell your story.',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Social Media Design',
    description: 'Engaging post designs and marketing visuals tailored for your audience.',
    icon: Share2,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Poster Design',
    description: 'Eye-catching event posters and promotional materials that grab attention.',
    icon: ImageIcon,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Network Security',
    description: 'Fundamental networking setup and cybersecurity awareness for digital assets.',
    icon: Shield,
    color: 'from-green-500 to-emerald-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <p className="text-accent font-bold tracking-widest uppercase text-xs mb-4">04 / Services</p>
            <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tighter">
              What I <span className="text-accent">Offer</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Specialized solutions at the intersection of creative design and technical engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="mb-6 text-gray-400 group-hover:text-accent transition-colors">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Learn More <div className="w-8 h-px bg-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
