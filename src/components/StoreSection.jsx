import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useInView from '../hooks/useInView.js';

const mapSrc =
  'https://www.google.com/maps?q=De%20Pamiri%20Dushanbe%20Tajikistan&output=embed';

export default function StoreSection() {
  const { t } = useTranslation();
  const products = t('store.products', { returnObjects: true });
  const productItems = Array.isArray(products) ? products : [];
  const { ref, isInView } = useInView();

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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
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
          <div className="flex items-start gap-4 rounded-2xl border border-[#F0F0F0] bg-white p-8 shadow-soft">
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
          </div>

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
