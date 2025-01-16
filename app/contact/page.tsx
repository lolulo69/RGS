import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { ContactForm } from "../components/ContactForm";

const page: React.FC = () => {
  return (
    <main className="mx-auto flex max-w-[90%] flex-col xl:max-w-6xl">
      <h1 className="mb-8 text-4xl font-bold text-gray-800 lg:mb-2">
        Contactez-nous
      </h1>
      <div className="flex h-fit flex-col justify-between gap-6 pb-20 lg:my-8 lg:flex-row lg:items-start">
        <div className="flex max-h-[300px] flex-col gap-2 lg:max-h-none">
          <Image
            src={logo}
            alt="Logo de l'entreprise RGS"
            width={300}
            height={300}
            className="max-h-[300px] w-full object-cover lg:max-h-[400px]"
          />
        </div>

        <ContactForm />
      </div>
    </main>
  );
};

export default page;
