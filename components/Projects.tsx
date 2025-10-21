import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'

interface Project {
  name: string
  description: string
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string
  topics: string[]
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/shahzadakram786/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching projects:', error)
        setLoading(false)
      })
  }, [])

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
            A showcase of my recent work and open-source contributions
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 h-64 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold font-display text-gray-100 line-clamp-1">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500 flex-shrink-0">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{project.stargazers_count}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-3 flex-grow line-clamp-2">
                  {project.description || 'No description available'}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.language && (
                    <span className="px-2.5 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                      {project.language}
                    </span>
                  )}
                  {project.topics?.slice(0, 2).map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

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
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
