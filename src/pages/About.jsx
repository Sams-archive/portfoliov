import React from "react";
export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Tailwind CSS", "API Integration"],
    },
    {
      category: "Mobile",
      items: ["Dart", "Flutter", "React Native"],
    },
    {
      category: "Tools",
      items: ["Git & GitHub", "Vercel", "Figma"],
    },
  ];

  return (
    <section id="about" className=" flex items-center justify-center mx-4 pt-20 md:pt-24 sm:-mt-55 md:-mt-85">
      <div className="flex flex-col mx-18 h-screen md:flex-row items-center sm:mt-40 gap-8 md:gap-16 mb-8">
        <div className="item-left">
          <p className="text-[clamp(2rem,7vw,4.5rem)] font-bold text-gray-900 leading-[1.05] tracking-tighter mb-2 max-w-4xl">
            Passionate about building
            <span className="text-blue-600"> scalable digital experiences</span>
          </p>
          <p className=" text-gray-500 text-left text-lg leading-relaxed mb-8 max-w-2xl">
            With over 4 years of experience in mobile and web application
            development, I specialize in creating high-performance,
            cross-platform solutions using Flutter, React, and modern JavaScript
            technologies. My expertise includes responsive UI design with
            Tailwind CSS, efficient state management, and collaborative
            development using Git and GitHub — enabling me to deliver clean,
            maintainable, and production-ready applications.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border-gray-200 text-gray border rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <img
                src="https://img.icons8.com/ios/50/000000/github--v1.png"
                alt="GitHub"
                className="w-4 h-4 mr-2 cursor-pointer hover:text-gray-600 transition-colors"
              />
              GitHub
            </a>

            <button className="px-6 py-3 border border-gray-200 text-gray-800 rounded-lg hover:bg-gray-500 transition-colors duration-300">
              Email Me
            </button>
          </div>
        </div>

        {/*THE CARDS PART*/}
        <div
          className="flex flex-col gap-8 md:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={index}
              className="flex flex-col items-start px-6 py-5 border border-gray-300 rounded-xl shadow-sm"
            >
              <h3 className="mb-4 text-lg font-semibold text-blue-600">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm border border-gray-400 rounded-full hover:bg-gray-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
