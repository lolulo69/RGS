import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 bg-sky-950 p-6 px-12 text-sm text-gray-200 md:flex-row md:px-24">
      <div className="mb-0 flex flex-row items-center gap-2 md:mb-4">
        <Image src={logo} alt="Logo de RGS" width={120} height={120} />
      </div>
      <div className="flex flex-col gap-2">
        <p>{"RGS - Bâtir l'avenir, démolir les limites."}</p>
        <p>© 2024 RGS. Tous droits réservés.</p>
      </div>
      <div className="flex flex-col justify-center gap-2 text-center md:text-left">
        <p>
          Adresse :{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=RGS+19+rue+Bernard+Ruyant+59110+La+Madeleine"
            target="_blank"
            className="underline"
          >
            19 rue Bernard Ruyant, 59110 La Madeleine
          </a>
        </p>
        <p>
          Téléphone :{" "}
          <a href="tel:+33670767575" className="underline">
            06 70 76 75 75
          </a>
        </p>
      </div>
    </footer>
  );
};
