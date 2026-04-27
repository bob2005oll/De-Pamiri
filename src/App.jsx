import { Route, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import CurrencyPage from './pages/CurrencyPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SightsPage from './pages/SightsPage.jsx';
import StorePage from './pages/StorePage.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-pamiri-ink antialiased">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/sights" element={<SightsPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
