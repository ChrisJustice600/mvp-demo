import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Apprendre",
      borderColor: "border-t-[#E31D38]", // Rouge Polytechnique
      items: [
        "Baccalauréat (formation d'ingénieur)",
        "Études supérieures",
        "Certificats et microprogrammes",
        "Formation continue",
        "Départements"
      ],
      buttonText: "EN SAVOIR PLUS",
      buttonLink: "/apprendre"
    },
    {
      id: 2,
      title: "Chercher",
      borderColor: "border-t-[#FF8C42]", // Orange
      items: [
        "Répertoire des expertises",
        "Faits et chiffres",
        "Projets en partenariat",
        "Infrastructure et technologie",
        "Acquisition d'une technologie"
      ],
      buttonText: "EN SAVOIR PLUS",
      buttonLink: "/chercher"
    },
    {
      id: 3,
      title: "Influencer",
      borderColor: "border-t-[#4CAF50]", // Vert
      items: [
        "Choisir Polytechnique",
        "International",
        "Équité, diversité, inclusion (EDI)",
        "Bureau d'intervention et de prévention des conflits et de la violence (BIPCV)",
        "Femmes et génie",
        "Développement durable",
        "Soutien à l'entrepreneuriat"
      ],
      buttonText: "EN SAVOIR PLUS",
      buttonLink: "/influencer"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`
                bg-white 
                p-8 
                rounded-lg 
                shadow-sm 
                border-t-4 
                ${feature.borderColor}
                transition-all 
                duration-300 
                hover:-translate-y-1 
                hover:shadow-lg
                group
              `}
            >
              <h2 className="text-3xl font-bold mb-8 group-hover:text-gray-900">
                {feature.title}
              </h2>
              
              <ul className="space-y-4 mb-12">
                {feature.items.map((item, index) => (
                  <li 
                    key={index}
                    className="relative"
                  >
                    <a 
                      href="#" 
                      className="
                        text-gray-700 
                        hover:text-primary 
                        transition-colors 
                        duration-200
                        block
                        py-1
                        relative
                        after:content-['']
                        after:absolute
                        after:bottom-0
                        after:left-0
                        after:w-0
                        after:h-[1px]
                        after:bg-primary
                        after:transition-all
                        after:duration-300
                        hover:after:w-full
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <button 
                className="
                  bg-primary 
                  text-white 
                  px-6 
                  py-3 
                  rounded 
                  text-sm 
                  font-semibold 
                  tracking-wider
                  transition-all
                  duration-300
                  hover:bg-primary/90
                  hover:shadow-md
                  active:transform
                  active:scale-95
                "
              >
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
