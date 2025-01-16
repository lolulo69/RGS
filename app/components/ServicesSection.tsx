import React from "react";

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="mx-auto flex max-w-[90%] flex-col items-start py-16 pb-0 lg:pb-24 xl:max-w-7xl"
    >
      <h2 className="text-left font-title text-4xl leading-tight text-gray-800 lg:text-6xl">
        {`Nos services`}
      </h2>

      <ul className="mt-4 flex list-disc flex-col gap-2 pl-8 text-base text-gray-600 lg:mt-8 lg:gap-4 lg:pl-12 lg:text-lg">
        <li>
          <b>Curage et Démolition Intérieure</b>
          <br />
          Préparation minutieuse de vos espaces pour accueillir vos nouveaux
          projets.
        </li>
        <li>
          <b>Ouvertures dans les Murs Porteurs et Non-Porteurs</b>
          <br />
          Étude, calcul, fourniture et pose de linteaux pour garantir sécurité
          et durabilité.
        </li>
        <li>
          <b>Déconstruction Sélective et Réemploi des Matériaux</b>
          <br />
          Une approche écoresponsable qui favorise le tri, le recyclage et le
          réemploi.
        </li>
        <li>
          <b>Construction de Dalles Béton Intérieures et Extérieures</b>
          <br />
          Dalles solides et durables, adaptées à vos besoins spécifiques.
        </li>
        <li>
          <b>Isolation des Dalles, Planchers et Murs</b>
          <br />
          Solutions sur mesure pour un confort thermique et acoustique optimal.
        </li>
        <li>
          <b>Création de Cloisons Intérieures</b>
          <br />
          Aménagement de vos espaces avec des cloisons esthétiques et
          fonctionnelles.
        </li>
        <li>
          <b>Fourniture et Pose de Menuiseries Extérieures (Alu, Bois, PVC)</b>
          <br />
          Des installations modernes, performantes et résistantes.
        </li>
      </ul>
    </section>
  );
};
