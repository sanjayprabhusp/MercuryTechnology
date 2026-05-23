import { useState, useEffect } from 'react';
import { ScreenName } from './types';
import { Header } from './components/Header';
import { WaveBackground } from './components/WaveBackground';
import { HomeScreen } from './screens/HomeScreen';
import { ServiceScreen } from './screens/ServiceScreen';
import { ProductScreen } from './screens/ProductScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ContactScreen } from './screens/ContactScreen';
import { EmployeeScreen } from './screens/EmployeeScreen';
import { FloatingLogoRing } from './components/FloatingLogoRing';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentScreen(entry.target.id as ScreenName);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (screen: ScreenName) => {
    setCurrentScreen(screen);
    const section = document.getElementById(screen);
    if (!section) return;
    const headerOffset = 92;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-sky-950 via-slate-950 to-slate-900 text-slate-100 font-sans selection:bg-sky-300/30">
      <WaveBackground />
      
      <Header currentScreen={currentScreen} onNavigate={scrollToSection} />

      <main className="relative w-full">
        <section id="home" className="min-h-screen pt-20 flex flex-col justify-center">
           <HomeScreen />
        </section>
        <section id="service" className="min-h-screen pt-20 pb-20">
           <ServiceScreen />
        </section>
        <section id="product" className="min-h-screen pt-20 pb-20">
           <ProductScreen />
        </section>
        <FloatingLogoRing />
        <section id="about" className="min-h-screen pt-20 pb-20">
           <AboutScreen />
        </section>
        <section id="employees" className="min-h-screen pt-20 pb-20">
           <EmployeeScreen />
        </section>
        <section id="contact" className="min-h-screen pt-20 pb-20">
           <ContactScreen />
        </section>
      </main>
    </div>
  );
}
