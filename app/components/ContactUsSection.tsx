import React from "react";

export const ContactUsSection = () => {
  return (
    <section id="contact" className="w-full bg-gray-100">
      <div className="mx-auto flex max-w-[90%] flex-col items-start py-16 pb-24 xl:max-w-7xl">
        <h2 className="text-left font-title text-4xl leading-tight text-gray-800 lg:text-6xl">
          {`Prêt à concrétiser vos projets ?`}
        </h2>
        <p className="mt-2 text-gray-600 lg:text-lg">
          <b>Contactez-nous dès aujourd&#39;hui</b> pour discuter de vos besoins
          et obtenir un devis personnalisé. Nous sommes à votre disposition pour
          transformer vos idées en réalité !
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
    </section>
  );
};
