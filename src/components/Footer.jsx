import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  return (
    <footer className="bg-gray-50 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="text-3xl font-bold text-accent tracking-tighter">Zayna</a>
            <p className="text-gray-500 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className={`flex ${isRtl ? 'space-x-reverse' : ''} space-x-4`}>
              <a href="https://www.instagram.com/zaynasolution?utm_source=qr&igsh=ZmlpbTNhb2hyZXN1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="https://www.snapchat.com/@zyna_salon?invite_id=7mvznEOq&locale=ar_SA%40calendar%3Dgregorian&share_id=p-BC8PtESb-OeoPGWcGoBw&sid=b866ffd6c81a4031a26550a44906d702" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-all shadow-sm">
                <span className="text-xs font-bold">SC</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-all shadow-sm">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-dark">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-accent transition-colors">{t('footer.home')}</a></li>
              <li><a href="#features" className="text-gray-500 hover:text-accent transition-colors">{t('footer.features')}</a></li>
              <li><a href="#owners" className="text-gray-500 hover:text-accent transition-colors">{t('footer.owners')}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent transition-colors">{t('footer.about')}</a></li>
            </ul>
          </div>

         

          <div>
            <h4 className="font-bold text-lg mb-6 text-dark">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500">
                <Mail size={20} className="mt-1 text-accent" />
                <span>htssociete@hotmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <Phone size={20} className="mt-1 text-accent" />
                <span dir="ltr">+966 53 713 0203</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin size={20} className="mt-1 text-accent" />
                <span>RIyadh,Olaya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Zayna. {t('footer.rights')}
          </p>
          <p className="text-gray-400 text-sm">
            {t('footer.designed')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
