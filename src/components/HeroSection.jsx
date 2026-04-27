import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useInView from '../hooks/useInView.js';

const heroImage =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Tajik%20Mountains%20%28Unsplash%29.jpg?width=2200';

export default function HeroSection() {
  const { t } = useTranslation();
  const { ref, isInView } = useInView();

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={[
          'relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1800px] items-center justify-center overflow-hidden rounded-[30px] px-6 py-32 text-center shadow-soft sm:px-10 lg:min-h-[820px]',
          'transition-all duration-700 ease-out',
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ].join(' ')}
      >
        <img
          src={heroImage}
          alt={t('hero.imageAlt')}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/55" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-xl">
            <span className="h-0.5 w-8 rounded-full bg-pamiri-blue" />
            {t('hero.badge')}
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {t('hero.title')}
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-8 text-white/80 sm:text-2xl">
            {t('hero.subtitle')}
          </p>

          <Link
            to="/contacts"
            className="mt-10 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-pamiri-ink shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-pamiri-blue hover:text-white hover:shadow-lift"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
