import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Home, Clock, Star, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AppFeatures = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <ShieldCheck size={40} />,
      title: t('appFeatures.womenOnly'),
      description: t('appFeatures.womenOnlyDesc')
    },
    {
      icon: <MapPin size={40} />,
      title: t('appFeatures.gps'),
      description: t('appFeatures.gpsDesc')
    },
    {
      icon: <Home size={40} />,
      title: t('appFeatures.rental'),
      description: t('appFeatures.rentalDesc')
    },
    {
      icon: <Clock size={40} />,
      title: t('appFeatures.booking'),
      description: t('appFeatures.bookingDesc')
    },
    {
      icon: <Zap size={40} />,
      title: t('appFeatures.promo'),
      description: t('appFeatures.promoDesc')
    },
    {
      icon: <Star size={40} />,
      title: t('appFeatures.early'),
      description: t('appFeatures.earlyDesc')
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">{t('appFeatures.forYou')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-dark">
            {t('appFeatures.title')} <span className="text-accent">{t('appFeatures.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 text-lg">
            {t('appFeatures.description')}
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/20 text-dark rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeatures;
