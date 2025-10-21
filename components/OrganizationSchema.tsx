"use client"

export default function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shahzad Akram",
    url: "https://shahzadakram.dev",
    logo: "https://avatars.githubusercontent.com/u/91377989?v=4",
    description: "Front-End Developer Portfolio",
    sameAs: ["https://github.com/shahzadakram786", "https://twitter.com/shahzadakram786"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "shahzadakram786@example.com",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
}
