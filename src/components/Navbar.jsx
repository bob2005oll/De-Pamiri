import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'store', path: '/store' },
  { key: 'sights', path: '/sights' },
  { key: 'currency', path: '/currency' },
  { key: 'contacts', path: '/contacts' },
];

const languages = ['en', 'ru'];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);

    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('dePamiriLanguage', language);
  };

  const navLinkClass = ({ isActive }) =>
    [
      'relative text-sm font-semibold text-pamiri-ink transition-colors duration-300 hover:text-pamiri-blue',
      'after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0',
      'after:rounded-full after:bg-pamiri-blue after:transition-transform after:duration-300 hover:after:scale-x-100',
      isActive ? 'text-pamiri-blue after:scale-x-100' : '',
    ].join(' ');

  const logo = (
    <img
      src={logoImage}
      alt={t('brand.name')}
      className="h-14 w-14 rounded-full object-contain sm:h-16 sm:w-16"
    />
  );

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b border-[#F0F0F0] bg-white/90 transition-all duration-300',
        isScrolled ? 'shadow-sm backdrop-blur-xl' : 'backdrop-blur-md',
      ].join(' ')}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label={t('brand.homeAria')} onClick={() => setIsOpen(false)}>
          {logo}
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.key} to={item.path} className={navLinkClass}>
              {t(`nav.links.${item.key}`)}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className="flex rounded-full border border-[#E5E7EB] bg-white p-1 shadow-sm"
            aria-label={t('nav.language')}
          >
            {languages.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => changeLanguage(language)}
                className={[
                  'rounded-full px-4 py-2 text-xs font-bold transition-all duration-300',
                  i18n.resolvedLanguage === language
                    ? 'bg-pamiri-blue text-white shadow-sm'
                    : 'text-slate-500 hover:text-pamiri-blue',
                ].join(' ')}
              >
                {t(`nav.languages.${language}`)}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-pamiri-ink shadow-sm transition hover:border-pamiri-blue hover:text-pamiri-blue lg:hidden"
          aria-label={t('nav.menu')}
        >
          <Menu className="h-5 w-5" strokeWidth={2.2} />
        </button>
      </nav>

      <div
        className={[
          'fixed inset-0 z-50 flex flex-col bg-white transition-all duration-500 lg:hidden',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        ].join(' ')}
      >
        <div className="flex h-20 items-center justify-between border-b border-[#F0F0F0] px-4 sm:px-6">
          <Link to="/" aria-label={t('brand.homeAria')} onClick={() => setIsOpen(false)}>
            {logo}
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-pamiri-ink shadow-sm transition hover:border-pamiri-blue hover:text-pamiri-blue"
            aria-label={t('nav.close')}
          >
            <X className="h-5 w-5" strokeWidth={2.2} />
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                [
                  'text-4xl font-extrabold tracking-normal transition-colors duration-300 sm:text-5xl',
                  isActive ? 'text-pamiri-blue' : 'text-pamiri-ink hover:text-pamiri-blue',
                ].join(' ')
              }
            >
              {t(`nav.links.${item.key}`)}
            </NavLink>
          ))}

          <div
            className="mt-6 flex rounded-full border border-[#E5E7EB] bg-white p-1 shadow-sm"
            aria-label={t('nav.language')}
          >
            {languages.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => changeLanguage(language)}
                className={[
                  'rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300',
                  i18n.resolvedLanguage === language
                    ? 'bg-pamiri-blue text-white shadow-sm'
                    : 'text-slate-500 hover:text-pamiri-blue',
                ].join(' ')}
              >
                {t(`nav.languages.${language}`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
