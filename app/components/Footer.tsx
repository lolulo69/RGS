import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-center gap-8 bg-sky-950 p-3 px-6">
      <div className="flex flex-row items-center gap-2">
        <Image src={logo} alt="Logo de RGS" width={120} height={120} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-200">
          {"RGS - Construire l'avenir, démolir les limites."}
        </p>
        <p className="text-gray-200">© 2024 RGS. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
