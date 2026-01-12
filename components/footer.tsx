"use client";

import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) { copyrightElement.textContent = `© ${new Date().getFullYear()} Michael J. Thompson`; }
  }, []);

  return (
    <footer className="bg-secondary color-black px-4 py-4 md:text-3xl border-b-4 border-b-[var(--color-tertiary)] flex">
      <div className="max-w-7xl mx-auto flex-1 flex justify-between flex-col sm:flex-row h-23 sm:h-12 items-start sm:items-center">
        <div className="bord">
          <a href="mailto:mikethompson100@hotmail.com" title="email" target="_blank">
            <svg className="h-12 w-12 text-gray-600 inline me-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span className="sr-only">"Email Michael J Thompson"</span>
          </a>
          <a href="https://www.mikethompson100.com/pdf/resume_pt_121525.pdf" title="resume" target="_blank" aria-label="Link to the resume of michael thompson"><svg className="h-12 w-12 text-gray-600 inline me-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          </a>
          <a href="https://github.com/mikethompson100/mikethompson-nextjs" target="_blank"><img src="https://www.mikethompson100.com/images/external/github-mark.png" className="w-10 inline me-4" alt="link to github portfolio for this site" />
          </a>
          <a href="https://www.linkedin.com/in/mikethompson100/" target="_blank"><img src="https://www.mikethompson100.com/images/external/In-Blue-40.png" className="w-11 inline" alt="link to the linked in profile of Michael J Thompson" />
          </a>
        </div>
        <div id="copyright" className="text-lg flex items-start sm:items-center"></div>
      </div>
    </footer>
  );
};

export default Footer;