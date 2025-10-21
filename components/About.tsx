import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Zap } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Exploring cutting-edge technologies and creative solutions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing for speed, efficiency, and user experience"
    }
  ]

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
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
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A passionate Front-End Developer dedicated to building exceptional
            digital experiences with modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="text-primary mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-display text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
        >
          <p className="text-base text-gray-300 leading-relaxed">
            With a strong foundation in modern web technologies, I specialize in creating
            performant, accessible, and visually stunning applications. My approach combines
            technical expertise with creative problem-solving to deliver solutions that exceed expectations.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mt-4">
            I'm constantly learning and adapting to new technologies, always seeking to push
            the boundaries of what's possible on the web.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
