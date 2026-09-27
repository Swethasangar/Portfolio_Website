export default function Skills() {
  return (
    <section className="no-scrollbar h-full min-h-0 w-full overflow-y-auto bg-(--cream) px-8 py-16 md:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-xl font-font-heading font-semibold uppercase tracking-[0.3em] text-(--primary)">Skills & Technologies</p>

        <p className="mt-4 max-w-2xl text-(--muted-text)">Technologies and tools I use to build modern, scalable and user-friendly applications.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#D6B8A8] bg-white/60 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-(--text)">Frontend</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">React.js</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Next.js</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Typescript</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Javascript</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">HTML/CSS</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Tailwind CSS</span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#D6B8A8] bg-white/60 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-(--text)">Backend</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Node.js</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Express.js</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Go</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Fiber</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Python</span>

            </div>
          </div>

          <div className="rounded-2xl border border-[#D6B8A8] bg-white/60 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-(--text)">Databse</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">PostgreSQL</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">MySQL</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">SQL</span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#D6B8A8] bg-white/60 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-(--text)">AI & Tools</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Gemini API</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">REST API</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Git</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">GitHub</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">Docker</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">CI/CD</span>
              <span className="rounded-full border border-[#D6B8A8] bg-[#FFFDF7] px-3 py-1.5 text-sm text-(--text) transition hover:border-(--primary) hover:text-(--primary)">GenAI</span>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}