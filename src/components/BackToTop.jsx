import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BackToTop() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t('backToTop.label')}
      className={[
        'fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-pamiri-blue text-white shadow-soft transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-lift focus:outline-none focus:ring-4 focus:ring-pamiri-blue/20',
        isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      ].join(' ')}
    >
      <ArrowUp className="h-6 w-6" strokeWidth={2.4} />
    </button>
  );
}
