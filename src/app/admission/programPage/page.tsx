/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

interface Program {
  id: string;
  name: string;
  particularite: string;
  limitePlaces: number;
  trimestresAdmission: string[];
  dateSelection: string;
  image: string;
}

const programs: Program[] = [
  {
    id: "aerospatial",
    name: "AÉROSPATIAL",
    particularite: "contingentée",
    limitePlaces: 50,
    trimestresAdmission: ["automne"],
    dateSelection: "2e semaine de mars",
    image: "/images/programs/aerospatial.jpg",
  },
  {
    id: "biomedical",
    name: "BIOMÉDICAL",
    particularite: "contingentée",
    limitePlaces: 55,
    trimestresAdmission: ["automne"],
    dateSelection: "2e semaine de mars",
    image: "/images/programs/biomedical.jpg",
  },
  // Ajoutez d'autres programmes ici...
];

const BacProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec fond sombre et logo en filigrane */}
      <div className="relative bg-[#2D2D2D] py-16">
        <div className="container mx-auto px-4">
          <p className="mb-2 italic text-white/70">Admission</p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Programmes d'études au baccalauréat
          </h1>
        </div>
        {/* Logo en filigrane */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
          <img
            src="/images/poly-logo.png"
            alt="Logo en filigrane"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Fil d'Ariane */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Accueil
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link
              href="/admission"
              className="text-gray-600 hover:text-primary"
            >
              Baccalauréat (formation d'ingénieur)
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800">
              Programmes d'études au baccalauréat
            </span>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-12 max-w-4xl">
          <p className="mb-6 text-gray-700">
            Il existe à Polytechnique Montréal 12 programmes de baccalauréat en
            ingénierie offrant une formation d'ingénieur agréée par le Bureau
            d'agrément d'Ingénieurs Canada.
          </p>
          <p className="mb-6 text-gray-700">
            Avant de commencer à remplir une demande d'admission, nous vous
            invitons à découvrir chacun de ces 12 programmes, afin de choisir
            celui qui vous convient le mieux.
          </p>
          <div className="mb-8">
            <Link
              href="/admission/baccalaureat/sciences"
              className="text-primary hover:underline"
            >
              Cliquer ici pour en savoir plus sur les Baccalauréats ès Sciences
              (par cumul)
            </Link>
          </div>
        </div>

        {/* Liste des programmes */}
        <div className="space-y-12">
          {programs.map((program) => (
            <div key={program.id} className="border-t pt-8">
              <h2 className="mb-6 text-2xl font-bold">{program.name}</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <img
                    src={program.image}
                    alt={program.name}
                    className="h-64 w-full rounded-lg object-cover shadow-md"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold">Particularité : </span>
                    <span className="text-gray-700">
                      {program.particularite}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Limite de places : </span>
                    <span className="text-gray-700">
                      {program.limitePlaces}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Trimestres d'admission :{" "}
                    </span>
                    <span className="text-gray-700">
                      {program.trimestresAdmission.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Date de sélection : </span>
                    <span className="text-gray-700">
                      {program.dateSelection}
                    </span>
                  </div>
                  <div className="pt-4">
                    <Link
                      href={`/admission/programPage/detailsProgram/`}
                      className="inline-block rounded-md bg-[#FF8C42] px-6 py-3 text-white transition-colors hover:bg-[#FF8C42]/90"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BacProgramsPage;
