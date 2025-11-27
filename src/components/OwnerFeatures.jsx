import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Calendar, Settings, Clock, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

 

const OwnerFeatures = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  const features = [
    {
      icon: <LayoutDashboard size={32} />,
      title: t('ownerFeatures.dashboard'),
      description: t('ownerFeatures.dashboardDesc'),
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Calendar size={32} />,
      title: t('ownerFeatures.reservation'),
      description: t('ownerFeatures.reservationDesc'),
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Settings size={32} />,
      title: t('ownerFeatures.service'),
      description: t('ownerFeatures.serviceDesc'),
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Clock size={32} />,
      title: t('ownerFeatures.capacity'),
      description: t('ownerFeatures.capacityDesc'),
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <BarChart3 size={32} />,
      title: t('ownerFeatures.analytics'),
      description: t('ownerFeatures.analyticsDesc'),
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="owners" className="py-24 bg-dark text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              {t('ownerFeatures.title')} <span className="text-accent">{t('ownerFeatures.titleAccent')}</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('ownerFeatures.description')}
            </p>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default"
                >
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              {/* Dashboard Preview Image */}
              <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <div className="w-full h-full relative flex items-center justify-center">
                  <img
                    src="/image/logo.png"
                    alt="Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className={`absolute -top-10 ${isRtl ? '-left-10' : '-right-10'} w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10`} />
              <div className={`absolute -bottom-10 ${isRtl ? '-right-10' : '-left-10'} w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10`} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OwnerFeatures;
