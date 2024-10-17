import React from "react";
import Image from "next/image";
import person from "../images/person.jpg";
import { ContactForm } from "../components/ContactForm";

const page: React.FC = () => {
  return (
    <main className="mx-auto flex max-w-[90%] flex-col xl:max-w-6xl">
      <h1 className="mb-8 text-4xl font-bold text-gray-800 lg:mb-2">
        Contactez-nous
      </h1>
      <div className="flex h-fit flex-col justify-between gap-6 pb-20 lg:my-8 lg:flex-row lg:items-start">
        <div className="flex max-h-[400px] flex-col gap-2 lg:max-h-none">
          <Image
            src={person}
            alt="Photo de la personne en charge des contacts chez RDS"
            width={400}
            height={400}
            className="max-h-[400px] w-full object-cover"
          />
        </div>

        <ContactForm />
      </div>
    </main>
  );
};

export default page;
