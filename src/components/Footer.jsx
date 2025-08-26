import React from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Sites vitrine',
    'E-commerce',
    'Référencement SEO',
    'Maintenance',
    'Formation',
    'Conseil digital'
  ];

  const sectors = [
    'Restaurants',
    'Coiffeurs',
    'Artisans',
    'Commerces',
    'Professions libérales',
    'Associations'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">SQAVA</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Agence web spécialisée dans la création de sites internet 
              pour les entreprises locales. Des solutions sur-mesure 
              adaptées à votre budget.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-blue-400" />
                <a href="mailto:contact@sqava.fr" className="hover:text-white transition-colors">
                  contact@sqava.fr
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:0123456789" className="hover:text-white transition-colors">
                  01 23 45 67 89
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="h-5 w-5 mr-3 text-blue-400" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Secteurs d'activité</h3>
            <ul className="space-y-3">
              {sectors.map((sector, index) => (
                <li key={index}>
                  <a
                    href="#portfolio"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {sector}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-gray-300 hover:text-white transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} SQAVA. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;