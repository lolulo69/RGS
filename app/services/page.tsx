import React from "react";
import Image from "next/image";

const page = () => {
  const services = [
    {
      title: "Curage et Démolition Intérieure",
      description:
        "Spécialisés dans le curage et la démolition intérieure, nous intervenons sur tous types de bâtiments pour préparer vos espaces à de nouvelles transformations. Nos équipes assurent un travail propre, précis et respectueux des structures existantes, garantissant ainsi un environnement sûr et prêt pour vos projets de rénovation ou de construction.",
      image: "/images/curage.webp", // Replace with your image path
    },
    {
      title: "Création d'Ouvertures dans les Murs Porteurs et Non-Porteurs",
      description:
        "Nous réalisons des ouvertures dans les murs porteurs et non-porteurs pour répondre à vos besoins architecturaux ou d’aménagement :\n\n● Étude et calculs préalables pour garantir la solidité de la structure.\n● Fourniture et pose de linteaux adaptés à chaque projet, assurant la sécurité et la durabilité.\n\nQue ce soit pour agrandir une pièce, créer de nouvelles entrées ou installer des baies vitrées, nous vous accompagnons à chaque étape.",
      image: "/images/ouvertures.jpg", // Replace with your image path
    },
    {
      title: "Déconstruction Sélective et Réemploi des Matériaux",
      description:
        "Engagés dans une démarche écoresponsable, nous privilégions une déconstruction sélective :\n\n● Tri des matériaux directement sur site.\n● Réemploi ou recyclage pour limiter les déchets et réduire l’impact environnemental.\n\nUne solution durable et économique pour vos projets de rénovation ou de démolition.",
      image: "/images/deconstruction.jpg", // Replace with your image path
    },
    {
      title: "Construction de Dalles Béton Intérieures et Extérieures",
      description:
        "Nous concevons et réalisons des dalles béton adaptées à vos besoins :\n\n● Dalles intérieures pour rénover vos planchers ou créer des surfaces solides dans vos bâtiments.\n● Dalles extérieures pour terrasses, parkings ou allées.\n\nNos dalles sont réalisées dans les règles de l’art pour garantir une finition parfaite et une longévité optimale.",
      image: "/images/dalles.webp", // Replace with your image path
    },
    {
      title: "Isolation des Dalles et des Planchers",
      description:
        "Pour assurer un confort thermique et acoustique optimal, nous proposons :\n\n● Isolation des dalles pour limiter les déperditions énergétiques.\n● Isolation des planchers, adaptée à la nature de votre bâtiment et de vos projets.\n\nNos solutions respectent les normes en vigueur tout en s’intégrant parfaitement dans votre chantier.",
      image: "/images/isolation-dalles.jpg", // Replace with your image path
    },
    {
      title: "Isolation des Murs et Création de Cloisons Intérieures",
      description:
        "Nous transformons vos espaces en apportant confort et fonctionnalité :\n\n● Isolation des murs pour améliorer l’efficacité énergétique et l’acoustique de vos bâtiments.\n● Création de cloisons intérieures, personnalisées selon vos besoins (séparation de pièces, bureaux, etc.).\n\nDes matériaux de haute qualité pour des résultats durables et esthétiques.",
      image: "/images/cloisons.jpg", // Replace with your image path
    },
    {
      title: "Fourniture et Pose de Menuiseries Extérieures (Alu, Bois et PVC)",
      description:
        "Que vous souhaitiez moderniser vos bâtiments ou renforcer leur performance énergétique, nous vous proposons :\n\n● Une large gamme de menuiseries extérieures en aluminium, bois et PVC.\n● Une installation soignée pour des fenêtres, portes ou baies vitrées parfaitement adaptées.\n\nNous assurons des finitions impeccables et une résistance optimale face aux intempéries.",
      image: "/images/menuiseries.jpg", // Replace with your image path
    },
  ];

  return (
    <main className="mx-auto flex max-w-[90%] flex-col gap-8 pb-16 xl:max-w-7xl">
      <h1 className="text-left font-title text-4xl leading-tight text-gray-800 lg:text-6xl">
        Nos Services
      </h1>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-lg border p-4 shadow-lg"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h2>
            <p className="whitespace-pre-line text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
