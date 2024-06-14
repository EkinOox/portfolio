import { useEffect } from 'react';
import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import Footer from '../src/components/Footer';
import Modals from '../src/components/Modals';
import HelloSection from '../src/components/HelloSection';
import PortfolioSection from '../src/components/PortfolioSection';
import QuoteSection from '../src/components/QuoteSection';
import AboutSection from '../src/components/AboutSection';
import ServicesSection from '../src/components/ServicesSection';
import WaveSection from '../src/components/WaveSection.jsx';
import SliderSwiper from '../src/components/StackSection'; // Utilisez SliderSwiper ici
import WorksSection from '../src/components/WorksSection';
import HistorySection from '../src/components/HistorySection';
import MeSection from '../src/components/MeSection';
import ContactsSection from '../src/components/ContactsSection';
import SocialNetworksSection from '../src/components/SocialNetworksSection';

const App = () => {
  useEffect(() => {
    const loadScripts = () => {
      const scripts = [
        '../src/assets/js/jquery.min.js',
        '../src/assets/js/bootstrap.min.js',
        '../src/assets/js/bootstrap-progressbar.min.js',
        '../src/assets/js/jquery.countTo.min.js',
        '../src/assets/js/jquery.easing.min.js',
        '../src/assets/js/jquery.shuffle.min.js',
        '../src/assets/js/slick.min.js',
        '../src/assets/js/touchswipe.min.js',
        '../src/assets/js/script.js',
      ];

      scripts.forEach((script) => {
        const scriptTag = document.createElement('script');
        scriptTag.src = script;
        scriptTag.async = false;
        document.body.appendChild(scriptTag);
      });
    };

    loadScripts();
  }, []);

  return (
      <>
        <HeroSection />
        <Header />
        <main id="main" className="site-main">
          <HelloSection />
          <WorksSection />
          <QuoteSection />
          <SliderSwiper />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <HistorySection />
          <MeSection />
          <ContactsSection />
          <WaveSection/>
          <SocialNetworksSection />
        </main>
        <Footer />
        <Modals />
      </>
  );
};

export default App;
