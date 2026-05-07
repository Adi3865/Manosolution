import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Subtle modern grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* Image Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="relative w-full h-[500px] xl:h-[600px] rounded-2xl">
              {/* Premium Glow */}
              <div className="absolute inset-0 bg-primary-500 rounded-full blur-[120px] opacity-10 -z-10 translate-x-10 translate-y-10"></div>
              
              <div className="relative w-full h-full">
                <motion.img
                  src="/images/about_corporate.png"
                  alt="Corporate Strategy"
                  className="absolute top-0 right-0 w-[80%] h-[80%] object-cover rounded-2xl shadow-xl z-10 border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className="absolute bottom-0 left-0 w-[65%] h-[65%] z-20 rounded-2xl shadow-2xl p-1 bg-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <img
                    src="/images/about_team.png"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </motion.div>
                
                {/* Decorative element */}
                <div className="absolute -left-6 top-1/2 w-24 h-24 bg-dots-pattern bg-repeat opacity-20 -z-10"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          >
            <div className="section-badge">
              <span className="w-2 h-2 rounded-full bg-primary-600"></span>
              <h2 className="text-inherit">About Us</h2>
            </div>
            
            <h3 className="section-h3">
              Built to Execute. <span className="text-primary-600 relative whitespace-nowrap">Designed to Scale.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path fill="currentColor" d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z"></path>
                </svg>
              </span>
            </h3>

            <p className="section-p">
              Manno Solutions exists for one reason: to give businesses a smarter, more reliable way to execute.
            </p>

            <div className="space-y-5 relative">
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-400 to-transparent opacity-30"></div>
              
              <div className="pl-6 relative">
                <div className="absolute left-[-2.5px] top-2.5 w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  We hire, train, and manage dedicated professionals within our own organisation, professionals who work exclusively on your business requirements, your processes, and your standards. No freelancers. No outsourcing chains. Just accountable, in-house teams operating as a seamless extension of yours.
                </p>
              </div>

              <div className="pl-6 relative">
                <div className="absolute left-[-2.5px] top-2.5 w-1.5 h-1.5 rounded-full bg-primary-500/60"></div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  From daily operational support to long-term project execution, we bring structure, precision, and a deep sense of ownership to everything we deliver.
                </p>
              </div>

              <div className="pl-6 relative">
                <div className="absolute left-[-2.5px] top-2.5 w-1.5 h-1.5 rounded-full bg-primary-500/30"></div>
                <p className="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                  Our partners don't just get a service provider, they get a team that shows up every day, takes ownership of outcomes, and scales with them as they grow.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Globe, Users } from 'lucide-react'; // Using Lucide for high-end icons

// const AboutSection = () => {
//   const fadeInVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
//   };

//   return (
//     <section id="about" className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         {/* Trust Bar / Logos Placeholder */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInVariant}
//           className="mb-20 border-b border-gray-100 pb-12"
//         >
//           <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
//             Trusted by Global Industry Leaders
//           </p>
//           <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
//             {/* Replace with actual partner SVG logos */}
//             <div className="h-8 w-32 bg-gray-200 rounded-md"></div>
//             <div className="h-8 w-32 bg-gray-200 rounded-md"></div>
//             <div className="h-8 w-32 bg-gray-200 rounded-md"></div>
//             <div className="h-8 w-32 bg-gray-200 rounded-md"></div>
//           </div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-20 items-center">
          
//           {/* Visual Side: Clean, Overlapping Architectural Style */}
//           <div className="relative">
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1 }}
//               className="relative z-10"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
//                 alt="Global Headquarters"
//                 className="rounded-sm shadow-2xl object-cover h-[600px] w-full"
//               />
//             </motion.div>
            
//             {/* Experience Badge */}
//             <motion.div 
//               initial={{ x: 50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               className="absolute -bottom-10 -right-10 bg-blue-600 p-8 text-white hidden md:block z-20 shadow-xl"
//             >
//               <p className="text-4xl font-light italic">15+</p>
//               <p className="text-xs uppercase tracking-widest font-bold">Years of Global<br/>Excellence</p>
//             </motion.div>
//           </div>

//           {/* Content Side */}
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeInVariant}
//           >
//             <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 rounded-full">
//               Corporate Overview
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
//               Empowering Global Enterprises with <span className="text-blue-600">Strategic Precision.</span>
//             </h2>
            
//             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
//               Manno Solutions operates at the intersection of international expertise and local execution. We provide high-tier operational support designed for organizations that demand uncompromising quality and scalable reliability.
//             </p>

//             {/* Value Pillars */}
//             <div className="grid sm:grid-cols-2 gap-8 mb-10">
//               <div className="flex flex-col gap-3">
//                 <ShieldCheck className="text-blue-600 w-6 h-6" />
//                 <h4 className="font-bold text-slate-900">Certified Integrity</h4>
//                 <p className="text-sm text-slate-500">Adhering to international compliance and data security standards.</p>
//               </div>
//               <div className="flex flex-col gap-3">
//                 <Globe className="text-blue-600 w-6 h-6" />
//                 <h4 className="font-bold text-slate-900">Borderless Reach</h4>
//                 <p className="text-sm text-slate-500">Supporting cross-continental projects with 24/7 operational continuity.</p>
//               </div>
//             </div>

//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-slate-900 text-white px-10 py-4 font-semibold tracking-wide hover:bg-blue-600 transition-colors duration-300"
//             >
//               Explore Our Solutions
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;