"use client"

import dynamic from 'next/dynamic'
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import MatrixBackground from "@/components/MatrixBackground"
import AnimatedBackground3D from "@/components/AnimatedBackground3D"

// Dynamically import Scene3D to improve initial load performance
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false })

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <AnimatedBackground3D />
      <Scene3D />

      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />

        <footer className="relative py-8 px-6 border-t border-purple-500/20 bg-slate-900/50 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
            <p className="text-gray-400 text-sm sm:text-base font-mono">© 2025 Shahzad Akram. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
