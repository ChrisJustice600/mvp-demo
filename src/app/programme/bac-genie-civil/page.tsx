/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

interface ResponsableInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  extension: string;
}

interface ProgramDetails {
  title: string;
  description: string;
  imageUrl: string;
  responsables: ResponsableInfo[];
  links: {
    admission: string;
    description: string;
  };
}

// Mock data
const programData: ProgramDetails = {
  title: "BACCALAURÉAT EN GÉNIE CIVIL",
  description:
    "L'ingénieur civil formé à Polytechnique Montréal est formé pour mettre à profit ses connaissances scientifiques et technologiques et sa créativité pour participer à la conception, à la construction, à la gestion, à l'entretien et à la réparation d'ouvrages, tout en tenant compte des impacts sociaux, économiques et environnementaux de ses projets.",
  imageUrl: "/images/genie-civil-hero.jpg",
  responsables: [
    {
      name: "RAYMOND DESJARDINS",
      role: "RESPONSABLE",
      email: "raymond.desjardins@polymtl.ca",
      phone: "514-340-4711",
      extension: "4505",
    },
    {
      name: "NICOLETA RAMNICEANU",
      role: "CONSEIL ET CHEMINEMENT ÉTUDIANTS",
      email: "nicoleta.ramniceanu@polymtl.ca",
      phone: "514-340-4711",
      extension: "4556",
    },
  ],
  links: {
    admission: "/programme/bac-genie-civil/admission",
    description: "/programme/bac-genie-civil/description",
  },
};

const ProgramPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec fond sombre */}
      <div className="relative overflow-hidden bg-[#2D2D2D] py-16">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-white/70">Programmes d'études</p>
          <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            Programmes et cheminements
          </h1>
        </div>
        {/* Image en filigrane */}
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
              href="/programme"
              className="text-gray-600 hover:text-primary"
            >
              Programmes d'études
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800">Baccalauréat en Génie civil</span>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-3xl font-bold">{programData.title}</h2>
            <p className="mb-8 leading-relaxed text-gray-700">
              {programData.description}
            </p>

            {/* Section Responsables */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">RESPONSABLE(S)</h3>
              <div className="space-y-6">
                {programData.responsables.map((responsable, index) => (
                  <div key={index} className="border-b pb-4">
                    <h4 className="font-bold text-gray-900">
                      {responsable.name}
                    </h4>
                    <p className="mb-2 text-sm text-gray-500">
                      {responsable.role}
                    </p>
                    <a
                      href={`mailto:${responsable.email}`}
                      className="block text-primary hover:underline"
                    >
                      {responsable.email}
                    </a>
                    <p className="text-gray-600">
                      {responsable.phone}, poste {responsable.extension}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Image du programme */}
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={programData.imageUrl}
                  alt="Génie civil"
                  className="h-48 w-full object-cover"
                />
              </div>

              {/* Liens rapides */}
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-bold">Liens rapides</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href={programData.links.admission}
                      className="block text-primary hover:underline"
                    >
                      Conditions d'admission
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={programData.links.description}
                      className="block text-primary hover:underline"
                    >
                      Description détaillée
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
