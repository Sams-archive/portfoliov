import React, { useState } from "react";
import App from "../App";

export default function Header({ setIsOpen }) {
  return (
    <section id="header">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pt-4 px-4 sm:px-6 md:px-24 h-16 md:h-23 w-full bg-white">
        <a
          href="#header"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold text-gray-900 cursor-pointer"
        >
          Sampson Chika
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
        >
          <span className="text-sm font-medium">Menu</span>

          <div className="flex flex-col gap-1">
            <span className="w-5 h-0.5 bg-current"></span>
            <span className="w-5 h-0.5 bg-current"></span>
          </div>
        </button>
      </div>
    </section>
  );
}
