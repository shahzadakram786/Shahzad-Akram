"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Message sent! Thank you for reaching out.")
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setStatus(""), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/shahzadakram786", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl" />
      </div> */}

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollAnimationWrapper>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Info Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 font-display text-gray-100">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Email</p>
                        <a
                          href="mailto:shahzadakram786@example.com"
                          className="text-gray-200 hover:text-cyan-400 transition-colors break-all font-mono"
                        >
                          shahzadakram786@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg flex-shrink-0">
                        <MapPin className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Location</p>
                        <p className="text-gray-200">Available for remote work worldwide</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-purple-500/20">
                    <p className="text-gray-400 text-sm mb-4">Follow me on social media</p>
                    <div className="flex gap-4">
                      {socialLinks.map((link) => {
                        const Icon = link.icon
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-purple-500/20 hover:bg-cyan-500/20 border border-purple-500/30 hover:border-cyan-500/30 rounded-lg transition-all duration-300 text-purple-400 hover:text-cyan-400"
                            title={link.label}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <form
                onSubmit={handleSubmit}
                className="relative bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-gray-200 placeholder-gray-500 transition-all font-mono"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-gray-200 placeholder-gray-500 transition-all font-mono"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-gray-200 placeholder-gray-500 transition-all resize-none font-mono"
                      placeholder="Your message..."
                    />
                  </div>

                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm font-mono"
                    >
                      {status}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
