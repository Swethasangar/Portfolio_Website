'use client';
import { useState } from 'react';
import HomePage from "@/src/components/HomePage"
import About from "@/src/components/About"
import Skills from "@/src/components/Skills"
import BookPage from "@/src/components/BookPage";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";

export default function PortfolioBook() {
  const [currentPage, setCurrentPage] = useState(0);

  const goNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, 4))
  }

  const goPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="flex min-h-screen items-center justify-center px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-12">

      <div className='hidden w-full md:block'>
        <div className="relative h-[calc(100vh-4rem)] mx-auto min-h-150 w-full max-w-6xl perspective-[2000px] md:min-h-175 md:max-h-225">

          <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#FFFDF7] shadow-2xl">

            <div className='pointer-events-none absolute left-1/2 top-0 z-50 h-full w-8 -translate-x-1/2' style={{ background: "linear-gradient(to right, transparent, rgba(0,0,0,0.06),rgba(0,0,0,0.03),transparent)", }} />

            {/* Left Page */}
            <div className="absolute left-0 top-0 z-10 h-full w-1/2 overflow-hidden rounded-l-xl border-r border-[#D6D0C4] shadow-[-6px_0_14px_rgba(0,0,0,0.03),inset_-12px_0_18px_rgba(0,0,0,0.04)] md:w-1/2 md:rounded-l-xl md:rounded-r-none">
              {currentPage === 0 && <HomePage onViewWork={() => setCurrentPage(2)} onContact={() => setCurrentPage(3)} />}
              {currentPage === 1 && <About />}
              {currentPage === 2 && <Skills />}
              {currentPage >= 3 && <Projects />}
            </div>

            {currentPage === 0 && (
              <BookPage front={<About />} back={<Skills />} flipped={false} onClick={goNext} zIndex={30} />
            )}

            {currentPage === 1 && (
              <BookPage front={<Skills />} back={<Projects />} flipped={false} onClick={goNext} zIndex={20} />)}

            {currentPage === 2 && (
              <div className="absolute right-0 top-0 z-30 h-full w-1/2 cursor-pointer overflow-hidden rounded-r-xl shadow-[6px_0_14px_rgba(0,0,0,0.03),inset_12px_0_18px_rgba(0,0,0,0.04)]" onClick={goNext}>
                <Projects />
              </div>
            )}

            {currentPage === 3 && (
              <div className="absolute right-0 top-0 z-30 h-full w-1/2 cursor-pointer overflow-hidden rounded-r-xl shadow-[6px_0_14px_rgba(0,0,0,0.03),inset_12px_0_18px_rgba(0,0,0,0.04)]">
                <Contact />
              </div>
            )}

            {currentPage > 0 && (
              <button onClick={goPrevious} className='absolute left-2 top-1/2 z-60 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f0eee9] text-(--primary) shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#FFFDF7] cursor-pointer' aria-label="Previous Page">←</button>
            )}

          </div>
        </div>
      </div>

      <div className='block w-full md:hidden'>
        <div className="relative mx-auto min-h-150 w-full max-w-md overflow-hidden rounded-xl bg-[#FFFDF7] shadow-2xl">

          {currentPage === 0 && (
            <HomePage
              onViewWork={() => setCurrentPage(2)}
              onContact={() => setCurrentPage(3)}
            />
          )}

          {currentPage === 1 && <About />}

          {currentPage === 2 && <Skills />}

          {currentPage === 3 && <Projects />}

          {currentPage === 4 && <Contact />}

          {currentPage > 0 && (
            <button
              onClick={goPrevious}
              className="absolute left-3 top-6 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#deddda] text-(--primary) shadow-md transition-all duration-300 hover:scale-110"
              aria-label="Previous Page"
            >
              ←
            </button>
          )}

          {currentPage < 4 && (
            <button
              onClick={goNext}
              className="absolute right-3 top-6 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#deddda] text-(--primary) shadow-md transition-all duration-300 hover:scale-110"
              aria-label="Next Page"
            >
              →
            </button>
          )}

        </div>
      </div>

    </section>
  )
}