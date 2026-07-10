import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise DHCP & L3 Switching Infrastructure',
    category: 'Network Design',
    description: 'Designed and configured Layer 3 switch-based network segmentation with dynamic IP allocation (DHCP) across multiple department VLANs (HR, IT, and Clients).',
    image: 'https://raw.githubusercontent.com/Hmanipulative9/Network-Infrastructure-Labs/main/DHCP%20using%20switch/dhcp-using-switch-topology.png',
    tags: ['VLANs', 'DHCP Services', 'L3 Switching', 'Packet Tracer'],
    link: 'https://github.com/Hmanipulative9/Network-Infrastructure-Labs/tree/main/DHCP%20using%20switch',
    github: 'https://github.com/Hmanipulative9/Network-Infrastructure-Labs/tree/main/DHCP%20using%20switch'
  },
  {
    title: 'Inter-VLAN Routing via Router-on-a-Stick (ROAS)',
    category: 'Network Design',
    description: 'Implemented a switched network infrastructure providing VLAN-based traffic segmentation for distinct departments, utilizing sub-interfaces and IEEE 802.1Q encapsulation on a single physical link.',
    image: 'https://raw.githubusercontent.com/Hmanipulative9/Network-Infrastructure-Labs/main/Router%20on%20a%20stick/router-on-a-stick-topology.png',
    tags: ['802.1Q Trunking', 'ROAS', 'Inter-VLAN Routing', 'Cisco IOS'],
    link: 'https://github.com/Hmanipulative9/Network-Infrastructure-Labs/tree/main/Router%20on%20a%20stick',
    github: 'https://github.com/Hmanipulative9/Network-Infrastructure-Labs/tree/main/Router%20on%20a%20stick'
  },
  {
    title: 'Secure Switch & Router Management via SSH',
    category: 'Network Design',
    description: 'Established encrypted management access (SSH) for network devices, creating local user authentication databases and disabling insecure virtual terminal line protocols (Telnet).',
    image: 'https://picsum.photos/seed/ssh-network/800/600',
    tags: ['SSH Administration', 'Device Security', 'VTY Line Protection', 'Cisco IOS'],
    link: 'https://github.com/Hmanipulative9/Network-Infrastructure-Labs/blob/main/raw_labs/ssh%20protocol%20implimented.pkt',
    github: 'https://github.com/Hmanipulative9/Network-Infrastructure-Labs/blob/main/raw_labs/ssh%20protocol%20implimented.pkt'
  },
  {
    title: 'Switch Virtual Interface (SVI) Gateway Deployment',
    category: 'Network Design',
    description: 'Configured Switch Virtual Interfaces (SVIs) to serve as logical management interfaces for Layer 2 switches, enabling remote administrative access and secure host routing.',
    image: 'https://picsum.photos/seed/svi-gateway/800/600',
    tags: ['SVI Gateway', 'Management IP', 'L2 Switching', 'Cisco IOS'],
    link: 'https://github.com/Hmanipulative9/Network-Infrastructure-Labs/tree/main/raw_labs/Switch%20Virtual%20Interface',
    github: 'https://github.com/Hmanipulative9/Network-Infrastructure-Labs/tree/main/raw_labs/Switch%20Virtual%20Interface'
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-bold tracking-widest uppercase text-xs mb-4">05 / Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tighter mb-8">
            Network <span className="text-accent">Design</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden glass border-white/5 hover:border-accent/30 transition-all duration-500"
              >
                <a 
                  href={project.link} 
                  target={project.link !== '#' ? '_blank' : undefined}
                  rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                  className="block aspect-[16/10] overflow-hidden group/image"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </a>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                        <a href={project.link} target={project.link !== '#' ? '_blank' : undefined} rel={project.link !== '#' ? 'noopener noreferrer' : undefined}>
                          {project.title}
                        </a>
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-3 text-white">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target={project.github !== '#' ? '_blank' : undefined}
                          rel={project.github !== '#' ? 'noopener noreferrer' : undefined}
                          className="p-2 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-all"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      <a 
                        href={project.link} 
                        target={project.link !== '#' ? '_blank' : undefined}
                        rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                        className="p-2 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
