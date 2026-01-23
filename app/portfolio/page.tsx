import { Metadata } from "next";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Michael J. Thompson | Portfolio",
  description: "Portfolio",
};

export default function Portfolio() {
  return (
    <>
      <section className="bg-secondary color-primary p-7 md:pb-15 md:pt-9 border-b-3 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-10 text-2xl md:text-3xl">Portfolio</h2>

          <div className="text-xl md:text-2xl flex flex-col py-5 md:py-8 border-y-1 border-primary">
            <h3 className="font-bold">This Portfolio Website:</h3>
            <h4 className="py-2 text-base md:text-xl">mikethompson100.com</h4>
            <h5 className="pe-5 pt-2 pb-5 text-sm md:text-base">
              Tools used:
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="tools">React.js</span>
                <span className="tools">Next.js</span>
                <span className="tools">TypeScript</span>
                <span className="tools">Tailwind CSS</span>
              </div>
            </h5>
            <p className="mt-2 md:max-w-4/7 underline hover:text-[var(--color-tertiary)]">
              <img src="/images/mikethompson100.png" alt="mikethompson100 portfolio site" />
            </p>
          </div>

          <div className="text-xl md:text-2xl flex flex-col py-5 md:py-8 border-y-1 border-primary">
            <h3 className="font-bold">React app for baseball statistics:</h3>
            <h4 className="py-2 text-base md:text-xl"><a href="https://www.sortsport.com" target="_blank" className="underline">sortsport.com<span className=""></span></a>
                          <a href="https://www.sortsport.com" target="_blank" className="w-fit underline hover:text-[var(--color-tertiary)] block self-end">
                <FaExternalLinkAlt />
              </a></h4>
            <h5 className="pe-5 pt-2 pb-5 text-sm md:text-base">
              Tools used:
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="tools">React.js</span>
                <span className="tools">JavaScript</span>
                <span className="tools">HTML5</span>
                <span className="tools">CSS3</span>
              </div>
            </h5>
            <div className="flex flex-col items-start w-full md:max-w-3/4">
              <img src="/images/sortsport.png" alt="SortSport portfolio site" className="inline-block md:me-2 my-4 border rounded-xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary text-secondary p-7 md:py-15 border-b-4 border-b-tertiary">
        <div className="max-w-7xl mx-auto">
          <h2 className="pb-5 text-2xl md:text-3xl">Developer notes:</h2>
          <h3 className="text-xl md:text-2xl pb-5">
            <p className="mb-5">
              <span className="text-tertiary">mikethompson100.com</span> was built with Next.js, TailwindCSS, TypeScript, Framer Motion and TAOS Animation Library (TAOS). It was my first introduction to many of these frameworks.</p>
            <p className="mb-5">I chose Next.js for its server-side rendering capabilities and SEO benefits, while TailwindCSS allowed for rapid styling with utility-first classes. I used TypeScript to enhance code quality and maintainability. I also added Framer Motion and TAOS to add animation capabilities. This website will evolve long-term and as I mature in all of these skills I will continue to add more capabilities. The site features a responsive design, ensuring optimal viewing across devices. I implemented accessibility best practices to make the site usable for all users. Overall, this project helped me gain proficiency in modern web development tools and practices.</p>
          </h3>
          <hr />
          <h3 className="text-xl md:text-2xl">
            <p className="my-5">
              <span className="text-tertiary">sortsport.com</span> is the first app I built with React.js
            </p>
          </h3>
        </div>
      </section>
    </>
  )
}
