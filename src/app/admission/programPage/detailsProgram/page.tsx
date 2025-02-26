/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

const ProgramPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Fil d'Ariane */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Accueil
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/admission" className="text-gray-600 hover:text-primary">
            Admission
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800">Génie biomédical</span>
        </nav>

        {/* Titre principal */}
        <h1 className="mb-8 text-4xl font-bold">
          QU'EST-CE QUE LE GÉNIE BIOMÉDICAL?
        </h1>

        {/* Section principale */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Vidéo/Image */}
            <div className="mb-8 overflow-hidden rounded-lg bg-gray-50">
              <img
                src="/images/biomedical.jpg"
                alt="Matériaux implantés dans le corps humain"
                className="h-64 w-full object-cover"
              />
            </div>

            {/* Description du programme */}
            <div className="space-y-6 text-gray-700">
              <p>
                Ce qui caractérise l'ingénieur ou l'ingénieure en génie
                biomédical est sa capacité d'analyser un problème à la fois du
                point de vue du génie et de celui de la santé. Sa spécialisation
                exige donc de toujours garder en tête les enjeux particuliers
                associés aux êtres vivants et d'être en mesure de considérer un
                ensemble de solutions plus large que celui des champs
                traditionnels du génie.
              </p>
              <p>
                Concrètement, la personne spécialisée en génie biomédical
                pourrait être amenée à concevoir des systèmes d'imagerie, des
                stimulateurs cardiaques implantables, des cœurs artificiels ou
                des orthèses. Elle peut aussi mettre au point des matériaux qui
                seront implantés dans le corps humain ou des systèmes de
                libération de médicaments ou de gènes.
              </p>
              <p>
                Par ailleurs, son expertise lui permet de se consacrer à la
                recherche, notamment pour étudier le fonctionnement du corps
                humain et percer ses secrets : troubles du rythme cardiaque,
                traitement de l'information par le cerveau, transport des ions
                et des molécules à travers la paroi des cellules, etc.
              </p>
              <p>
                La formation en génie biomédical est nécessairement
                multidisciplinaire et fait appel à la fois aux sciences de la
                santé, aux sciences du génie, aux sciences fondamentales et aux
                mathématiques. Dans le cadre de ses fonctions, l'ingénieure ou
                l'ingénieur biomédical devra aussi être capable de travailler en
                étroite collaboration avec du personnel professionnel issu de
                différentes disciplines, comme la médecine, la chirurgie, la
                biologie, la biochimie, la pharmacologie, la physiothérapie et
                la dentisterie.
              </p>
            </div>

            {/* Particularités du programme */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold">
                PARTICULARITÉS DU PROGRAMME
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold">Durée</h3>
                  <p>4 à 5 ans, selon votre scolarité*</p>
                </div>
                <div>
                  <h3 className="font-bold">Crédits</h3>
                  <p>120</p>
                </div>
                <div>
                  <h3 className="font-bold">Admission</h3>
                  <p>Automne</p>
                </div>
                <div>
                  <h3 className="font-bold">Stage(s)</h3>
                  <p>1 à 4 stages de 4 mois ou plus</p>
                </div>
              </div>
            </div>

            {/* Programme contingenté */}
            <div className="mt-12">
              <h2 className="mb-4 text-2xl font-bold">PROGRAMME CONTINGENTÉ</h2>
              <p className="mb-4">45 places disponibles</p>
              <p>
                Le nombre de places offertes dans ce programme est limité. La
                sélection est basée sur les résultats scolaires.{" "}
                <Link href="#" className="text-[#FF8C42] hover:underline">
                  En savoir plus sur les statistiques d'admission
                </Link>
                .
              </p>
            </div>

            {/* Bourses */}
            <div className="mt-12 rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">
                BOURSES PERSPECTIVE QUÉBEC
              </h2>
              <div className="flex gap-6">
                <img
                  src="/images/bourses-perspective-quebec.jpg"
                  alt="Bourses Perspective Québec"
                  className="h-48 w-48 object-cover"
                />
                <div>
                  <p className="mb-4">
                    Les étudiantes et étudiants inscrits à l'un de nos{" "}
                    <Link href="#" className="text-[#FF8C42] hover:underline">
                      12 programmes de baccalauréat en ingénierie
                    </Link>{" "}
                    pourront bénéficier des bourses Perspective Québec, à raison
                    de 2 500 $ par session réussie à temps plein, pour un
                    maximum de 20 000 $ pour un programme de quatre ans.
                  </p>
                  <Link href="#" className="text-[#FF8C42] hover:underline">
                    Pour connaître les conditions d'admissibilité et faire une
                    demande de bourses Perspective Québec
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-[#FF8C42] p-6 text-white">
              <h2 className="mb-4 text-2xl font-bold">VOTRE CHOIX EST FAIT?</h2>
              <p className="mb-6">
                Remplissez dès maintenant votre demande d'admission en ligne ou
                informez-vous sur les conditions d'admission et les dates
                limites.
              </p>
              <button className="w-full rounded-md bg-white px-6 py-3 font-bold text-[#FF8C42] hover:bg-gray-100">
                DÉPOSEZ VOTRE DEMANDE
              </button>
            </div>
          </div>
        </div>

        {/* Sections accordéon */}
        <div className="mt-12 space-y-4">
          <div className="border-t border-gray-200">
            <button className="flex w-full items-center justify-between py-4 text-left">
              <h2 className="text-xl font-bold">
                SURVOL DE LA FORMATION D'INGÉNIEUR
              </h2>
              <span className="text-2xl">+</span>
            </button>
          </div>
          <div className="border-t border-gray-200">
            <button className="flex w-full items-center justify-between py-4 text-left">
              <h2 className="text-xl font-bold">
                ANNÉE PRÉPARATOIRE (SI NÉCESSAIRE)
              </h2>
              <span className="text-2xl">+</span>
            </button>
          </div>
          <div className="border-t border-gray-200">
            <button className="flex w-full items-center justify-between py-4 text-left">
              <h2 className="text-xl font-bold">
                CHEMINEMENT ET DESCRIPTION DES COURS
              </h2>
              <span className="text-2xl">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
