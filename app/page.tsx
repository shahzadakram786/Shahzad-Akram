"use client"

import Scene3D from "@/components/Scene3D"
import MatrixBackground from "@/components/MatrixBackground"
import AnimatedBackground3D from "@/components/AnimatedBackground3D"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
// import { Download } from "lucide-react"
import { useState } from "react"

export default function Home() {
  // const [isDownloading, setIsDownloading] = useState(false)

  // const handleDownload = async () => {
  //   setIsDownloading(true)
  //   try {
  //     const response = await fetch("/api/download")
  //     const blob = await response.blob()
  //     const url = window.URL.createObjectURL(blob)
  //     const a = document.createElement("a")
  //     a.href = url
  //     a.download = "portfolio.zip"
  //     document.body.appendChild(a)
  //     a.click()
  //     window.URL.revokeObjectURL(url)
  //     document.body.removeChild(a)
  //   } catch (error) {
  //     console.error("Download failed:", error)
  //   } finally {
  //     setIsDownloading(false)
  //   }
  // }

  return (
    <div className="relative min-h-screen ">
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
            {/* <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/40 hover:to-cyan-500/40 text-purple-300 hover:text-cyan-300 border border-purple-500/30 rounded-lg text-sm font-medium transition-all duration-300 hover:border-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/20"
              title="Download the entire portfolio as a ZIP file so you can customize and use it"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">{isDownloading ? "Downloading..." : "Download Portfolio"}</span>
              <span className="sm:hidden">{isDownloading ? "Downloading..." : "Download"}</span>
            </button> */}
          </div>
        </footer>
      </div>
    </div>
  )
}
