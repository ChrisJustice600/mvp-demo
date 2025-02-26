"use client";

import Link from 'next/link';

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
  description: "L'ingénieur civil formé à Polytechnique Montréal est formé pour mettre à profit ses connaissances scientifiques et technologiques et sa créativité pour participer à la conception, à la construction, à la gestion, à l'entretien et à la réparation d'ouvrages, tout en tenant compte des impacts sociaux, économiques et environnementaux de ses projets.",
  imageUrl: "/images/genie-civil-hero.jpg",
  responsables: [
    {
      name: "RAYMOND DESJARDINS",
      role: "RESPONSABLE",
      email: "raymond.desjardins@polymtl.ca",
      phone: "514-340-4711",
      extension: "4505"
    },
    {
      name: "NICOLETA RAMNICEANU",
      role: "CONSEIL ET CHEMINEMENT ÉTUDIANTS",
      email: "nicoleta.ramniceanu@polymtl.ca",
      phone: "514-340-4711",
      extension: "4556"
    }
  ],
  links: {
    admission: "/programme/bac-genie-civil/admission",
    description: "/programme/bac-genie-civil/description"
  }
};

const ProgramPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec fond sombre */}
      <div className="bg-[#2D2D2D] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-white/70 mb-4">Programmes d'études</p>
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-8">
            Programmes et cheminements
          </h1>
        </div>
        {/* Image en filigrane */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img 
            src="/images/poly-logo.png" 
            alt="Logo en filigrane"
            className="w-full h-full object-contain"
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
            <Link href="/programme" className="text-gray-600 hover:text-primary">
              Programmes d'études
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800">Baccalauréat en Génie civil</span>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">{programData.title}</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {programData.description}
            </p>

            {/* Section Responsables */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">RESPONSABLE(S)</h3>
              <div className="space-y-6">
                {programData.responsables.map((responsable, index) => (
                  <div key={index} className="border-b pb-4">
                    <h4 className="font-bold text-gray-900">{responsable.name}</h4>
                    <p className="text-sm text-gray-500 mb-2">{responsable.role}</p>
                    <a 
                      href={`mailto:${responsable.email}`}
                      className="text-primary hover:underline block"
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
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={programData.imageUrl}
                  alt="Génie civil"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Liens rapides */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href={programData.links.admission}
                      className="text-primary hover:underline block"
                    >
                      Conditions d'admission
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={programData.links.description}
                      className="text-primary hover:underline block"
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