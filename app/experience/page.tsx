import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael J. Thompson | Experience",
  description: "Experience",
};

export default function Experience() {
  return (
    <>
      <section className="bg-secondary color-primary ps-7 pt-7 pe-7 pb-12 md:pb-15 md:pt-9 border-b-3 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl">Core Competencies</h2>
          <h3 className="text-xl md:text-2xl mb-12">These are the current skills and tools I use in my current role:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo" className="h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] font-bold pb-6">HTML5</h4>
            </div>

            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 Flexbox logo" className="h-20 mt-5" />
              <h4 className="flex flex-col color-primary flex text-center text-lg md:text-base w-[80px] font-bold pb-6">
                CSS3<span className="text-sm">(Flexbox)</span>
              </h4>
            </div>

            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SaSS logo, Scss" className="h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] font-bold pb-6">SCSS</h4>
            </div>

            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" alt="LESS logo" className="h-20" />
            </div>

            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap5 logo" className="h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[80px] font-bold pb-6">Bootstrap</h4>
            </div>



            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma logo" className="h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[50px] font-bold pb-6">Figma</h4>
            </div>

            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins logo" className="h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] font-bold pb-6">Jenkins</h4>
            </div>

            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="images/aem.png" alt="Adobe Experience Manager logo" className="h-20 mt-5" />
              <h4 className="color-primary flex text-center text-lg md:text-base w-[170px] font-bold pb-4"><span className="text-sm">Adobe Experience Manager</span></h4>

            </div>
            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" className="h-20" />
            </div>

            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
               <img src="images/es6.png" alt="JavaScript ES6 logo" className="h-20" />
            </div>

            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery logo" className="h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] font-bold pb-6">jQuery</h4>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-primary color-secondary p-5 md:py-9 pb-12 md:pb-15 md:text-2xl border-b-4 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl color-tertiary">Emerging Skills</h2>
          <h3 className="text-xl md:text-2xl col-span-6 mb-12">These are the skills and tools I am currently learning and expanding my knowledge in which I acquired from the <br className="hidden xl:block" />University of Texas at Austin's Full Stack Software Development Certification Course:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto mt-5">
            <div className="bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="images/aws.png" alt="AWS Cloud Practitioner logo" className="h-27" />
              <h4 className="color-primary flex text-lg md:text-base w-[48px] font-bold mt-2">AWS</h4>
            </div>
            <div className="bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React logo" className="h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[48px] font-bold mt-4">React</h4>
            </div>
            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center bg-white rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="images/express.png" alt="Express logo" className="h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[65px] font-bold mt-4">Express</h4>
            </div>
            <div className="bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="images/nextjs.png" alt="Next.js logo" className="w-30" />
            </div>
            <div className="bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="images/nodejs.png" alt="Node.js logo" className="h-15" />      
            </div>
            <div className="bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="images/npm.svg" alt="Node Package Manager logo" className="w-25 h-16" />
            </div>
            <div className="bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-around rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB logo, Compass, Atlas" className="w-20 mt-2" />
              <h4 className="flex flex-col color-primary text-center text-lg md:text-base w-[75px] font-bold pb-3">MongoDB
                <span className="text-xs">(Compass)</span><span className="text-xs">(Atlas)</span></h4>
            </div>
            <div className="bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="/images/mongoose.png" alt="Mongoose Object Data Modeling (ODM) library logo" className="h-25" />
              <h4 className="color-primary flex text-lg md:text-base w-[85px] font-bold pb-5">Mongoose</h4>
            </div>
            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center bg-white rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="/images/postman.png" alt="Postman logo" className="h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[75px] font-bold mt-4">Postman</h4>
            </div>
            <div className="bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux logo" className="h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[55px] font-bold mt-4">Redux</h4>
            </div>
            <div className="bg-white flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="/images/tailwindcss-mark.d52e9897.svg" alt="Tailwind CSS logo" className="w-20 h-20" />
              <h4 className="flex flex-col color-primary flex text-center text-lg lg:text-base w-[120px] md:w-[110px] font-bold mb-3 xl:mt-3">Tailwind CSS<span className="text-sm">(TAOS)</span><span className="sr-only">(Tailwind CSS Animation on Scroll)</span></h4>
            </div>
            <div className="flex flex-col min-w-[200px] md:min-w-[150px] xl:min-w-[175px] min-h-[180px] mx-auto items-center justify-center bg-white rounded-xl border-2 border-[rgba(255,193,7,1)] shadow">
              <img src="images/framer-motion.jpeg" alt="Framer Motion logo" className="h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] md:w-[115px] font-bold mt-1">Framer Motion</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}