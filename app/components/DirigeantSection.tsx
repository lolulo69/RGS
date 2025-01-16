import React from "react";
import Image from "next/image";
import person from "../images/person.jpg";

export const DirigeantSection = () => {
  return (
    <section
      id="dirigeant"
      className="mx-auto flex max-w-[90%] flex-col items-start py-16 pb-16 lg:pb-24 xl:max-w-7xl"
    >
      <h2 className="text-left font-title text-4xl leading-tight text-gray-800 lg:text-6xl">
        {`Le dirigeant`}
      </h2>

      <div className="mt-4 flex w-full flex-col items-center gap-4 lg:mt-8 lg:flex-row-reverse lg:gap-4">
        <div className="flex max-h-[400px] w-[50%] flex-col gap-2 lg:max-h-none">
          <Image
            src={person}
            alt="Photo de la personne en charge des contacts chez RDS"
            width={400}
            height={400}
            className="max-h-[400px] w-full object-contain"
          />
        </div>
        <p className="max-w-xl text-gray-600 lg:text-lg">
          À la tête de <b>RGS</b>, un ingénieur en travaux publics diplômé en
          2002, fort de plus de 20 ans d&#39;expérience dans le secteur. Une
          expertise solide et une passion pour le travail bien fait sont au cœur
          de chaque projet, garantissant un service de haute qualité à nos
          clients.
        </p>
      </div>
    </section>
  );
};
