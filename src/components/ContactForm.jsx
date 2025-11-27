import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, FileText, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    website: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Saudi Arabia cities
  const saudiCities = [
    'Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Taif', 'Abha',
    'Tabuk', 'Buraidah', 'Khamis Mushait', 'Hail', 'Najran', 'Jazan', 'Yanbu',
    'Arar', 'Sakaka', 'Jizan', 'Al Kharj', 'Al Qatif', 'Al Jubail',
    'Al Mubarraz', 'Al Hofuf', 'Al Qunfudhah', 'Al Bahah', 'Unaizah', 'Al Qurayyat',
    'Al Majma\'ah', 'Al Zulfi', 'Al Wajh', 'Al Namas', 'Al Lith'
  ];

  const saudiCitiesAr = [
    'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'الخبر', 'الطائف', 'أبها',
    'تبوك', 'بريدة', 'خميس مشيط', 'حائل', 'نجران', 'جازان', 'ينبع',
    'عرعر', 'سكاكا', 'جيزان', 'الخرج', 'القطيف', 'الجبيل',
    'المبرز', 'الهفوف', 'القنفذة', 'الباحة', 'عنيزة', 'القريات',
    'المجمعة', 'الزلفي', 'الوجه', 'النماص', 'الليث'
  ];

  const cities = lang === 'ar' ? saudiCitiesAr : saudiCities;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        description: '',
        website: ''
      });
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white border-2 border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 space-y-6"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-dark font-semibold mb-2">
                <FileText size={20} className="text-accent" />
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.namePlaceholder')}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors"
                dir={isRtl ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-dark font-semibold mb-2">
                <Mail size={20} className="text-accent" />
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPlaceholder')}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors"
                dir="ltr"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="flex items-center gap-2 text-dark font-semibold mb-2">
                <Phone size={20} className="text-accent" />
                {t('contact.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={t('contact.phonePlaceholder')}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors"
                dir="ltr"
              />
            </div>

            {/* Location Field */}
            <div>
              <label htmlFor="location" className="flex items-center gap-2 text-dark font-semibold mb-2">
                <MapPin size={20} className="text-accent" />
                {t('contact.location')}
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors bg-white"
                dir={isRtl ? 'rtl' : 'ltr'}
              >
                <option value="">{lang === 'en' ? 'Select a city' : 'اختر مدينة'}</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="flex items-center gap-2 text-dark font-semibold mb-2">
                <FileText size={20} className="text-accent" />
                {t('contact.description')}
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t('contact.descriptionPlaceholder')}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors resize-none"
                dir={isRtl ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Website Field (Optional) */}
            <div>
              <label htmlFor="website" className="flex items-center gap-2 text-dark font-semibold mb-2">
                <Globe size={20} className="text-accent" />
                {t('contact.website')}
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder={t('contact.websitePlaceholder')}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-colors"
                dir="ltr"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full px-8 py-4 bg-accent text-white rounded-xl font-bold shadow-lg hover:shadow-accent/30 transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{lang === 'en' ? 'Submitting...' : 'جاري الإرسال...'}</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>{t('contact.submit')}</span>
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 text-center font-medium"
              >
                {lang === 'en' 
                  ? 'Thank you! We will contact you soon.' 
                  : 'شكراً لك! سنتواصل معك قريباً.'}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;

