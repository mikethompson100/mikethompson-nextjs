import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mike Thompson | Experience",
  description: "Experience",
};

export default function Experience() {
  return (
    <>
      <section className="bg-secondary color-primary p-7 md:pb-15 md:pt-9 border-b-4 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl">Core Competencies</h2>
          <h3 className="text-xl md:text-2xl mb-12">These are the current skills and tools I use in my current role:</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] font-bold py-4">HTML5</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 Flexbox" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-center text-lg md:text-base w-[80px] font-bold py-4">CSS3 <div className="text-sm">(Flexbox)</div></h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap5" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[73px] font-bold py-4">Bootstrap</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SCSS" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] font-bold py-4">SCSS</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" alt="LESS" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[40px] font-bold py-4">LESS</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Flexbox" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] font-bold py-4">Flexbox</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[50px] font-bold py-4">Figma</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] font-bold py-4">Jenkins</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[85px] font-bold py-4">JavaScript</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <svg className="w-20 h-20 mt-5" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F7DF1E" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 -.05 21.48-.05 32.611-.002 6.967.236 12.823-1.969 16.902zm44.703-6.308c-2.117 5.301-5.693 9.162-11.394 10.713-3.775 1.108-7.653 1.108-11.61.131-4.096-1.232-7.271-3.635-9.743-7.006-1.017-1.399-2.111-2.955-3.572-5.419l9.419-5.496c.873 1.395 1.717 2.508 2.558 3.643 1.583 2.137 3.461 3.822 6.256 4.362 2.8.536 5.427-.114 6.835-1.771 1.12-1.302 1.508-2.878 1.077-4.707-.385-1.642-1.352-2.882-2.781-3.839-2.428-1.649-5.09-2.669-7.762-3.689-3.368-1.253-6.801-2.462-9.93-4.326-6.081-3.569-8.753-8.471-7.614-15.074.999-5.792 4.867-9.828 10.528-11.677 5.66-1.848 11.349-1.848 16.931-.337 5.584 1.511 9.356 5.085 11.795 10.513l-9.556 5.496c-.839-1.485-1.633-2.736-2.518-3.912-1.528-2.036-3.402-3.358-5.995-3.728-2.59-.368-5.006.255-6.414 1.915-1.408 1.66-1.592 3.572-1.197 5.528.394 1.954 1.523 3.345 3.124 4.302 3.368 2.031 7.047 3.249 10.67 4.47 3.623 1.223 7.245 2.506 10.552 4.556 5.66 3.499 8.332 8.401 7.194 14.993z" />
              </svg>
              <h4 className="color-primary flex text-lg md:text-base w-[30px] font-bold py-4">ES6</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery" className="w-20 h-20 mt-5" />
              <h4 className="color-primary flex text-lg md:text-base w-[60px] font-bold py-4">jQuery</h4>
            </div>

            <div className="flex flex-col items-center justify-around rounded-xl py-4 border border-[rgba(255,193,7,0.3)] shadow">
              <svg className="w-20 h-20 mt-5" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EB1000" d="M64 0L0 64l64 64 64-64L64 0zm0 16l48 48-48 48-48-48 48-48z" />
                <path fill="#EB1000" d="M64 32L32 64l32 32 32-32-32-32z" />
              </svg>
              <h4 className="color-primary flex text-center text-lg md:text-base w-[170px] font-bold py-4">Adobe Experience Manager</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary color-secondary p-7 md:pb-15 md:pt-9 md:text-2xl border-b-4 border-b-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-3 pb-5 text-2xl md:text-3xl color-tertiary">Emerging Skills</h2>
          <h3 className="text-xl md:text-2xl col-span-6 mb-12">These are the skills and tools I am currently learning and expanding my knowledge in which I acquired from the <br/>University of Texas at Austin's Full Stack Software Development Certification Course:</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto mt-5">
            <div className="bg-white flex flex-col items-center rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-20 h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[98px] font-bold">AWS Cloud Practitioner</h4>
            </div>
            <div className="bg-white flex flex-col items-center justify-around rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-20 h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[48px] font-bold">React</h4>
            </div>
            <div className="bg-white flex flex-col items-center justify-around rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className="w-20 h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[55px] font-bold">Redux</h4>
            </div>
            <div className="bg-white flex flex-col items-center justify-around rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-20 h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[55px] font-bold">NodeJS</h4>
            </div>
            <div className="bg-white flex flex-col items-center justify-around rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" className="w-20 h-20" />
              <h4 className="color-primary flex text-center text-lg md:text-base w-[120px] font-bold">Node Package Manager</h4>
            </div>
            <div className="bg-white flex flex-col items-center justify-around rounded-xl py-4">
              <img src="/images/tailwindcss-mark.d52e9897.svg" alt="Tailwind Css" className="w-20 h-20" />
              <h4 className="color-primary flex text-center text-lg md:text-base w-[65px] font-bold">Tailwind CSS</h4>
            </div>
            <div className="bg-white flex flex-col items-center justify-around rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-20 h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[75px] font-bold">MongoDB</h4>
            </div>
            <div className="bg-white flex flex-col items-center justify-around rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB Compass" className="w-20 h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[75px] font-bold mt-2">Compass</h4>
            </div>
            <div className="bg-white flex flex-col items-center justify-around rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB Atlas" className="w-20 h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[45px] font-bold mt-2">Atlas</h4>
            </div>
            <div className="bg-white flex flex-col items-center justify-around rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" alt="Mongoose" className="w-20 h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[55px] font-bold">Mongoose</h4>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-xl py-4">
              <h4 className="color-primary flex text-lg md:text-base w-[55px] font-bold">Postman</h4>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-xl py-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-20 h-20" />
              <h4 className="color-primary flex text-lg md:text-base w-[65px] font-bold">MySQL</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}