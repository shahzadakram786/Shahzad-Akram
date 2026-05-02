"use client"

export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shahzad Akram",
    url: "https://shahzadakram.dev",
    image: "https://avatars.githubusercontent.com/u/91377989?v=4",
    jobTitle: "Front-End Developer",
    description:
      "Front-End Developer specializing in React, Next.js, and TypeScript. Crafting responsive, user-friendly interfaces with a focus on performance, accessibility and clean code.",
    sameAs: ["https://github.com/shahzadakram786", "https://twitter.com/shahzadakram786"],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
