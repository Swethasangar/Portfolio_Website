type PaperPageProps = {
  title: string;
  children: React.ReactNode;
}

export default function PaperPage({ title, children }: PaperPageProps) {
  return (
    <section className="min-h-125 rounded-lg bg-[#fffdf7] p-10 shadow-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
        Portfolio
      </p>
      <h1 className="mt-4 text-4xl font-bold text-slate-800">{title}</h1>

      <p className="mt-6">{children}</p>
    </section>
  )
}