import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
      
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="home" smooth={true} duration={500} className="inline-block cursor-pointer">
              <img src="/logo1.png" alt="Manno Solutions" className="h-[72px] w-auto mb-8 brightness-0 invert opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform hover:scale-105 duration-300" />
            </Link>
            <p className="text-primary-400 mb-3 font-semibold tracking-wide uppercase text-[12px]">
              Your operations, in expert hands.
            </p>
            <p className="text-slate-400 mb-8 max-w-sm text-[15px] font-medium leading-relaxed">
              Manno Solutions, delivering dedicated, high-quality services to businesses that refuse to settle for average.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="group w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white hover:border-primary-500 hover:shadow-[0_0_20px_rgba(38,99,178,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="group w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white hover:border-primary-500 hover:shadow-[0_0_20px_rgba(38,99,178,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                <FaTwitter size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="group w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white hover:border-primary-500 hover:shadow-[0_0_20px_rgba(38,99,178,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                <FaFacebook size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold text-base mb-6 tracking-wider uppercase text-[13px]">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Use Cases', 'How We Work', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase().replace(/ /g, '-')}
                    smooth={true}
                    duration={500}
                    className="group flex items-center text-slate-400 hover:text-primary-400 text-[15px] font-medium cursor-pointer transition-colors"
                  >
                    <span className="w-0 h-px bg-primary-500 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-6 tracking-wider uppercase text-[13px]">Our Services</h4>
            <ul className="space-y-4">
              {[
                'Dedicated Service Teams',
                'Operational Support',
                'Project Execution',
                'Business Process Support'
              ].map((service, index) => (
                <li key={index} className="group flex items-center text-slate-400 hover:text-primary-400 text-[15px] font-medium cursor-pointer transition-colors">
                  <span className="w-0 h-px bg-primary-500 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big elegant CTA text subtly placed at the bottom */}
        <div className="w-full text-center pb-12 pt-4 border-t border-slate-800/60 mt-8 mb-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-900 select-none tracking-tighter">
            MANNO SOLUTIONS
          </h2>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-[14px] text-slate-500 font-medium">
            &copy; {currentYear} <span className="text-slate-400">Manno Solutions</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[14px] text-slate-500 font-medium">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;