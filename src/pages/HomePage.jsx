import ContactsSection from '../components/ContactsSection.jsx';
import CurrencySection from '../components/CurrencySection.jsx';
import HeroSection from '../components/HeroSection.jsx';
import SightsSection from '../components/SightsSection.jsx';
import StoreSection from '../components/StoreSection.jsx';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StoreSection />
      <SightsSection />
      <CurrencySection />
      <ContactsSection />
    </>
  );
}
