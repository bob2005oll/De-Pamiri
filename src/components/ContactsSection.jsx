import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Youtube,
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useInView from '../hooks/useInView.js';

const socials = [
  {
    key: 'instagram',
    href: 'https://instagram.com/depamiri',
    Icon: Instagram,
  },
  {
    key: 'facebook',
    href: 'https://facebook.com/depamiri',
    Icon: Facebook,
  },
  {
    key: 'youtube',
    href: 'https://youtube.com/@depamiri1238',
    Icon: Youtube,
  },
];

export default function ContactsSection() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const { ref, isInView } = useInView();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
            {t('contacts.badge')}
          </div>
          <h2 className="text-4xl font-black tracking-normal text-pamiri-ink sm:text-5xl">
            {t('contacts.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            {t('contacts.subtitle')}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ContactPanel
            title={t('contacts.travelPanelTitle')}
            phone={t('contacts.phone')}
            email={t('contacts.email')}
            whatsappHref="https://wa.me/992930000000"
          />
          <ContactPanel
            title={t('contacts.storePanelTitle')}
            phone={t('contacts.storePhone')}
            email={t('contacts.storeEmail')}
            whatsappHref="https://wa.me/992980000000"
          />
        </div>

        <div className="mt-6 rounded-2xl border border-[#F0F0F0] border-t-4 border-t-pamiri-blue bg-white p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                {t('contacts.socialsTitle')}
              </p>
              <div className="mt-4 flex gap-3">
                {socials.map(({ key, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t(`contacts.${key}`)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-pamiri-mist text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pamiri-blue hover:text-white hover:shadow-soft"
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-pamiri-sky p-5 text-pamiri-ink">
              <MapPin className="h-6 w-6 shrink-0 text-pamiri-blue" strokeWidth={2.2} />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-pamiri-blue">
                  {t('contacts.addressLabel')}
                </p>
                <p className="mt-1 font-bold">{t('contacts.address')}</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-2xl border border-[#F0F0F0] bg-white p-6 shadow-soft sm:p-8"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-extrabold tracking-normal text-pamiri-ink">
              {t('contacts.formTitle')}
            </h3>
            {submitted && (
              <p className="rounded-full bg-pamiri-sky px-4 py-2 text-sm font-bold text-pamiri-blue">
                {t('contacts.submitted')}
              </p>
            )}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-pamiri-ink">
                {t('contacts.formName')}
              </span>
              <input
                type="text"
                name="name"
                placeholder={t('contacts.formNamePlaceholder')}
                className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-pamiri-ink outline-none transition focus:border-pamiri-blue focus:ring-4 focus:ring-pamiri-blue/10"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-pamiri-ink">
                {t('contacts.formEmail')}
              </span>
              <input
                type="email"
                name="email"
                placeholder={t('contacts.formEmailPlaceholder')}
                className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-pamiri-ink outline-none transition focus:border-pamiri-blue focus:ring-4 focus:ring-pamiri-blue/10"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-pamiri-ink">
              {t('contacts.formMessage')}
            </span>
            <textarea
              name="message"
              rows="5"
              placeholder={t('contacts.formMessagePlaceholder')}
              className="w-full resize-none rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-pamiri-ink outline-none transition focus:border-pamiri-blue focus:ring-4 focus:ring-pamiri-blue/10"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-pamiri-blue px-7 py-4 text-base font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <Send className="h-5 w-5" strokeWidth={2.2} />
            {t('contacts.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactPanel({ title, phone, email, whatsappHref }) {
  const { t } = useTranslation();

  return (
    <article className="rounded-2xl border border-[#F0F0F0] border-t-4 border-t-pamiri-blue bg-white p-8 shadow-soft">
      <h3 className="text-2xl font-extrabold tracking-normal text-pamiri-ink">
        {title}
      </h3>

      <div className="mt-7 space-y-5">
        <ContactLink
          Icon={Phone}
          label={t('contacts.phoneLabel')}
          value={phone}
          href={`tel:${phone.replace(/\s/g, '')}`}
        />
        <ContactLink
          Icon={Mail}
          label={t('contacts.emailLabel')}
          value={email}
          href={`mailto:${email}`}
        />
        <ContactLink
          Icon={MessageCircle}
          label={t('contacts.whatsappLabel')}
          value={t('contacts.whatsappText')}
          href={whatsappHref}
        />
      </div>
    </article>
  );
}

function ContactLink({ Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('https') ? '_blank' : undefined}
      rel={href.startsWith('https') ? 'noreferrer' : undefined}
      className="flex items-center gap-4 rounded-xl border border-[#F0F0F0] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-pamiri-blue hover:shadow-soft"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pamiri-sky text-pamiri-blue">
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
        <span className="mt-1 block font-bold text-pamiri-ink">{value}</span>
      </span>
    </a>
  );
}
