import { motion } from 'motion/react';

const education = [
  {
    year: '2022 – Present',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'American International University-Bangladesh (AIUB)',
    description: '11th Semester | CGPA: 3.26',
    status: 'current'
  },
  {
    year: '2020 – 2021',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Rajarbag Police Line School and College',
    description: 'GPA: 4.50 / 5.00',
    status: 'completed'
  },
  {
    year: '2018 – 2019',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Adarsha High School',
    description: 'GPA: 4.61 / 5.00',
    status: 'completed'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent font-bold tracking-widest uppercase text-xs mb-4">02 / Education</p>
          <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tighter">
            Academic <span className="text-accent">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 z-10 hidden md:block" />

                <div className="md:w-1/2">
                  <div className={`p-8 rounded-3xl glass hover:border-accent/30 transition-colors group ${
                    i % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{item.degree}</h3>
                    <p className="text-gray-400 font-medium mb-4">{item.institution}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 text-[15vw] font-bold font-display text-white/[0.01] select-none pointer-events-none leading-none -translate-y-1/2">
        EDUCATION
      </div>
    </section>
  );
}
