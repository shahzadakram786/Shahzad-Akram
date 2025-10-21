import { motion } from 'framer-motion'
import { Github, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-2xl opacity-40" />
              <img
                src="https://avatars.githubusercontent.com/u/91377989?v=4"
                alt="Shahzad Akram"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/30"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 font-display"
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Shahzad Akram
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-3 font-display"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Front-End Developer
            </motion.p>
            
            <motion.p
              className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting responsive, user-friendly interfaces with a focus on performance, accessibility and clean code
            </motion.p>
          
            <motion.div
              className="flex gap-4 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="https://github.com/shahzadakram786"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all duration-300"
              >
                <Github className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">GitHub</span>
              </a>
              
              <a
                href="mailto:contact@example.com"
                className="group flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-accent font-medium">Contact</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-16"
        >
          <a
            href="#about"
            className="inline-block text-gray-400 hover:text-primary transition-colors animate-bounce"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
