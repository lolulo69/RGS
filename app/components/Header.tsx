import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";

export const Header = () => {
  return (
    <header className="mx-auto mb-8 flex max-w-7xl flex-row items-center justify-between bg-sky-950 p-3 px-6 md:my-8">
      <div className="flex flex-row items-center gap-2">
        <Image src={logo} alt="Logo de RGS" width={40} height={40} />
      </div>

      <nav className="hidden flex-row gap-0 md:flex ">
        <a
          href="/"
          className="rounded-sm p-3 px-5 font-medium text-gray-200 transition-colors ease-in hover:bg-sky-900"
        >
          Accueil
        </a>
        <a
          href="#"
          className="rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900"
        >
          Services
        </a>
        <a
          href="#projets"
          className="rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900"
        >
          Projets
        </a>
        <a
          href="#"
          className="rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900"
        >
          Contact
        </a>
      </nav>
      <div className="flex w-[40px] justify-end">
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
