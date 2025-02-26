/* eslint-disable @next/next/no-img-element */
const Blog = () => {
  const mainArticle = {
    date: "21 JANVIER 2025",
    title:
      "6 millions de dollars pour des projets en quantique à Polytechnique Montréal",
    description:
      "Trois projets liés au domaine quantique et menés par des équipes de Polytechnique Montréal ont reçu un appui global d'environ 6 millions de dollars par l'intermédiaire du programme Alliance du Conseil de recherches en sciences naturelles et en génie du Canada (CRSNG).",
    image: "/images/blog/quantum.jpg",
    link: "/actualites/quantique-poly",
  };

  const sideArticles = [
    {
      date: "24 FÉVRIER 2025",
      title:
        "Lancement d'une formation en ligne de Polytechnique Montréal sur les enjeux de l'eau en contexte de changements climatiques",
      image: "/images/blog/formation-eau.jpg",
      link: "/actualites/formation-eau",
    },
    {
      date: "20 FÉVRIER 2025",
      title:
        "Concours «Déplace de l'air à Poly» 2025: des étudiantes et étudiants du collégial font preuve de créativité avec leurs mini-éoliennes",
      image: "/images/blog/concours-eolienne.jpg",
      link: "/actualites/concours-eolienne",
    },
    {
      date: "19 FÉVRIER 2025",
      title:
        "La professeure Caroline Boudoux élue Fellow de la société savante Optica",
      image: "/images/blog/prof-boudoux.jpg",
      link: "/actualites/prof-boudoux",
    },
    {
      date: "18 FÉVRIER 2025",
      title:
        "La professeure Marie-Claude Heuzey lauréate d'un prix de l'Union internationale de chimie pure et appliquée",
      image: "/images/blog/prof-heuzey.jpg",
      link: "/actualites/prof-heuzey",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Article Principal */}
          <div className="lg:col-span-1">
            <article className="cursor-pointer group">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  className="h-[400px] w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mb-3 text-sm text-gray-500">{mainArticle.date}</p>
              <h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-primary">
                {mainArticle.title}
              </h2>
              <p className="display-webkit-box mb-6 overflow-hidden text-ellipsis text-gray-600 [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                {mainArticle.description}
              </p>
              <button className="px-8 py-2 text-white transition-colors rounded bg-primary hover:bg-primary/90">
                LIRE
              </button>
            </article>
          </div>

          {/* Articles Secondaires */}
          <div className="space-y-6 lg:col-span-1">
            {sideArticles.map((article, index) => (
              <article
                key={index}
                className="grid items-center grid-cols-3 gap-4 cursor-pointer group"
              >
                <div className="col-span-1 overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-32 transition-transform duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="col-span-2">
                  <p className="mb-2 text-sm text-gray-500">{article.date}</p>
                  <h3 className="display-webkit-box overflow-hidden text-ellipsis text-lg font-semibold transition-colors [-webkit-box-orient:vertical] [-webkit-line-clamp:2] group-hover:text-primary">
                    {article.title}
                  </h3>
                  <button className="mt-2 text-primary hover:underline">
                    LIRE
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
