import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#f9f8f6] to-white">
      {/* Background Elements */}
      <div className={`absolute top-0 ${isRtl ? 'left-0 rounded-br-[100px]' : 'right-0 rounded-bl-[100px]'} w-1/2 h-full bg-primary/10 -z-10 transition-all duration-500`} />
      <div className={`absolute bottom-0 ${isRtl ? 'right-0' : 'left-0'} w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 transition-all duration-500`} />

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold tracking-wide">
            {t('hero.badge')}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-dark leading-tight">
            {t('hero.title')} <br/>
            <span className="text-accent">{t('hero.titleAccent')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-white rounded-full font-bold shadow-lg hover:shadow-accent/30 transition-all text-lg"
            >
              {t('hero.getApp')}
            </motion.button>
            <Link to="/salon-owners">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-dark border-2 border-dark/10 rounded-full font-bold hover:bg-gray-50 transition-all text-lg"
              >
                {t('hero.forOwners')}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[600px] flex justify-center items-center"
        >
          {/* Abstract Phone Mockup Placeholder */}
          <div className="relative w-[300px] h-[600px] bg-dark rounded-[40px] border-8 border-gray-900 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col">
              <div className="h-full w-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
                <img 
                  src="/image/women.png" 
                  alt="Zayna App Preview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Booking Confirmed Notification - Bottom of Phone */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20 w-[85%]"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-dark">{t('hero.preview.booking')}</p>
                  <p className="text-xs text-gray-500">Today, 2:00 PM</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-accent/20 rounded-full -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-primary/20 rounded-full -z-20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
