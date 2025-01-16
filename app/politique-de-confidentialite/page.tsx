import React from "react";
import Link from "next/link";

const PolitiqueConfidentialite = () => {
  return (
    <main className="mx-auto flex max-w-[90%] flex-col gap-8 pb-16 xl:max-w-7xl">
      <h1 className="text-left font-title text-4xl leading-tight text-gray-800 lg:text-6xl">
        Politique de Confidentialité
      </h1>
      <section className="flex flex-col gap-8">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Collecte des données personnelles
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            Nous collectons des données personnelles via notre site web dans les
            cas suivants :
            <br />
            • Lorsque vous remplissez le formulaire de contact.
            <br />
            • Lors de l’utilisation des cookies sur notre site.
            <br />
            Les données collectées incluent : nom, prénom, numéro de téléphone
            et adresse IP.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Finalité des données
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            Les données personnelles collectées sont utilisées pour :
            <br />
            • Répondre à vos demandes via le formulaire de contact.
            <br />• Améliorer le fonctionnement du site (analyse statistique via
            cookies).
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Base légale de la collecte
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            La collecte de vos données repose sur :
            <br />
            • Votre consentement explicite.
            <br />• La nécessité de traiter vos demandes.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Partage des données
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            Nous ne partageons vos données qu’avec des sous-traitants techniques
            respectant les obligations du RGPD. Aucune donnée n’est vendue ou
            cédée à des tiers.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Durée de conservation des données
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            • Les données issues des formulaires de contact sont conservées
            pendant 1 an.
            <br />• Les cookies sont conservés pour une durée maximale de 13
            mois.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Vos droits
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            Conformément au RGPD, vous disposez des droits suivants :
            <br />
            • Accéder à vos données personnelles.
            <br />
            • Rectifier vos données.
            <br />
            • Supprimer vos données.
            <br />
            • Limiter le traitement de vos données.
            <br />• Porter plainte auprès de la CNIL.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Gestion des cookies
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            Nous utilisons des cookies pour améliorer votre expérience sur notre
            site. Vous pouvez accepter ou refuser les cookies via notre bandeau
            de consentement.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Contact pour exercer vos droits
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            Pour toute demande concernant vos données personnelles,
            contactez-nous via notre{" "}
            <Link href="/contact" className="text-blue-500 underline">
              page de contact
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default PolitiqueConfidentialite;
