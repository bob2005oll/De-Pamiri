import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useInView from '../hooks/useInView.js';

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.5!2d71.5475956!3d37.4901996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38c695b3daef9641%3A0xcfced31d31043ddf!2sDe%20Pamiri%20Handicraft!5e0!3m2!1sen!2s!4v1715000000000';

const mapLink =
  'https://www.google.com/maps/place/De+Pamiri+Handicraft/@37.4906598,71.5459561,451m/data=!3m1!1e3!4m10!1m2!2m1!1sDe+Pamiri+Dushanbe+Tajikistan!3m6!1s0x38c695b3daef9641:0xcfced31d31043ddf!8m2!3d37.4901996!4d71.5475956!15sCh1EZSBQYW1pcmkgRHVzaGFuYmUgVGFqaWtpc3RhblofIh1kZSBwYW1pcmkgZHVzaGFuYmUgdGFqaWtpc3RhbpIBEGhvbWVfZ29vZHNfc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUndiSFoxY0hGUlJSQULgAQD6AQUIjgEQSg!16s%2Fg%2F11g2zzt6bf?hl=en-US&entry=ttu';

const galleryImages = [
  'https://source.unsplash.com/800x1200/?Tajikistan,handicraft,shop',
  'https://source.unsplash.com/800x1200/?Pamir,wool,carpet',
  'https://source.unsplash.com/800x1200/?handmade,jewelry,silver',
  'https://source.unsplash.com/800x1200/?Tajikistan,textile,embroidery',
];

export default function StoreSection() {
  const { t } = useTranslation();
  const products = t('store.products', { returnObjects: true });
  const productItems = Array.isArray(products) ? products : [];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % galleryImages.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section ref={ref} className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div
        className={[
          'mx-auto max-w-7xl transition-all duration-700 ease-out',
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ].join(' ')}
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full bg-pamiri-sky px-4 py-2 text-sm font-bold text-pamiri-blue">
            {t('store.badge')}
          </div>
          <h2 className="text-4xl font-black tracking-normal text-pamiri-ink sm:text-5xl">
            {t('store.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            {t('store.description')}
          </p>
        </div>

        <div
          className="relative mt-14 h-[420px] overflow-hidden rounded-2xl border border-[#F0F0F0] bg-slate-100 shadow-soft sm:h-[560px] lg:h-[680px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {galleryImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${t('store.galleryAlt')} ${index + 1}`}
              className={[
                'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out',
                activeSlide === index ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />
          ))}

          <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`${t('store.gallerySlideLabel')} ${index + 1}`}
                className={[
                  'h-2 rounded-full transition-all duration-300',
                  activeSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80',
                ].join(' ')}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {productItems.map((product) => (
            <article
              key={product.name}
              className="rounded-2xl border border-[#F0F0F0] border-t-4 border-t-pamiri-blue bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="text-2xl font-extrabold tracking-normal text-pamiri-ink">
                {product.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-500">
                {product.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 rounded-2xl border border-[#F0F0F0] bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pamiri-sky text-pamiri-blue">
              <MapPin className="h-6 w-6" strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                {t('store.addressLabel')}
              </p>
              <p className="mt-2 text-xl font-extrabold text-pamiri-ink">
                {t('store.address')}
              </p>
            </div>
          </a>

          <div className="overflow-hidden rounded-2xl border border-[#F0F0F0] bg-white shadow-soft">
            <iframe
              title={t('store.mapTitle')}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
