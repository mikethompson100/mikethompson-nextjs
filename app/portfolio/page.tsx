"use client";
import { Metadata } from "next";
import { TAOS } from "@versoly/react-taos";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";
/* export const metadata: Metadata = {
  title: "Michael J. Thompson | Portfolio",
  description: "Portfolio",
}; */

export default function Portfolio() {
  return (
    <>
      <section className="color-primary border-b-3 border-b-[var(--color-tertiary)] bg-secondary p-7 text-primary md:pt-9 md:pb-15">
        <div className="container mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl">Portfolio</h2>
          <div className="grid grid-cols-1 gap-2 border-t-1 border-primary sm:grid-cols-2 md:gap-5">
            <TAOS
              className="taos:translate-opacity-100 pe-3 pb-1 text-sm delay-[200ms] duration-[2s] md:py-4 md:text-2xl taos:opacity-0"
              data-taos-offset="300"
              as="div"
            >
              <h3 className="my-5 text-xl font-bold md:text-2xl">
                Developer notes:
              </h3>
              <p className="mb-2 pt-2">
                <LuPencilRuler className="inline" />{" "}
                <span className="font-bold text-primary">
                  mikethompson100.com
                </span>
              </p>
              <p className="mb-5">
                This was built with Next.js, TailwindCSS, TypeScript, Framer
                Motion and TAOS Animation Library (TAOS). It was my first
                introduction to many of these frameworks.
              </p>
              <p>
                I chose Next.js for its server-side rendering capabilities and
                SEO benefits, while TailwindCSS allowed for rapid styling with
                utility-first classes. I used TypeScript to enhance code quality
                and maintainability. I also added Framer Motion and TAOS to add
                animation capabilities. This website will evolve long-term and
                as I mature in all of these skills I will continue to add more
                capabilities. The site features a responsive design, ensuring
                optimal viewing across devices. I implemented accessibility best
                practices to make the site usable for all users. Overall, this
                project helped me gain proficiency in modern web development
                tools and practices.
              </p>
            </TAOS>

            <TAOS
              className="taos:translate-opacity-100 mt-5 flex flex-col pb-5 text-xl delay-[200ms] duration-[2s] md:py-4 md:text-2xl taos:opacity-0"
              data-taos-offset="300"
              as="div"
            >
              <h3 className="text-xl font-bold md:text-2xl">
                mikethompson100.com
              </h3>
              <h4 className="mb-5 text-base md:text-xl">Personal Portfolio</h4>
              <div className="pe-5 pt-2 pb-5 text-sm md:text-base">
                <h5>Tools used:</h5>
                <div className="mt-2 flex flex-wrap gap-2">
                  <h6 className="tools">React.js</h6>
                  <h6 className="tools">Next.js</h6>
                  <h6 className="tools">TypeScript</h6>
                  <h6 className="tools">Tailwind CSS</h6>
                </div>
              </div>
              <div className="mt-2 hover:text-[var(--color-tertiary)] md:max-w-130">
                <img
                  src="/images/mikethompson100.png"
                  alt="mikethompson100 portfolio site"
                />
              </div>
            </TAOS>
          </div>
        </div>
      </section>
      <section className="border-b-4 border-b-tertiary bg-primary p-7 text-secondary md:pb-15">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-2 border-t-1 border-primary sm:grid-cols-2 md:gap-5">
            <TAOS
              className="taos:translate-opacity-100 pe-3 pb-1 text-sm delay-[300ms] duration-[2s] md:py-4 md:text-xl taos:opacity-0"
              data-taos-offset="300"
              as="div"
            >
              <h3 className="my-5 text-xl font-bold md:text-2xl">
                Developer notes:
              </h3>
              <p className="mb-2 pt-2">
                <LuPencilRuler className="inline text-tertiary" />{" "}
                <span className="font-bold text-tertiary">sortsport.com</span>{" "}
                was built with React.js
              </p>
              <p>This was the first project that I built using React.</p>
            </TAOS>

            <TAOS
              className="taos:translate-opacity-100 mt-5 flex flex-col pb-5 text-xl delay-[300ms] duration-[2s] md:py-4 md:text-2xl taos:opacity-0"
              data-taos-offset="300"
              as="div"
            >
              <h3 className="font-bold">
                <a href="https://www.sortsport.com" target="_blank">
                  <span className="underline">sortsport.com</span>&nbsp;
                  <span className="sr-only">
                    External link to sort sport dot com website
                  </span>
                  <FaExternalLinkAlt className="inline" />
                </a>
              </h3>
              <h4 className="mb-5 text-base md:text-xl">React App</h4>
              <div className="pe-5 pt-2 pb-5 text-sm md:text-base">
                <h5>Tools used:</h5>
                <div className="mt-2 flex flex-wrap gap-2">
                  <h6 className="tools">React.js</h6>
                  <h6 className="tools">JavaScript</h6>
                  <h6 className="tools">HTML5</h6>
                  <h6 className="tools">CSS3</h6>
                </div>
              </div>
              <div className="flex w-full flex-col items-start md:max-w-3/4">
                <img
                  src="/images/sortsport.png"
                  alt="SortSport portfolio site"
                  className="my-4 inline-block rounded-xl border md:me-2"
                />
              </div>
            </TAOS>
          </div>
        </div>
      </section>
    </>
  );
}
