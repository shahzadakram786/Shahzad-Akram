"use client"

export default function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shahzadakram.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://shahzadakram.dev#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://shahzadakram.dev#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Skills",
        item: "https://shahzadakram.dev#skills",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://shahzadakram.dev#contact",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
}
