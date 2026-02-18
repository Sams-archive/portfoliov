

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();



  return (
    <footer className="bg-gray-350 border-t text-gray-300">
      <div className="max-w-7xl px-4 sm:px-6 md:mx-16 pt-10">

       <div className="grid gap-12 md:grid-cols-3">


          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Let's Connect
            </h2>

            <p className="text-3xl font-bold text-blue-500 mb-4">
              +234 810 094 2474
            </p>

            <p className="text-gray-400 mb-6">
              chikasampson00@gmail.com
            </p>

            <p className="text-sm text-gray-600">
              Port Harcourt, Nigeria (GMT+1)
            </p>
          </div>

          {/* Middle Section */}
          <div >
            <h3 className="text-gray-900 font-semibold sm:pb-6 md:pb-0 sm:-mb-5 md:mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#header" className="text-blue-500 hover:text-blue-200 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-500 hover:text-blue-200 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-blue-500 hover:text-blue-200 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-blue-500 hover:text-blue-200 transition">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-gray-900 sm:pb-6 md:pb-0 font-semibold sm:-mb-5 md:mb-6">Socials</h3>
            <div className="flex flex-col space-y-3">
              <a href="https://github.com/Sams-archive/" className="text-blue-500 hover:text-blue-200 transition">
                GitHub
              </a>
              <a href="https://x.com/iSam_son" className=" text-blue-500 hover:text-blue-200 transition">
                X / Twitter
              </a>
              <a href="https://www.linkedin.com/in/sampson-chika/" className="text-blue-500 hover:text-blue-200 transition">
                LinkedIn
              </a>
              <a href="https://medium.com/@chikasampson00" className="text-blue-500 hover:text-blue-200 transition">
                Medium
              </a>
              <a href="mailto:chikasampson00@gmail.com" className="text-blue-500 hover:text-blue-200 transition">
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mt-12 pt-6 sm:pb-6 text-sm text-gray-500 text-center">
          © {year} Sampson Chika. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

