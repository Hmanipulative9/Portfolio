import { motion } from 'motion/react';
import { CheckCircle2, Terminal, Server, Database, Wrench, Shield, Network } from 'lucide-react';

const skillCategories = [
  {
    title: 'Networking & Security',
    icon: Network,
    skills: [
      'TCP/IP',
      'OSI Model',
      'IPv4/IPv6',
      'Subnetting',
      'VLANs',
      'Routing',
      'Switching',
      'DNS',
      'DHCP',
      'VPN',
      'Network Security',
      'Firewall',
      'Linux'
    ]
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: [
      'Security Fundamentals',
      'Incident Response',
      'Log Analysis',
      'SIEM tools',
      'EDR',
      'Threat Detection'
    ]
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Cisco Packet Tracer', 'Git & GitHub']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['Oracle', 'MySQL']
  },
  {
    title: 'Programming Languages',
    icon: Terminal,
    skills: ['Python', 'Java', 'C#', 'C', 'C++', 'JavaScript', 'PHP']
  },
  {
    title: 'Backend & Frameworks',
    icon: Server,
    skills: ['.NET', 'React']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent font-bold tracking-widest uppercase text-xs mb-4">03 / Skills</p>
          <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tighter">
            My <span className="text-accent">Toolkit</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass group hover:border-accent/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <category.icon size={120} />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group/item">
                    <CheckCircle2 size={16} className="text-accent/40 group-hover/item:text-accent transition-colors" />
                    <span className="text-gray-400 group-hover/item:text-white transition-colors text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
