"use client"

import { useEffect, useRef } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fontSizeRef = useRef<number>(14)
  const cssWidthRef = useRef<number>(0)
  const cssHeightRef = useRef<number>(0)
  const dropsRef = useRef<number[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Function to set proper canvas dimensions and update refs
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      const cssW = rect.width
      const cssH = rect.height
      
      // Set backing store size (device pixels)
      canvas.width = cssW * dpr
      canvas.height = cssH * dpr
      
      // Scale context to CSS pixels
      ctx.scale(dpr, dpr)
      
      // Update refs
      cssWidthRef.current = cssW
      cssHeightRef.current = cssH
      fontSizeRef.current = Math.max(14, cssW / 80)
    }

    setCanvasDimensions()

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const charArray = chars.split("")

    // Initialize columns and drops using CSS dimensions
    const initializeDrops = () => {
      const cw = cssWidthRef.current
      const ch = cssHeightRef.current
      const fs = fontSizeRef.current
      const columns = Math.ceil(cw / fs)
      const drops = dropsRef.current
      drops.length = columns
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * ch
      }
    }
    initializeDrops()

    const draw = () => {
      const cw = cssWidthRef.current
      const ch = cssHeightRef.current
      const fs = fontSizeRef.current
      const drops = dropsRef.current

      // Trail effect using CSS bounds
      ctx.fillStyle = "rgba(15, 23, 42, 0.05)"
      ctx.fillRect(0, 0, cw, ch)

      const colors = ["#6366f1", "#8b5cf6", "#a78bfa"]
      
      ctx.font = `${fs}px "Geist Mono", monospace, sans-serif`
      ctx.textAlign = "left"
      ctx.textBaseline = "top"

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fs
        const y = drops[i]
        
        // Only draw if within visible area (CSS bounds)
        if (y < ch && x < cw) {
          const randomColor = colors[Math.floor(Math.random() * colors.length)]
          ctx.fillStyle = randomColor
          ctx.globalAlpha = 0.7
          ctx.fillText(text, x, y)
        }

        // Reset drop if beyond screen or randomly
        if (drops[i] > ch && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i] += fs
      }

      ctx.globalAlpha = 1
      requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      setCanvasDimensions()
      initializeDrops()
    }

    // Use debounced resize for better performance
    let resizeTimeout: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(handleResize, 250)
    }

    window.addEventListener("resize", debouncedResize)
    
    // Handle mobile orientation change
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 150)
    })

    return () => {
      window.removeEventListener("resize", debouncedResize)
      window.removeEventListener("orientationchange", handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed pointer-events-none opacity-30 z-0 w-full h-full"
      style={{ 
        mixBlendMode: "screen",
        touchAction: "none"
      }}
    />
  )
}