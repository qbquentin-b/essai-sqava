import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  const projects = [
    {
      title: 'Restaurant Le Gourmet',
      category: 'Restaurant',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site web élégant avec menu en ligne et système de réservation',
      features: ['Menu interactif', 'Réservations en ligne', 'Galerie photos'],
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Salon Beauté & Style',
      category: 'Coiffeur',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site moderne avec prise de rendez-vous et présentation des services',
      features: ['Prise de RDV', 'Galerie avant/après', 'Tarifs transparents'],
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      title: 'Artisan Menuisier Pro',
      category: 'Artisan',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Portfolio professionnel mettant en valeur le savoir-faire artisanal',
      features: ['Portfolio projets', 'Devis en ligne', 'Témoignages clients'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cabinet Médical',
      category: 'Santé',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site professionnel avec informations pratiques et prise de RDV',
      features: ['Infos pratiques', 'Prise de RDV', 'Équipe médicale'],
      gradient: 'from-teal-500 to-blue-600'
    },
    {
      title: 'Boutique Mode Local',
      category: 'Commerce',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'E-commerce avec catalogue produits et vente en ligne',
      features: ['Boutique en ligne', 'Paiement sécurisé', 'Gestion stocks'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Auto-École Conduite+',
      category: 'Formation',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site informatif avec inscription en ligne et suivi des élèves',
      features: ['Inscriptions', 'Suivi formation', 'Planning cours'],
      gradient: 'from-blue-500 to-teal-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns des sites web que nous avons créés pour nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover stagger-item animate-slide-up group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group">
                  Voir le projet
                  <ExternalLinkIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
          >
            Discutons de votre projet
            <ExternalLinkIcon className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;