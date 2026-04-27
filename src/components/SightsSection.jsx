import { useTranslation } from 'react-i18next';
import useInView from '../hooks/useInView.js';

const sightImages = [
  'https://commons.wikimedia.org/wiki/Special:FilePath/Tajik%20Mountains%20%28Unsplash%29.jpg?width=1200',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Pamir%20Mountains%2C%20Lake%20Yashikul%20viewed%20from%20the%20south%20%28August%202017%29.jpg?width=1200',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Panj%20Valley%20Pamir.jpg?width=1200',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Jizew%20Lake.jpg?width=1200',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Panj%20river%20landscape.jpg?width=1200',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Pamir%20Mountains%2C%20Tajikistan%2C%2006-04-2008.jpg?width=1200',
];

export default function SightsSection() {
  const { t } = useTranslation();
  const cards = t('sights.cards', { returnObjects: true });
  const sightCards = Array.isArray(cards) ? cards : [];
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="bg-pamiri-mist px-4 py-24 sm:px-6 lg:px-8">
      <div
        className={[
          'mx-auto max-w-7xl transition-all duration-700 ease-out',
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ].join(' ')}
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-pamiri-blue shadow-sm">
            {t('sights.badge')}
          </div>
          <h2 className="text-4xl font-black tracking-normal text-pamiri-ink sm:text-5xl">
            {t('sights.title')}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {sightCards.map((card, index) => (
            <article
              key={card.title}
              className="group relative min-h-[250px] overflow-hidden rounded-2xl bg-slate-200 shadow-soft transition-transform duration-500 hover:scale-[1.02] sm:min-h-[360px]"
            >
              <img
                src={sightImages[index]}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7">
                <h3 className="text-base font-extrabold leading-tight tracking-normal text-white sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-white/85 opacity-100 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-base sm:leading-7 md:translate-y-4 md:opacity-0">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
