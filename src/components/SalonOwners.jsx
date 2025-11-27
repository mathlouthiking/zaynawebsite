import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Calendar, Settings, Clock, BarChart3, CheckCircle, ArrowRight, Users, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from './ContactForm';

const SalonOwners = () => {
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

  const benefits = [
    { icon: <Users size={24} />, text: lang === 'en' ? 'Reach More Customers' : 'الوصول إلى المزيد من العملاء' },
    { icon: <TrendingUp size={24} />, text: lang === 'en' ? 'Increase Revenue' : 'زيادة الإيرادات' },
    { icon: <Shield size={24} />, text: lang === 'en' ? 'Secure & Reliable' : 'آمن وموثوق' },
    { icon: <CheckCircle size={24} />, text: lang === 'en' ? 'Easy Management' : 'إدارة سهلة' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className={`absolute top-0 ${isRtl ? 'left-0 rounded-br-[100px]' : 'right-0 rounded-bl-[100px]'} w-1/2 h-full bg-primary/10 -z-10`} />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold tracking-wide">
              {lang === 'en' ? 'For Salon Owners' : 'لأصحاب الصالونات'}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-dark leading-tight">
              {t('ownerFeatures.title')} <br/>
              <span className="text-accent">{t('ownerFeatures.titleAccent')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('ownerFeatures.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-white rounded-full font-bold shadow-lg hover:shadow-accent/30 transition-all text-lg"
              >
                {lang === 'en' ? 'Get Started' : 'ابدأ الآن'}
              </motion.button>
              <Link to="/">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-dark border-2 border-dark/10 rounded-full font-bold hover:bg-gray-50 transition-all text-lg flex items-center gap-2"
                >
                  {lang === 'en' ? 'Back to Home' : 'العودة للرئيسية'}
                  <ArrowRight size={20} className={isRtl ? 'rotate-180' : ''} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-accent/20">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-accent/10 rounded-2xl">
                  <LayoutDashboard size={48} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                    {t('ownerFeatures.dashboardCta')}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('ownerFeatures.dashboardCtaDesc')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Calendar size={24} className="text-accent" />
                  <span className="font-medium text-dark">{lang === 'en' ? 'Control Reservations' : 'تحكمي في الحجوزات'}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Clock size={24} className="text-accent" />
                  <span className="font-medium text-dark">{lang === 'en' ? 'Control Capacity' : 'تحكمي في السعة'}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Settings size={24} className="text-accent" />
                  <span className="font-medium text-dark">{lang === 'en' ? 'Manage Services' : 'إدارة الخدمات'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-accent hover:shadow-xl transition-all group"
              >
                <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
                {lang === 'en' ? 'Why Choose Zayna?' : 'لماذا تختارين زينة؟'}
              </h2>
              <p className="text-lg text-gray-600">
                {lang === 'en' 
                  ? 'Join hundreds of salon owners who trust Zayna to grow their business'
                  : 'انضمي إلى مئات أصحاب الصالونات الذين يثقون بزينة لتنمية أعمالهم'}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-accent">{benefit.icon}</div>
                  <p className="text-sm font-medium text-dark text-center">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* CTA Section */}
      <section className="py-24 bg-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              {lang === 'en' ? 'Ready to Transform Your Salon?' : 'هل أنتِ مستعدة لتحويل صالونك؟'}
            </h2>
            <p className="text-xl text-gray-300">
              {lang === 'en' 
                ? 'Start managing your salon more efficiently today. Join Zayna and see the difference.'
                : 'ابدئي إدارة صالونك بكفاءة أكبر اليوم. انضمي إلى زينة وشاهدي الفرق.'}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-accent text-white rounded-full font-bold shadow-lg hover:shadow-accent/30 transition-all text-lg"
            >
              {lang === 'en' ? 'Get Started Now' : 'ابدئي الآن'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SalonOwners;
