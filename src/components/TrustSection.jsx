import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const TrustSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Immersive Dark Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto"
        >
          <div className="section-badge bg-white/5 border-white/10 text-primary-300 backdrop-blur-sm">
            <ShieldCheck size={18} />
            Reliable Execution
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-tight">
            We ensure consistency, accountability, and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-200 to-white">measurable performance.</span>
          </h3>
          
          <p className="text-lg md:text-xl text-slate-300 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Your growth is our priority. We transition complex tasks into high-performing operations with full transparency and a results-driven focus.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300 shadow-2xl"
             >
                <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-300 mb-6 group-hover:scale-110 group-hover:bg-primary-600 transition-all">
                  <BarChart size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Consistency</h4>
                <p className="text-slate-400 text-[15px] font-medium leading-relaxed">Standardized processes that deliver professional-grade quality every single day.</p>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300 shadow-2xl"
             >
                <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-300 mb-6 group-hover:scale-110 group-hover:bg-primary-600 transition-all">
                  <Users size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Accountability</h4>
                <p className="text-slate-400 text-[15px] font-medium leading-relaxed">Full ownership of outcomes with dedicated leads for direct communication.</p>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300 shadow-2xl"
             >
                <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-300 mb-6 group-hover:scale-110 group-hover:bg-primary-600 transition-all">
                  <ArrowRight size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Measurability</h4>
                <p className="text-slate-400 text-[15px] font-medium leading-relaxed">Clear performance indicators and regular reports showing exact ROI.</p>
             </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-10 flex flex-col items-center"
          >
            <p className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-8">Ready to get started?</p>
            <Link
              to="contact"
              smooth={true}
              className="btn-light text-xl py-6 px-12"
            >
              Let’s Work Together
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
