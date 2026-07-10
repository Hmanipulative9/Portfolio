import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Computer Network Project Lead',
    company: 'University & Lab Projects',
    period: '2022 – Present',
    description: 'Leading the design, configuration, and implementation of network architectures, routing protocols, and secure device configurations.'
  },
  {
    role: 'Threat Detection Documentation',
    company: 'Cybersecurity Research & Labs',
    period: '2023 – Present',
    description: 'Documenting network security logs, analyzing traffic behaviors, and outlining incident response protocols for threat detection.'
  },
  {
    role: 'Graphic Design Enthusiast',
    company: 'Community Work',
    period: '2019 – 2021',
    description: 'Started creative journey with community-based design and branding.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <p className="text-accent font-bold tracking-widest uppercase text-xs mb-4">06 / Experience</p>
            <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tighter">
              Where I've <br /> <span className="text-accent">Worked</span>
            </h2>
          </div>

          <div className="md:w-2/3 space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl glass hover:border-accent/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{exp.role}</h3>
                    <p className="text-gray-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-500 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
