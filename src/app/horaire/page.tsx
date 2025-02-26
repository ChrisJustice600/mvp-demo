/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2D2D2D] py-16">
        <div className="container mx-auto px-4">
          <p className="italic text-white/70">Polytechnique Montréal</p>
          <h1 className="text-4xl font-bold text-white">Programmes d'études</h1>
        </div>
        {/* Logo en filigrane */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
          <img
            src="/images/poly-logo.png"
            alt="Logo Polytechnique"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Fil d'Ariane */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Accueil
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800">Programmes d'études</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Sections de programmes */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Certificats et microprogrammes */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold">
                  Certificats et microprogrammes de 1er cycle
                </h2>
                <Link
                  href="/programme/certificats"
                  className="inline-block rounded bg-[#FF8C42] px-8 py-2 text-white transition-colors hover:bg-[#FF8C42]/90"
                >
                  VOIR
                </Link>
              </div>

              {/* Baccalauréat */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold">Baccalauréat</h2>
                <Link
                  href="/programme/baccalaureat"
                  className="inline-block rounded bg-[#FF8C42] px-8 py-2 text-white transition-colors hover:bg-[#FF8C42]/90"
                >
                  VOIR
                </Link>
              </div>

              {/* Études supérieures */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold">Études supérieures</h2>
                <Link
                  href="/programme/etudes-superieures"
                  className="inline-block rounded bg-[#FF8C42] px-8 py-2 text-white transition-colors hover:bg-[#FF8C42]/90"
                >
                  VOIR
                </Link>
              </div>
            </div>
          </div>

          {/* Formulaire de recherche */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-lg font-bold">LISTE DES COURS</h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    SIGLE
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    TITRE
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    ENSEIGNANTS
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    DESCRIPTION
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Période
                  </label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary">
                    <option value="">Sélectionner une période</option>
                    <option value="A23">Automne 2023</option>
                    <option value="H24">Hiver 2024</option>
                    <option value="E24">Été 2024</option>
                  </select>
                </div>

                <button className="w-full rounded bg-[#FF8C42] px-4 py-2 text-white transition-colors hover:bg-[#FF8C42]/90">
                  RECHERCHER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
