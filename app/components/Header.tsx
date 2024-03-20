import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center max-w-7xl mx-auto bg-sky-950 p-3 px-6 md:my-8 mb-8">
      <div className="flex flex-row items-center gap-2">
        <Image src={logo} alt="Logo de RGS" width={40} height={40} />
      </div>

      <nav className="md:flex hidden flex-row gap-8 ">
        <a href="/" className="text-gray-200">
          Accueil
        </a>
        <a href="#" className="text-gray-200">
          Services
        </a>
        <a href="#" className="text-gray-200">
          Projets
        </a>
        <a href="#" className="text-gray-200">
          Contact
        </a>
      </nav>
      <div className="w-[40px] flex justify-end">
        <button className="text-gray-200 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
