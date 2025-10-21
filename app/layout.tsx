import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import StructuredData from "@/components/StructuredData"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import OrganizationSchema from "@/components/OrganizationSchema"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Shahzad Akram - Front-End Developer | Portfolio",
  description:
    "Front-End Developer specializing in React, Next.js, and TypeScript. Crafting responsive, user-friendly interfaces with a focus on performance and accessibility.",
  keywords: ["Front-End Developer", "React Developer", "Next.js", "TypeScript", "Web Developer", "Portfolio"],
  authors: [{ name: "Shahzad Akram" }],
  creator: "Shahzad Akram",
  publisher: "Shahzad Akram",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahzadakram.dev",
    siteName: "Shahzad Akram Portfolio",
    title: "Shahzad Akram - Front-End Developer",
    description:
      "Front-End Developer specializing in React, Next.js, and TypeScript. Crafting responsive, user-friendly interfaces with a focus on performance and accessibility.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/91377989?v=4",
        width: 1200,
        height: 630,
        alt: "Shahzad Akram",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzad Akram - Front-End Developer",
    description: "Front-End Developer specializing in React, Next.js, and TypeScript.",
    images: ["https://avatars.githubusercontent.com/u/91377989?v=4"],
    creator: "@shahzadakram786",
  },
  alternates: {
    canonical: "https://shahzadakram.dev",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <BreadcrumbSchema />
        <OrganizationSchema />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
