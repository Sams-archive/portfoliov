import React from "react";


export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between mx-16 h-23 ml-0 pl-24 pr-30 px-8 w-full bg-white ">
      
      <a
        href="#home"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-xl font-bold text-gray-900 cursor-pointer"
      >
        Sampson Chika
      </a>

      <button
        
        className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
      >
        <span className="text-sm font-medium">Menu</span>

        <div className="flex flex-col gap-1">
          <span className="w-5 h-0.5 bg-current"></span>
          <span className="w-5 h-0.5 bg-current"></span>
        </div>
      </button>

    </div>
  );
}
