import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael J. Thompson | Portfolio",
  description: "Portfolio",
};

export default function Portfolio() {
  return (
    <>
      <section className="bg-secondary color-primary p-7 md:pb-15 md:pt-9 border-b-4 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-10 text-2xl md:text-3xl">Portfolio</h2>

          <div className="text-xl md:text-2xl flex flex-col p-4 border-1 border-b-[var(--color-tertiary)] rounded-xl">
            <h3 className="font-bold">This Portfolio Website:</h3>
            <h4 className="py-2 text-base md:text-xl">mikethompson100.com</h4>
            <h5 className="pe-5 py-5 text-sm md:text-base">
              Tools used:
              <span className="mx-2 px-3 py-1 bg-gradient-to-r from-[#FFC107] to-[#FFFFFF] inline-block text-white rounded-lg text-xs font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border border-[#1A237E] color-primary">React.js</span>&ndash;
              <span className="mx-2 px-3 py-1 bg-gradient-to-r from-[#FFC107] to-[#FFFFFF] inline-block text-white rounded-lg text-xs font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border border-[#1A237E] color-primary">Next.js</span>&ndash;
              <span className="mx-2 px-3 py-1 bg-gradient-to-r from-[#FFC107] to-[#FFFFFF] inline-block text-white rounded-lg text-xs font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border border-[#1A237E] color-primary">TypeScript</span>&ndash;
              <span className="mx-2 px-3 py-1 bg-gradient-to-r from-[#FFC107] to-[#FFFFFF] inline-block text-white rounded-lg text-xs font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border border-[#1A237E] color-primary">Tailwind CSS</span>
            </h5>
            <a href="/" target="__self" rel="noopener noreferrer" className="max-w-4/7 underline hover:text-[var(--color-tertiary)] border border-[#1A237E]  rounded-xl">
              <img src="/images/mikethompson100.png" alt="mikethompson100 portfolio site" className="p-4" />
            </a>
          </div>
          
          <div className="mt-10 text-xl md:text-2xl flex flex-col p-4 border-1 border-b-[var(--color-tertiary)] rounded-xl">
            <h3 className="font-bold">React app for baseball statistics:</h3>
            <h4 className="pb-5 text-base md:text-xl">sortsport.com</h4>
            <a href="https://www.sortsport.com" target="_blank" rel="noopener noreferrer" className="w-fit underline hover:text-[var(--color-tertiary)] border border-[#1A237E]">
              <img src="/images/sortsport.png" alt="SortSport portfolio site" className="inline-block mx-2 my-4" />
            </a>
            <h5 className="pe-5 pb-5 text-sm md:text-base">Tools used: 
              <span className="mx-2 px-3 py-1 bg-gradient-to-r from-[#FFC107] to-[#FFFFFF] inline-block text-white rounded-lg text-xs font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border border-[#1A237E] color-primary">React.js</span>&ndash;
              <span className="mx-2 px-3 py-1 bg-gradient-to-r from-[#FFC107] to-[#FFFFFF] inline-block text-white rounded-lg text-xs font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border border-[#1A237E] color-primary">JavaScript</span>&ndash;
              <span className="mx-2 px-3 py-1 bg-gradient-to-r from-[#FFC107] to-[#FFFFFF] inline-block text-white rounded-lg text-xs font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border border-[#1A237E] color-primary">CSS3</span>&ndash;
              <span className="mx-2 px-3 py-1 bg-gradient-to-r from-[#FFC107] to-[#FFFFFF] inline-block text-white rounded-lg text-xs font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border border-[#1A237E] color-primary">HTML5</span></h5>
          </div>
        </div>
      </section>
      <section className="bg-primary color-secondary p-5 md:py-9 md:text-2xl border-b-4 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-10 text-2xl md:text-3xl">Section 2</h2>
          <h3 className="text-xl md:text-2xl">This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy.</h3>
        </div>
      </section>
    </>
  )
}
