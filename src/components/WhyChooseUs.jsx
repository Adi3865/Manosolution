import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target } from 'lucide-react';

const reasons = [
  "Dedicated in-house professionals, not freelancers, not subcontractors",
  "AI-assisted workflows backed by experienced human teams",
  "Full transparency, clear reporting, dedicated leads, direct communication",
  "Scalable support that grows with your business without disruption",
  "Strict quality standards enforced at every stage of delivery",
  "Long-term partnership mindset, we measure success by yours"
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white clip-path-diagonal z-0 hidden lg:block border-l border-slate-100"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-badge">
              <span className="w-2 h-2 rounded-full bg-primary-600"></span>
              <h2 className="text-inherit">Why Choose Us</h2>
            </div>
            
            <h3 className="section-h3">
              A Different Kind of <span className="text-primary-600">Operational Partner</span>
            </h3>

            <p className="section-p">
              Most companies offer a service. We offer a team, dedicated, accountable, and invested in your outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-primary-200 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="text-primary-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-[15px] text-slate-700 font-medium leading-snug">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="relative w-full aspect-[4/5] max-w-[500px]">
              {/* Clean solid offset background instead of blur */}
              <div className="absolute top-8 -right-8 bottom-8 -left-8 bg-slate-200/50 rounded-2xl -z-10"></div>
              
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-slate-200 bg-white">
                <img
                  src="/images/why_choose_us.png"
                  alt="Business Analytics"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-in-out"
                />
              </div>

              {/* Polished Floating Objective Card */}
              <motion.div
                className="absolute top-1/2 -left-8 md:-left-16 -translate-y-1/2 bg-white rounded-2xl p-6 lg:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border border-slate-100 z-20 max-w-[320px] backdrop-blur-md"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-3 bg-primary-50 text-primary-600 rounded-xl mb-5 shadow-inner border border-primary-100">
                  <Target size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Our Mission</h4>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                  “To build a world-class team of dedicated professionals who deliver exceptional services, making us the operational backbone that ambitious businesses rely on to grow.”
                </p>
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary-600">+99</div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Top Talent</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
