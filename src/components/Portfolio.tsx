import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = {
  software: [
    {
      title: 'Memory Assistant Notebook',
      category: 'Software',
      description: 'A robust web application for note-taking and memory organization.',
      image: `${import.meta.env.BASE_URL}memory_assistant.png`,
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      link: 'https://memory-assistant-notebook.vercel.app/dashboard',
      github: '#'
    },
    {
      title: 'Bus Reservation System',
      category: 'Software',
      description: 'Java academic project for bus ticket booking system',
      image: 'https://picsum.photos/seed/bus/800/600',
      tags: ['Java', 'OOP'],
      link: '#',
      github: '#'
    },
    {
      title: 'Student Notes Portal system',
      category: 'Software',
      description: 'A web-based Student Notes Portal that allows students to easily access and download lecture notes for their courses. It offers a user-friendly interface and efficient database management for organized note retrieval.',
      image: `${import.meta.env.BASE_URL}student_notes.png`,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'Pet home takecare center system',
      category: 'Software',
      description: 'MySQL-based academic project for managing system of taking care of pet center.',
      image: `${import.meta.env.BASE_URL}pet_home_gate.png`,
      tags: ['MySQL', 'Database design'],
      link: '#',
      github: '#'
    }
  ],
  design: [
    {
      title: 'Personal Brand Identity',
      category: 'Design',
      description: 'Complete logo and visual identity system for a modern creative brand.',
      image: 'https://picsum.photos/seed/brand/800/600',
      tags: ['Logo', 'Branding', 'Illustrator'],
      link: '#'
    },
    {
      title: 'Photography Branding',
      category: 'Design',
      description: 'Creative visual branding using photography-based assets for a lifestyle brand.',
      image: 'https://picsum.photos/seed/photo/800/600',
      tags: ['Photography', 'Photoshop', 'Social Media'],
      link: '#'
    }
  ]
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'software' | 'design'>('software');

  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-bold tracking-widest uppercase text-xs mb-4">05 / Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tighter mb-8">
            Selected <span className="text-accent">Work</span>
          </h2>

          <div className="flex justify-center gap-4">
            {(['software', 'design'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab
                    ? 'bg-accent text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {tab} Projects
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {projects[activeTab].map((project, i) => (
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
