"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export default function OptimizedImage({
  src,
  alt,
  width = 256,
  height = 256,
  priority = false,
  className = "",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Crect fill='%23f3f4f6' width='256' height='256'/%3E%3C/svg%3E"
      onLoadingComplete={() => setIsLoading(false)}
      className={`${isLoading ? "blur-sm" : "blur-0"} transition-all duration-300 ${className}`}
    />
  )
}
