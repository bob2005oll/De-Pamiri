import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useInView from '../hooks/useInView.js';

const EXCHANGE_RATE_API_URL =
  'https://v6.exchangerate-api.com/v6/3f5dc9f7391396ccd136d17c/latest/USD';

const FALLBACK_RATES = {
  'USD / TJS': '10.95',
  'EUR / TJS': '11.76',
  'RUB / TJS': '0.12',
};

export default function CurrencySection() {
  const { t } = useTranslation();
  const rates = t('currency.rates', { returnObjects: true });
  const rateItems = Array.isArray(rates) ? rates : [];
  const [liveRates, setLiveRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { ref, isInView } = useInView();

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(EXCHANGE_RATE_API_URL);

        if (!response.ok) {
          throw new Error(`ExchangeRate-API request failed: ${response.status}`);
        }

        const data = await response.json();
        const { conversion_rates: conversionRates } = data;

        if (!conversionRates?.TJS || !conversionRates?.EUR || !conversionRates?.RUB) {
          throw new Error('ExchangeRate-API response is missing required rates.');
        }

        setLiveRates({
          'USD / TJS': conversionRates.TJS.toFixed(2),
          'EUR / TJS': (conversionRates.TJS / conversionRates.EUR).toFixed(2),
          'RUB / TJS': (conversionRates.TJS / conversionRates.RUB).toFixed(2),
        });
      } catch (error) {
        console.error('Failed to fetch live exchange rates. Using fallback rates.', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

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
                {formatPairLabel(item.pair)}
              </p>
              <p className="mt-3 text-4xl font-black tracking-normal text-pamiri-ink">
                {isLoading ? (
                  <span className="inline-block h-10 w-24 animate-pulse rounded-xl bg-slate-100 align-middle" />
                ) : (
                  `${liveRates[item.pair] || FALLBACK_RATES[item.pair] || item.rate} ${getQuoteCurrency(item.pair)}`
                )}
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

function formatPairLabel(pair) {
  const [baseCurrency] = pair.split(' / ');

  return `1 ${baseCurrency} → 🇹🇯`;
}

function getQuoteCurrency(pair) {
  const [, quoteCurrency] = pair.split(' / ');

  return quoteCurrency;
}
