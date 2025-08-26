import React from 'react';
import { 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon, 
  MagnifyingGlassIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: ComputerDesktopIcon,
      title: 'Sites web sur-mesure',
      description: 'Création de sites web professionnels adaptés à votre activité et à vos besoins spécifiques.',
      features: ['Design personnalisé', 'Interface intuitive', 'Contenu optimisé']
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Responsive Design',
      description: 'Votre site s\'adapte parfaitement à tous les écrans : ordinateur, tablette et mobile.',
      features: ['Mobile-first', 'Navigation fluide', 'Chargement rapide']
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Référencement SEO',
      description: 'Optimisation pour les moteurs de recherche afin d\'améliorer votre visibilité en ligne.',
      features: ['Mots-clés ciblés', 'Contenu optimisé', 'Référencement local']
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics & Suivi',
      description: 'Outils de suivi et d\'analyse pour mesurer les performances de votre site web.',
      features: ['Google Analytics', 'Rapports mensuels', 'Conseils d\'amélioration']
    },
    {
      icon: ShoppingCartIcon,
      title: 'E-commerce',
      description: 'Solutions de vente en ligne adaptées aux petites et moyennes entreprises.',
      features: ['Boutique en ligne', 'Paiement sécurisé', 'Gestion des stocks']
    },
    {
      icon: CogIcon,
      title: 'Maintenance',
      description: 'Maintenance technique, mises à jour de sécurité et support continu.',
      features: ['Mises à jour', 'Sauvegardes', 'Support 24/7']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour créer et développer votre présence en ligne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-hover stagger-item animate-slide-up"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;