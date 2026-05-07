import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ['0%', '15%']);
  const textY = useTransform(scrollY, [0, 800], ['0%', '40%']);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800 selection:bg-primary-100 selection:text-primary-900">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-24 lg:pt-0">
        
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

        <motion.div style={{ y: textY }} className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-10 lg:mt-20">
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
                Who We Are
              </span>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8"
            >
              Built to Execute.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-200 to-white">
                Designed to Scale.
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-base md:text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Manno Solutions exists for one reason: to give businesses a smarter, more reliable way to execute their processes and grow without friction.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content & Visuals */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visuals */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 group">
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src="/images/about_indian_office.png"
                  alt="Manno Solutions Team Collaborating"
                  className="w-full h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-dots-pattern opacity-20 -z-10 bg-repeat bg-[length:24px_24px]"></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -left-8 md:-left-12 top-1/4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]"
              >
                <div className="flex flex-col gap-2">
                  <div className="text-4xl font-bold text-primary-600">100%</div>
                  <div className="text-sm font-semibold text-slate-600">In-house Managed Professionals</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Operating as a seamless extension of your team.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="flex-shrink-0 mt-1">
                     <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                     </div>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">No Freelancers. No Chains.</h3>
                     <p className="text-slate-600 leading-relaxed font-medium">We hire, train, and manage dedicated professionals within our own organisation. They work exclusively on your business requirements, processes, and standards.</p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="flex-shrink-0 mt-1">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                     </div>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Structure & Precision</h3>
                     <p className="text-slate-600 leading-relaxed font-medium">From daily operational support to long-term project execution, we bring structure, precision, and a deep sense of ownership to everything we deliver.</p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="flex-shrink-0 mt-1">
                     <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                     </div>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Partners Scalability</h3>
                     <p className="text-slate-600 leading-relaxed font-medium">Our partners don't just get a service provider, they get a team that shows up every day, takes ownership of outcomes, and scales with them as they grow.</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            
            {/* Visuals */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 group">
                 <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <img
                  src="/images/about_indian_team.png"
                  alt="Manno Solutions Experts"
                  className="w-full h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-dots-pattern opacity-20 -z-10 bg-repeat bg-[length:24px_24px]"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Core Philosophy
              </h2>
              <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
                <p>
                  At Manno Solutions, we believe that the foundation of any great business is its ability to execute consistently at a high level. That’s why we invest heavily in our people, ensuring they have the tools, knowledge, and environment to perform excellently.
                </p>
                <p className="mt-4">
                  We are proud of our diverse and highly skilled talent base. By fostering a culture of continuous learning and accountability, we ensure that every professional representing Manno Solutions is equipped to tackle your toughest challenges. 
                </p>
                <p className="mt-4">
                  When you partner with us, you are not just outsourcing a task; you are insourcing excellence. You gain a dedicated team that is fully immersed in your vision and driven by your success metrics.
                </p>
              </div>

              <div className="mt-10">
                <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Partner With Us
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
