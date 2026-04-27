import { useTranslation } from 'react-i18next';
import useInView from '../hooks/useInView.js';

export default function CurrencySection() {
  const { t } = useTranslation();
  const rates = t('currency.rates', { returnObjects: true });
  const rateItems = Array.isArray(rates) ? rates : [];
  const { ref, isInView } = useInView();

  // Replace the static placeholders with a live provider when the API contract is ready.
  // Example:
  // const response = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=TJS');
  // const data = await response.json();

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
            {t('currency.badge')}
          </div>
          <h2 className="text-4xl font-black tracking-normal text-pamiri-ink sm:text-5xl">
            {t('currency.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            {t('currency.subtitle')}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {rateItems.map((item) => (
            <article
              key={item.pair}
              className="rounded-2xl border border-[#F0F0F0] bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="text-5xl" aria-hidden="true">
                {item.flag}
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                {item.pair}
              </p>
              <p className="mt-3 text-4xl font-black tracking-normal text-pamiri-ink">
                {item.rate}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-2xl bg-pamiri-sky p-6 text-pamiri-ink">
          <span className="text-2xl" aria-hidden="true">
            {t('currency.tipIcon')}
          </span>
          <p className="text-base font-semibold leading-7 text-pamiri-ink/80">
            {t('currency.tip')}
          </p>
        </div>
      </div>
    </section>
  );
}
