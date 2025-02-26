"use client";

import Link from "next/link";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2D2D2D] py-16">
        <div className="container px-4 mx-auto">
          <p className="text-white/70 italic">Polytechnique Montréal</p>
          <h1 className="text-4xl font-bold text-white">
            Programmes d'études
          </h1>
        </div>
        {/* Logo en filigrane */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img
            src="/images/poly-logo.png"
            alt="Logo Polytechnique"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Fil d'Ariane */}
      <div className="bg-gray-100 py-2">
        <div className="container px-4 mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Accueil
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800">Programmes d'études</span>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sections de programmes */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certificats et microprogrammes */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-bold mb-4">
                  Certificats et microprogrammes de 1er cycle
                </h2>
                <Link 
                  href="/programme/certificats"
                  className="inline-block px-8 py-2 bg-[#FF8C42] text-white rounded hover:bg-[#FF8C42]/90 transition-colors"
                >
                  VOIR
                </Link>
              </div>

              {/* Baccalauréat */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-bold mb-4">
                  Baccalauréat
                </h2>
                <Link 
                  href="/programme/baccalaureat"
                  className="inline-block px-8 py-2 bg-[#FF8C42] text-white rounded hover:bg-[#FF8C42]/90 transition-colors"
                >
                  VOIR
                </Link>
              </div>

              {/* Études supérieures */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-bold mb-4">
                  Études supérieures
                </h2>
                <Link 
                  href="/programme/etudes-superieures"
                  className="inline-block px-8 py-2 bg-[#FF8C42] text-white rounded hover:bg-[#FF8C42]/90 transition-colors"
                >
                  VOIR
                </Link>
              </div>
            </div>
          </div>

          {/* Formulaire de recherche */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-bold mb-6">LISTE DES COURS</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SIGLE
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    TITRE
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ENSEIGNANTS
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    DESCRIPTION
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Période
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Sélectionner une période</option>
                    <option value="A23">Automne 2023</option>
                    <option value="H24">Hiver 2024</option>
                    <option value="E24">Été 2024</option>
                  </select>
                </div>

                <button className="w-full px-4 py-2 bg-[#FF8C42] text-white rounded hover:bg-[#FF8C42]/90 transition-colors">
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