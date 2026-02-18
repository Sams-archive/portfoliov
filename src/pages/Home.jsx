import React from "react";
import Me from "../assets/me.png";

export default function Home() {
  return (
    <section id="home" className="relative z-10">
      <div className="flex flex-col px-4 sm:px-6 md:mx-20 my-8 md:mt-22">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50/50 border border-green-100 w-60 mt-4 mb-4 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>

          <span className="text-sm font-medium text-green-700">
            Available for new projects
          </span>
        </div>

        {/* DIV CONTAINING THE TWO TEXTS PARAGRAPHS AND MY IMAGE*/}
        {/* Changed flex-row to flex-col for mobile, added md:flex-row for desktop */}
        <div className="flex flex-col  md:flex-row items-center mt-4 gap-8 md:gap-16 mb-8">
          <div className="text-left">
            {" "}
            {/* Ensures text stays left-aligned */}
            <p className="text-[clamp(2rem,7vw,4.5rem)] font-bold text-gray-900 leading-[1.05] tracking-tighter mb-8 max-w-4xl">
              <span className="block">Building scalable applications,</span>
              <span className="text-blue-600 block md:inline">
                across mobile
              </span>{" "}
              <span className="text-blue-600 block">and web platforms.</span>
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
              <span className="block">
                Mobile & Frontend Web Developer passionate about building
              </span>
              <span className="inline">
                scalable solutions with seamless user experiences.
              </span>
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-500 border-gray-200 text-white border rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Projects
              </a>
              <a
                href="https://calendly.com/chikasampson00/30min/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-500 transition-colors duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* THE IMAGE PART: Added w-full for mobile, md:w-96 for desktop */}
          <img
            src={Me}
            alt="Hero"
            className="w-full max-w-sm md:w-96 h-auto rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 object-cover grayscale"
          />
        </div>
        {/* SOCIAL MEDIA ICONS */}
        <div className="flex flex-wrap gap-4 items-center mt-10 mb-4">
          <p className="text-gray-500 text-sm leading-relaxed  max-w-2xl">
            {" "}
            Innovative Developer
          </p>
          {/* location image */}
          {/* <img src="https://img.icons8.com/ios/50/000000/location--v1.png" alt="Location" className="w-4 h-4"/> */}

          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
            {" "}
            Port Harcourt, Nigeria
          </p>
          <a href="https://github.com/Sams-archive/">
            <img
              src="https://img.icons8.com/ios/50/000000/github--v1.png"
              alt="GitHub"
              className="w-4 h-4 cursor-pointer hover:text-gray-600 transition-colors"
            />
          </a>
          <a href="https://www.linkedin.com/in/sampson-chika/">
            <img
              src="https://img.icons8.com/ios/50/000000/linkedin--v1.png"
              alt="LinkedIn"
              className="w-4 h-4 cursor-pointer hover:text-gray-600 transition-colors"
            />
          </a>
          <a href="https://x.com/iSam_son">
            <img
              src="https://img.icons8.com/ios/50/000000/x--v1.png"
              alt="Twitter"
              className="w-4 h-4 cursor-pointer hover:text-gray-600 transition-colors"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
