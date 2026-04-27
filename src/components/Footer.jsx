import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const socialLinks = [
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

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-pamiri-mist">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 md:text-left">
          {t('footer.copyright')}
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ key, href, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={t(`contacts.${key}`)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-pamiri-blue hover:text-white hover:shadow-soft"
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
