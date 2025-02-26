/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Types
interface Program {
  id: string;
  title: string;
  type: string;
  cycle: string;
  speciality?: string;
  link: string;
}

// Mock data
const mockPrograms: Program[] = [
  {
    id: "aero-1",
    title: "Baccalauréat en Génie aérospatial",
    type: "Baccalauréat (formation d'ingénieur)",
    cycle: "Premier cycle",
    speciality: "GÉNIE AÉROSPATIAL",
    link: "/programmes/bac-genie-aerospatial",
  },
  {
    id: "bio-1",
    title: "Baccalauréat en Génie biomédical",
    type: "Baccalauréat (formation d'ingénieur)",
    cycle: "Premier cycle",
    speciality: "GÉNIE BIOMÉDICAL",
    link: "/programmes/bac-genie-biomedical",
  },
  {
    id: "chim-1",
    title: "Baccalauréat en Génie chimique",
    type: "Baccalauréat (formation d'ingénieur)",
    cycle: "Premier cycle",
    speciality: "GÉNIE CHIMIQUE",
    link: "/programmes/bac-genie-chimique",
  },
  {
    id: "civil-1",
    title: "Baccalauréat en Génie civil",
    type: "Baccalauréat (formation d'ingénieur)",
    cycle: "Premier cycle",
    speciality: "GÉNIE CIVIL",
    link: "/programmes/bac-genie-civil",
  },
  // Ajoutez plus de programmes mockés ici...
];

const SearchPrograms = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSpecialitesOpen, setIsSpecialitesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<Program[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const cyclePrograms = {
    "Premier cycle": [
      "Baccalauréat (formation d'ingénieur)",
      "Certificats",
      "Microprogrammes de 1er cycle",
    ],
    "Deuxième cycle": [
      "Maîtrise",
      "Diplômes d'études supérieures spécialisées (DESS)",
      "Microprogrammes de 2e cycle",
    ],
    "Troisième cycle": ["Doctorat"],
  };

  // Simuler une recherche API
  const searchPrograms = () => {
    // Construire les paramètres de recherche
    const params = new URLSearchParams(searchParams);
    if (searchTerm) params.set("q", searchTerm);
    if (selectedTypes.length) params.set("types", selectedTypes.join(","));

    // Mettre à jour l'URL
    router.push(`/programme?${params.toString()}`);

    // Simuler un délai d'API
    setTimeout(() => {
      const results = mockPrograms.filter((program) => {
        const matchesType =
          selectedTypes.length === 0 || selectedTypes.includes(program.type);
        const matchesSearch =
          searchTerm === "" ||
          program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          program.speciality?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
      });

      setSearchResults(results);
      setHasSearched(true);
    }, 500);
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec fond sombre */}
      <div className="relative overflow-hidden bg-[#2D2D2D] py-16">
        <div className="container px-4 mx-auto">
          <p className="mb-4 text-white/70">Polytechnique Montreal</p>
          <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            Programmes d'études
          </h1>
        </div>
        {/* Image en filigrane */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img
            src="/images/poly-logo.png"
            alt="Logo en filigrane"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Fil d'Ariane */}
      <div className="py-3 bg-gray-100">
        <div className="container px-4 mx-auto">
          <nav className="text-sm">
            <a href="/" className="text-gray-600 hover:text-primary">
              Accueil
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800">Programmes d'études</span>
          </nav>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Panneau de recherche */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              {/* Barre de recherche */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="RECHERCHER"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-transparent focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Accordéon Spécialités */}
              <div className="mb-6">
                <button
                  onClick={() => setIsSpecialitesOpen(!isSpecialitesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-md"
                >
                  <span className="font-medium">Spécialités</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${isSpecialitesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Niveaux de formation */}
              <div className="space-y-6">
                {Object.entries(cyclePrograms).map(([cycle, programs]) => (
                  <div key={cycle} className="space-y-2">
                    <h3 className="font-medium text-gray-900">{cycle}</h3>
                    {programs.map((program) => (
                      <div key={program} className="flex items-center">
                        <input
                          type="checkbox"
                          id={program}
                          checked={selectedTypes.includes(program)}
                          onChange={() => handleTypeChange(program)}
                          className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                        />
                        <label htmlFor={program} className="ml-3 text-gray-700">
                          {program}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Bouton Rechercher */}
              <div className="mt-8">
                <button
                  onClick={searchPrograms}
                  className="w-full rounded-md bg-[#FF8C42] py-3 font-medium text-white transition-colors hover:bg-[#FF8C42]/90"
                >
                  RECHERCHER
                </button>
              </div>
            </div>
          </div>

          {/* Résultats de recherche */}
          <div className="lg:col-span-2">
            {hasSearched && (
              <>
                <h2 className="mb-6 text-xl font-bold">
                  RÉSULTATS DE RECHERCHE
                  <span className="ml-2 text-gray-500">
                    {searchResults.length} résultats
                  </span>
                </h2>

                <div className="space-y-6">
                  {searchResults.map((program) => (
                    <div key={program.id} className="pb-4 border-b">
                      {program.speciality && (
                        <h3 className="mb-2 text-lg font-bold text-gray-800">
                          {program.speciality}
                        </h3>
                      )}
                      <a
                        href={program.link}
                        className="block mb-1 text-primary hover:underline"
                      >
                        {program.title}
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPrograms;
