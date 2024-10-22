import Image from "next/image";
import hero from "./images/hero.webp";
import { ProjectsSection } from "./components/ProjectsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ActualitesSection } from "./components/ActualitesSection";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex max-w-[90%] flex-col xl:max-w-7xl">
        <div className="flex flex-col justify-between lg:my-8 lg:flex-row lg:items-center ">
          <h1 className="animate-fadeInLeft text-left font-title text-[44px] leading-tight text-gray-800 lg:text-7xl lg:leading-tight">
            {`Bâtir l'avenir`}
            <br />
            {`Démolir les limites`}
          </h1>
          <div className="flex flex-col items-center gap-4 lg:max-w-[40%] lg:items-end">
            <p className="animate-fadeInRight text-gray-600 lg:text-lg">
              {`Entreprise RGS est spécialisé dans la démolition, le curage, la déconstruction sélective, l'isolation des planchers, dalles et murs, ainsi que la fourniture et la pose de menuiseries extérieures. Nous sommes déterminés à utiliser des pratiques durables et respectueuses de l'environnement.`}
            </p>
            <a
              href="/contact"
              className="w-fit transform-gpu animate-pop rounded-xl bg-sky-950 px-4 py-2 text-base font-semibold text-gray-100 transition-colors duration-300 ease-in-out hover:bg-sky-900 hover:text-white lg:text-lg"
            >
              {`Contactez nous`}
            </a>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src={hero}
            loading="eager"
            alt="Bureau d'étude technique"
            width={1920}
            height={1080}
            className="mt-6 h-[500px] w-full animate-zoom-out object-cover"
          />
        </div>
      </main>
      <div className="-mt-28 bg-sky-900 pb-12 pt-32">
        <div className="items-top mx-auto flex max-w-[90%] animate-appear flex-col justify-around gap-12 py-8 delay-200 lg:max-w-7xl lg:flex-row lg:gap-0">
          <div className=" flex flex-col lg:max-w-[40%]">
            <h2 className="text-left font-title text-2xl leading-tight text-gray-100 lg:text-4xl">
              {`Notre mission`}
            </h2>
            <p className="text-gray-100 lg:text-lg">
              {`Offrir des solutions spécifiques et durables pour répondre aux besoins actuels et futurs de nos clients.`}
            </p>
          </div>
          <div className="flex flex-col lg:max-w-[40%]">
            <h2 className="text-left font-title text-2xl leading-tight text-gray-100 lg:text-4xl">
              {`Notre vision`}
            </h2>
            <p className="text-gray-100 lg:text-lg">
              {`Être reconnu pour notre expertise technique et notre engagement environnemental dans chaque projet.`}
            </p>
          </div>
        </div>
      </div>
      <ActualitesSection />
      <ProjectsSection />
      <TestimonialsSection />
    </>
  );
}
