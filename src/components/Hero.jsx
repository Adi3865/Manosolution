// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen pt-[85px] flex items-center justify-center overflow-hidden bg-secondary-700">
//       {/* Background Image Setup */
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="/images/hero_bg.png" 
//           alt="Abstract Background" 
//           className="w-full h-full object-cover opacity-60 mix-blend-overlay"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-secondary-700/80 to-primary-700/60 z-10" />
//       </div>

//       <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tight text-white leading-[1.1] mb-8">
//             Dedicated Teams.<br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-white">
//               Exceptional Service.
//             </span>
//           </h1>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
//             Your work, executed by our experts. We deliver reliable, high-quality services through a dedicated in-house team that operates as an extension of your business.
//           </p>
//         </motion.div>

//         <motion.div 
//           className="flex flex-col sm:flex-row gap-4"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <Link
//             to="contact"
//             smooth={true}
//             duration={500}
//             className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(38,99,178,0.5)] transition-all cursor-pointer transform hover:-translate-y-1"
//           >
//             Let's Discuss Your Needs
//           </Link>
//           <Link
//             to="services"
//             smooth={true}
//             duration={500}
//             className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full transition-all cursor-pointer transform hover:-translate-y-1"
//           >
//             Explore Services
//           </Link>
//         </motion.div>
//       </div>

//       {/* Decorative Wave at the bottom */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
//         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.62,19.34,103.78,38.96,158,51.81,211.33,64.45,264.44,66.82,321.39,56.44Z" className="fill-gray-50"></path>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;








import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ['0%', '15%']);
  const textY = useTransform(scrollY, [0, 800], ['0%', '40%']);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Visual Elements with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/images/hero_bg.png"
          alt="Modern Corporate Office"
          className="w-full h-[120%] object-cover opacity-[0.25] mix-blend-overlay -translate-y-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900" />
      </motion.div>

      {/* Modern Refined Glows */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none"
      />

      <motion.div style={{ y: textY }} className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="mb-6 flex justify-center">
            <span className="section-badge bg-white/5 border-white/10 text-primary-200 backdrop-blur-sm">
              Global IT & Operations Partner
            </span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            The Execution Partner <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-200 to-white">
              Your Business Has Been Missing.
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-base md:text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          We place dedicated, in-house professionals inside your operations, handling the work that slows you down, so you can focus entirely on growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="how-we-work"
              smooth={true}
              className="btn-primary w-full sm:w-auto"
            >
              See How We Work →
            </Link>

            <Link
              to="contact"
              smooth={true}
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Talk to Our Team
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
              <p className="text-slate-400 text-sm font-bold tracking-wide uppercase">Trusted by Companies across the globe</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
              <p className="text-slate-400 text-sm font-bold tracking-wide uppercase">In-house teams. Not freelancers. Not agencies.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 cursor-pointer pointer-events-auto hover:text-white transition-colors"
      >
        <Link to="about" smooth={true}>
          <ChevronDown size={30} strokeWidth={1.5} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;