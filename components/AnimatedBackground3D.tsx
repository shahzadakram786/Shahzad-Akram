"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createOrb = () => {
      const orb = document.createElement("div")
      const size = Math.random() * 300 + 100
      const duration = Math.random() * 20 + 20
      const delay = Math.random() * 5

      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        filter: blur(40px);
        animation: float-orb ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
      `

      const x = Math.random() * 100
      const y = Math.random() * 100

      orb.style.left = `${x}%`
      orb.style.top = `${y}%`

      container.appendChild(orb)
    }

    // Create multiple orbs
    for (let i = 0; i < 5; i++) {
      createOrb()
    }

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
      }}
    >
      <style>{`
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -30px); }
          50% { transform: translate(-20px, 20px); }
          75% { transform: translate(20px, 30px); }
        }
      `}</style>
    </div>
  )
}
