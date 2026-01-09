import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mike Thompson | Portfolio",
  description: "Portfolio",
};

export default function Portfolio() {
  return (
    <>
      <section className="bg-secondary color-primary p-7 md:pb-15 md:pt-9 border-b-4 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl">Portfolio</h2>
          <h3 className="text-xl md:text-2xl"><br/>
            SortSport<br/>
            <a href="https://www.sortsport.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-tertiary)]">
              <img src="/images/sortsport.png" alt="SortSport portfolio site" className="inline-block w-1/2 md:w-1/3 lg:w-1/4 mx-2 my-4" />
            </a>
          </h3>
          <h3 className="pt-4 text-xl md:text-2xl">This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy.</h3>
        </div>
      </section>
      <section className="bg-primary color-secondary p-5 md:py-9 md:text-2xl border-b-4 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl color-tertiary">Section 2</h2>
          <h3 className="text-xl md:text-2xl">This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy. This is sample copy.</h3>
        </div>
      </section>
    </>
  )
}
