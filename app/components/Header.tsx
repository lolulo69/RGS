import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { NavDrawer } from "./NavDrawer";

export const Header = () => {
  return (
    <header className="mx-auto mb-8 flex flex-row items-center justify-between bg-sky-950 p-3 px-6 md:my-8 md:max-w-[90%] md:animate-in xl:max-w-7xl">
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
          href="/actualites"
          className="rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900"
        >
          Actualités
        </a>
        <a
          href="/projets"
          className="rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900"
        >
          Projets
        </a>
        <a
          href="/contact"
          className="rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900"
        >
          Contact
        </a>
      </nav>
      <div className="flex w-[40px] justify-end">
        <NavDrawer />
      </div>
    </header>
  );
};
