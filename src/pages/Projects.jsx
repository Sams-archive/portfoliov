import React from "react";
import Me from "../assets/me.png";
import Shoplink from "../assets/Shoplink.png";
import V2 from "../assets/v2.jpeg";
import V1 from "../assets/v1.png";
import Keeper from "../assets/kipa.png";

export default function Project() {
  const Projects = [
    {
      img: Shoplink,
      title: "Shoplink",
      description: ["A solution helping small business owners in Nigeria share their product catalog through a single scalable link."],
      btnText: "Link",
      demoText:"Demo",
      btnLink: "https://shoplink-orpin.vercel.app",
    },
    {
      img: V2,
      title: "Portfolio v2",
      description: ["Updated version of my portfolio website"],
      btnText: "link",
      demoText:"Demo",
      btnLink: "https://portfoliov-dusky.vercel.app/",
    },
    {
      img: V1,
      title: "Portfolio V1",
      description: ["My porfolio website, the very first of it's kind."],
      btnText: "Link",
      demoText:"Demo",
      btnLink: "https://portfolio-mu-lake-eg8tkvp4pi.vercel.app/",
    },
    {
      img: Keeper,
      title: "Keeper App",
      description: ["A minimalist todo app, that adds and delete todo"],
      btnText: "Link",
      demoText:"Demo",
      btnLink: "https://portfolio-mu-lake-eg8tkvp4pi.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="mx-24 pt-16 mb-18">
      <p className="text-[clamp(2rem,7vw,4.5rem)] font-bold text-gray-900 leading-[1.05] tracking-tighter mb-8 max-w-4xl">
        Featured <span className="text-blue-500"> Project</span>
      </p>
       <p className="text-gray-500 sm:text-left md:text-center text-lg leading-relaxed mb-8 max-w-2xl">
        An overview of some solutions i've built.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {Projects.map((Project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={Project.img}
              alt={Project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2"> {Project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {" "}
                {Project.description[0]}
              </p>
              <a
                href={Project.btnLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
              >
                {Project.btnText}
              </a>
               <a
                href="{project.btnLink}"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 ml-4 py-2 border border-black text-gray-500 rounded-lg text-sm hover:bg-gray-300 transition"
              >
                {Project.demoText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
