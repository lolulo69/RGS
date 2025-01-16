import React from "react";

const MentionsLegales = () => {
  return (
    <main className="mx-auto flex max-w-[90%] flex-col gap-8 pb-16 xl:max-w-7xl">
      <h1 className="text-left font-title text-4xl leading-tight text-gray-800 lg:text-6xl">
        Mentions Légales
      </h1>
      <section className="flex flex-col gap-8">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Informations sur l&apos;éditeur du site
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            • Nom de l&apos;entreprise : RGS
            <br />
            • Forme juridique : SARL
            <br />
            • Capital social : 1000€
            <br />
            • Siège social : 91 Rue Louis Blériot 59130 LAMBERSART
            <br />
            • RCS (Registre du Commerce et des Sociétés) : 901 988 113
            <br />
            • Numéro de TVA intracommunautaire : FR 68901988113
            <br />• Nom du représentant légal : Radu SUSCA
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Informations sur l&apos;hébergeur du site
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            • Nom de l’hébergeur : Vercel
            <br />
            • Adresse : 650 California St San Francisco, CA 94108
            <br />• Numéro de téléphone : +1 951-383-6898
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Contact</h2>
          <p className="whitespace-pre-line text-gray-600">
            • Email : rg@rgs-sas.fr
            <br />
            • Téléphone : 06 70 76 75 75
            <br />• Adresse : 44, Rue du Cimetière 59110 La Madeleine
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Propriété intellectuelle
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            Le contenu du site RGS (textes, images, graphismes, logo, etc.) est
            protégé par le droit d’auteur. Toute reproduction, représentation,
            modification, publication, adaptation de tout ou partie des éléments
            du site, quel que soit le moyen ou le procédé utilisé, est
            interdite, sauf autorisation écrite préalable.
          </p>
        </div>
      </section>
    </main>
  );
};

export default MentionsLegales;
