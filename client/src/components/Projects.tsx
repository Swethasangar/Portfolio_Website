const projects = [
  {
    number: "01",
    title: "Spency",
    category: "Personal Project",
    description: "A personal expense tracking application to manage income, expenses and spending insights.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    number: "02",
    title: "Toy Store",
    category: "Full Stack Project",
    description: "A full-stack e-commerce application for browsing, managing and purchasing toy products.",
    technologies: ["React", "Next.js", "Node.js", "Express", "PostgreSQL"],
  },
  {
    number: "03",
    title: "HRMS",
    category: "Work Project",
    description:
      "A Human Resource Management System for managing employees, attendance, leave and related HR operations.",
    technologies: ["React", "Go", "Fiber", "PostgreSQL"],
  },
  {
    number: "04",
    title: "CIS",
    category: "Work Project",
    description:
      "A Customer Information System designed to manage and organize customer-related information.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    number: "05",
    title: "Archive Portal",
    category: "Work Project",
    description:
      "A web application for managing and accessing archived information and documents.",
    technologies: ["Node.js", "Express.js", "MySQL", "EJS"],
  },
]

export default function Projects() {
  return (
    <section className="no-scrollbar h-full min-h-0 w-full overflow-y-auto bg-(--cream) px-8 py-12 md:px-12">
      <div className="mb-10">
        <div className="flex items-center gap-4">

        </div>
        <h1 className="mt-2 text-xl uppercase tracking-[0.3em] font-heading font-semibold text-(--primary)">
          My Projects
        </h1>

        <p className="mt-3 max-w-2xl leading-6 text-(--muted-text)">
          A collection of projects I have built and worked on using modern web technologies.
        </p>
      </div>

      <div className="md:grid grid-cols-2 gap-5 mt-10">
        {projects.map((project) => (
          <div key={project.title} className="my-3 group font-(--font-heading) rounded-xl border border-[#D6D0C4] bg-[#FFFDF7] p-5 shadow-md text-sm text-(--text) transition-all hover:border-(--primary) backdrop-blur-sm duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-center justify-between">
              <span className="text-xs font-medium tracking-[0.2em] text-(--primary)">
                {project.number}
              </span>

              <span className="text-xs text-(--muted-text)">
                {project.category}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-(--text)">{project.title}</h2>

            <p className="mt-3 text-sm leading-6 text-(--muted-text)">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {technology}
                </span>
              ))}
            </div>

            <button className="mt-6 text-sm font-semibold text-(--primary) transition group-hover:translate-x-1">View Project →</button>
          </div>
        ))}

      </div>
    </section>
  )
}