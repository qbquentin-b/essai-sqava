import React from 'react';
import { 
  UserGroupIcon, 
  ClockIcon, 
  HeartIcon,
  TrophyIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: UserGroupIcon,
      title: 'Proximité',
      description: 'Nous privilégions les relations humaines et l\'accompagnement personnalisé de chaque client.'
    },
    {
      icon: ClockIcon,
      title: 'Réactivité',
      description: 'Des délais respectés et une disponibilité constante pour répondre à vos questions.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'Nous aimons ce que nous faisons et cela se ressent dans la qualité de nos réalisations.'
    },
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'Nous visons toujours la perfection dans chaque détail de nos créations web.'
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              À propos de SQAVA
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              SQAVA est une agence web spécialisée dans la création de sites internet 
              pour les entreprises locales. Nous comprenons les défis uniques auxquels 
              font face les petites et moyennes entreprises dans leur transformation digitale.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Notre mission est simple : vous accompagner dans votre réussite en ligne 
              avec des solutions web adaptées à votre budget et à vos objectifs. 
              Nous croyons que chaque entreprise mérite une présence web professionnelle 
              et efficace.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3 ans</div>
                <div className="text-gray-600">D'expérience</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <value.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à donner vie à votre projet web ?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discutons ensemble de vos besoins et créons le site web qui fera 
              la différence pour votre entreprise.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
            >
              Commencer mon projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;