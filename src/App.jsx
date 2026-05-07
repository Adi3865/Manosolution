import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import PracticalUseCases from './components/PracticalUseCases'
import ClientSection from './components/ClientSection'
import HowWeWork from './components/HowWeWork'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#about-page')) {
        setCurrentPage('about-page');
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#services-page')) {
        setCurrentPage('services-page');
        // scrolling handled in ServicesPage itself
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Execute on initial load
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'about-page') {
    return (
      <div className="font-sans text-gray-800 antialiased overflow-x-hidden min-h-screen relative bg-white">
        <Navbar isInternalPage={true} currentPage="about-page" />
        <AboutPage />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'services-page') {
    return (
      <div className="font-sans text-gray-800 antialiased overflow-x-hidden min-h-screen relative bg-slate-50">
        <Navbar isInternalPage={true} currentPage="services-page" />
        <ServicesPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden min-h-screen relative">
      <Navbar currentPage="home" />
      <Hero />
      <About />
      <Services />
      <PracticalUseCases />
      <ClientSection />
      <HowWeWork />
      <WhyChooseUs />
      <Industries />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
//     </div>
//   )
// }

// export default App
