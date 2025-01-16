"use client";
import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { NavDrawer } from "./NavDrawer";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="mx-auto mb-8 flex flex-row items-center justify-between bg-sky-950 p-3 px-6 lg:my-8 lg:max-w-[90%] lg:animate-in xl:max-w-7xl">
      <div className="flex flex-row items-center gap-2">
        <Image src={logo} alt="Logo de RGS" width={40} height={40} />
      </div>

      <nav className="hidden flex-row gap-0 lg:flex ">
        <a
          href="/"
          className={`rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900 ${pathname === "/" ? "font-medium" : ""}`}
        >
          Accueil
        </a>
        <a
          href="/services"
          className={`rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900 ${pathname === "/services" ? "font-medium" : ""}`}
        >
          Nos services
        </a>
        <a
          href="/realisations"
          className={`rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900 ${pathname === "/realisations" ? "font-medium" : ""}`}
        >
          Réalisations
        </a>
        <a
          href="/engagements-et-valeurs"
          className={`rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900 ${pathname === "/engagements-et-valeurs" ? "font-medium" : ""}`}
        >
          Engagement & valeurs
        </a>
        <a
          href="/avis"
          className={`rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900 ${pathname === "/avis" ? "font-medium" : ""}`}
        >
          Avis
        </a>
        <a
          href="/contact"
          className={`rounded-sm p-3 px-5 text-gray-200 transition-colors ease-in hover:bg-sky-900 ${pathname === "/contact" ? "font-medium" : ""}`}
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
