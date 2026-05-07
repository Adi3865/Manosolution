// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   ... legacy code ...
// };
// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isInternalPage = false, currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Faster threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'How We Work', to: 'how-we-work' },
    { name: 'Clients', to: 'clients' },
    { name: 'Industries', to: 'industries' },
    { name: 'Contact', to: 'contact' },
  ];

  // Super fast routing configuration
  const scrollConfig = {
    smooth: true,
    duration: 150, // instantaneous zip
    spy: true,
    exact: "true",
    offset: -80 // adjust for header height
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ease-in-out ${scrolled ? 'top-3 px-4 sm:px-6 lg:px-8' : 'top-0 px-0'}`}>
      <div className={`mx-auto max-w-7xl transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 rounded-[1.2rem] px-5' : 'bg-transparent px-6 lg:px-10'}`}>
        <div className="flex justify-between items-center py-2 lg:py-0">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            {isInternalPage ? (
              <a href="/">
                <img
                  src="/logo1.png"
                  alt="Manno Solutions"
                  className={`h-12 md:h-24 w-auto transition-all duration-300 object-contain drop-shadow-sm ${!scrolled ? 'brightness-0 invert' : ''}`}
                />
              </a>
            ) : (
              <Link to="home" {...scrollConfig}>
                <img
                  src="/logo1.png"
                  alt="Manno Solutions"
                  className={`h-12 md:h-24 w-auto transition-all duration-300 object-contain drop-shadow-sm ${!scrolled ? 'brightness-0 invert' : ''}`}
                />
              </Link>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center bg-transparent py-2">
            {navLinks.map((link) => {
              if (link.name === 'About') {
                return (
                  <a
                    key={link.name}
                    href="#about-page"
                    className={`cursor-pointer px-3 py-1.5 rounded-lg text-[14px] font-medium tracking-wide transition-all duration-200 group relative ${scrolled ? 'text-slate-600 hover:text-primary-700 hover:bg-slate-50' : 'text-slate-200 hover:text-white hover:bg-white/5'} ${currentPage === 'about-page' ? 'bg-slate-100/80 text-primary-700 font-semibold shadow-sm rounded-lg relative' : ''}`}
                  >
                    {link.name}
                  </a>
                );
              }
              
              if (link.name === 'Services') {
                return (
                  <a
                    key={link.name}
                    href="#services-page"
                    className={`cursor-pointer px-3 py-1.5 rounded-lg text-[14px] font-medium tracking-wide transition-all duration-200 group relative ${scrolled ? 'text-slate-600 hover:text-primary-700 hover:bg-slate-50' : 'text-slate-200 hover:text-white hover:bg-white/5'} ${currentPage === 'services-page' ? 'bg-slate-100/80 text-primary-700 font-semibold shadow-sm rounded-lg relative' : ''}`}
                  >
                    {link.name}
                  </a>
                );
              }
              
              if (isInternalPage) {
                return (
                  <a
                    key={link.name}
                    href="/"
                    className={`cursor-pointer px-3 py-1.5 rounded-lg text-[14px] font-medium tracking-wide transition-all duration-200 group relative ${scrolled ? 'text-slate-600 hover:text-primary-700 hover:bg-slate-50' : 'text-slate-200 hover:text-white hover:bg-white/5'}`}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.to}
                  {...scrollConfig}
                  activeClass={scrolled ? 'bg-slate-100/80 text-primary-700 font-semibold shadow-sm rounded-lg relative' : 'bg-white/10 text-white font-semibold rounded-lg'}
                  className={`cursor-pointer px-3 py-1.5 rounded-lg text-[14px] font-medium tracking-wide transition-all duration-200 group relative ${scrolled ? 'text-slate-600 hover:text-primary-700 hover:bg-slate-50' : 'text-slate-200 hover:text-white hover:bg-white/5'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pl-3 ml-1 border-l border-slate-200/50">
              <Link
                to="contact"
                {...scrollConfig}
                className={`btn-primary !px-6 !py-2 !text-[14px] ${!scrolled && 'bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border border-white/20 shadow-none'}`}
              >
                Start a Conversation →
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-all duration-200 focus:outline-none p-1.5 rounded-xl ${scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Content */}
      <div className={`md:hidden absolute left-0 w-full transition-all duration-300 ease-in-out transform origin-top ${mobileMenuOpen ? 'top-[110%] opacity-100 scale-y-100 relative z-[90]' : 'top-0 opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className={`mx-4 bg-white/95 backdrop-blur-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] rounded-2xl p-5 border border-slate-100 flex flex-col gap-1`}>
          {navLinks.map((link) => {
            if (link.name === 'About') {
              return (
                <a
                  key={link.name}
                  href="#about-page"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold text-lg py-3 px-4 hover:bg-slate-50 hover:text-primary-600 rounded-xl transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              );
            }
            if (link.name === 'Services') {
              return (
                <a
                  key={link.name}
                  href="#services-page"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold text-lg py-3 px-4 hover:bg-slate-50 hover:text-primary-600 rounded-xl transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              );
            }
            if (isInternalPage) {
              return (
                <a
                  key={link.name}
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold text-lg py-3 px-4 hover:bg-slate-50 hover:text-primary-600 rounded-xl transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.to}
                {...scrollConfig}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 font-semibold text-lg py-3 px-4 hover:bg-slate-50 hover:text-primary-600 rounded-xl transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 pb-1 px-2">
            <Link
              to="contact"
              {...scrollConfig}
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-center w-full bg-primary-600 text-white px-6 py-3.5 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-[0_4px_14px_0_rgba(38,99,178,0.39)] hover:shadow-[0_6px_20px_rgba(38,99,178,0.23)] cursor-pointer"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
