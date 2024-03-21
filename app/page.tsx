import Image from "next/image";
import hero from "./images/hero.jpg";
import { ProjectsSection } from "./components/ProjectsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex max-w-[90%] flex-col md:max-w-7xl">
        <div className="flex flex-col justify-between md:my-8 md:flex-row md:items-center ">
          <h1 className="-mx-[3%] text-left font-title text-[42px] leading-tight text-gray-800 md:mx-0 md:text-7xl md:leading-tight">
            {`Bureau d'étude technique`}
            <br />
            {`Maître d'œuvre`}
          </h1>
          <div className="flex flex-col items-center gap-4 md:max-w-[40%] md:items-end">
            <p className="text-gray-600 md:text-lg">
              {`Chez RGS, nous transformons les visions en réalité. Avec plus de 4 années d'expertise dans le secteur de la construction, nous nous engageons à apporter excellence, innovation et sécurité à chaque projet.`}
            </p>
            <a
              href="#"
              className="w-fit rounded-xl bg-sky-950 px-4 py-2 text-base font-semibold text-gray-100 transition-colors duration-300 ease-in-out hover:bg-sky-900 hover:text-white md:text-lg"
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
          className="mt-6 h-[500px] w-full object-cover"
        />
      </main>
      <div className="-mt-28 bg-sky-900 pb-12 pt-32">
        <div className="items-top mx-auto flex max-w-[90%] flex-col justify-around gap-12 py-8 md:max-w-7xl md:flex-row md:gap-0">
          <div className="flex flex-col md:max-w-[40%]">
            <h2 className="text-left font-title text-2xl leading-tight text-gray-100 md:text-4xl">
              {`Nos services`}
            </h2>
            <p className="text-gray-100 md:text-lg">
              {`Chez RGS, nous offrons une gamme complète de services de conception et de construction pour répondre à tous vos besoins. De la planification initiale à la gestion de projet, nous sommes là pour vous aider à chaque étape du processus. Découvrez comment nous pouvons vous aider à réaliser vos rêves de construction dès aujourd'hui.`}
            </p>
          </div>
          <div className="flex flex-col md:max-w-[40%]">
            <h2 className="text-left font-title text-2xl leading-tight text-gray-100 md:text-4xl">
              {`Nos métiers`}
            </h2>
            <p className="text-gray-100 md:text-lg">
              {`Chez RGS, l'excellence se construit ensemble. Nos équipes sont au cœur de chaque projet, apportant leur savoir-faire unique pour répondre aux défis les plus complexes. Notre expertise s'étend à travers plusieurs domaines clés`}
            </p>
          </div>
        </div>
      </div>
      <ProjectsSection />
      <TestimonialsSection />
    </>
  );
}
