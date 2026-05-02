"use client"

import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  name: string
  description: string
  liveUrl: string
  tags: string[]
  color: string
}

const projects: Project[] = [
  {
    name: 'Dynamics Total Wellness',
    description:
      'A comprehensive wellness platform offering holistic health services, therapy, and personal development resources for a healthier lifestyle.',
    liveUrl: 'https://www.dynamicstotalwellness.com/',
    tags: ['Next.js', 'Wellness', 'Healthcare'],
    color: 'from-purple-500/30 to-cyan-500/30',
  },
  {
    name: 'Guillaume Counselling',
    description:
      'Professional counselling and mental health services website offering therapy sessions, support resources, and appointment booking.',
    liveUrl: 'https://www.guillaumecounseling.com/',
    tags: ['Next.js', 'Counselling', 'Mental Health'],
    color: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    name: 'Free Tools Hub',
    description:
      'A feature-rich hub of free online tools for developers, marketers, and everyday users — boosting productivity with zero cost.',
    liveUrl: 'https://www.freetoolshub.dev/',
    tags: ['Next.js', 'SEO', 'Web Tools'],
    color: 'from-emerald-500/30 to-cyan-500/30',
  },
  {
    name: 'DealerBet Pro',
    description:
      'A modern betting and dealer analytics platform delivering real-time insights, live odds, and professional-grade tools for bettors.',
    liveUrl: 'https://www.dealerbetpro.live/',
    tags: ['Next.js', 'Analytics', 'Live Platform'],
    color: 'from-orange-500/30 to-pink-500/30',
  },
  {
    name: 'Happy GB Mountain Food',
    description:
      'A vibrant food platform showcasing the delicious cuisine and culinary culture of the Gilgit-Baltistan mountain region of Pakistan.',
    liveUrl: 'https://happy-gb-mountain-foods01.vercel.app/',
    tags: ['Next.js', 'Food', 'E-Commerce'],
    color: 'from-yellow-500/30 to-orange-500/30',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my currently live projects — built and deployed for real-world use
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6" style={{ perspective: 1000 }}>
          {projects.map((project, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const ref = useRef<HTMLDivElement>(null);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const x = useMotionValue(0);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useMotionValue(0);

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              if (!ref.current) return;
              const rect = ref.current.getBoundingClientRect();
              const width = rect.width;
              const height = rect.height;
              const mouseX = e.clientX - rect.left;
              const mouseY = e.clientY - rect.top;
              const xPct = mouseX / width - 0.5;
              const yPct = mouseY / height - 0.5;
              x.set(xPct);
              y.set(yPct);
            };

            const handleMouseLeave = () => {
              x.set(0);
              y.set(0);
            };

            return (
              <motion.div
                key={project.name}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative group cursor-pointer"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{ transform: "translateZ(-50px)" }}
                />

                <div 
                  className="relative bg-slate-900/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col"
                  style={{ transform: "translateZ(50px)" }}
                >
                  {/* Live badge */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold font-display text-gray-100">
                      {project.name}
                    </h3>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex-shrink-0 ml-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/40 hover:to-cyan-500/40 border border-purple-500/30 hover:border-cyan-500/50 rounded-lg text-sm font-medium text-gray-200 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Site
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/shahzadakram786"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all duration-300 font-medium text-primary"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
