"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type React from "react"

interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollAnimationWrapper({ children, className = "" }: ScrollAnimationWrapperProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50])

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }} className={className}>
      {children}
    </motion.div>
  )
}
