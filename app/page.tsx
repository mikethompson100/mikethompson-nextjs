'use client';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <section className="bg-secondary color-primary p-7 md:pb-15 md:pt-9 border-b-3 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="hidden">Web Developer</h2>
            <h3 className="text-4xl md:text-7xl py-13 leading-tight"><span className="inline font-bold">Web developer</span> specializing in delivering effective solutions and troubleshooting complex front-end issues.</h3>
            <h3 className="pt-4 text-xl md:text-2xl">I have over 15 years of experience working with responsive HTML, CSS, Bootstrap with hands-on experience in web accessibility and screen readers such as NVDA and JAWS. I am WCAG-certified and recently earned an AWS Cloud Practitioner certification. I currently work at Capgemini, a global IT services and consulting firm.</h3>
        </div>
      </section>
      <section className="bg-primary text-secondary p-7 md:py-9 border-b-4 border-b-tertiary">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl text-tertiary">Approach & Methodology</h2>
          <h3 className="text-xl md:text-2xl">I bring years of experience and strong technical instincts to troubleshooting, using past successes to efficiently create new solutions. My development principles prioritize consistency and efficiency. Successful delivery relies on a balance of speed, accuracy, and best practices, ensuring timely results without sacrificing quality or introducing unnecessary side effects. I commit to best practices by writing clean, well-commented code, avoiding technical debt, and always considering teammates who may maintain the codebase. I am in a constant state of being situationally aware of changing priorities and business requirements. I also have experience in multivariate testing and usability.</h3>
          <h3 className="pt-8 pb-4 text-xl md:text-2xl italic text-tertiary">“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live” <span className="whitespace-nowrap">― John Woods</span></h3>
          <h3 className="text-xl md:text-2xl">When troubleshooting and approaching problems I challenge assumptions and focus on the facts to determine the best strategy to solve problems. </h3>
        </div>
      </section>
    </>
  )
}