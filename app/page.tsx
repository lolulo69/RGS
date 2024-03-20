import Image from "next/image";
import hero from "./images/hero.jpg";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <>
      <main className="flex flex-col md:max-w-7xl max-w-[90%] mx-auto">
        <div className="flex md:flex-row flex-col justify-between md:items-center md:my-8 ">
          <h1 className="md:text-7xl text-[42px] font-title text-left text-gray-800 md:leading-tight leading-tight -mx-[3%] md:mx-0">
            {`Bureau d'étude technique`}
            <br />
            {`Maître d'œuvre`}
          </h1>
          <div className="md:max-w-[40%] flex flex-col md:items-end items-center gap-4">
            <p className="md:text-lg text-gray-600">
              {`Chez RGS, nous transformons les visions en réalité. Avec plus de 4 années d'expertise dans le secteur de la construction, nous nous engageons à apporter excellence, innovation et sécurité à chaque projet.`}
            </p>
            <a
              href="#"
              className="text-gray-100 text-lg font-bold bg-blue-950 rounded-xl py-2 px-4 hover:bg-blue-900 hover:text-white transition-colors duration-300 ease-in-out w-fit"
            >
              {`Contactez nous`}
            </a>
          </div>
        </div>
        <Image
          src={hero}
          alt="Bureau d'étude technique"
          width={1920}
          height={1080}
          className="object-cover w-full h-[500px] mt-6"
        />
      </main>
      <div className="-mt-28 pt-32 pb-12 bg-blue-900">
        <div className="flex md:flex-row flex-col justify-around items-top py-8 md:max-w-7xl max-w-[90%] mx-auto gap-12 md:gap-0">
          <div className="flex flex-col md:max-w-[40%]">
            <h2 className="md:text-4xl text-2xl font-title text-left text-gray-100 leading-tight">
              {`Nos services`}
            </h2>
            <p className="md:text-lg text-gray-100">
              {`Chez RGS, nous offrons une gamme complète de services de conception et de construction pour répondre à tous vos besoins. De la planification initiale à la gestion de projet, nous sommes là pour vous aider à chaque étape du processus. Découvrez comment nous pouvons vous aider à réaliser vos rêves de construction dès aujourd'hui.`}
            </p>
          </div>
          <div className="flex flex-col md:max-w-[40%]">
            <h2 className="md:text-4xl text-2xl font-title text-left text-gray-100 leading-tight">
              {`Nos métiers`}
            </h2>
            <p className="md:text-lg text-gray-100">
              {`Chez RGS, l'excellence se construit ensemble. Nos équipes sont au cœur de chaque projet, apportant leur savoir-faire unique pour répondre aux défis les plus complexes. Notre expertise s'étend à travers plusieurs domaines clés`}
            </p>
          </div>
        </div>
      </div>
      <ProjectsSection />
    </>
  );
}
