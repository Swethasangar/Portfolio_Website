type HomePageProps = {
  onViewWork: () => void;
  onContact: () => void;
}

export default function HomePage({ onViewWork, onContact }: HomePageProps) {
  return (
    <section className="relative flex min-h-162.5 items-center overflow-hidden px-8 py-10">
      {/* Background glow */}
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-(--secondary)/20 blur-3xl" />

      <div className="relative z-10 w-full">

        {/* Left side */}
        <div>
          <p className="font-(--font-heading) text-sm uppercase tracking-[0.3em] text-(--primary)">
            Welcome to my portfolio
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-800">
            Hi, I'm <span className="text-(--primary)">Swetha</span>
          </h1>

          <h2 className="mt-3 text-lg font-medium text-(--muted-text)">
            Full Stack Developer
          </h2>

          <div className="relative mt-6 flex justify-center">
            {/* Animated circular background */}
            <div className="absolute h-52 w-52 rounded-full bg-linear-to-br from-(--primary)/30 via-(--secondary)/20 to-(--warm-cream)/40 blur-2xl" />

            {/* Profile image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-8 border-white shadow-2xl ">
              <img
                src="/Profile.jpeg"
                alt="Swetha"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-(--muted-text)">
            I build modern web applications using React, Next.js,
            Node.js, TypeScript and other modern technologies.
          </p>

          <div className="mt-6 flex gap-3">
            <button onClick={onViewWork} className="rounded-full bg-(--primary) px-5 py-2 font-medium text-white transition hover:bg-(--primary-dark) cursor-pointer">
              View My Work
            </button>

            <button onClick={onContact} className="rounded-full border border-(--primary) px-5 py-2 font-medium text-(--primary) transition hover:bg-(--primary) hover:text-white cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}