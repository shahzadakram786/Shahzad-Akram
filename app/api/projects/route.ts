export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/shahzadakram786/repos?sort=updated&per_page=6", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch projects")
    }

    const projects = await response.json()

    return Response.json(projects, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    })
  } catch (error) {
    console.error("Error fetching projects:", error)
    return Response.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
