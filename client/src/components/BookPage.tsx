type BookPageProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  flipped: boolean;
  onClick?: () => void;
  zIndex?: number,
}

export default function BookPage({
  front,
  back,
  flipped,
  onClick,
  zIndex = 1,
}: BookPageProps) {
  return (
    <div className="group absolute right-0 top-0 h-full w-1/2 cursor-pointer" style={{ perspective: "2000px", zIndex }}>

      <div className="relative h-full w-full transition-transform duration-1200 ease-[cubic-bezier(0.22,1,0,0.36,1)]" onClick={onClick} style={{ transformStyle: "preserve-3d", transformOrigin: "left center", transform: flipped ? "rotateY(-180deg) translateZ(1px)" : "rotateY(0deg) translateZ(0)", }}>
        <div className="no-scrollbar absolute inset-0 h-full min-h-0 overflow-y-auto rounded-r-xl bg-[#FFFDF7] shadow-[-8px_0_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 group-hover:shadow-[-10px_0_24px_rgba(0,0,0,0.08)]" style={{ backfaceVisibility: "hidden" }}>
          {front}
        </div>

        <div className="no-scrollbar absolute inset-0 h-full min-h-0 overflow-y-auto rounded-l-xl bg-[#FFFDF7] shadow-[8px_0_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 group-hover:shadow-[-10px_0_24px_rgba(0,0,0,0.08)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          {back}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-full" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.08), transparent 18%, transparent 82%, rgba(0,0,0,0.05))", opacity: flipped ? 0.7 : 0, transition: "opacity 600ms ease" }}>

        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-full w-2 rounded-r-xl" style={{ background: "linear-gradient(to left, rgba(0,0,0,0.08),transparent)", transform: "translateZ(-1px)" }} />
      </div>
    </div>
  )
}