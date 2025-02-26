/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
const Avantage = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Texte à gauche */}
          <div className="lg:col-span-1">
            <h2 className="mb-6 text-4xl font-bold leading-tight">
              <span className="block">L'avantage</span>
              <span className="block">Polytechnique</span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Polytechnique Montréal, université d'ingénierie, propose un
              enseignement de haut niveau et des activités de recherche qui
              répondent aux grands enjeux de notre société. Véritable référence,
              Polytechnique Montréal influence son environnement sur le plan
              intellectuel, économique et social.
            </p>

            <button
              className="rounded-sm bg-[#FF8C42] px-8 py-3 text-sm 
              font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#FF8C42]/90"
            >
              En savoir plus
            </button>
          </div>

          {/* Image à droite */}
          <div className="relative lg:col-span-1">
            <div className="relative h-[500px] w-full">
              <img
                src="/images/drone.png" // Assurez-vous d'avoir l'image du drone dans votre dossier public
                alt="Drone Polytechnique"
                className="animate-float absolute right-0 top-0 h-full w-full object-contain" // Animation de flottement
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avantage;
