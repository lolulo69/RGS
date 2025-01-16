import React from "react";

const engagements = [
  {
    title: "Qualité et Professionnalisme",
    description:
      "Nous garantissons un travail impeccable à chaque étape de votre projet, en utilisant des matériaux de haute qualité et des techniques éprouvées. Nos équipes, expérimentées et qualifiées, s’assurent que chaque détail soit exécuté avec rigueur et précision.",
  },
  {
    title: "Respect des Délais et du Budget",
    description:
      "Nous comprenons l'importance du temps et des coûts dans la réussite de vos projets. Nous planifions nos interventions avec soin pour respecter vos contraintes et vous offrir un service efficace, sans surprise.",
  },
  {
    title: "Sécurité sur les Chantiers",
    description:
      "La sécurité est notre priorité absolue. Nous respectons scrupuleusement les normes en vigueur et mettons en place toutes les mesures nécessaires pour garantir la protection des personnes et des biens sur chaque chantier.",
  },
  {
    title: "Engagement Environnemental",
    description:
      "Conscients de l’impact de nos activités, nous adoptons une démarche écoresponsable :\n● Déconstruction sélective et tri des matériaux.\n● Promotion du recyclage et du réemploi.\n● Réduction de notre empreinte écologique dans toutes nos interventions.",
  },
];

const valeurs = [
  {
    title: "Expertise",
    description:
      "Nous mettons à profit notre savoir-faire pour répondre aux défis les plus complexes. Notre objectif : dépasser vos attentes à chaque projet.",
  },
  {
    title: "Transparence",
    description:
      "Nous privilégions une communication claire et honnête. Vous êtes informé à chaque étape de l’avancement de votre projet, pour une collaboration basée sur la confiance.",
  },
  {
    title: "Engagement Client",
    description:
      "Votre satisfaction est notre priorité. Nous restons à votre écoute pour comprendre vos besoins et vous proposer des solutions sur mesure.",
  },
  {
    title: "Innovation",
    description:
      "Nous nous efforçons d’intégrer les meilleures pratiques et technologies dans nos méthodes de travail pour vous offrir des solutions modernes et performantes.",
  },
];

const page = () => {
  return (
    <main className="flex flex-col gap-4 pb-16">
      <div className="mx-auto flex max-w-[90%] flex-col gap-4 xl:max-w-7xl">
        <h1 className="text-left font-title text-4xl leading-tight text-gray-800 lg:text-6xl">
          Nos Engagements et Valeurs
        </h1>
        <p className="text-gray-600">
          Chez <b>RGS</b>, nous plaçons vos attentes et la qualité de nos
          prestations au cœur de nos priorités.
          <br />
          Notre approche repose sur des engagements solides et des valeurs qui
          guident chacune de nos actions.
        </p>
        <section className="mt-4 flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 lg:mb-2">
              Nos Engagements
            </h2>
            {engagements.map((engagement, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {`${index + 1}. ${engagement.title}`}
                </h3>
                <p className="whitespace-pre-line text-gray-600">
                  {engagement.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 lg:mb-2">
              Nos Valeurs
            </h2>
            {valeurs.map((valeur, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {`${index + 1}. ${valeur.title}`}
                </h3>
                <p className="text-gray-600">{valeur.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-8 bg-sky-900 py-8">
        <div className="mx-auto max-w-[90%] xl:max-w-7xl">
          <h2 className="mb-2 text-xl font-semibold text-gray-100">
            Un Partenaire de Confiance
          </h2>
          <p className="text-gray-100">
            Choisir <b>RGS</b>, c&#39;est opter pour un partenaire fiable,
            engagé et passionné par son métier. Que ce soit pour des travaux de
            curage, de démolition ou de rénovation, nous mettons tout en œuvre
            pour bâtir une relation de confiance durable avec nos clients.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-[90%] flex-col gap-4 xl:max-w-7xl">
        <div className="lg:mt-8">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Prêts à travailler ensemble ?
          </h2>
          <p className="text-gray-600">
            <b>Contactez-nous dès aujourd&#39;hui</b> pour en savoir plus sur
            nos engagements et discuter de vos projets.
          </p>
          <div className="mt-8 flex w-full items-center justify-center">
            <a
              href="/contact"
              className="w-fit rounded-xl bg-sky-950 px-4 py-2 text-base font-semibold text-gray-100 transition-colors duration-300 ease-in-out hover:bg-sky-900 hover:text-white lg:text-lg"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
