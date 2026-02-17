import React from "react";
import Me from "../assets/me.png";

export default function Home() {
  return (
    <section id="home">
      <div className="flex flex-col  mx-20 my-19  ">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50/50 border border-green-100 w-60 mt-4 mb-4 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 overflow-hidden"></span>
            <span className="flex rounded-full h-2 w-2 bg-green-500 overflow-hidden"></span>
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
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Projects
              </a>
              <a href="https://calendly.com/chikasampson00/30min/">
                <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-500 transition-colors duration-300">
                  Schedule a Call
                </button>
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
        <div className="inline-flex flex-row gap-6 items-center mt-10 mb-4">
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
