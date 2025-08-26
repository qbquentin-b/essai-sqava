import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'contact@sqava.fr',
      link: 'mailto:contact@sqava.fr'
    },
    {
      icon: PhoneIcon,
      title: 'Téléphone',
      content: '01 23 45 67 89',
      link: 'tel:0123456789'
    },
    {
      icon: MapPinIcon,
      title: 'Adresse',
      content: 'Paris, France',
      link: null
    },
    {
      icon: ClockIcon,
      title: 'Horaires',
      content: 'Lun-Ven 9h-18h',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Obtenez votre devis gratuit en quelques minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Parlons de votre projet
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Pourquoi nous choisir ?
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Devis gratuit sous 24h
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Accompagnement personnalisé
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Tarifs transparents
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Support après livraison
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="01 23 45 67 89"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de projet *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="vitrine">Site vitrine</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="blog">Blog</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget approximatif
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez un budget</option>
                    <option value="500-1000">500€ - 1000€</option>
                    <option value="1000-2000">1000€ - 2000€</option>
                    <option value="2000-5000">2000€ - 5000€</option>
                    <option value="5000+">Plus de 5000€</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Parlez-nous de votre projet, vos objectifs, vos besoins spécifiques..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg"
              >
                Envoyer ma demande de devis
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Champs obligatoires. Nous nous engageons à répondre sous 24h.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;