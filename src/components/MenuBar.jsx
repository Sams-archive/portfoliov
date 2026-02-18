import React from "react";
import App from "../App";

function MenuBar({ isOpen, setIsOpen }) {
  const year = new Date().getFullYear();

  return (
    <div
      className={`
    fixed top-0 right-0
 w-full sm:w-[220px] md:w-[420px]

    bg-gray-400
    z-50
    flex flex-col justify-between
    px-6 sm:px-12 pt-8 pb-10

    transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      <div>
        <div className="flex flex-row justify-between pb-6">
          <h3 className="text-gray-900 font-semibold">MENU</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-900 hover:text-blue-500 font-semibold sm:pb-6 md:pb-0 sm:-mb-5 md:mb-6"
          >
            Close X
          </button>
        </div>
        <ul className="space-y-3 flex flex-col">
          {[
            { name: "01. Home", link: "#header" },
            { name: "02. About", link: "#about" },
            { name: "03. Projects", link: "#projects" },
            { name: "04. Portfolio", link: "#portfolio" },
          ].map((item, index) => (
            <a
              onClick={() => setIsOpen(false)}
              href={item.link}
              className="text-white hover:text-blue-200 transition"
            >
              {item.name}
            </a>
          ))}
        </ul>
        <div className="pt-65">
          <h3 className="text-gray-900 sm:pb-6 md:pb-0 font-semibold sm:-mb-5 md:mb-6">
            Socials
          </h3>
          <div className="flex flex-col space-y-3">
            <ul className="space-y-3 flex flex-col">
              {[
                { name: "GITHUB", link: "https://github.com/Sams-archive/" },
                { name: "X", link: "https://x.com/iSam_son" },
                {
                  name: "LINKEDLN",
                  link: "https://www.linkedin.com/in/sampson-chika/",
                },
                { name: "MEDIUM", link: "https://medium.com/@chikasampson00" },
                { name: "EMAIL", link: "mailto:chikasampson00@gmail.com" },
              ].map((item, index) => (
                <a
                  onClick={() => setIsOpen(false)}
                  href={item.link}
                  className="text-white hover:text-blue-200 transition"
                >
                  {item.name}
                </a>
              ))}
            </ul>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-6 sm:pb-6 text-sm text-gray-500 text-center">
            © {year} Sampson Chika. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
