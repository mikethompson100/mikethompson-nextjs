'use client';

import { useState } from 'react';
import { useEffect } from 'react';

//import { Metadata } from "next";
import { TAOS } from '@versoly/react-taos';

/* export const metadata: Metadata = {
  title: "Michael J. Thompson | Experience",
  description: "Experience",
}; */

export default function Experience() {
  const [scriptLoaded, setScriptLoaded] = useState(true);

  // Designed to dynamically load the Credly embed script
  useEffect(() => {
    // Creating the script element piece by piece
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';

    // Set state when script loads
    script.onload = () => {
      setScriptLoaded(true);
    };

    // Handle errors
    script.onerror = (error) => {
      console.error('Failed to load Credly script:', error);
    };

    // Append to the body tag
    document.body.appendChild(script);

    // Cleanup: Remove the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty array: Runs only once on mount  

  return (
    <>
      <section className="bg-secondary text-primary ps-7 pt-7 pe-7 pb-12 md:pb-15 md:pt-9 border-b-3 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl">Core Competencies</h2>
          <h3 className="text-xl md:text-2xl mb-12">These are the current skills and tools that I have used in my current role:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

            <TAOS className="delay-[100ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo" className="h-20 mt-5" />
              <h4 className="text-primary flex text-lg md:text-base w-[60px] font-bold pb-6">HTML5</h4>
            </TAOS>

            <TAOS className="delay-[200ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 Flexbox logo" className="h-20 mt-5" />
              <h4 className="flex flex-col text-primary flex text-center text-lg md:text-base w-[80px] font-bold pb-6">
                CSS3<span className="text-sm">(Flexbox)</span>
              </h4>
            </TAOS>

            <TAOS className="delay-[300ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SaSS logo, Scss" className="h-20 mt-5" />
              <h4 className="text-primary flex text-lg md:text-base w-[60px] font-bold pb-6">SCSS</h4>
            </TAOS>

            <TAOS className="delay-[400ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" alt="LESS logo" className="h-20" />
            </TAOS>

            <TAOS className="delay-[500ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap5 logo" className="h-20 mt-5" />
              <h4 className="text-primary flex text-lg md:text-base w-[80px] font-bold pb-6">Bootstrap</h4>
            </TAOS>

            <TAOS className="delay-[600ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma logo" className="h-20 mt-5" />
              <h4 className="text-primary flex text-lg md:text-base w-[50px] font-bold pb-6">Figma</h4>
            </TAOS>

            <TAOS className="delay-[100ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins logo" className="h-20 mt-5" />
              <h4 className="text-primary flex text-lg md:text-base w-[60px] font-bold pb-6">Jenkins</h4>
            </TAOS>

            <TAOS className="delay-[200ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="images/aem.png" alt="Adobe Experience Manager logo" className="h-20 mt-5" />
              <h4 className="text-primary flex text-center text-lg md:text-base w-[170px] font-bold pb-4"><span className="text-sm">Adobe Experience Manager</span></h4>
            </TAOS>


            <TAOS className="delay-[300ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" className="h-20" />
            </TAOS>

            <TAOS className="delay-[400ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="images/es6.png" alt="JavaScript ES6 logo" className="h-20" />
            </TAOS>

            <TAOS className="delay-[500ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery logo" className="h-20 mt-5" />
              <h4 className="text-primary flex text-lg md:text-base w-[60px] font-bold pb-6">jQuery</h4>
            </TAOS>

          </div>
        </div>
      </section >
      <section className="bg-primary text-secondary p-5 md:py-9 pb-12 md:pb-15 md:text-2xl border-b-4 border-b-tertiary">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl text-tertiary">Emerging Skills</h2>
          <h3 className="text-xl md:text-2xl col-span-6 mb-12">These are the skills and tools I am currently learning and expanding my knowledge in which I acquired from the <br className="hidden xl:block" />University of Texas at Austin's Full Stack Software Development Certification Course:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto mt-5">


            <TAOS className="delay-[100ms] duration-[1s] taos:translate-x-[-50%] taos:opacity-0 
            bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="images/aws.png" alt="AWS Cloud Practitioner logo" className="h-27" />
              <h4 className="text-primary flex text-lg md:text-base w-[48px] font-bold mt-2">AWS</h4>
            </TAOS>


            <TAOS className="delay-[200ms] duration-[1s] taos:translate-x-[-50%] taos:opacity-0 
            bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React logo" className="h-20" />
              <h4 className="text-primary flex text-lg md:text-base w-[48px] font-bold mt-4">React</h4>
            </TAOS>

            <TAOS className="delay-[300ms] duration-[1s] taos:translate-x-[-50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center bg-white rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="images/express.png" alt="Express logo" className="h-20" />
              <h4 className="text-primary flex text-lg md:text-base w-[65px] font-bold mt-4">Express</h4>
            </TAOS>

            <TAOS className="delay-[300ms] duration-[1s] taos:translate-x-[50%] taos:opacity-0 
            bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="images/nextjs.png" alt="Next.js logo" className="w-30" />
            </TAOS>

            <TAOS className="delay-[200ms] duration-[1s] taos:translate-x-[50%] taos:opacity-0 
            bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="images/nodejs.png" alt="Node.js logo" className="h-15" />
            </TAOS>

            <TAOS className="delay-[100ms] duration-[1s] taos:translate-x-[50%] taos:opacity-0 
            bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="images/npm.svg" alt="Node Package Manager logo" className="w-25 h-16" />
            </TAOS>

            <TAOS className="delay-[100ms] duration-[1s] taos:translate-x-[-50%] taos:opacity-0 
            bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB logo, Compass, Atlas" className="w-20 mt-2" />
              <h4 className="flex flex-col text-primary text-center text-lg md:text-base w-[75px] font-bold pb-3">MongoDB
                <span className="text-xs">(Compass)</span><span className="text-xs">(Atlas)</span></h4>
            </TAOS>

            <TAOS className="delay-[200ms] duration-[1s] taos:translate-x-[-50%] taos:opacity-0 
            bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="/images/mongoose.png" alt="Mongoose Object Data Modeling (ODM) library logo" className="h-25" />
              <h4 className="text-primary flex text-lg md:text-base w-[85px] font-bold pb-5">Mongoose</h4>
            </TAOS>

            <TAOS className="delay-[300ms] duration-[1s] taos:translate-x-[-50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center bg-white rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="/images/postman.png" alt="Postman logo" className="h-20" />
              <h4 className="text-primary flex text-lg md:text-base w-[75px] font-bold mt-4">Postman</h4>
            </TAOS>

            <TAOS className="delay-[100ms] duration-[1s] taos:translate-x-[50%] taos:opacity-0 
            bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux logo" className="h-20" />
              <h4 className="text-primary flex text-lg md:text-base w-[55px] font-bold mt-4">Redux</h4>
            </TAOS>

            <TAOS className="delay-[200ms] duration-[1s] taos:translate-x-[50%] taos:opacity-0 
            bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="/images/tailwindcss-mark.d52e9897.svg" alt="Tailwind CSS logo" className="w-20 h-20" />
              <h4 className="flex flex-col text-primary flex text-center text-lg lg:text-base w-[120px] md:w-[110px] font-bold mb-3 xl:mt-3">Tailwind CSS<span className="text-sm">(TAOS)</span><span className="sr-only">(Tailwind CSS Animation On Scroll)</span></h4>
            </TAOS>

            <TAOS className="delay-[300ms] duration-[1s] taos:translate-x-[50%] taos:opacity-0 
            flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center bg-white rounded-xl border-2 border-[rgba(255,193,7,1)] shadow" data-taos-offset="300"
              as='div'>
              <img src="images/framer-motion.jpeg" alt="Framer Motion logo" className="h-20" />
              <h4 className="text-primary flex text-lg md:text-base w-[60px] md:w-[115px] font-bold mt-1">Framer Motion</h4>
            </TAOS>
          </div>
        </div>
      </section>
      <section className="bg-secondary text-primary ps-7 pt-7 pe-7 pb-12 md:pb-15 md:pt-9 border-b-3 border-b-[var(--color-tertiary)]">

        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl">Certifications</h2>
          <h3 className="text-xl md:text-2xl mb-12">These are the recent certifications that I have received and courses I have taken to demonstrate my committment to continous learning:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            <TAOS className="delay-[100ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 min-h-64" data-taos-offset="300" as='div'>
              <a href="https://vrfy.digital/lnifezxz" target="_blank">
                <img className="p-5 rounded-xl border border-[rgba(255,193,7,0.3)] shadow" src="https://www.mikethompson100.com/images/certifications/mern.jpg" alt="Certificate of Completion. Professional Certificate in Full Stack Software Development" />
                <span className="sr-only">The University of Texas as Austin conferred to attest
                  that Michael Thompson
                  has successfully completed the Professional Certificate in Full Stack Software
                  Development presented by
                  the McCombs School of Business September 2024.</span></a>
            </TAOS>

            <TAOS className="delay-[250ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 min-h-64 " data-taos-offset="300" as='div'>
              <a href="https://verify.w3schools.com/64CNBCDCW" target="_blank">
                <img className="rounded-xl border border-[rgba(255,193,7,0.3)] shadow" src="images/accessibility_certification.jpg" alt="Certificate of Completion. W3Schools Accessibility certification exam." />
                <span className="sr-only">This certifies that Michael Thompson has passed the
                  W3Schools Accessibility certification exam and is hereby declared a Certified Professional in
                  Accessibility Core Competencies.
                  Issued on September 19, 2024.</span>
              </a>
            </TAOS>

            <TAOS className="delay-[400ms] duration-[1s] taos:translate-y-[50%] taos:opacity-0 min-h-64 items-center border border-[rgba(255,193,7,0.3)] rounded-xl shadow p-5" data-taos-offset="300" as='div'>
              {scriptLoaded ? (
                <div className="min-h-64 flex flex-col items-center">
                  <div data-iframe-width="150" data-iframe-height="267" data-share-badge-id="492d88c0-cd62-4401-80c2-52a7495767e8" data-share-badge-host="https://www.credly.com">
                    <span className="visually-hidden">
                      Link to the AWS Certified Cloud Practitioner certification confirmation page.
                      Issued by Amazon Web Services Training and Certification. Michael earned this
                      certification and has a fundamental understanding of IT services and their uses
                      in the AWS Cloud. He demonstrates cloud fluency and foundational AWS knowledge.
                      Badge owners are able to identify essential AWS services necessary to set up
                      AWS-focused projects.
                    </span>
                  </div>
                  <div className="mt-5 text-center">
                    <div className="font-bold">AWS Certified Cloud Practitioner</div>
                    <div className="text-xs leading-5">Issued by Amazon Web Services Training and Certification on <span className="whitespace-nowrap">December 03, 2025</span></div>
                  </div>
                </div>
              ) : (
                <p>Loading badge...</p> // Or a spinner/loader for better UX
              )}
            </TAOS>
            <div>
              ?
            </div>
          </div>
        </div>
      </section>
    </>
  )
}