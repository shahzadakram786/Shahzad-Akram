"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code2 } from "lucide-react"

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Scroll Spy Logic
      const sections = navLinks.map(link => link.path.substring(1))
      let current = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section
            break
          }
        }
      }

      if (current) {
        setActiveSection(`#${current}`)
      } else if (window.scrollY === 0) {
        setActiveSection("#home")
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    if (path === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const element = document.getElementById(path.substring(1))
    if (element) {
      // Offset for fixed navbar
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-colors border border-purple-500/30">
            <Code2 className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">SA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-1 p-1 bg-slate-800/50 backdrop-blur-md border border-purple-500/20 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.path
              return (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors inline-block ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-bg"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Desktop Resume Button Placeholder */}
        <div className="hidden md:flex justify-end w-[100px]"></div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-purple-500/20 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-white"
                        : "text-gray-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
