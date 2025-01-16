import Image from "next/image";
import { ContactUsSection } from "./components/ContactUsSection";
import { DirigeantSection } from "./components/DirigeantSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import hero from "./images/hero.webp";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex max-w-[90%] flex-col xl:max-w-7xl">
        <div className="flex flex-col justify-between lg:my-8 lg:flex-row lg:items-center ">
          <h1 className="mb-4 animate-fadeInLeft text-center font-title text-[44px] leading-tight text-gray-800 lg:mb-0 lg:text-left lg:text-8xl lg:leading-10">
            Bienvenue
            <br className="hidden lg:block" />
            <span className="lg:ml-[360px]"> chez RGS</span>
          </h1>
          <div className="flex flex-col items-center gap-4 lg:max-w-[40%] lg:items-end">
            <p className="animate-fadeInRight text-gray-600 lg:text-lg">
              {`Votre partenaire de confiance pour le curage, la démolition et les travaux de rénovation dans le bâtiment.`}
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
              {`Qui sommes-nous ?`}
            </h2>
            <p className="text-gray-100 lg:text-lg">
              Chez <b>RGS</b>, nous mettons notre expertise et notre
              savoir-faire au service de vos projets de construction, de
              rénovation et de transformation. Spécialisés dans le <b>curage</b>
              , la <b>démolition intérieure</b> et des travaux de finition, nous
              intervenons avec rigueur et professionnalisme pour garantir des
              résultats à la hauteur de vos attentes.
              <br />
              <br />
              Notre mission : transformer vos espaces tout en respectant vos
              délais, vos budgets et les normes en vigueur.
            </p>
          </div>
          <div className="flex flex-col lg:max-w-[40%]">
            <h2 className="text-left font-title text-2xl leading-tight text-gray-100 lg:text-4xl">
              {`Pourquoi nous choisir ?`}
            </h2>
            <ul className="flex h-full list-inside list-disc flex-col justify-around text-gray-100 lg:text-lg">
              <li>
                <b>Expertise éprouvée</b> : Une équipe qualifiée avec une
                maîtrise complète des techniques de curage et de démolition.
              </li>
              <li>
                <b>Engagement environnemental</b> : Des pratiques durables avec
                un souci constant du recyclage et du réemploi.
              </li>
              <li>
                <b>Service clé en main</b> : De la planification à la
                réalisation, nous vous accompagnons à chaque étape.
              </li>
              <li>
                <b>Qualité et sécurité</b> : Des matériaux de haute qualité et
                des travaux réalisés dans le respect des normes.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ServicesSection />
      <ProjectsSection />
      <DirigeantSection />
      <ContactUsSection />
    </>
  );
}
