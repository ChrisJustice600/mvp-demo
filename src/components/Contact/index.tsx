import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-gray-600 text-lg">
              Notre équipe est à votre disposition pour répondre à vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-primary">Adresse</h3>
                <p className="text-gray-600">
                  2500, chemin de Polytechnique<br />
                  Montréal (Québec)<br />
                  H3T 1J4
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-primary">Téléphone</h3>
                <p className="text-gray-600">
                  +1 514-340-4711
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-primary">Courriel</h3>
                <p className="text-gray-600">
                  polymtl@polymtl.ca
                </p>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Courriel
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="admission">Admission</option>
                    <option value="recherche">Recherche</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 
                      transform hover:-translate-y-1 transition-all duration-300 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="mt-16 rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.9598762933395!2d-73.61549468444384!3d45.50468777910151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919f2a7f6743f%3A0x3b439e41392c8e16!2sPolytechnique%20Montr%C3%A9al!5e0!3m2!1sfr!2sca!4v1645654832834!5m2!1sfr!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
