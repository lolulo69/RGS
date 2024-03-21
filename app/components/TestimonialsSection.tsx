import React from "react";
import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full bg-gray-100">
      <div className="mx-auto flex max-w-[90%] flex-col items-start py-12 md:max-w-7xl">
        <h2 className="text-left font-title text-4xl leading-tight text-gray-800 md:text-6xl">
          {`Ils parlent de nous`}
        </h2>
        <div className="mt-8 flex w-full flex-col flex-wrap items-center justify-between gap-4 md:flex-row">
          <div className="flex w-full flex-col border border-gray-800 p-6 px-10 md:max-w-[48%]">
            <p className="text-gray-500">
              {`Chez RGS, nous avons trouvé un partenaire de confiance pour nos projets de construction. Leur expertise et leur professionnalisme ont été inestimables pour nous.`}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                  alt="Client"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{`John Doe`}</h3>
                  <p className="text-gray-600">{`CEO, Company Inc.`}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col border border-gray-800 p-6 px-10 md:max-w-[48%]">
            <p className="text-gray-500">
              {`RGS a été un partenaire de confiance pour notre projet de construction. Leur équipe a été professionnelle, réactive et a fourni un travail de qualité à chaque étape du processus.`}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="https://randomuser.me/api/portraits/thumb/men/69.jpg"
                  alt="Client"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{`Jean Doux`}</h3>
                  <p className="text-gray-600">{`CEO, Société SAS`}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.425 8.332 1.212-6.02 5.867 1.42 8.295L12 18.902l-7.4 4.484 1.42-8.295-6.02-5.867 8.332-1.212L12 .587z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
