export default function About() {
  return (
    <section className="min-h-screen bg-(--cream) px-8 py-20 md:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-xl uppercase tracking-[0.3em] font-semibold font-heading text-(--primary)">
          About Me
        </p>

        <div className="mt-10 rounded-2xl border border-[#D6D0C4] bg-white/60 p-8 shadow-xl md:p-12">
          <p className="text-lg leading-8 text-(--muted-text)">
            I'm Swetha, a Full Stack Developer passionate about building modern and user-friendly web applications.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            I work with technologies such as React, Next.js, Typescript, Node.js, Express.js and PostgreSQL, and I enjoy learning new technologies and solving real-world problems through software.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            I'm currently expanding my knowledge in AI and modern full-stack development to build intelligent and scalable applications.
          </p>
        </div>

      </div>
    </section>
  )
}