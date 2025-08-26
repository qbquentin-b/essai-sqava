import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
  const plans = [
    {
      name: 'Site Vitrine',
      price: '890',
      description: 'Parfait pour présenter votre activité',
      features: [
        'Design responsive',
        'Jusqu\'à 5 pages',
        'Formulaire de contact',
        'Optimisation SEO de base',
        'Hébergement 1 an inclus',
        'Support par email'
      ],
      popular: false,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Site Pro',
      price: '1490',
      description: 'Pour les entreprises qui veulent plus',
      features: [
        'Tout du Site Vitrine',
        'Jusqu\'à 10 pages',
        'Blog intégré',
        'Galerie photos avancée',
        'Formulaires personnalisés',
        'Analytics Google',
        'Support prioritaire',
        'Formation incluse'
      ],
      popular: true,
      gradient: 'from-teal-500 to-blue-600'
    },
    {
      name: 'E-commerce',
      price: '2490',
      description: 'Solution complète de vente en ligne',
      features: [
        'Tout du Site Pro',
        'Boutique en ligne',
        'Paiement sécurisé',
        'Gestion des stocks',
        'Comptes clients',
        'Suivi des commandes',
        'Formation e-commerce',
        'Support téléphonique'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tarifs Transparents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des prix fixes, sans surprise. Choisissez la formule qui correspond à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              } card-hover stagger-item animate-slide-up`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className={`p-8 rounded-t-2xl bg-gradient-to-r ${plan.gradient} text-white`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-blue-100 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                  <span className="text-blue-100 ml-2">HT</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Choisir cette formule
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Besoin d'une solution sur-mesure ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques 
              et obtenir un devis personnalisé.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Demander un devis personnalisé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;