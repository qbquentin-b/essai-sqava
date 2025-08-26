import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section id="accueil" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Sites web professionnels pour
            <span className="text-blue-600 block">entreprises locales</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
            Restaurants, coiffeurs, artisans... Nous créons votre site web sur-mesure 
            avec des tarifs clairs, des délais rapides et un accompagnement personnalisé.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-slide-up animate-delay-400">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg flex items-center gap-2 hover-lift"
            >
              Obtenir mon devis gratuit
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            
            <a
              href="#portfolio"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Voir nos réalisations
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up animate-delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7 jours</div>
              <div className="text-gray-600">Délai moyen de livraison</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support technique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;