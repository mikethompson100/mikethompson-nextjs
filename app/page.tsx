export default function HomePage() {
  return (
    <>
      <section className="bg-secondary color-primary p-7 md:py-9 border-b-4 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <p className="text-4xl md:text-7xl py-13 leading-tight"><span className="font-bold">Web developer</span> specializing in delivering effective solutions and troubleshooting complex front-end issues.</p>
          <p className="pt-4 text-xl md:text-2xl">I have over 15 years of experience working with responsive HTML, CSS, Bootstrap with hands-on experience in web accessibility and screen readers such as NVDA and JAWS. I am WCAG-certified and recently earned an AWS Cloud Practitioner certification. I currently work at Capgemini, a global IT services and consulting firm.</p>
        </div>
      </section>
      <section className="bg-primary color-secondary p-7 md:py-9 border-b-4 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl color-tertiary">How I work</h2>
          <h3 className="text-xl md:text-2xl">I bring years of experience and strong technical instincts to troubleshooting, using past successes to efficiently approach new solutions. My  development principles prioritize consistency and efficiency. Successful delivery relies on a balance of speed, accuracy, and best practices, ensuring timely results without sacrificing quality or introducing unnecessary side effects. I commit to best practices by writing clean, well-commented code, avoiding technical debt, and always considering teammates who may maintain the codebase. I am in a constant state of being situationally aware of changing priorities and business requirements.</h3>
          <h3 className="pt-8 pb-4 text-xl md:text-2xl italic color-tertiary">“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live” <span className="whitespace-nowrap">― John Woods</span></h3>
        </div>
      </section>
    </>
  )
}