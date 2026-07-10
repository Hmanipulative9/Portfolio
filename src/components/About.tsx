import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <p className="text-accent font-bold tracking-widest uppercase text-xs mb-4">01 / About</p>
            <h2 className="text-6xl md:text-7xl font-bold font-display leading-none tracking-tighter">
              Who I <br /> <span className="text-accent">Am</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-2/3 space-y-8"
          >
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Passionate about designing, securing, and optimizing modern network infrastructures, with a strong foundation in routing, switching, network segmentation, and secure device management. Experienced in building and troubleshooting network environments involving VLANs, inter-VLAN routing, DHCP services, SSH administration, and network traffic analysis. Adept at identifying connectivity issues, analyzing network behavior, and implementing solutions that improve reliability and performance.
              </p>
              <p>
                Continuously expanding expertise in cybersecurity, security operations, and cloud technologies, with a growing focus on threat detection, incident investigation, SIEM platforms, endpoint security, and enterprise infrastructure. Committed to continuous learning, hands-on experimentation, and staying current with evolving networking and security technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Computer Engineering', 'Cybersecurity', 'Network Security', 'Web Development', 'Graphic Design', 'Brand Identity', 'Social Media Templates'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute -bottom-10 right-0 text-[20vw] font-bold font-display text-white/[0.02] select-none pointer-events-none leading-none">
        ABOUT
      </div>
    </section>
  );
}
