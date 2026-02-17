import React from "react";

export default function Portfolio() {
  const experiences = [
    {
      year: "2026 - Present",
      role: "Mobile & Web Application Developer",
      company: "Remote • Hackathon & Independent Projects",
      description: [
        "Building the mobile application for ReflectAI, an AI-detection tool that analyzes uploaded images for AI-generated content percentage.",
        "Developing cross-platform mobile features using React Native.",
        "Building modern web applications using React and JavaScript.",
        "Designed and developed ShopLink, a solution helping small business owners in Nigeria share their product catalog through a single scalable link.",
        "Currently developing Portfolio v2 with improved UI architecture and performance optimization.",
      ],
    },
    {
      year: "2025",
      role: "React Native & Frontend Developer",
      company: "Independent Learning & Project Development",
      description: [
        "Transitioned into HTML, CSS, and JavaScript for modern frontend development.",
        "Built cross-platform applications using React Native.",
        "Developed onboarding screens for TripeGuide, a tourism-focused mobile application.",
        "Built a minimalist weather application to strengthen API integration and state management skills.",
        "Focused on reusable components and real-world mobile architecture.",
      ],
    },
    {
      year: "2023",
      role: "Self-Directed Development & API Integration",
      company: "Personal Projects",
      description: [
        "Built multiple side projects to strengthen practical development skills.",
        "Developed weather applications integrating third-party APIs.",
        "Improved understanding of asynchronous JavaScript and HTTP requests.",
        "Focused on writing cleaner, maintainable code.",
      ],
    },
    {
      year: "2022",
      role: "Flutter Developer Intern",
      company: "TerraHQ • Internship",
      description: [
        "Started software development journey with Dart programming language.",
        "Built cross-platform applications using Flutter.",
        "Assisted startups in developing and improving mobile application UI.",
        "Completed TerraHQ internship program successfully.",
        "Built foundational knowledge in mobile architecture and cross-platform development.",
      ],
    },
  ];
  return (
    <section id="portfolio" className="mx-24 sm:mt-36 md:-mt-20 mb-8">
      {/* Your portfolio content here */}
      <p className="text-[clamp(2rem,7vw,4.5rem)] font-bold text-gray-900 leading-[1.05] tracking-tighter mb-8 max-w-4xl">
        Professional Journey
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Year */}
            <p className="text-sm font-medium text-blue-600 mb-2">{exp.year}</p>

            {/* Role */}
            <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>

            {/* Company */}
            <p className="text-gray-500 mb-4">{exp.company}</p>

            {/* Description */}
            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-700 text-sm leading-relaxed flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
