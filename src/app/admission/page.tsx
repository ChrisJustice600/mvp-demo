/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

interface AdmissionLevel {
  title: string;
  description: string;
  link: string;
  requirements: string[];
}

const admissionLevels: AdmissionLevel[] = [
  {
    title: "Baccalauréat en ingénierie",
    description:
      "Formation initiale en génie d'une durée de 4 ans menant au titre d'ingénieur",
    link: "/admission/programPage",
    requirements: [
      "DEC en sciences, lettres et arts",
      "DEC en sciences de la nature",
      "Baccalauréat français scientifique",
    ],
  },
  {
    title: "Certificats et microprogrammes",
    description:
      "Programmes courts de perfectionnement technique et professionnel",
    link: "/admission/certificats",
    requirements: ["DEC technique", "Expérience professionnelle pertinente"],
  },
  {
    title: "Études supérieures",
    description:
      "Maîtrise, DESS et doctorat pour approfondir vos connaissances",
    link: "/admission/etudes-superieures",
    requirements: [
      "Baccalauréat en ingénierie ou domaine connexe",
      "Excellence académique",
    ],
  },
];

const AdmissionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec image de fond */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="/images/students-group.jpg"
          alt="Étudiants de Polytechnique"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative flex flex-col justify-center h-full px-4 mx-auto">
          <h1 className="mb-4 text-5xl font-bold text-white">Admission</h1>
          <p className="max-w-2xl text-xl text-white/90">
            Rejoignez une communauté dynamique d'étudiants passionnés et
            développez vos compétences en ingénierie à Polytechnique Montréal
          </p>
        </div>
      </div>

      {/* Fil d'Ariane */}
      <div className="py-3 bg-gray-100">
        <div className="container px-4 mx-auto">
          <nav className="text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Accueil
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800">Admission</span>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Choisissez votre niveau d'études
          </h2>

          <div className="space-y-8">
            {admissionLevels.map((level, index) => (
              <div
                key={index}
                className="overflow-hidden transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold">{level.title}</h3>
                  <p className="mb-6 text-gray-600">{level.description}</p>

                  <div className="mb-6">
                    <h4 className="mb-2 font-semibold">
                      Conditions d'admission :
                    </h4>
                    <ul className="space-y-1 text-gray-600 list-disc list-inside">
                      {level.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={level.link}
                    className="inline-block rounded-md bg-[#FF8C42] px-6 py-3 text-white transition-colors hover:bg-[#FF8C42]/90"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Section d'aide */}
          <div className="p-8 mt-16 rounded-lg bg-gray-50">
            <h3 className="mb-4 text-xl font-bold">
              Besoin d'aide pour votre admission?
            </h3>
            <p className="mb-6 text-gray-600">
              Nos conseillers sont là pour vous guider dans votre processus
              d'admission et répondre à toutes vos questions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+15143404711"
                className="inline-flex items-center text-primary hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                514-340-4711
              </a>
              <a
                href="mailto:futur@polymtl.ca"
                className="inline-flex items-center text-primary hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                futur@polymtl.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
